$(document).ready(function() {
  // --- our code goes here ---
  $('#tweet-text').on("input", function(event) {
    let $counter = $(this).next().children()[1];
    let count = 140 - $("#tweet-text").val().length
    $counter.innerText = count;
    if (count < 0) {
      $($counter).css("color", "red")
    } else {
      $($counter).css("color", "#545149")
    }
  })

});

