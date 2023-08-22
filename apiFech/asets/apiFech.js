const urlPeople = "https://reqres.in/api/users?delay=3";

/*
const getProducts =  ( url )=>{

    fetch( url )
        .then( ( resolve )=> {
            console.log( resolve);
            return resolve.json(); // conversión de JSON a Object
        })
        .then( ( resolveJson )=> {
            console.log(resolveJson)
            printToDOM( resolveJson);

        })
        .catch( (error)=> console.warn( error ) );
};*/

const getPeople =  async ( )=>{
 try{
     const resolve = await fetch( urlPeople );
     const resolveJson = await resolve.json();
     printToDOM( resolveJson );
     localStorage.setItem("personas", JSON.stringify(resolveJson)   ); //stringify: Convierte un OBJ a JSON
 }
 catch( error ){
    console.warn(error);
 }
        
};

//getPeople( urlFakeStore );

function printToDOM( personas ){
    let arreglo_personas = personas.data;
    let body = ""
    for (var i = 0; i < arreglo_personas.length; i++) {      
        body+=`<tr>
        <td>${arreglo_personas[i].id}</td>
        <td>${arreglo_personas[i].first_name}</td>
        <td>${arreglo_personas[i].last_name}</td>
        <td>${arreglo_personas[i].email}</td>
        <td><img  src= "${arreglo_personas[i].avatar}"/>
        </td></tr>`
    }
    document.getElementById('data').innerHTML = body
    console.log(body)
}

