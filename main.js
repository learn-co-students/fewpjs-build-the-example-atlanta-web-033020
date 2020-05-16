// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
initializeModalClass()
document.addEventListener('DOMContentLoaded', setupListeners)

function setupListeners(){
  setupPosts()
}

function setupPosts(){
  let posts = document.querySelectorAll('.media-post')
  console.log(posts)
  posts.forEach(function(post){
    post.addEventListener('click', function (event){
      mimicServerCall()
      .then(() => {
        switchLike(event)
      })
      .catch(function(error) {
        // toggleModalClass()
        setTimeout(toggleModalClass(), 5000)
        showError(error)
      })
    })
  })
}

function showError(error){
  let message = document.querySelector('#modal-message')    
  message.innerText = error
}

function initializeModalClass (){
  document.getElementById('modal').className = "hidden"
}

function toggleModalClass (){
  let modal = document.getElementById('modal')
  modal.classList.toggle('hidden')
}

function switchLike(e){
  if (e.target.innerText === EMPTY_HEART){
    e.target.innerText = FULL_HEART
    e.target.className = "activated-heart"
  } else {
    e.target.innerText = EMPTY_HEART
    e.target.classList.toggle = "activated-heart"
  }
}






//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .9
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}