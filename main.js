// Initialize Firebase
var config = {
    apiKey: "AIzaSyCqN8EXjgUgmPHR7hRJTfPm0HY9mXfsrcs",
    authDomain: "requestform-5378e.firebaseapp.com",
    databaseURL: "https://requestform-5378e.firebaseio.com",
    projectId: "requestform-5378e",
    storageBucket: "requestform-5378e.appspot.com",
    messagingSenderId: "319803666968"
  };
  firebase.initializeApp(config);


//Reference message collection  
var requestRef = firebase.database().ref('request');

// Listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
//Get values

var name = getInputVal('name');
var type = getInputVal('type');
var startday = getInputVal('startday');
var endday = getInputVal('endday');
var start_time = getInputVal('start_time');
var end_time = getInputVal('end_time');
var email = getInputVal('email');
var allday = getInputVal('allday');
var message = getInputVal('message');
//Save Request
saveRequest(name, type, startday, endday, start_time, end_time, email, allday, message);

//Show alert

document.querySelector('.alert').style.display = 'block';

//Hide Alert

setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000);
document.getElementById('contactForm').reset(); 

}

//Fuction to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//Save request to firebase

function saveRequest(name, type, startday, endday, start_time, end_time, email, allday, message){
    var newRequestRef = requestRef.push();
    newRequestRef.set({
        name: name,
        type: type,
        startday: startday,
        endday: endday,
        start_time: start_time,
        end_time: end_time,
        email: email,
        allday: allday,
        message: message
    });
}