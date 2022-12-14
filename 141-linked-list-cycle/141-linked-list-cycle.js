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
    if(head === null)  return false; 
    let hare = head;
    let tortoise = head;
    while(hare) {
        if(hare.next === null) return false;
            hare = hare.next.next;
            tortoise = tortoise.next;
        if(tortoise === hare) return true;
        
    }
    return false;

};