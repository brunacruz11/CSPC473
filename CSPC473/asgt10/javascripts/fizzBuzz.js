var main = function () {

	var fizzbuzz_1 = function () {
		var index;
		var arr = [];
		for(index = 1; index <= 100; index = index + 1) {
			if ( (index%3 === 0) && (index%5===0) ) {
//				console.log("FizzBuzz");
				arr.push("FizzBuzz");
			} else if (index%3 === 0) {
//				console.log("Fizz");
				arr.push("Fizz");
			} else if (index%5 === 0) {
//				console.log("Buzz");
				arr.push("Buzz");
			} else {
//				console.log(index);
				arr.push(index);
			}
		}
		return arr;
	};

	var fizzbuzz_2 = function(start, end) {
		var index;
		var arr = [];
		for(index = start; index <= end; index = index + 1) {
			if ( (index%3 === 0) && (index%5===0) ) {
//				console.log("FizzBuzz");
				arr.push("FizzBuzz");
			} else if (index%3 === 0) {
//				console.log("Fizz");
				arr.push("Fizz");
			} else if (index%5 === 0) {
//				console.log("Buzz");
				arr.push("Buzz");
			} else {
//				console.log(index);
				arr.push(index);
			}
		}

		return arr;
	};

	var fizzbuzz_3 = function (arr) {
		var index;
		var array = [];
		for (index = 0; index <= arr.length - 1; index = index + 1) {
			if ( (arr[index]%3 === 0) && (arr[index]%5===0) ) {
//				console.log("FizzBuzz");
				array.push("FizzBuzz");
			} else if (arr[index]%3 === 0) {
//				console.log("Fizz");
				array.push("Fizz");
			} else if (arr[index]%5 === 0) {
//				console.log("Buzz");
				array.push("Buzz");
			} else {
//				console.log(arr[index]);
				array.push(arr[index]);
			}
		}

		return array;
	};

	var fizzbuzz_4 = function (obj) {
		var index;
		var array = [];
		for(index = 1; index <=100; index = index + 1) {
			if ( (index%3 === 0) && (index%5===0) ) {
//				console.log(obj.divisibleByThree + obj.divisibleByFive);
				array.push(obj.divisibleByThree + obj.divisibleByFive);
			} else if (index%3 === 0) {
//				console.log(obj.divisibleByThree);
				array.push(obj.divisibleByThree);
			} else if (index%5 === 0) {
//				console.log(obj.divisibleByFive);
				array.push(obj.divisibleByFive);
			} else {
//				console.log(index);
				array.push(index);
			}
		}
		return array;
	};

	var fizzbuzz_5 = function (arr, obj) {
		var index;
		array = [];
		for(index = 0; index <= arr.length - 1; index = index + 1) {
			if ( (arr[index]%3 === 0) && (arr[index]%5===0) ) {
//				console.log(obj.divisibleByThree + obj.divisibleByFive);
				array.push(obj.divisibleByThree + obj.divisibleByFive);
			} else if (arr[index]%3 === 0) {
//				console.log(obj.divisibleByThree);
				array.push(obj.divisibleByThree);
			} else if (arr[index]%5 === 0) {
//				console.log(obj.divisibleByFive);
				array.push(obj.divisibleByFive);
			} else {
//				console.log(arr[index]);
				array.push(arr[index]);
			}
		}

		return array;
	};


	$("main div").toArray().forEach(function (element) {
		var arr = [];
		var $content;
		
		if($(element).is(":nth-child(1)")) {
			arr = fizzbuzz_1();
			arr.forEach(function (element) {
				$content = $("<p>");

				$("main div:nth-child(1)").append($content.text(element));
			});
		
		} else if($(element).is(":nth-child(2)")) {
			arr = fizzbuzz_2(200, 300);
			arr.forEach(function (element) {
				$content = $("<p>");

				$("main div:nth-child(2)").append($content.text(element));
			});
		
		} else if($(element).is(":nth-child(3)")) {
			arr = fizzbuzz_3([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]);
			arr.forEach(function (element) {
				console.log("cheguei");
				$content = $("<p>");

				$("main div:nth-child(3)").append($content.text(element));
			});
		
		} else if($(element).is(":nth-child(4)")) {
			arr = fizzbuzz_4({divisibleByThree: "foo", divisibleByFive: "bar"});
			arr.forEach(function (element) {
				console.log("cheguei");
				$content = $("<p>");

				$("main div:nth-child(4)").append($content.text(element));
			});
		
		} else if($(element).is(":nth-child(5)")) {
			arr = fizzbuzz_5([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115], {divisibleByThree: "foo", divisibleByFive: "bar"} );
			arr.forEach(function (element) {
				console.log("cheguei");
				$content = $("<p>");

				$("main div:nth-child(5)").append($content.text(element));
			});
		}



	



	});



//	fizzbuzz_1();
//	fizzbuzz_2(200, 300);
//	fizzbuzz_3([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]);
//	fizzbuzz_4({divisibleByThree: "foo", divisibleByFive: "bar"});
//	fizzbuzz_5([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115], {divisibleByThree: "foo", divisibleByFive: "bar"} );
};

$(document).ready(main);