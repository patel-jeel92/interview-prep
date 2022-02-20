const addTwoNumbers = (l1, l2) => {
  const dummy = new ListNode(Infinity);
  let curr = dummy;
  let carry = 0;
  while (l1 || l2 || carry) {
    const value1 = l1.val ? l1.val : 0;
    const value2 = l2.val ? l2.val : 0;

    let newDigit = value1 + value2 + carry;
    carry = newDigit / 10;
    newDigit %= 10;
    curr.next = new ListNode(newDigit);

    curr = curr.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  return dummy.next;
};

export default addTwoNumbers;
