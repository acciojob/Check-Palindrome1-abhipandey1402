// complete the given function

function palindrome(str){
	var s = 0;
	var e = str.length - 1;

	while(s<e){
		if(str.charAt(s).toLowerCase() != str.charAt(e).toLowerCase()){
			return false;
		}
		s++;
		e--;
	}
	return true;
}
module.exports = palindrome
