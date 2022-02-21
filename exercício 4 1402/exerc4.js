function calcular(){
    //Obter dados 
    let num1 = Number(document.getElementById ("num1").value )
    let num2 = Number( document.getElementById ("num2").value )
   
    
    //calculo média ponderada
    total= (num1*2)+ (num2*3) 
    total2= total /5


        
       
  
    //Saída de dados 
    
   document.getElementById("total2").innerHTML = "O valor da média ponderada dessas notas é igual a  " + total2
    }
