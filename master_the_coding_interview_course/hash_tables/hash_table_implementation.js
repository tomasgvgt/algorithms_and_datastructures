class HashTable{
    constructor(size){
        this.data = new Array(size);
    }
    #hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;

    }
    set(key, value){
        let keyVal = [key, value];
        let index = this.#hash(key);
        if(!this.data[index]){
            this.data[index] = []
        }
        this.data[index].push(keyVal);
        return index;
    }
    get(key){
        let index = this.#hash(key);
        for(let i = 0; i < this.data[index].length; i++){
            if(this.data[index][i][0] === key){
                return this.data[index][i][1];
            }
        }
        
    }

    keys(){
        //Function that returns an array of all the keys in the hash table.
        const keys = [];
        for(let bucket of this.data){
            if(bucket !== undefined){
                for(let element of bucket){
                    keys.push(element[0])
                }
            }
        }
        return keys
    }

    values(){
        //function that returns an array of all the values in the hash table
        const values = [];
        for(let bucket of this.data){
            if(bucket !== undefined){
                for(let element of bucket){
                    values.push(element[1])
                }
            }
        }
        return values;
    }
}

const myHash = new HashTable(20);
console.log(myHash.set('bmw', '3'));
console.log(myHash.set('mercedes', '200'))
console.log(myHash.set('range rover', 'Evoque'))
console.log(myHash.set('bugatty', 'veiron'))
console.log(myHash.get('bmw'));
//console.log(myHash.data);
console.log(myHash.keys());
console.log(myHash.values())
;