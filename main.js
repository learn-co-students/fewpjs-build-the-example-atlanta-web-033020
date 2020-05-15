// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeButtons = document.querySelectorAll("li.like")
likeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let modal = document.getElementById("modal");
        mimicServerCall()
            .then(res => {
                console.log("sending...")
                if (btn.className != "activated-heart") {
                    btn.innerText = `Liked! ${FULL_HEART}`;
                    btn.className = "activated-heart"
                } else {
                    btn.innerText = `Like! ${EMPTY_HEART}`
                    btn.className = ""
                }
            })
            .catch((err) => {
                modal.className = ""
                let message = document.getElementById("modal-message")
                message.innertext = `${err}`
                setTimeout(() => { modal.className = "hidden" }, 5000)

            })
    })
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
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