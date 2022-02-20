const merge = (l1, l2) => {
  const dummy = new ListNode(0);
  let current = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next;
  }

  current.next = l1 || l2;

  return dummy.next;
};

const mergeKLists = (lists) => {
  if (lists.length === 0) {
    return null;
  }
  while (lists.length > 1) {
    const first = lists.shift();
    const second = lists.shift();

    const mergedList = merge(first, second);
    lists.push(mergedList);
  }

  return lists[0];
};

export default mergeKLists;
