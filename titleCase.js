// Create a function called titleCase with a string as an argument called str
function titleCase(str) {
	/* Return that string(str) as lower case. then split the words at the spaces
	   and put them into an array. Then use the .map function along with an anonymous
	   function.

	   The anonymous function takes a parameter(firstLetter) and returns the first
	   letter of each word. It then uses the replace function to replace the first letter
	   in each string (as indicated by the [0] index) and replaces that first letter 
	   with an uppercase version of that same letter. It then joins all of the
	   words together back into an array. 
	   EXAMPLE: "the big dog ran" will be returned as "The Big Dog Ran"
	*/
  return str.toLowerCase().split(' ').map(function(firstLetter){
    return firstLetter.replace(firstLetter[0], firstLetter[0].toUpperCase());
  }).join(' ');
}

titleCase("This string will be altered.");