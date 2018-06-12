// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } 
    var arr = [];
    for (var element of obj) {
      if (typeof element === 'number') {
        arr.push(element);
      } else {
        arr.push(stringifyJSON(element));
      }
    }
    return '[' + arr + ']';
  } else if (typeof obj !== 'number') {
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      var object = {};
      for (var element of Object.keys(obj)) {
        var key = stringifyJSON(element);
        var value = stringifyJSON(obj[element]);
        object[key] = value;          
      }        
    }
    return object;
  }

  if (typeof obj === 'number') {
    return '' + obj;
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'boolean') {
    return obj.toString();
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

};




/*
        if (typeof element === 'string') {
          object[element] = obj[element];
        } else {
          var key = stringifyJSON(element);
          object[key] = obj[element];          
        }  
*/



/*else {
      return '[' + obj + ']';
    }
*/