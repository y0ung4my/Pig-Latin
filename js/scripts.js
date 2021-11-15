function wordWithVowel(userInput) {
  let newText = userInput.toLowerCase();
  let textArray = newText.split(" ");
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelArray = [];
  for(i = 0; i < textArray.length; i++) {
    if (vowels[0] === textArray[i].charAt(0) || vowels[1] === textArray[i].charAt(0)){
      vowelArray.push(textArray[i] + "way");
      console.log(textArray[i] + " is a vowel");
    } else if (vowels[2] === textArray[i].charAt(0) || vowels[3] === textArray[i].charAt(0)) {
      vowelArray.push(textArray[i] + "way");
      console.log(textArray[i] + " is a vowel");
    } else if (vowels[4] === textArray[i].charAt(0) || vowels[5] === textArray[i].charAt(0)) {
      vowelArray.push(textArray[i] + "way");
      console.log(textArray[i] + " is a vowel");
    } else {
      vowelArray.push(textArray[i]);
      console.log(textArray[i] + " is not a vowel");
    }
  }
  return vowelArray.join(" ");
}

