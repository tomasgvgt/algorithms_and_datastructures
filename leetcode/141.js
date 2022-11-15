/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    //Apply the rabit and tortoise method.
    let rabbit = head;
    let tortoise = head;
    const nodes = {};
    while(rabbit && rabbit.next && rabbit.next.next){
        rabbit = rabbit.next.next;
        tortoise = tortoise.next;
        if(tortoise === rabbit){
            return true
        }
    }
    return false;
};