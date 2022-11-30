/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let array = [];
    while(head){
        array.push(head.val);
        head = head.next;
    }
    if(array.length === 0) return false;
    if(array.length === 1) return true;
    for(let i = 0, j = array.length - 1; i <= j; i++, j--){
        if(array[i] != array[j]) return false
    }
    return true;

};
