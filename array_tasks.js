var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var newArr = [];
		arr.forEach(function (number) {
			newArr.push(number * number);
		});
		return newArr;
	},

	sum: function (arr) {
		var total = arr.reduce(function(total, num) {
			return total + num;
		}, 0);
		return total;
	},


	findDuplicates: function (arr) {
		var dupeArray = [];
		for (var i = 0; i < arr.length; i++) {
			if ( (arr.lastIndexOf(arr[i]) !== i ) &&
						(dupeArray.indexOf(arr[i]) == -1)) {
							dupeArray.push(arr[i]);
			}
		}
		return dupeArray;
	},
	// can it be done with map??
	// findDuplicates: function (arr) {
	// 	var dupeArray =  [];
	// 	arr.map(function(number) {
	// 		var currentNumber = number;
	// 		arr.map(function(currentNumber){
	// 			if c
	// 		})
	// 	});
	// 	return dupeArray;
	// },

	removeAndClone: function (arr, valueToRemove) {
		var newArray = [];
		arr.forEach(function (element) {
			if (element !== valueToRemove) {
				newArray.push(element);
			};
		});
		return newArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		var indexArray = [];
		var i = -1;
		arr.forEach(function( element ) {
			i++;
			if (element === itemToFind) {
				indexArray.push(arr.indexOf(element, i));
			};
		});
		return indexArray;
	},

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
