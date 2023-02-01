// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
class Persona {
  constructor(nombre, edad, genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  obtDetalles = () => console.log(`Nombre: ${this.nombre}, edad: ${this.edad} y género: ${this.genero}`)
}

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.
class Estudiante extends Persona {
  constructor(nombre, edad, genero, curso, grupo){
    super(nombre, edad, genero)
    this.curso = curso;
    this.grupo = grupo;
  }
  registrar = () => console.log(`Registrado: ${this.nombre}, con ${this.edad} años, género ${this.genero}, nuevo alumno del curso ${this.curso} (grupo ${this.grupo})`)
}
// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
  constructor(nombre, edad, genero, asignatura, nivel){
    super(nombre, edad, genero)
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  asignar = () => console.log(`${this.nombre} de ${this.edad} y género ${this.genero} impartirá este año la asignatura ${this.asignatura}, nivel ${this.nivel} `)
}

// Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.

//Creación de objetos:

const manolito = new Estudiante('Manolito', 13, 'Masculino', '1º','A')
const pilar = new Profesor ('Pilar', 28, 'Femenino', 'Matemáticas', 3)

//Función de clase Persona:

manolito.obtDetalles()
pilar.obtDetalles()

//Propiedades de clase Persona

console.log(manolito.nombre)
console.log(pilar.edad)

//Propiedades especificass

console.log(manolito.curso)
console.log(pilar.asignatura)

// Funciones especificas:
manolito.registrar()
pilar.asignar()