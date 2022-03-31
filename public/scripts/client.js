/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(document).ready(function() {

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const renderTweets = function (tweets) {
    let returnValue = [];
    for (const tweet of tweets) {
      $('.tweet-container').prepend(createTweetElement(tweet));
      //console.log(createTweetElement(tweet));
    }
    
  }
  
  const createTweetElement = function (data) {
    let $tweet = `
    <article class="tweet">
    <header>
      <div>
        <img class ="avatar" src=${data.user.avatars} />
        <p>${data.user.name}</p>

      </div>
      <p class="handle">${data.user.handle}</p>
    </header>
    <p>${escape(data.content.text)}</p>
    <footer class="footer">
      <p style="font-size: 18px;">${timeago.format(data.created_at)}</p> 
      <div>
        <i class="fa-solid fa-font-awesome"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
  </article>
    `
    return $tweet;
  }
  
  // const $tweet = createTweetElement(tweetData);
  // console.log("tweet", $tweet); // to see what it looks like
  // $('.tweet-container').append($tweet);
  
  // renderTweets(data);


  $('#tweet-form').on("submit", (function(event) {
    event.preventDefault();
    // console.log(event);
    const tweetTextLength = $("#tweet-text").val().length;
    console.log("tweetText", tweetTextLength);
    if (tweetTextLength > 140) {
      $('.error-message').text("Maximum Character count exceeded!");
      $('.error-message').slideDown();
      return;
    }
    if (!tweetTextLength) {
      $('.error-message').text("Nothing submitted to Tweet!");
      $('.error-message').slideDown();
      return;
    }
    
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: $('#tweet-form').serialize(),
        
       })
       .then((data) => {
        $('.error-message').slideUp();
        $("#tweet-text").val("");
        $(".counter").val(140);
        loadTweets();
      }) 
    
  }))

  
  const loadTweets = function () {
    $.ajax('/tweets', { 
      method: 'GET',
    })
    .then((data) => {
      $(".tweet-container").empty();
      renderTweets(data);
    })
  }
  loadTweets();
  // console.log(loadedTweets);
  
  
});
