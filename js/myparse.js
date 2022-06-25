
todo:Este codigo esta hecho para convertir un JSON a un objeto JS. 
Lo primero que hace es separar el JSON en un arreglo de caracteres. 
Luego, itera sobre este arreglo y va armando el objeto JS.*/












/*function convertirJSON(json) {
    var objeto = {};
    var propiedades = json.replace(/\"/g, '').replace(/:/g, ',').split(',');
    for (var i = 0; i < propiedades.length - 1; i+=2) {
      if (propiedades[i + 1] === 'true') {
        objeto[propiedades[i]] = true;
      } else if (propiedades[i + 1] === 'false') {
        objeto[propiedades[i]] = false;
      } else if (propiedades[i + 1] === 'null') {
        objeto[propiedades[i]] = null;
      } else {
        objeto[propiedades[i]] = propiedades[i + 1];
      }
    }
    console.log(objeto); 
function convertJSON(json) {
    var obj = {};
    for (var i in json) {
        if (json.hasOwnProperty(i)) {
            obj[i] = json[i];
        }
    }
    return obj;
}/*/

/*const json = {}

function myParse(text){
    let arr = text.split("");
    let len = arr.length;
    // console.log(arr);
    let key = "";
    let value = "";
    let i = 0;
    let last_index = 0;
    let is_key = true;
    let is_key_string = false;
    let is_value_string = false;
    let is_value_arr = false;
    let is_value_obj = false;
    let is_obj_value_key = true;

    for(i=0; i < len; i++){
        let currentChar = arr[i];
      
        if(is_value_obj){
            if(currentChar === '}'){
                is_value_obj = false;
                json[key] = myParse(value);
                value = "";
            }
            else{
                if(is_obj_value_key){
                    if(currentChar !== '"'){
                        if(currentChar !== ':' && currentChar !== ','){
                            key += currentChar;
                        }
                        else{
                            is_obj_value_key = false;
                        }
                    }
                }
                else{
                    value += currentChar;
                }
            }
        }
        else{
            if(is_value_arr){
                if(currentChar === ']'){
                    is_value_arr = false;
                    json[key] = value.split(",");
                    value = "";
                }
                else{
                    if(currentChar !== '"' && currentChar !== ','){
                        value += currentChar;
                    }
                }
            }
            else{
                if(is_value_string){
                    if(currentChar === '"'){
                        is_key = false;
                        is_key_string = false;
                        is_value_string = false;
                        json[key] = value;
                        value = "";
                        key = "";
                    }
                    else{
                        value += currentChar;
                    }
                }
                else{
                    if(is_key_string){
                        if(currentChar === '"'){
                            is_key = false;
                            is_key_string = false;
                            is_value_string = true;
                        }
                        else{
                            key += currentChar;
                        }
                    }
                    else{
                        if(is_key){
                            if(currentChar !== '"'){
                                if(currentChar !== ':' && currentChar !== ','){
                                    key += currentChar;
                                }
                                else{
                                    is_key = false;
                                }
                            }
                            else{
                                is_key_string = true;
                            }
                        }
                        else{
                            if(currentChar !== '"' && currentChar !== ','){
                                value += currentChar;
                            }
                        }
                    }
                }
            }
        }

        if(currentChar === '{'){
            is_value_obj = true;
            is_obj_value_key = true;
        }

        if(currentChar === '['){
            is_value_arr = true;
        }
    }
    return json;
}

function convert(){
    console.log('convert');
    console.log('json', json);
    console.log('document.getElementById("json").value', document.getElementById("json").value);
    console.log('result', myParse(document.getElementById("json").value));
    console.log(js);
            document.getElementById("resultado").innerHTML = js;
}

convert();

