/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    let tmp: ListNode;
    let tmp2: ListNode;
    let tmp3: ListNode | null;
    if(!head) return head;
    if(!head.next) return head;
    if(!head.next.next){
        tmp = head.next;
        tmp.next = head;
        head.next = null;
        return tmp;
    }
    tmp = head;
    tmp2 = head.next;
    tmp3 = head.next.next;
    while(tmp2){
        tmp2.next = tmp;
        tmp = tmp2;
        if(tmp3){
            tmp2 = tmp3;
            tmp3 = tmp3.next;
        }else{
            head.next = null
            head = tmp2;
            break;
        }
    }
    return head;
};