let arr = [{id:1,value:"first11"},{id:2,value:"first22"},
           {id:3,value:"first333"},{id:4,value:"first44"}]

function memoize(func) {
  var cache = {};
  return function() {
    var key = JSON.stringify(arguments);
      if(cache[key]) {
        console.log(cache[key])
        return cache[key];
      }
      else {
        var val = func.apply(this, arguments);
        cache[key] = val;
        console.log(val)
        return val;
      }
    };
  }

var find = memoize(function(id) {
  var result;
    arr.forEach(ele => {
        if(ele.id===id) {
          result = ele;
        }
    })
    return result
})

find(2); 
find(2); // bring result from cache object
