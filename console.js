
//firstly add console element to the document
var log = document.createElement("div");
log.id = "log";
document.body.append(log);

//get log element to display results
log = document.getElementById("log");
console.log = function() {
  var text = "",
    //array to push highlighted elements on it then append it to the page
    arr = [],
    //method handlers
    handlers = {
    /*          Elements        */
      div: function(c, html) {
        var elem = document.createElement("div");
        if (c) elem.classList.value = c;
        elem.innerHTML = html;
        return elem;
      },
      //uses for pairs > key=value
      pairsElement: function(firstSpan, secondSpan) {
        var div = document.createElement("div");

        var span1 = document.createElement("span");
        span1.style.color = firstSpan[1]
        span1.innerHTML = firstSpan[0] + ": ";

        var span2 = document.createElement("span");
        //just step for highlight functions that require custom style
        if (secondSpan[0] !== null) {
          if (secondSpan[0].cssText) {
            span2.style.cssText = secondSpan[0].cssText+"; color:"+secondSpan[1]
            span2.innerHTML = secondSpan[0].content
          } else {
            span2.style.color = secondSpan[1]
            span2.innerText = secondSpan[0]
          }
        } else {
          span2.style.color = secondSpan[1]
          span2.innerText = secondSpan[0]
        }
        //append property, value elements
        div.append(span1, span2);
        return div;
      },
      //uses for objects or array that need extra loop it's save the (array|object) in click event and loop them when click
      details: function(object, prop) {
        var details = document.createElement("details");
        //event to loop the (array|object) and display the data of them
        details.addEventListener("click", function() {
          var arr = [];
          if (this.getElementsByTagName('div')[0] === undefined) {
            //use dom method to highlight datatypes and if there's (array|object) create a new details elemnent for them
            for (var i of handlers.dom(object)) {
              i.style.paddingLeft = "1rem";
              this.append(i);
            }
          }
        });
        details.style.cursor = 'pointer'

        //the caption (prop: value)
        var summary = document.createElement("summary");
        summary.classList.value = "details-summary";

        //object name
        var strong = document.createElement("strong");
        strong.innerHTML = prop + " ";

        //object descriptor
        var summarySpan2 = document.createElement("span")
        summarySpan2.style["color"] = "#000";
        summarySpan2.classList.value = "summary-value";
        //remove object string form the object descriptor
        summarySpan2.innerHTML = object.toString().replace(/object\s+/gm, "");

        summary.append(strong, summarySpan2);
        details.append(summary);
        return details
      },
      //this a special method for the long text
      //that's create event that when click on details tag will display the whole text
      textDetails: function(prop, text) {
        //check the text length
        if (text.length > 20) {
          //text short description
          var shortText = '';
          for(var t = 0; t <= 20; t++) {
              shortText+= text[t]
          }
          shortText+="...";
          shortText = shortText.trim()
          
          //create the text details element to display the whole text
          var details = document.createElement("details");
          //event to display the whole text  
          function textClick(t) {
            return function() {
              //hide && show shortText span
              var shortTxt = this.getElementsByTagName('span')[0];
              var _display = getComputedStyle(shortTxt, null).display;
              if (_display === "none") {
                  shortTxt.style.display = "inline"
              } else {
                  shortTxt.style.display = "none"
              }
              //display the whole text
              if (this.getElementsByTagName('div')[0] === undefined) {
                var div = document.createElement("div");
                div.style.color = "red"
                div.innerText = '"'+t+'"'
                this.append(div)
              }
            }
          }
          //add the event
          details.addEventListener("click", textClick(text));
          details.style.cursor = 'pointer'

          //create the details summary
          var summary = document.createElement("summary");
          summary.classList.value = "details-summary-text";

          //object property
          var strong = document.createElement("strong");
          strong.innerHTML = prop + " "

          //object property value
          var summarySpan = document.createElement("span")
          summarySpan.style["color"] = "red";
          summarySpan.innerText = '"'+shortText+'"'

          //apend propery, value
          summary.append(strong, summarySpan);
          details.append(summary);

          return details
        } else {
          //else return the text as normal (key: value)
          return handlers.pairsElement(
            [prop, "rgb(203, 20, 216)"],
            ['"' + text + '"', "red"]
          )
        }
      },
      dom: function(i) {
        var domHightlighter = [],
        contents = ["innerHTML" , "innerText" , "textContent", "outerText", "outerHTML"]
        for (var q in i) {
          if (typeof i[q] === "boolean") {
            domHightlighter.push(handlers.pairsElement(
              [q, "rgb(203, 20, 216)"],
              [i[q], "royalblue"]
            ));
          } else if (i[q] === null) {
            domHightlighter.push(handlers.pairsElement(
              [q, "rgb(203, 20, 216)"],
              [i[q], "#333"]
            ))
          } else if (typeof i[q] === "number") {
            domHightlighter.push(handlers.pairsElement(
              [q, "rgb(203, 20, 216)"],
              [i[q], "royalblue"]
            ))
          } else if (typeof i[q] === "object") {
            domHightlighter.push(handlers.details(i[q], q));
          } else if (typeof i[q] === "string") {
            if(contents.indexOf(q) > -1) {
              domHightlighter.push(handlers.textDetails(q, i[q]))
            } else {
              domHightlighter.push(handlers.pairsElement(
                [q, "rgb(203, 20, 216)"],
                ['"' + i[q] + '"', "red"]
              ))
            }
          } else if (typeof i[q] === "function") {
            domHightlighter.push(handlers.pairsElement(
              [q, "rgb(203, 20, 216)"],
              [{
                cssText: "font-weight: bold; font-style: italic;",
                content: "&#402; " + i[q].toString().replace(/function\s+|\{.*?\}/gm, "")
              }, "blue"]
            ))
          } else {
            domHightlighter.push(handlers.pairsElement(
              [q, "rgb(203, 20, 216)"],
              [i[q], "#000"]
            ))
          }
        }
        return domHightlighter
      }
    };

  for (var i of arguments) {
    if (typeof i === "object") {
      arr.push(handlers.details(i, ""))
    } else if (typeof i === "string") {
      arr.push(handlers.div("str", i))
    } else if (typeof i === "number") {
      arr.push(handlers.div("num", i))
    } else if (typeof i === "function") {
      arr.push(handlers.div("fn", i))
    } else if (typeof i === "boolean") {
      arr.push(handlers.div("bool", i))
    } else {
      arr.push(handlers.div(null, i))
    }
  }
  for (var i of arr) {
    log.append(i)
  }
}
//handle errors
window.onerror = function(message, uri, linenumber) {
  console.log("JavaScript error: " +
    message +
    " on line " + linenumber + " for " +
    decodeURI(uri));
}
