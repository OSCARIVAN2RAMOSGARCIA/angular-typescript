(()=>{
    const avenger={
        nombre:'steve',
        clave:'capitan america',
        poder:'fuerza'
    }

    const extraer =({nombre,clave,poder}:any )=>{
    //const {nombre,clave,poder}=avenger;

    console.log(`${nombre} llamado ${clave} y tiene el poder de ${poder}`)
    }
    extraer(avenger);

    const avengers:string[]=['THOR','IRONMAN','SPIDERMAN'];

   // const [thor,ironman,spiderman]=avengers;

    const extraerave=([thor,ironman,spiderman]:string[])=>{

        console.log(`Los super heroes son ${thor} ${ironman} y ${spiderman}`)
    }
    extraerave(avengers)
})();
   
   