 var factorial = memoize(function(num) {
	if(num ===1){
		return num;
	}
	return num * factorial(num -1)
});


function memoize(func) {
	var cache = {};
	return function() {
		var key = JSON.stringify(arguments)
		if(cache[key]) {
			console.log(cache[key])
			return cache[key]

		} else {
			var value = func.apply(this,arguments)
			cache[key] = value;
			return value;
		}
	}
};

fact = (function(){
	var memo = {};
	function clousre(n){
		console.log(n);
		if (n == 0 || n == 1)
			return 1;
		if (n in memo)
        	return memo[n];
		memo[n] = n * clousre(n - 1);
		return memo[n];
    }
	return clousre;
})();

console.log(fact(5));
console.log(fact(5));


