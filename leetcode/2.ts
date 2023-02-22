/**
 * Definition for singly-linked list.
*/
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let result: ListNode | null = null; 
    let remainder =  0;
    let head: ListNode | null = null;

    while(l1 && l2) {

        if(!result) {
            result = new ListNode(l1.val + l2.val);
            head = result;
        }
        else {
            result.next = new ListNode(l1.val + l2.val + remainder);
            result = result.next;
        }
        if (result.val >= 10) {
            result.val -= 10;
            remainder = 1;
        } else {
            remainder = 0;
        }
        l1 = l1.next;
        l2 = l2.next;
    }

    let lastNumbers = l1? l1: l2

    while(lastNumbers) {
        result.next = new ListNode(lastNumbers.val + remainder);
        result = result.next;
        if (result.val >= 10) {
            result.val -= 10;
            remainder = 1;
        } else {
            remainder = 0;
        }
        lastNumbers = lastNumbers.next;
    }

    if (remainder)
        result.next = new ListNode(remainder);

    return head;

};
