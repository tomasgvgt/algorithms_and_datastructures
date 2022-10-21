class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    #length;
    #head;
    #tail;
    constructor(){
        this.#length = 0;
        this.#head = null;
        this.#tail = this.#head;
    }
    prepend(data){
        const node = new Node(data);
        node.next = this.#head;
        this.#head = node;
        if(this.#length === 0){
            this.#tail = node;
        }
        this.#length++;
        return data;
    }
    append(data){
        if(this.#length === 0){
            this.prepend(data);
            return data;
        }
        let node = new Node(data);
        this.#tail.next = node;
        this.#tail = node;
        this.#length++;
        return data;
    }

    insert(data, index){
        if (this.#length === 0 || index === 0){
            this.prepend(data);
            return data
        }
        let tmp = this.#head;
        let node = new Node(data);
        let i = 0
        while(i < index - 1){
            if(!tmp.next){
                return false;
            }
            tmp = tmp.next;
            i++;
        }
        node.next = tmp.next;
        tmp.next = node;
        this.#length++;
        return data;
    }

    remove(index){
        if (this.#length === 0){
            return;
        }
        if (index === 0){
            if (this.#length === 1){
                this.#head = null;
                this.#tail = null;
            }else{
                this.#head = this.#head.next;
            }
            this.#length--;
            return index;
        }
        if (index >= this.#length){
            return false;
        }
        let tmp = this.#head;
        let i = 0;
        while(i < index - 1){
            tmp = tmp.next;
            i++;
        }
        tmp.next = tmp.next.next;
        if(index === this.#length - 1){
            this.#tail = tmp;
        }
        this.#length--;
        return index;
    }

    head(){
        if(this.#length > 0){
            return this.#head.data
        }
        return null;
    }

    tail(){
        if(this.#length > 0){
            return this.#tail.data
        }
        return null;
    }

    reverse(){
        if(this.#length === 0 || this.#length === 1){
            return;
        }
        let tmp1 = this.#head;
        let tmp2 = tmp1.next;
        let tmp3 = tmp2.next;
        while(true){
            tmp2.next = tmp1;
            if(tmp3 === null){
                break;
            }
            tmp1 = tmp2;
            tmp2 = tmp3;
            tmp3 = tmp3.next;
        }
        this.#tail = this.#head;
        this.#head = tmp2;
        this.#tail.next = null;
        return true;
    }

    length(){
        return this.#length;
    }
    data(){
        let tmp = this.#head;
        const data = []
        while(tmp){
            data.push(tmp.data);
            tmp = tmp.next;
        }
        return data;
    }
}
