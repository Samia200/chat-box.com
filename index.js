 function getTime() {
          let today = new Date;
          hours = today.getHours();
          minutes = today.getMinutes();

         if (hours < 10) {
              hours = "0" + hours;
         }
         if (minutes < 10) {
            minutes = "0" + minutes;
       }
       let time = hours + ":" + minutes;
       return time;
    }
    function firstBotMessage() {
        let firstMessage = "How's it going?";
        document.getElementById("botStarterMessage").innerHTML = '<p class-"botText " style=" padding-left : 0;"><span>' + firstMessage + '</span></p>';

        let time = getTime();

        $("#chat-timestamp").append(time);

        document.getElementById("userInput").scrollIntoview(false);
    }
    firstBotMessage();
    

    function getBotResponse(input) {
        //rock paper scissors
    if (input == "rock"){
         return "paper";
      } 
      else if (input == "paper") {
         return "scissors";
      }
       else if(input == "scissors"){
         return "rock";
     }
    // Simple responses
     if (input == "hello") {
         return "Hello there!";
      } else if (input == "goodbye") {
         return "Talk to you later!";
      } else {
         return "Try asking something else!";
      }
    }



    function getHardResponse(userText) {
        let botResponse = getBotResponse(userText);
        let bothtml = '<p class="botText"><span>' + botResponse + '</span></p>'; 
        $("#chatbox").append (botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoview(false);
    }


     function getResponse() {
         let userText = $("#textInput").val();
        
         if (userText == "") { 
             userText = "I love Code Palace!";
         }
         let userHtml = '<p class="userText" ><span>' + userText + '</span></p>'; 
         

         $("#textInput").val("");
          $("#chatbox2").append (userHtml);
         document.getElementById ("chat-bar-bottom").scrollIntoview(false);
         setTimeout (() => {
            getHardResponse (userText) ;
             }, 1000)
             
        }



        function buttonsendText(sampleText) {
            let userHtml = '<p class="userText"><span>'+ sampleText + '</span></p>'; 
            
            $("#textInput").val ("");
             $("#chatbox").append (userHtml);
            document.getElementById ("chat-bar-bottom").scrollIntoview(false);
        }
         function sendButton () {
             getResponse();
         }

         $("#textInput").keypress(function(e) {
         if(e.which == 13) {
                getResponse();
                 }
           });

