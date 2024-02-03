let post = document.querySelector('.post');
let textArea = document.querySelector('#post');
let feed = document.querySelector('.boxRight')
post.addEventListener('click',function(e){
    console.log("clicked");
    generateTicket(textArea.value);
});

// function addEventListenersToTickets(ticket)
// {

// } 
function generateTicket(text){
    //let likeBool = flase;
    let ticketCont = document.createElement("div");
    ticketCont.className = "ticket";
    ticketCont.innerHTML = `  <div><img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739"></div>
    <p>Joanne Graham</p>
    <p>@joannegraham123</p>
    <b>${text}</b>
    <br>
    <img id ="edit" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661">
    <img id="delete" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643">
    <img id="comment" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619">
    <img id="like" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679">
`
    feed.appendChild(ticketCont);
}