(function(){

function activar(quien:string,                //obligatorios
                 momento?:string,            //opcionales
                 objeto:string='batiseñal'  //por defecto
                ){
if(momento){
    console.log(`${quien} activo la ${objeto} en la ${momento}`);
}
else{
    console.log(`${quien} activo la ${objeto}`);
}}

activar('Gordon','tarde');

})();
   