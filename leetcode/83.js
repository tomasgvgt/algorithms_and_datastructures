/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    let nums = {};
    let tmp = head;
    let head2 = null;
    let tmp2 = head2;
    while(tmp){
        if(!nums[tmp.val]){
            let node = new ListNode(tmp.val);
            console.log(node);
            if(head2 === null){
                head2 = node;
                tmp2 = node;
            }else{
                tmp2.next = node;
            }
            tmp2 = node;
            nums[tmp.val] = true;
        }
        tmp = tmp.next;
    }
    return head2;

    
};