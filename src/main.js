import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import JournalEntry from './journal.js';

$(document).ready(function() {
  $('#my-journal').submit(function(event) {
    event.preventDefault();
    const inputtedJournalTitle = $('input#journal-title').val();
    const inputtedJournalEntry = $('input#journal-entry').val();
    let journalEntry = new JournalEntry(inputtedJournalTitle, inputtedJournalEntry);
    console.log(journalEntry);
    const recordedEntry = journalEntry.returnEntry();
    const wordCount = journalEntry.returnWordCount(inputtedJournalEntry);
    const returnCharacters = journalEntry.countCharacters(inputtedJournalEntry);
    const firstSentence = journalEntry.getTeaser(inputtedJournalEntry);
    $('#recorded-entry').append("<p>" + recordedEntry + "</p>");
    $('#word-count').append("<p>Word Count: " + wordCount + "</p>");
    $('#vowel-count').append("<p>Vowel Count: " + returnCharacters.vowels + "</p>");
    $('#consonant-count').append("<p>Consonant Count: " + returnCharacters.consonants + "</p>");
    $('#first-sentence').append("<p>Teaser: " + firstSentence + "</p>");
  });
});