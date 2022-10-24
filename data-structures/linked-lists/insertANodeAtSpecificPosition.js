function insertNodeAtPosition(head, data, position) {
  const node = new SinglyLinkedListNode(data);
  let currentNode = head;
  for (let i = 0; i < position - 1; i++) {
    currentNode = currentNode.next;
  }
  node.next = currentNode.next;
  currentNode.next = node;
  return head;
}
