// Abre la consola del navegador y sigue las intrucciones:

// Para obtener un objeto de usuarios, tipea en consola getUsers
// pasandole por parametros una de las siguientes:  byFetch, byAsync o byXML.

// Para obtener un objeto de albumes, tipea en consola getAlbums 
// pasandole por parametros un numero id(del 1 al 10) 
// y una de las siguientes: byFetch, byAsync o byXML.


// Primera forma de poblar los objetos (utilizando fetch)
function byFetch(API) {  

  fetch(API)
    .then(response => response.json())
    .then(json => console.log(parseArray(json)));
  
}


// Segunda forma de poblar los obejtos (utilizando asyn await)

async function byAsync(API) {
  const response = await fetch(API);
  const data = await response.json();
  return parseArray(data);
}

// Tercera forma de poblar los obejtos (utilizando XMLHttpRequest)
function byXML(API) {
  var request = new XMLHttpRequest();
  request.open('GET', API);
  request.send();
  request.onload = () => console.log(parseArray(request.response))

}

let API = `https://jsonplaceholder.typicode.com/users`;

function getUsers(callBack) {

  if (!callBack) {
    console.log("Necesitas pasarme una forma");
  } else {
    callBack(API);
  }

};

function getAlbums(id, callBack) {

  const API = API + `/${id}/albums`;

  if (!id) {
    console.log("Necesitas pasarme un id");
    return;
  }

  if (!callBack) {
    console.log("Necesitas pasarme una forma");
    return;
  }

  callBack(id, API);

};





// funcion creada para parsear manualmente el json
function parseArray(array) {

  let newArray = [];
  
  array.map(item => {

    const itemParseado = {
      id: item.id,
      nombre: item.name, 
      usuario: item.username, 
      mail: item.email,
      direccion: {
        calle: item.address.street,
        numero: item.address.suite,
        ciudad: item.address.city
      },
      sitioWeb: item.website, 
      compania: item.company.name
    };
    
    newArray.push(itemParseado);
    
  });
  
  return newArray;
}
