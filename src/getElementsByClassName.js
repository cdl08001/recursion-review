// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  node = document.body;
  var results = []; 

  var checkClassName = function (childNode) {
    // Check to see if className matches node's class name
    if (childNode.className.indexOf(className) !== -1) {
      // If it does, push to results
      results.push(childNode);
    }

    // Check and see if childNode has children:
    if (childNode.children.length > 0) {
      // If it does, run 'checkClassName' on all children
      for (var i = 0; i < childNode.children.length; i++) {
        checkClassName(childNode.children[i]);
      }
    }
  };
  checkClassName(node);
  return results;
};
