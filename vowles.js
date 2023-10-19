const phrase = "venkata KRISHNA";
const vowels = "aeiouAEIOU"; // Define the list of vowels

for (let i = 0; i < phrase.length; i++) {
  const currentChar = phrase[i];
  if (vowels.includes(currentChar)) {
    console.log(currentChar);
  }
}

let n ="surya teja"
for(let k in n){ 
    let c=n[k];
    if( c ==='a'||c ==='e'||c ==='i'||c ==='o'||c ==='u')
    console.log(c);
}