


function generateNumber(){   /* chama a funçao do html */
    
    const min = Math.ceil(document.querySelector(".input-min").value)    /* chama primeiro input */
    const max = Math.floor(document.querySelector(".input-max").value)   /* chama segundo input */


    if(max > min){

        const result = Math.floor(Math.random() * (max - min + 1)) + min; /* calculo matematico */
   

        alert(result)

            
    }
    else{
        alert("O  primeiro valor tem que ser menor que o segundo") 

}


}


