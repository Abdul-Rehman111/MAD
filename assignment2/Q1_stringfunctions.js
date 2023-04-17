/*charAt(): Returns the character at the specified index.*/
const str = "Hello";
const char = str.charAt(0);
console.log(char);
/*Output: H*/ 

/*charCodeAt(): Returns the Unicode value of the character at the specified index.*/
const str1 = "Hello";
const unicode = str1.charCodeAt(0);
console.log(unicode);
/*Output: 72*/

/*concat(): Concatenates two or more strings and returns a new string.*/
const str2 = "Hello";
const str3 = "World";
const greeting = str2.concat(", ", str3, "!");
console.log(greeting);
/*Output: Hello, World!*/

/*endsWith(): Returns true if the calling string ends with the specified value, otherwise false.*/
const str4 = "Hello World";
const endsWith = str4.endsWith("World");
console.log(endsWith);
/*Output: true*/

/*includes(): Returns true if the calling string contains the specified value, otherwise false.*/
const str5 = "Hello World";
const includes = str5.includes("World");
console.log(includes);
/*Output: true*/

/*indexOf(): Returns the index within the calling string of the first occurrence of the specified value.*/
const str6 = "Hello World";
const index = str6.indexOf("World");
console.log(index);
/*Output: 6*/

/*lastIndexOf(): Returns the index within the calling string of the last occurrence of the specified value.*/
const str7 = "Hello World";
const index1 = str7.lastIndexOf("l");
console.log(index1);
/*Output: 9*/

/*localeCompare(): Compares two strings in the current locale.*/
const str8 = "Hello";
const str9 = "World";
const result = str8.localeCompare(str9);
console.log(result);
/*Output: -1*/

/*match(): Searches a string for a match against a regular expression, and returns the matches as an array.*/
const str10 = "The quick brown fox jumps over the lazy dog.";
const pattern = /[A-Z]/g;
const matches = str.match(pattern);
console.log(matches);
/*Output: ["T", "A", "Z"]*/

/*repeat(): Returns a new string with a specified number of copies of the calling string.*/
const str11 = "Hello";
const repeated = str11.repeat(3);
console.log(repeated);
/*Output: HelloHelloHello*/

/*replace(): Returns a new string with some or all matches of a pattern replaced by a replacement.*/
const str12 = "Hello World";
const replaced = str12.replace("World", "Universe");
console.log(replaced);
/*Output: Hello Universe*/

/*search(): Searches a string for a specified value or regular expression and returns the index of the match.*/
const str13 = "The quick brown fox jumps over the lazy dog.";
const index3 = str13.search("fox");
console.log(index3);
/*Output: 16*/

/*slice(): Extracts a section of a string and returns a new string.*/
const str14 = "Hello World";
const sliced = str14.slice(6, 11);
console.log(sliced);
/*Output: World*/

/*split(): Splits a string into an array of substrings based on a specified separator.*/
const str15 = "Hello World";
const array = str15.split(" ");
console.log(array);
/*output: Hello world */
