
const time = new Date().getHours();
let greeting;
if (time <= 10){
    greeting = "Good morning";
}   else if (time <= 2) {
    greeting = "Good afternoon";
}
else{
    greeting = "welcome";
}
document.getElementById("demo").outerHTML = greeting;

