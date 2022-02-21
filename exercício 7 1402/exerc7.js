function calcular(){
    //Obter dados 
    let peso = Number(document.getElementById ("peso").value )
   
   
    
    //calculo
    totalpeso1= (peso * 15/100)
    total= (peso + totalpeso1)
    
    totalpeso2= (peso * 20/100)
    total2= (peso - totalpeso2)

        
       
  
    //Saída de dados 
    
   document.getElementById("total").innerHTML = "O novo peso se a pessoa engordar 15%  " + total
   document.getElementById("total2").innerHTML = "O novo peso se a pessoa emagrecer 20%  " + total2
    }
