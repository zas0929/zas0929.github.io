"use strict"
function createElem(tag, cont, tagText) {
  if(tagText == undefined) {
    tagText = '';
  }
  var someTag = document.createElement(tag);
  var someText = document.createTextNode(tagText);

  cont.appendChild(someTag).appendChild(someText);
}

createElem('div', document.getElementById('container'), 'some new text');
