// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  node = node || document.body;
  var results = [];
  
  // Check to see if className matches node's class name
  if(className === node.className){
  //  - if it does, push to results
    results.push(node);
  }
  
  // Check and see if node has children:
  if(node.children){
  // If it does, run 'getElementsByClassName' on all children
    // node.children.forEach(function(child){
    //   getElementsByClassName(className, child);
    // });
    for(var i = 0; i < node.children.length; i++){
      getElementsByClassName(className, node.children[i]);
    }
  }

  return results; 
};


