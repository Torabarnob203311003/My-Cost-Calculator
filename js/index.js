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


  document.getElementById('save-button').addEventListener('click',function(){

  const balance = parseFloat(document.getElementById('balance').innerText);
  const saveparcentage = parseFloat(document.getElementById('save').value);
  const savingamount = balance*(saveparcentage/100);
   const totalsaving = document.getElementById('total-saving')
   totalsaving.innerText = savingamount;
     
//   document.getElementById('total-saving').innerText = savingamount;
//   const remainingbalance = balance-savingamount;


  })

