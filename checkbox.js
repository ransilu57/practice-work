const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent = `Not subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa card`;
    }
    else if(masterBtn.checked){
        paymentResult.textContent = `You are paying with Master card`;
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = `You are paying with Pay pal card`;
    }
}