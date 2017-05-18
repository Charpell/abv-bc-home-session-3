let reverseString  = function (str){
	let temp = '';
	let i = str.length;
	let isTrue = true;
	

	if (str === ''){
		return null;

	}
	if (checkPalindrom(str)){
		return isTrue;
			
	} else {

			while(i > 0){
			temp += str.substring(i - 1, i);
			i--;
		}
		return temp;
	
	}



	function checkPalindrom(str){
	 	return str == str.split('').reverse().join('');
	 }

}


module.exports = reverseString;