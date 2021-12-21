var users = [
  { name: "Michael", age: 37 },
  { name: "John", age: 30 },
  { name: "David", age: 27 },
  { name: "Alejandro", age: 14 },
];

//¿Cómo harías print/log de la edad de John?
console.log(`La edad De John es : ${users[1].age}`);

//¿Cómo harías print/log del nombre del primer objeto?
console.log(`el nombre del primer objeto es: ${users[0].name}`);

//¿Cómo harías print/log del nombre y la edad
//de cada usuario utilizando un for loop?
//Tu output debería verse algo como esto
function personasObjeto(objeto) {
  for (let i = 0; i < objeto.length; i++) {
    console.log(`Hola soy ${objeto[i].name} mi edad es: ${objeto[i].age}`);
  }
}
personasObjeto(users);

//¿Cómo harías para imprimir el nombre de los mayores de edad?*/

function older(objeto) {
  for (let i = 0; i < objeto.length; i++) {
    if (objeto[i].age > 18) {
      console.log(`Soy ${objeto[i].name} y soy Mayor de Edad`);
    } else {
      throw new Error(`Tu edad es ${objeto[i].age}, eres menor de edad`);
    }
  }
}
older(users);

//!Fundamentos basicos 2
function posToNeg(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = -Math.abs(array[i]);
  }

  return array;
}

console.log(posToNeg([1, 2, 3, -4, 5]));
//!2

function tengoHambre(array) {
  if (array.includes("comida")) {
    array.sort();
    for (let i = array.length - 1; i > 0; i--) {
      if (array[i] == "comida") {
        console.log("yummi");
      } else {
        break;
      }
    }
  } else {
    return console.log("tengo Hambre");
  }
}
tengoHambre([4, 6, 3, 41, 2]);
