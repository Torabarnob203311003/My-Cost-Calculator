

// its the same copy of index .js 
document.getElementById('calculate').addEventListener('click',function(){



 const food = parseFloat(document.getElementById('food').value );
 const income = parseFloat(document.getElementById('income').value );
 const rent = parseFloat(document.getElementById('rent').value );
 const clothes = parseFloat(document.getElementById('clothes').value );

  const expences = food+rent+clothes;
  const balances = income-expences;
  
//  getting the  total expences feild by id 
  document.getElementById('total-expenses').innerText = expences;
  document.getElementById('balance').innerText = balances;
  

 
})


//    svaing and remaing balance work
document.getElementById('save-button').addEventListener('click', () => {
    const balance = parseFloat(document.getElementById('balance').textContent);
    const savePercentage = parseFloat(document.getElementById('save').value);
    const savingAmount = balance * (savePercentage / 100);
    const remainingBalance = balance - savingAmount;

    document.getElementById('saving-amount').textContent = savingAmount;
    document.getElementById('remaining-balance').textContent = remainingBalance;
});

