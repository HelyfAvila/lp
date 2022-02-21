function calcular(){
    //Obter dados 
    let lado = Number(document.getElementById ("lado").value )
 
   
    
    //calculo
    total  = (lado* lado)

        
       
  
    //Saída de dados 
    
   document.getElementById("total").innerHTML = "O valor correspondente a área do quadrado é igual a  " + total
    }
