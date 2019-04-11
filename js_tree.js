"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 3

   Author: Gabriel Fuentes
   Date: 4.6.19  

   Filename: js_tree.js

   Global Variables:
   nodeCount
      Running count of all nodes in the source document
   elementCount
      Running count of all element nodes in the source document
   textCount
      Running count of all text nodes in the source document
   wsCount
      Running count of all white space text nodes in the source document


   Functions List:
   makeTree() 
      Sets up and places the node tree within the HTML document and
      displays the node counts from the document

   makeBranches(treeNode, nestedList)
      Makes a list item or an ordered list based on the contents and type
      of node from the sourceNode parameter and then appends that list
      item or ordered list to nestedList. The function recursively calls 
      itself to navigate throught the node tree of the source document.

   isWhiteSpaceNode(tString)
      Returns true if tString represents the text of a white space text
      node and false if it doesn't
*/
// Delcaring Global Variables - Step 4
var nodeCount = 0;
var elementCount = 0;
var textCount = 0;
var wsCount = 0;

window.addEventListener('load', makeTree());

// Creating the makeTree function - Step 7
function makeTree() {
   // Creating an Element Fragment
   var treeBox = document.createElement("aside");
   treeBox.setAttribute('id', "treeBox");
   var nodeTree = document.createElement("h1");
   nodeTree.innerText = "Node Tree";
   treeBox.appendChild(nodeTree);

   // Apending the Element fragment to the element with the id of main
   var main = document.getElementById('main');
   main.appendChild(treeBox);

   // Creating the node that will be the foundation - Step 8 
   var nodeList = document.createElement("ol");
   treeBox.appendChild(nodeList);

   // Creating the node tree by getting all nodes with the selector
   var sourceArticle = document.querySelectorAll('#main article');

   makeBranches(sourceArticle, nodeList);
}

// Creating the makeBranches function - Step 11
function makeBranches(treeNode, nestedlist) {
   // Increase the value of nodeCount for every new node discovered
   nodeCount++;
   // HTML Fragment to store the list item elements
   var liElem = document.createElement("li");
   var spanElem = document.createElement("span");
   var text = document.createTextNode("+__");
   console.log(liElem);
   console.log(spanElem);
   liElem.appendChild(text ,spanElem);
   spanElem.appendChild(liElem);
console.log(nodeTree);
   if (nodeTree.nodeType == 1) {
      elementCount++;
      spanElem.setAttribute('class', elementNode);
      spanElem.textContent += "<element>";
   } else if (treeNode.nodeType == 3) {
      textCount++; 
      var textString = treeNode.value;
      isWhiteSpaceNode(textString);
      if (isWhiteSpaceNode(textString) === true) {
         wsCount++;
         spanElem.setAttribute('class', "whiteSpaceNode");
         spanElem += "#text";
   } else if (isWhiteSpaceNode(textString) === false) {
      spanElem.class = "textNode";
      spanElem += textString.value;
      }
   }
   
   if (treeNode.childElementCount > 0) {
      var newList = document.createElement("ol");
      newList.textContent = "|";
      for (var n = treeNode.childNodes; n = n.childElementCount; n !== null) {
         makeBranches(n, newList);
      }
   }
   return makeBranches();
}


// Division ----------------------------------------------
function isWhiteSpaceNode(tString) {
   return !(/[^\t\n\r ]/.test(tString));
}