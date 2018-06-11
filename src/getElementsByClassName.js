// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  node = document.body;
  var results = [];
  
  checkClassName(node);

  // for(var i = 0; i < node.children.length; i++){
  //   checkClassName(node.children[i]);
  // } 

  function checkClassName(childNode){
    // Check to see if className matches node's class name
    if(childNode.className.indexOf(className) != -1){
      //  - if it does, push to results
      results.push(childNode);
      //console.log(results);
    }

    // Check and see if childNode has children:
    if(childNode.children.length > 0){
    // If it does, run 'getElementsByClassName' on all children
    // childNode.children.forEach(function(child){
    //   getElementsByClassName(className, child);
    // });
      for(var i = 0; i < childNode.children.length; i++){
        checkClassName(childNode.children[i]);
      }
    }

  }
  console.log(results);
  return results; 
};