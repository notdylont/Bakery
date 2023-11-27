// last time the site was edited
let update = new Date(document.lastModified);
document.getElementById("update").innerHTML = update;


// countdown to next season
var countDownDate = new Date("Mar 1, 2024 00:00:00").getTime();

var x = setInterval(function(){

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("next-season").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("next-season").innerHTML = "Spring is Here!";
  }
}, 1000);

// form validation
function validateForm(event)
{
    event.preventDefault();
    let isValid = true;
    const errorMessages = [];   // array to hold error messages

    const formElements = document.getElementById('contact').elements;
    for (let i = 0 ; i < formElements.length; i++)
    {
        if (!formElements[i].checkValidity())
        {
            isValid = false;
            errorMessages.push('Please enter a valid ${formElements[i]}.name');
        }
    }

    // validation of phone number
    const phoneNumber = document.getElementById('phoneNumber').value;
    if(!/^\d+$/.test(phoneNumber))
    {
        isValid = false;
        errorMessages.push("** Phone number should only have numeric characters **");
    }

    const emptyMess = document.getElementById('message-to-send').value;
    if(emptyMess.length == 0)
    {
        isValid = false;
        errorMessages.push("** Please include a message **");
    }

    // handling the errors
    const errorContainer = document.getElementById('errorMessages');
    if(!isValid)
    {
        errorContainer.innerHTML = `<p style="color: red;">${errorMessages.join('<br>')}</p>`;
        event.preventDefault();
    }
    else
    {
        errorContainer.innerHTML = '';
    }

}