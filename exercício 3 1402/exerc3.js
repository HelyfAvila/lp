function calcular(){
    //Obter dados 
    let num1 = Number(document.getElementById ("num1").value )
    let num2 = Number( document.getElementById ("num2").value )
   
    
    //calculo
    total  = (num1 / num2)

        
       
  
    //Saída de dados 
    
   document.getElementById("total").innerHTML = "O valor da divisão do primeiro pelo segundo número é igual a  " + total
    }
