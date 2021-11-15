## Tests  

describe wordWithVowel()

**Test:** "It will return the text to lowercase"  
**Code:**  
const userInput = "Away you";  
let newText = userInput.toLowerCase();  
**Expected Output:** "away you"

**Test:** "It will identify if a word begins with a vowel"
**Code:** 
const userInput = "away you"
wordWithVowel(userInput);
**Expected Output:** "away"

**Test:** "It will add way to the end of each word that starts with a vowel"
**Code:**
const userInput = "away you";  
wordWithVowel(userInput);  
**Expected Output:** awayway

describe wordBeginningWithConsonant()

**Test:** "It will return the text to lowercase"
**Code:**
const userInput = "Away you";
let newText = userInput.toLowerCase();
**Expected Output:** "away you"

**Test:** "It will identify words as starting with consonants"  
**Code:**  
const userInput = "This is a sentence";  
wordBeginningWithConsonant(userInput);  
**Expected Output:**  
"this sentence"  

**Test:** "It will identify the last consonant in each words index"  
**Code:**  
const userInput = "This is a brand new sentence";  
wordBeginningWithConsonant(userInput);  
**Expected Output:** "1, 1, 0"  

**Test:** "It will move consonant slice to end of word"
**Code:**  
const userInput = "This is a brand new sentence";  
wordBeginningWithConsonant(userInput);  
**Expected Output:** "isth, andbr, ewn, entences"

**Test:** "It will add ay to the newly scrambled words with consonants"
**Code:**
const userInput = "This is a brand new sentence";
wordBeginningWithConsonant(userInput);
**Expected Output:** "isthay", "andbray", "ewnay", "entencesay"

**Test:** "It will combine all words into a sentence"  
**Code:**  
const userInput = "This is a brand new sentence"
wordBeginningWithConsonant(userInput);
**Expected Output:** "isthay is a andbray ewnay entencesay"  

describe pigLatin()  

**Test:** "It will convert a sentence into pig latin"  
**Code:**  
const userInput = "This is a brand new sentence";
pigLatin(userInput);
**Expected Output:** "isthay isway away andbray ewnay entencesay"
