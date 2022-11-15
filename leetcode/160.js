/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    //While loop while nodes are different and
    let tmp1 = headA;
    let tmp2 = headB;
    while(tmp1 != tmp2){
        if(tmp1 === null){ 
            tmp1 = headB;
        }else{
            tmp1 = tmp1.next;
        }
        if(tmp2 === null){
            tmp2 = headA;
        }else{
            tmp2 = tmp2.next;
        }
    }
    return tmp1;
};
