/*
Flatten a multi-level doubly linked list

    null-(1)=(2)=(3)=(4)=(5)=(6)-null
              |             \
           n-(7)=(8)=(9)-n n-(12)-(13)-n
                  |
               n-(10)-(11)-n

                    |
                    V

    null-(1)=(2)=(7)=(8)=(10)=(11)=(9)=(3)=(4)=(5)=(12)=(13)=(6)-null

*/

class DoublyListNode{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
        this.child = null;
    }
}

const node1 = new DoublyListNode(1)
const node2 = new DoublyListNode(2)
const node3 = new DoublyListNode(3)
const node4 = new DoublyListNode(4)
const node5 = new DoublyListNode(5)
const node6 = new DoublyListNode(6)
const node7 = new DoublyListNode(7)
const node8 = new DoublyListNode(8)
const node9 = new DoublyListNode(9)
const node10 = new DoublyListNode(10)
const node11 = new DoublyListNode(11)
const node12 = new DoublyListNode(12)
const node13 = new DoublyListNode(13)

node1.next = node2;
node2.prev = node1;

node2.next = node3;
node3.prev = node2;

node3.next = node4;
node4.prev = node3;

node4.next = node5;
node5.prev = node4;

node5.next = node6;
node6.prev = node5;

node7.next = node8;
node8.prev = node7;

node8.next = node9;
node9.prev = node8;

node10.next = node11;
node11.prev = node10;

node12.next = node13;
node13.prev = node12;

node2.child = node7;
node5.child = node12;
node8.child = node10;

/* 
Jegyzet:
Ha találtam egy node-ot aminek van gyereke, akkor 4 node-ot le kell mentenem, hogy elvégezzem a kapcsolatokat 
    - a jelenlegi node-ot
    - a rákövetkező node-ot
    - a gyerek listának az elejét
    - a gyerek listának a végét

Ha ezek megvannak, elvégezhetem a kapcsolatokat
Nem kell foglalkoznom vele, hogy a gyerek listának vannak-e további gyerekai, mert ha az összekapcsolás után megyek tovább, egyszer eljutok azokhoz is
*/

var flatten = function(head){
    let currentNode = head;
    let nextNode = null;
    let childHeadNode = null;
    let childTaleNode = null;

    while(currentNode){
        if(currentNode.child){
            nextNode = currentNode.next;
            childHeadNode = currentNode.child;
            childTaleNode = childHeadNode;
            while(childTaleNode.next){
                childTaleNode = childTaleNode.next;
            }
            currentNode.next = childHeadNode;
            childHeadNode.prev = currentNode;
            childTaleNode.next = nextNode;
            nextNode.prev = childTaleNode;
        }
        currentNode = currentNode.next;
    }
    return head;
};

console.log(flatten(node1));