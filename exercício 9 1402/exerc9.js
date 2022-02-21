function calcular(){
    //Obter dados 
    let basemaior = Number(document.getElementById ("basemaior").value )
    let basemenor = Number( document.getElementById ("basemenor").value )
    let altura = Number( document.getElementById ("altura").value )
    
    //calculo
    total  = ((basemaior + basemenor)*altura)/2

        
       
  
    //Saída de dados 
    
   document.getElementById("total").innerHTML = "O valor da área desse trapézio é igual a  " + total
    }
