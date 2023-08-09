/*
Heaps (MAX and MIN heaps) are are tree-based data structures that satisfy the heap property and are used for efficient insertion and deletion operations.
A heap is always a complete tree.
In a max heap for example, the root node is always bigger, than the child node(s).
Insert and delete operations are really efficent using heaps (O(logN)) because it's really easy to to maintain the heap structure by switching the root and child values until the heap will be correct again.
Implementing a heap is possible using nodes, or even an array if we really care about efficiency.
Exmaple:
                     75
                   /    \
                  50     25
                 /  \   /  \
                45  35 10  15
                
Implementing a heap using an array is like a BFS

[75,50,25,45,35,10,15]

getParent: Math.floor((idx-1)/2)
getLeftChild: (idx*2)+1
getRightChild: (idx*2)+2
*/

let heap = [75,50,25,45,35,10,15];

var ins = function(heap,val){
    heap.push(val);
    let parent = getParent(heap,val);
    // if(val > parent){
    //     swap(heap,val,parent);
    // }
    while(val > parent){
        swap(heap,val,parent);
        parent = getParent(heap,val);
    }
};

var del = function(heap,val){
    if(getIndex(heap,val) === null) return;
    let lastElement = heap[heap.length-1];
    swap(heap,lastElement,val);
    heap.pop();
    let bigger = Math.max(heap[getLeftChildIndex(heap,lastElement)],heap[getRightChildIndex(heap,lastElement)]);
    while(bigger > lastElement){
        swap(heap,bigger,lastElement);
        bigger = Math.max(heap[getLeftChildIndex(heap,lastElement)],heap[getRightChildIndex(heap,lastElement)]);
    }
};

var getIndex = function(heap,val){
    for(let i=0;i<heap.length;i++){
        if(heap[i] === val) return i;
    }
    return null;
};

var getParent = function(heap,val){
    let index = getIndex(heap,val);
    let parentIndex = Math.floor((index-1)/2);
    return heap[parentIndex];
};

var swap = function(heap,x,y){
    let x_index = getIndex(heap,x);
    let y_index = getIndex(heap,y);
    let temp = x;
    heap[x_index] = y;
    heap[y_index] = temp;
};

var getLeftChildIndex = function(heap,val){
    return (getIndex(heap,val)*2)+1;
};

var getRightChildIndex = function(heap,val){
    return (getIndex(heap,val)*2)+2;
};

ins(heap,100);

del(heap,75);

console.log(heap);