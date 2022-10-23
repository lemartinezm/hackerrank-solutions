function printLinkedList(head) {
  console.log(head.data)
  if (head.next) printLinkedList(head.next)
}