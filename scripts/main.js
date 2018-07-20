
//Events
/*
Real interactivity on a website needs events. These are code structures which listen for things happening in browser, running code in response. The most obvious example is the click event, which is fired by the browser when you click on something with your mouse. To demonstrate this, enter the following into your console, then click on the current webpage:


document.querySelector('html').onclick = function() 
{
    alert('Ouch! Stop poking me!');
}
*/



//ImageChanger
var myImage = document.querySelector('img');

myImage.onclick = function() 
{
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mozilla.ico') 
    {
      myImage.setAttribute ('src','images/mozilla.png');      
    } 
    else 
    {
      myImage.setAttribute ('src','images/ab.png');
    }
}



//Adding a personalized welcome message
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() 
{
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) 
{
  setUserName();
} 
else 
{
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() 
{
  setUserName();
}





