class Node{
    constructor(value){
        this.right = null;
        this.left = null;
        this.value = value;
    }
}

class binarySearchTree{
    constructor(){
        this.root = null;
    }
    lookup(data){
        let tmp = this.root;
        while(tmp){
            if(data === tmp.value){
                return tmp;
            }else if(data < tmp.value){
                tmp = tmp.left;
            }else{
                tmp = tmp.right;
            }
        }
        return false;
    }
    insert(data){
        const node = new Node(data);
        if(!this.root){
            this.root = node;
            return node.data;
        }else{
            let tmp = this.root;
            while(tmp){
                if(data < tmp.value){
                    if(!tmp.left){
                        tmp.left = node;
                        return node.data;
                    }
                    tmp = tmp.left;
                }else{
                    if(!tmp.right){
                        tmp.right = node;
                        return node.data;
                    }
                    tmp = tmp.right;
                }
            }
        }
    }

    remove(data){
        if(!this.root){
            return null;
        }
        let parent = this.root;
        let finder = this.root;
        let replacement = this.root;
        let finderSide;
        let helper;
        while(finder){
            if(data < finder.value){
                finder = finder.left;
                if(finder.value != data){
                    parent = finder;
                    finderSide = 'l';
                }
            }else if(data > finder.value){
                finder = finder.right;
                if(finder.value != data){
                    parent = finder;
                    finderSide = 'r';
                }
            }else{
                replacement = finder;
                if(finder.right){
                    replacement = replacement.right;
                    if(replacement.left){
                        while(replacement.left){
                            replacement = replacement.left;
                        }
                        while(helper.left){
                            if(helper.left.right && helper.left.left){
                                helper = helper.left;
                            }
                        }
                        //remove node
                        helper.left = replacement.right;
                        replacement.right = finder.right;
                        replacement.left = finder.left;
                        if(finderSide === 'l'){
                            parent.left = replacement;
                        }else{
                            parent.right = replacement;
                        }
                        finder.left = null;
                        finder.right = null;
                    }
                    //remove node
                    replacement.left = finder.left;
                    if(finderSide === 'l'){
                        parent.left = replacement;
                    }else{
                        parent.right = replacement;
                    }
                    finder.left = null;
                    finder.right = null
                }else if(finder.left){
                    //remove node
                    replacement = finder.left;
                    parent.left = replacement;
                    finder.left = null;

                }else{
                    //remove node
                    if(finderSide === 'l'){
                        parent.left = null;
                    }else{
                        parent.right = null;
                    }

                }
            }
        }
        //If node.right
            //if node.right.left
                //move thatone to the position
            //else
                //mode node.right to the position
        //if node left
            //move node.left to the position
        //else
            //remove node

    }
}

const tree = new binarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));

function traverse(node){
    const tree = {value: node.value};
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

console.log(tree.lookup(9));


