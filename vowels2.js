const inputString = "my self sUryA teja";
const vowels = "aeiouAEIOU";
const uniqueVowels = [];

for (let i = 0; i < inputString.length; i++) {
  const char = inputString[i];
  if (vowels.includes(char) && !uniqueVowels.includes(char)) {
    uniqueVowels.push(char);
    console.log(char);
  }
}
console.log(uniqueVowels.length)