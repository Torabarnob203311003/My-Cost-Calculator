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

