//El código consta de una clase character, la cual contiene la información de cada uno de los personajes, 
// y un array con cinco objetos, cada uno de ellos instanciando la clase character.Luego se transforma el array a formato JSON.

//La función requestListener es la encargada de atender las peticiones HTTP recibidas por el servidor, y 
// responder adecuadamente.En este caso, si la petición recibida es "/characters o /characters/<6", se responderá con el array  de objetos en formato JSON.En caso contrario, se responderá con un error 404.
//Por último, se crea el servidor HTTP, se le indica la función requestListener como manejadora de las peticiones, 
// y se le especifica el puerto en el que debe escuchar (8000).

const http = require("http");

const host = "localhost";
const port = 8000;

class character {
    constructor(id, name, type, age, country, weapon, ) {
        this.id = id,
        this.name = name,
        this.type = type,
        this.age = age,
        this.country = country,
        this.weapon = weapon
    }
}

const characters = [
    new character(1, "Anakin Skywalker", "Caballero Jedi", 47, "Tatooine", "Sable de Luz"),
    new character(2, "Luke Skywalker", "Caballero Jedi", 59, "Tatooine", "Sable de Luz"),
    new character(3, "Obi Wan Kenobi", "Caballero Jedi", 71, "Stewjon", "Sable de Luz"),
    new character(4, "Chewbacca", "Wookie", 64, "Kashyyyk", "Pistolas de blaster"),
    new character(5, "Darth Vader", "Sith", 47, "Tatooine", "Sable de Luz"),
];

const jsonCharacters = JSON.stringify(characters);

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/":
            res.writeHead(200);
            res.end("Bienvenido a Star Wars! Para consultar todos los  personaje, dirige tu navegador a la ruta /characters,para solo uno /characters/un numero del 1 al 5 ");
            break;
        case "/characters":
            res.writeHead(200);
            res.end(jsonCharacters);
            break;
            
        case "/characters/1":
            res.writeHead(200);
            res.end(JSON.stringify(characters[0]));
            break;

        case "/characters/2":
            res.writeHead(200);
            res.end(JSON.stringify(characters[1]));
            break;
        case "/characters/3":
            res.writeHead(200);
            res.end(JSON.stringify(characters[2]));
            break;
        case "/characters/4":
            res.writeHead(200);
            res.end(JSON.stringify(characters[3]));
            break;
        case "/characters/5":
            res.writeHead(200);
            res.end(JSON.stringify(characters[4]));
            break;
        default:
            res.writeHead(404);
            res.end(
                JSON.stringify({
                    statusCode: 404,
                    message: "Error 404",
                })
            );
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});