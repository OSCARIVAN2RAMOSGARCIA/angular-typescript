(()=>{
   const retirardinero=(dinero:number):Promise<number>=>{

    let dineroactual=1000;
    
    return new Promise((resolve,reject)=>{
       
    if(dinero>dineroactual){
        reject('no hay suficientes fondos');
    }    
    else{
        dineroactual-=dinero;
        resolve(dineroactual);
    }
    })
   }
   retirardinero(500)
               .then(dineroactual=>console.log(`El dinero actual es ${dineroactual}`))
               .catch(console.warn);
            
})();
   
   