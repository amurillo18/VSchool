// Qualifier
// use pure JavaScript to insert a header
var header = document.getElementById("header");
var span = document.createElement("span");
var para = document.createElement("p");

header.innerText = 'JavaScript Made This!!';
header.style.color = 'black';
header.style.fontSize = '50px';

span.innerText = 'April ';
para.innerText = 'wrote the JavaScript';

para.prepend(span);
header.append(para);

span.style.color = 'pink';
para.style.color = 'black';
para.style.marginLeft = '0';

// Bronze
// Write some JavaScript that will wait until the user clicks the "clear" button, and then clears out all conversation.
 var button = document.querySelector("#clear-button");
  var messages = document.querySelectorAll(".message");

 button.addEventListener("click", function()  {
         for (i = 0; i < messages.length; i++) {
            messages[i].remove();
         }
     });

    // Write some custom JavaScript to automatically change the words of the conversation to something fun and good.

var newMessages = ["Do you want to hear a joke?", "Absolutely!", "Never trust atoms; they make up everything", "HAHAHAHA"];

for (i = 0; i < messages.length; i++) {
        messages[i].innerText = newMessages[i];
        
}

// Silver
// when the drop down has changed and then changes the background colors of the messages accordingly.
var themeDropDown = document.getElementById("theme-drop-down");

themeDropDown.addEventListener("change", function() {
    if(themeDropDown.value == "theme-two") {
        for (i = 0; i < messages.length; i++) {
            // to change left side
            if (i % 2 == 0) {
                messages[i].style.backgroundColor = 'black';
                messages[i].style.color = 'white';
            } else  {
                messages[i].style.backgroundColor = 'red';
            }
        } 
     } else {
        for (i = 0; i < messages.length; i++) {
            // to change left side
            if(i % 2 == 0) {
                messages[i].style.backgroundColor = 'burlywood';
                messages[i].style.color = 'black';
            } else {
                messages[i].style.backgroundColor = 'lightblue';
            }
        } 
     }
    
});

// Gold
// add more messages using the form at the bottom.
var form = document.message;
var newText = document.getElementById("input").value;

function addMessage () {
event.preventDefault();//stops new messages from disappearing

    document.querySelector(".messages").innerHTML += "<div class='message left'>" + newText + "</div>";
 
}

form.addEventListener("submit", addMessage);

