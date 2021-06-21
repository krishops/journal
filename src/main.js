import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import JournalEntry from './journal.js';

$(document).ready(function() {
  $('#my-journal').submit(function(event) {
    event.preventDefault();
    const inputtedJournalTitle = $('input#journal-title').val();
    const inputtedJournalEntry = $('input#ljournal-entry').val();
    let journalEntry = new JournalEntry(inputtedJournalTitle, inputtedJournalEntry);
    console.log(journalEntry);
    const recordedEntry = journalEntry.returnEntry();
    $('#recorded-entry').append("<p>" + recordedEntry + "</p>");
  });
});