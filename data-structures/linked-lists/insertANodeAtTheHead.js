function insertNodeAtHead(head, data) {
  const node = new SinglyLinkedListNode(data);
  if (!head) return node;
  node.next = head;
  return node;
}
