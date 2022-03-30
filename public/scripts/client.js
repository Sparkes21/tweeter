/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(document).ready(function() {


  const renderTweets = function (tweets) {
    let returnValue = [];
    for (const tweet of tweets) {
      $('.tweet-container').append(createTweetElement(tweet));
      console.log(createTweetElement(tweet));
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
    <p>${data.content.text}</p>
    <footer class="footer">
      <p style="font-size: 18px;">${data.created_at}</p> 
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
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $('#tweet-form').serialize(),
    })
    .then((data) => {
      // console.log(data);
    }) 
  }))

  
  const loadTweets = function () {
    $.ajax('/tweets', { 
      method: 'GET',
    })
    .then((data) => {
      console.log(data);
      renderTweets(data);
    })
  }
  loadTweets();
  // console.log(loadedTweets);
  

  
});
