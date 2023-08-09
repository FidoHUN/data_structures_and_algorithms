class ListNode {
  constructor(value) {
      this.value = value
      this.next = null                
  }
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)
const node6 = new ListNode(6)
const node7 = new ListNode(7)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7

function iterate(head){
  console.log(head.value);
  if(head.next){
    iterate(head.next)
  }else{
    return
  }
}

// iterate(node1)

/* 
Given a linked list. return it in reverse.
*/

var reverseList = function(head) {
  let listSoFar = null;
  let current = head;
  
  while(current) { // current = (1)
    let next = current.next; // next = (2)
    current.next = listSoFar; // current = (1)->null
    listSoFar = current; // listSoFar = (1)->null
    current = next; // current = (2)
  }
  
  return listSoFar;
};

// console.log(reverseList(node1));

/* 
Given a linked list. return a segment of it in reverse.

l=(1)->(2)->(3)->(4)->(5)->(6)->(7)->null, m=3, n=5 ==> l=(1)->(2)->(5)->(4)->(3)->(6)->(7)->null
*/

let m=3;
let n=5;

var reverseBetween = function(head, m, n) {
  let currentPos = 1, currentNode = head; // The currentNode object is pointing to the head object, so if currentNode is changing, the head is changing as well. For cloning the object simply use Object.create()
  let start = head;
  
  while(currentPos < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }
  
  let newList = null, tail = currentNode;
  
  while(currentPos >= m && currentPos <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPos++;
  }
  
  start.next = newList;
  tail.next = currentNode;
  
  if(m > 1) {
    return head
  } else {
    return newList;
  }
};

console.log(reverseBetween(node1,m,n))