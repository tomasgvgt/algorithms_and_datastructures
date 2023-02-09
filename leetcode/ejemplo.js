class person{
    #name;
    #lastName;
    constructor({name, lastName}){
        this.#name = name;
        this.#lastName = lastName;
    }
    get name(){
        return this.#name;
    }
    set name(n){
        this.#name = n;
    }
}

const tomas = new person({
    name: "Tom",
    lastName: "Gomez"
});

console.log(tomas.name);

tomas.name = "juan";

console.log(tomas.name);