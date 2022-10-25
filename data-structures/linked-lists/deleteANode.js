function deleteNode(head, position) {
  let currentNode = head;
  if (position === 0) return head.next;
  for (let i = 0; i < position - 1; i++) {
    currentNode = currentNode.next;
  }
  currentNode.next = currentNode.next.next;
  console.log(head);
  return head;
}
