
// Crear la clase Person, con propiedades name, age y genre, y el método obtDetails(),
// que muestra por pantalla las propiedades de la persona.

class Person{

    constructor(name,age,gender){  //genre se usa para cosas como libros

        this.name=name;
        this.age=age;
        this.gender=gender;
    }

    obtDetails (){
        console.log(`Nombre de la persona: ${this.name}, edad: ${this.age}, género: ${this.gender}`);
    }
        
}

let persona1 = new Person('Marina',23,'femenino');

persona1.obtDetails();


// Crear la clase Student, que hereda de Person, e incluye las propiedades course y group 
//y el método register(), que muestre por pantalla el resultado.

class Student extends Person{

    constructor(name,age,gender,course,group){

        super(name,age,gender);
        this.course=course;
        this.group=group;
    }

    register(){
        console.log(`Nombre de la persona: ${this.name}, edad: ${this.age}, género: ${this.gender}, curso: ${this.course}º y grupo: ${this.group}.`);
    }

}

let estudiante1=new Student('Xabier',8,'masculino',3,'B');

estudiante1.register();

// Crear la clase Teacher, que hereda de Person, e incluye las propiedades asignatura y level y el método assign(),
//  que muestre por pantalla el resultado.

class Teacher extends Person{

    constructor(name,age,gender,asignatura,level){

        super(name,age,gender);
        this.asignatura=asignatura;
        this.level=level;
    }

    assign(){
        console.log(`Nombre de la persona: ${this.name}, edad: ${this.age}, género: ${this.gender}, asignatura: ${this.asignatura} y nivel: ${this.level}.`);
    }

}

let profesor1= new Teacher('Alex',28,'otro','geografía',6);

profesor1.assign();