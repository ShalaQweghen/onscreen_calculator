function myMax(array) {
	var max = 0;
	for(var i = 0; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		};
	};
	return max;
};


function vowel_count(string) {
	var vowels = ["a","e","i","o","u"];
	var count = 0;
	for (var i = 0; i < string.length; i++) {
		for (var j = 0; j < vowels.length; j++) {
			if (string[i] === vowels[j]) {
				count++;
				break;
			};
		};
	};
	return count;
};

function reverse(string) {
	var reversed = "";
	for (var i = string.length-1; i > -1; i--) {
		reversed += string[i];
	};
	return reversed;
};