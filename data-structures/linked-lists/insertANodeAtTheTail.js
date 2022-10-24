const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

function insertNodeAtTail(head, data) {
  const node = new SinglyLinkedListNode(data);
  if (!head) {
    return node;
  }
  let currentNode = head;
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  return head;
}
