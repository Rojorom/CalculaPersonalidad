/* 

document.getElementById('formulario').addEventListener('submit' , function(){
      const valor= document.getElementById('input').value;
});
  */
     let b = [0,2,0,3,1,9,9,0] 
// let b = Array(parseInt(prompt('introcuce la fecha')));

        // let b = Array(prompt('introcuce la fecha'));
     
       //  let c = parseInt.b 


            console.log(b);
            
         let suma = 0;

    
        for (let i=0; i<b.length; i++) {  
            suma+= b[i]; 
          r = suma/10;
          g = suma%10;
          o = r+g;

          console.log(Math.floor(o));
       
         }
