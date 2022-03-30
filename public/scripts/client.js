/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

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
  
  renderTweets(data);
  
});
