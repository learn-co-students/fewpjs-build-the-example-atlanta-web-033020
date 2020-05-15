// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// heart1 = document.querySelector("#\\32 01811189 > footer > ul > li > span")

// heart1.addEventListener('click', function () {
//   change
  
  
//   if (heart1.innerText === EMPTY_HEART) {
//     heart1.innerText = FULL_HEART
//   } else if (heart1.innerText === FULL_HEART) {
//     heart1.innerText = EMPTY_HEART
//   } else {
//     return "Error"
//   }
// })

// document.querySelector("#\\32 01811190 > footer > ul > li > span")

document.addEventListener("DOMContentLoaded", function () {
  modal = document.querySelector("#modal")
  modal.classList.add("hidden")
})

let hearts = document.getElementsByClassName("like-glyph")

for (const heart of hearts) {
  heart.addEventListener("click", function() {
    mimicServerCall()
    .then(changeHeart(event))
      // modal = document.querySelector("#modal")
      // modal.classList.add("hidden")})
    .then( function () {
      modal = document.querySelector("#modal")
      modal.classList.add("hidden")
    })
    .catch( function (error) {
      modal = document.querySelector("#modal")
      modal.classList.remove("hidden")
      modal.innerText = error
    })
  })
}

function changeHeart(event) {
  if (event.target.innerHTML === EMPTY_HEART) {
    event.target.innerHTML = FULL_HEART
    event.target.classList.add("activated-heart")

  } else {
    event.target.innerHTML = EMPTY_HEART
    event.target.classList.remove("activated-heart")
  }
}

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
