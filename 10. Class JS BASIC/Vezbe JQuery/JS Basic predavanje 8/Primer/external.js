let allElements = $("*"); // gets all elements
let byIdElement = $("#mainTitle"); // gets element by id
let byClassElements = $(".innerWrapper"); // gets elements by class name
let byTagNameElements = $("p"); // gets elements by tag name
let wrapperAndInnerWrapper = $(".wrapper,.innerWrapper"); // gets elements from multiple classes
let firstParagraph = $("p:first"); // gets the first p element
let lastParagraph = $("p:last"); // gets the last p element
let firstChildHeaders = $("h3:first-child"); // gets all the first h3 elements in their parents
let lastChildParagraphs = $("p:last-child"); // gets all the last p elements in their parents
let secondChildParagraphs = $("p:nth-child(2)"); // gets all the second place p elements in their parents


// Get first and last element from JQuery array
allElements.first();
allElements.last();
// Find elements in JQuery array
let aaa = allElements.find(".wrapper").find("p").last();
// Get DOM element from JQuery array
allElements[0];
allElements.get(0);
// Get all DOM elements from a JQuery array
byClassElements.get();
// Get next or previous element
firstParagraph.next();
firstParagraph.prev();


// Log the text content to the console
console.log(aaa);