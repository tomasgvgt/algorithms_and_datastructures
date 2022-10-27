/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let tmp1 = l1;
    let tmp2 = l2;
    let l3 = null;
    let tmp3 = null;
    let val1;
    let val2;
    let val3
    let sum
    let ten = false;
    while(tmp1 || tmp2){
        let node = new ListNode();
        if(!l3){
            l3 = node;
            tmp3 = node;
        }else{
            tmp3.next = node;
            tmp3 = node;
        }
        if(!tmp1){
            val1 = 0;
            val2 = tmp2.val;
        }else if(!tmp2){
            val1 = tmp1.val;
            val2 = 0;
        }else{
            val1 = tmp1.val;
            val2 = tmp2.val;
        }
        sum = val1 + val2;
        if(ten === true){
            sum += 1;
        }
        if(sum > 9){
            val3 = sum - 10;
            ten = true;
        }else{
            val3 = sum;
            ten = false;
        }
        if(tmp1){
            tmp1 = tmp1.next;
        }
        if(tmp2){
            tmp2 = tmp2.next;
        }
        node.val = val3;
    }
    if(ten === true){
        let node = new ListNode();
        node.val = 1;
        tmp3.next = node;
        tmp3 = node;
    }
    return l3;
};
