class Prient{
    constructor(){
        this.fathername = "shalmankhan";
    }
}

class Child extends Prient{
    constructor(name){
        super();
        this.name = name;
        
    }
    getFullName(){
        return this.name + " "+this.fathername;
    }
}

    const baby = new Child("Arnold");
    const baby2 = new Child("Sablert");
    console.log(baby2.getFullName());
    console.log(baby.getFullName());
    console.log(454)