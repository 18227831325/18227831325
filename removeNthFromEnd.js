https://leetcode.cn/problems/remove-nth-node-from-end-of-list/submissions/

const removeNthFromEnd = function (head, n) {
    // body
    let slow = head, fast = head
    
    while(n--) {
        fast = fast.next
    }

    if(!fast) {
        return head.next
    }

    while(fast.next) {
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next

    return head
}