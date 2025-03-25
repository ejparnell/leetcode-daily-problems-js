/**
 * Definition for singly-linked list.

 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode()
    let current = dummy

    let p1 = list1
    let p2 = list2

    while (p1 && p2) {
        if (p1.val < p2.val) {
            current.next = p1
            p1 = p1.next
        } else {
            current.next = p2
            p2 = p2.next
        }
        current = current.next
    }

    current.next = p1 || p2

    return dummy.next
};