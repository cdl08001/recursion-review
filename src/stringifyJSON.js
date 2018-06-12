// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
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
  } else if (obj && typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      var result = [];
      for (var key in obj) {
        if (obj[key] === undefined || typeof obj[key] === 'function') {
          continue;
        } else {
          result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
        }
      }
    }
    return '{' + result.join() + '}';
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
