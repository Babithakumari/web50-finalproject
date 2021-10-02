let loc = window.location
let ws_start = 'ws://'

if(location.protocol==="https"){
    ws_start="wss://"
}
let endpoint= ws_start+loc.host+loc.pathname

//create a new websocket object where endpoint is the url of the websocket connection
var socket = new WebSocket(endpoint)

// As soon as a socket gets connected the open event is triggered
socket.onopen=async function(e){
    e.preventDefault()
    console.log("socket was opened")
    console.log('open',e)

    const roomId = document.querySelector("#room_id").value
    
    // SEND message to SERVER
    document.querySelector("#send_form").onsubmit= function(e){

   const messageInput = document.querySelector("#message-input")
   const message = messageInput.value;
   const sentBy = document.querySelector("#sent_by").value
   const roomId = document.querySelector("#room_id").value
   alert("Sending message to consumer!!!!")
   
   
    if(message){
        socket.send(JSON.stringify({
            'message':message,
            'sentBy':sentBy,
            'roomId':roomId
     
        }))

    }
    alert("emptied message")

    message = ''
    

   //prevent form submission
   return false
  }
}


// Handle messages from SERVER and display on FRONTEND
socket.onmessage=async function(e){
    console.log("socket received message")
    alert("socket received a message")

let data = JSON.parse(e.data)

if (data.message){
    alert("data msg")
    console.log("data and")
    document.querySelector("#messages").innerHTML += ('<b>'+ data.sent_by + '</b>:'+data.message +'</br>');
    alert("added new message")
    window.reload()
}


}



// Handle errors
socket.onerror=async function(e){
    console.log('error',e)
}



function scrollToBottom(){
    let objDiv = document.querySelector("#prev-msgs")
    objDiv.scrollTop = objDiv.scrollHeight;
    console.log(objDiv.scrollHeight)
    console.log("scrolled")
}
