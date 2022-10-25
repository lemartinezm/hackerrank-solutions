function reversePrint(head) {
  if (!head) return;
  let currentNode = head;
  if (currentNode.next) {
    reversePrint(currentNode.next);
  }
  console.log(currentNode.data);
}
