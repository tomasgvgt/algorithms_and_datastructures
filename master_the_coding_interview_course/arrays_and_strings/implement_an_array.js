//Implemente push
//implement pop
//implement lenght
// implement delete at an index
//implement shift 
//implement unshift

class Array{
    #values;
    #length;
    constructor(){
        this.#values = {};
        this.#length = 0;
    }
    get length(){
        return this.#length;
    }
    get values(){
        return this.#values;
    }
    push(value){
        this.#values[this.#length] = value;
        this.#length++;
        return value;
    }
    pop(){
        delete this.#values[this.#length - 1];
        this.#length--;
        return true;
    }
    shift(){
        for(let i=0; i < this.#length; i++){
            this.#values[i] = this.#values[i + 1]
        }
        delete this.#values[this.#length - 1];
        this.#length--;
        return true;
    }
    unshift(value){
        for(let i = this.#length; i >= 0; i--){
            this.#values[i] = this.#values[i - 1];
        }
        this.#values[0] = value;
        this.#length++;
        return true;
    }
    delete(index){
        for(let i = index; i < this.#length - 1; i++){
            this.#values[i] = this.#values[i + 1];
        }
        delete this.#values[this.#length - 1];
        this.#length --;
        return true;
    }
    insert(value, index){
        for(let i = this.#length; i > index; i--){
            this.#values[i] = this.#values[i - 1]
        }
        this.#values[index] = value;
        this.#length++;
        return value;
    }
}

const myArray = new Array;
myArray.push(10);
myArray.push(11);
myArray.push(12);
console.log(myArray.length);
console.log(myArray.values);
myArray.pop();

console.log(myArray.length);
console.log(myArray.values);
myArray.shift();
console.log(myArray.length);
console.log(myArray.values);

myArray.unshift(99);
myArray.unshift(33);
console.log(myArray.length);
console.log(myArray.values);

myArray.delete(1);
console.log(myArray.length);
console.log(myArray.values);

myArray.insert(10, 1);
console.log(myArray.length);
console.log(myArray.values);