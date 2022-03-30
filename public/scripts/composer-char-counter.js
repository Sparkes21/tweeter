$(document).ready(function() {
  // --- our code goes here ---
  $('#tweet-text').on("input", function(event) {
    // console.log(this);
    // console.log($(this).val());
    let $counter = $(this).next().children()[1];
    // let $counter = $(this).siblings().children()[1].innerText;
    console.log($counter);
    let count = 140 - $("#tweet-text").val().length
    console.log(count);
    $counter.innerText = count;
    if (count < 0) {
      // $counter.value.css("color", "red")
      $($counter).css("color", "red")
    } else {
      $($counter).css("color", "#545149")
    }
  })

});

