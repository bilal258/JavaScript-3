

let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "peshawar", "Shekhupura", "Kashmir"]
// clear output
function clearBTN(){
    document.getElementById('Result').innerHTML = ""
}
// Simple Alert
function Alert() {
    alert('Hey there! You have been clicked on the Alert button')
    document.getElementById("Result").innerHTML = "Hey there! You have been clicked on the Alert button"
}
// clear
function clearbtn() {
    document.getElementById('input').value = ""
}
// print my name
function printMYName(){
let myName= document.getElementById('input').value;
if (myName===""){
    alert('Please type your name')
    return;
}
document.getElementById('Result').innerHTML = myName;
}
// print all cities
function printallcities() {
    document.getElementById('Result').innerHTML = ""
    for (let i = 0; i < cities.length; i++) {  
        let num = i +1;
        document.getElementById("Result").innerHTML += num + ")" + cities [i] + "<br>"
    }
}
// add your city in list
function addcitylist() {
    let city = document.getElementById('input').value;
    if(!city) {
        alert('Please enter your city name')
        return;
    }
    cities.push(city)
    document.getElementById("Result").innerHTML ='<span class="text-success fw-bold">' + city + '</span> has been clicked successfully added into list.'

}
// generate table
function generatetable(){
    table = document.getElementById('input').value;
    if (table === ""){
        alert('Please inter the table value in input field')
        return;
    }
    let tab = prompt('Given a number')
    for(let i=1; i< tab ; i++){
        let num = table + " * " + i + " = " + table*i + "<br />"
        document.getElementById("Result").innerHTML += num ;
        
    }
    
}