export default function JournalEntry(journalTitle, journalEntry) {
  this.journalTitle = journalTitle;
  this.journalEntry = journalEntry;
}

JournalEntry.prototype.returnEntry = function() {
  return "Entry Recorded";
};

JournalEntry.prototype.returnWordCount = function(entry) {
  let wordCount = entry.split(" ");
  console.log(wordCount);
  return wordCount.length;
};

JournalEntry.prototype.countCharacters = function(entry) {
  let entryCharacters = entry.split("");
  console.log(entryCharacters);
  let vowelCount = 0;
  let consonantCount = 0;

  const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  
  entryCharacters.forEach(function(letter)  {
    for (let i = 0; i < consonants.length; i +=1) {
      if (letter === consonants[i])  {
        consonantCount++;
      }
    }
    for (let i = 0; i < vowels.length; i +=1) {
      if (letter === vowels[i])  {
        vowelCount++;
      } 
    }
  });
  return  {
    vowels: vowelCount,
    consonants: consonantCount,
  }  
};
  // for (let i = 0; i < vowels.length; i +=1){
  //   let count = 0;
  //   if (vowels[i] === "a") {
  //     return count += 1 ;
  // };

JournalEntry.prototype.getTeaser = function(entry)  {
  let sentences = entry.split(".");
    return sentences[0]
  };

  

