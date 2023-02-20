import React from 'react'




const Promesa = () => {
    //Array de objetos
    const products = [
        {id:0, name:"Pikachu", type: "electrico", stock: 5},
        {id:1, name:"Squirtle", type: "agua", stock: 2},
        {id:2, name:"Bulbasaur", type: "planta", stock: 5}
      ]

   
    //Promesa a resolver      
      const getProducts = new Promise((resolve, reject) =>{
         setTimeout(()=>{
            if(products.length){
                resolve(products);
            }else{
                reject("NO hay productos")
            }
           
         },3000)
       
      })

    //Consumir la promesa
      getProducts
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
  
  return (
    <>

    
      
    </>
  )
}

export default Promesa
