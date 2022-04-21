let arr = [1,2,3,4,5]
function listNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next 
}
//迭代
function reverseList(head) {
    let prev = null, curr = head
    while(curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}
//递归
function reverseList2(head) {
    if(head === null || head.next === null) {
        return head
    }
    const newHead = reverseList2(head.next)
    head.next.next = head
    head.next = null
    return newHead
}
console.log(reverseList(new listNode(arr)));
// console.log(reverseList2(new listNode(arr)));