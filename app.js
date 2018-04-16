function getAverageWordLength(tokens) {
  var totalLength = tokens.join("").length;
  return (totalLength / tokens.length).toFixed(2);
}

function countDistinctWords(tokens) {
  var distinctWords = [];
  for (var i=0; i<tokens.length; i++) {
    if (distinctWords.indexOf(tokens[i]) === -1) {
      distinctWords.push(tokens[i]);
    }
  }
  return distinctWords.length;
}


function tokenizeText(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}


function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}


function reportOnText(text) {

  var tokens = tokenizeText(text);
  var numDistinctWords = countDistinctWords(tokens);
  var numTotalWords = tokens.length;
  var averageWordLength = getAverageWordLength(tokens);

  var textReport = $('.report');
  textReport.find('.words').text(numTotalWords);
  textReport.find('.unique').text(numDistinctWords);
  textReport.find('.length').text(
    averageWordLength + " characters");
  textReport.removeClass('hidden');
}

function watchFormSubmission() {
  $('.form').submit(function(event) {
    event.preventDefault();
    var userText = $(this).find('#user-text').val();
    reportOnText(removeReturns(userText));
  });
}

$(function() {
  watchFormSubmission();
});