// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Hide the Modal
let hiddenModal = document.getElementById("modal")
hiddenModal.hidden = true || false;


//add listener to like button
let likeIcons = document.getElementsByClassName("like");

function listenToTags() {
  for (let i = 0; i < likeIcons.length; i++) {
    likeIcons[i].addEventListener("click", function() {
      alert("I was clicked");
    });
  }
}

listenToTags();


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
