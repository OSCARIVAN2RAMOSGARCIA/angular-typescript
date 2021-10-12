(function(){

    const mifuncion=function(a:string){
        return a.toUpperCase();
    }
    //SIEMPRE PONER EL TIPADO DE DATOS
    const mifuncionf=(a:string)=>a.toUpperCase();

    const sumaN=function(b:number,c:number){
        return b+c;
    }

    //arrow function  
    const sumaF=(b:number,c:number)=>b+c;
    
  /*  console.log(mifuncion('Normal'));
    console.log(mifuncionf('Flecha'));
    console.log(sumaF(4,7));
*/

    const hulk={
        nombre:'hulk',
        smash(){
            
            setTimeout(()=>{
                console.log(`${this.nombre} smash!!`)
            },1000);
        }
    }
    hulk.smash();
})();
   