export default function JournalEntry(journalTitle, journalEntry) {
  this.journalTitle = journalTitle;
  this.journalEntry = journalEntry;
}

JournalEntry.prototype.returnEntry = function() {
  return "Entry Recorded";
};
