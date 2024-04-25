//elements
var sendBtn = document.getElementById('sendBtn'); // Corrected typo
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

setTimeout(function(){

    chatbotSendMessage("How are you?");
},1000);





function chatbotSendMessage(messageText){

    if(httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200){  


    var result = JSON.parse(httpRequest.responseText);


    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin ="10px";
    messageElement.style.padding ="5px";

    messageElement.innerHTML = "<span>Chatbot: </span>"+
    "<span style="+"margin-top:10px; padding:10px"+">"+ result.response_message +"</span>"
    
    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000})
    chatContainer.appendChild(messageElement);
  

}else{

    alert('error')
}


}

function sendMessage(messageText){

       var messageElement = document.createElement('div');
       messageElement.classList.add('w-50');
       messageElement.classList.add('float-right');
       messageElement.classList.add('shadow-sm');
       messageElement.style.margin ="10px";
       messageElement.style.padding ="5px";

       messageElement.innerHTML = "<span>You:</span>"+
       "<span style="+"margin-top:10px; padding:10px"+">"+ messageText +"</span>"
       
       messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000})

       chatContainer.appendChild(messageElement);
       makeRequest(messageElement)
}


function makeRequest(messageText){

   //ajax
   var httpRequeat = new XMLHttpRequest();
   httpRequeat.open('GET','chatbot.php?message='+messageText,true);
   httpRequeat.send();
   httpRequeat.onreadystatechange = chatbotSendMessage;



}

sendBtn.addEventListener('click',function(e){
   
    if(textbox.value==""){
        alert('Please type in a message');
    }else{
        let messageText = textbox.value;
        sendMessage(messageText);
        textbox.value = "";
    }
});
