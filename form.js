

//increment quantity
 function increment(id){
    
    
    let value = parseInt(document.getElementById('quantity'+id).value, 0)  ;
   value = isNaN(value) ? 1 : value;
   value++;
  document.getElementById('quantity'+id).value = value;


  //price
  let price = 20;
     document.getElementById('price'+id).value = price * value;

  //total
  
   
  let pr1 =parseInt(document.getElementById('price1').value, 0)
  let pr2 =parseInt(document.getElementById('price2').value, 0)
  let pr3 =parseInt(document.getElementById('price3').value, 0)
 let total = pr1+ pr3+ pr2;

    document.getElementById('price-total').value =total;
 }

//decrement quantity
function decrement(id){

  
  let value = parseInt(document.getElementById('quantity'+id).value, 10);
  value = isNaN(value) ? 1 : value;
  if(value >= 2){
    value--;
  }
  document.getElementById('quantity'+id).value = value;
 
 //price
  
  let price = 20
    document.getElementById('price'+id).value = value * price;

  
   //total
  
   let pr1 =parseInt(document.getElementById('price1').value, 0)
   let pr2 =parseInt(document.getElementById('price2').value, 0)
   let pr3 =parseInt(document.getElementById('price3').value, 0)
   let total =pr1 + pr2 + pr3;

    document.getElementById('price-total').value = total;

  
}

function remove(id) {
  let x = document.getElementById("select"+id);
    x.remove(x.selectedIndex);
}

 function changeColor(id)
{
  var e = document.getElementById('like'+id);
   e.style.color='#FF0000';
}


 


   

