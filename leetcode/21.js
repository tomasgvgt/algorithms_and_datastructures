/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    //If both lists are empty
    if(list1 === null && list2 === null){
        return list1;
    }
    //First is empty and the other is not
    if(list1 != null && list2 === null){
        return list1
    }
    //If the second is empty and the other is not
    if(list1 === null && list2 !== null){
        return list2
    }
    let node = new ListNode()
    const sortedList = node;
    let tmp = node;
    if(list1.val < list2.val){
        node.val = list1.val;
        node.next = null;
        list1 = list1.next;
    }else{
        node.val = list2.val;
        node.next = null;
        list2 = list2.next;
    }
    while(list1 && list2){
        node = new ListNode();
        tmp.next = node;
        if(list1.val < list2.val){
            node.val = list1.val;
            list1 = list1.next;
        }else{
            node.val = list2.val;
            list2 = list2.next;
        }
        node.next = null;
        tmp = tmp.next;
    }
    while(list1){
        node = new ListNode();
        tmp.next = node;
        node.val = list1.val;
        node.next = null;
        list1 = list1.next;
        tmp = tmp.next;
    }
    while(list2){
        node = new ListNode();
        tmp.next = node;
        node.val = list2.val;
        node.next = null;
        list2 = list2.next;
        tmp = tmp.next;
    }
    return sortedList;
}