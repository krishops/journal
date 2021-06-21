import JournalEntry from './journal.js';

$(document).ready(function() {
  $('#my-journal').submit(function(event) {
    event.preventDefault();
    const inputtedJournalTitle = $('input#journal-title').val();
    const inputtedJournalEntry = $('input#ljournal-entry').val();
    let journalEntry = new JournalEntry(inputtedJournalTitle, inputtedJournalEntry);
    const recordedEntry = journalEntry.returnEntry();
    $('#recorded-entry').append("<p>" + recordedEntry + "</p>");
  });
});