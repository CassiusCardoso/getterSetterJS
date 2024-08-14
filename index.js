class Pessoa {
    constructor(name, surname, age) {
        this._name = name;
        this._surname = surname;
        this._age = age;
    }

    get name(){
        return this._name;
    }
    
    get surname(){
        return this._surname;
    }

    get age(){
        return this._age;
    }

    set name(value){
        if(value){
            this._name = value;
        } else{
            console.log('Nome inválido');
        }
    }
    set surname(value){
        if(value){
            this._surname = value;
        } else{
            console.log('Sobrenome inválido');
        }
        
    }

    set age(value){
        if(value > 0){
            this._age = value;
        } else{
            console.log('Idade inválida')
        }
    }
}

const people1 = new Pessoa('Júlia', 'Romis', 22)
console.log(people1.name)
console.log(people1.name = 'July')
people1.age = -5;
console.log(people1.age)
