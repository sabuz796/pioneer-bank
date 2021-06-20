// selectors
let button = document.querySelector('#login');
let loginArea = document.querySelector('#login-area');
let transactionArea = document.querySelector('#transaction-area');

let depositButton = document.querySelector('#deposit-button');
let withdrawButton = document.querySelector('#withdraw-button');

let depositInput = document.querySelector('#deposit-input')
let withdrawInput = document.querySelector('#withdraw-input')

let depositAmount = document.querySelector('#deposit-amount');
let withdrawAmount = document.querySelector('#withdraw-amount');
let balanceAmount = document.querySelector('#balance-amount');


// login button event handler
button.addEventListener('click', ()=>{
    loginArea.style.display = 'none'
    transactionArea.style.display = 'block'
})
// deposit button handler
depositButton.addEventListener('click', ()=>{
    //parsefloat() converts the string into number and .value means catch the value of input box 
    // depositAmount.innerText = parseFloat(depositAmount.innerText) + parseFloat(depositInput.value) 
    // depositInput.value = ''; 
    
    balanceAmount.innerText = parseFloat(balanceAmount.innerText) + parseFloat(depositInput.value) ;
    increaseDepositWithdraw (depositAmount, depositInput);

})
// withdraw button handler
withdrawButton.addEventListener('click', ()=>{
    // parsefloat() converts the string into number and .value means catch the value of input box
    // withdrawAmount.innerText = parseFloat(withdrawAmount.innerText) + parseFloat(withdrawInput.value) 
    // withdrawInput.value = '';
   
    balanceAmount.innerText= parseFloat(balanceAmount.innerText) - parseFloat(withdrawInput.value)
    increaseDepositWithdraw (withdrawAmount, withdrawInput);


})
// increase current deposit and current withdraw amount
function increaseDepositWithdraw (amount, input){

    if(input.value < 0){
        alert("Negative number can't be accepted");
        input.value = '';
        
    }
    else{
        amount.innerText = parseFloat(amount.innerText) + parseFloat(input.value)
        input.value = ''; 
    }
    
}


