/*
BINARY SEARCH TREES
A nice template for solving problems with recursion:

const myRecFunction = function(args){
    basecases
    myRecFunction(...);
}

*/

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
};

let node1 = new Node(12);
let node2 = new Node(7);
let node3 = new Node(18);
let node4 = new Node(5);
let node5 = new Node(9);
let node6 = new Node(15);
let node7 = new Node(25);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

/*
1) Given a binary tree. Return if it's a binary search tree, or not.
*/


const isBinarySearchTree = function(node,lower=Number.MIN_SAFE_INTEGER,upper=Number.MAX_SAFE_INTEGER){
    if(node.data <= lower || node.data >= upper){
        return false;
    }
    if(node.left){
        if(!isBinarySearchTree(node.left,lower,node.data)){
            return false;
        }
    }
    if(node.right){
        if(!isBinarySearchTree(node.right,node.data,upper)){
            return false;
        }
    }
    return true;
}

console.log(isBinarySearchTree(node1));

/*
2) Implement the insert and delete methods.
*/

const insertBST = function(val,root){
    if(!root){
        return new Node(val);
    }
    if(val < root.data){
        root.left = insertBST(val,root.left);
    }else if(val > root.data){
        root.right = insertBST(val,root.right);
    }
    return root;
}

insertBST(4,node1);

const deleteBST = function(val,root){
    let x = search(val,root);
    if(!x) return null;
    let ret = x;
    if(isLeaf(x,root)){
        let p = getParent(x,root);
        if(p.left && p.left.data === x.data) p.left = null;
        if(p.right && p.right.data === x.data) p.right = null;
        return ret;
    }
    if(oneChild(x,root)){
        let p = getParent(x,root);
        if(p.left && p.left.data === x.data){
            if(x.left){
                let bigNode = getBiggestValueNode(x.left);
                bigNode.left = x.left;
                p.left = bigNode;
                return ret;
            }
            if(x.right){
                p.left = x.right;
                return ret;
            }
        }
        if(p.right && p.right.data === x.data){
            if(x.left){
                let bigNode = getBiggestValueNode(x.left);
                bigNode.left = x.left;
                p.right = bigNode;
                return ret;
            }
            if(x.right){
                p.right = x.right;
                return ret;
            }
        }
    }
    if(twoChild(x,root)){
        let p = getParent(x,root);
        let bigNode = getBiggestValueNode(x.left);
        if(p.right && p.right.data === x.data){
            bigNode.right = x.right;
            p.right = bigNode;
            return ret;
        }
        if(p.left && p.left.data === x.data){
            bigNode.right = x.right;
            p.left = bigNode;
            return ret;
        }
    }
}

const search = function(val,root){
    if(root.data === val){
        return root;
    }
    if(root.data < val){
        return search(val,root.right);
    }
    if(root.data > val){
        return search(val,root.left);
    }
}

const isLeaf = function(node,root){
    let x = search(node.data,root);
    if(!x.left && !x.right){
        return true;
    }
    return false;
}

const getParent = function(node,root,prev=null){
    if(node === root){
        return prev;
    }else{
        prev = root;
    }
    if(node.data > root.data){
        return getParent(node,root.right,prev);
    }
    if(node.data < root.data){
        return getParent(node,root.left,prev);
    }
}

const oneChild = function(node,root){
    let x = search(node.data,root);
    if((x.left && !x.right) || !x.left && x.right){
        return true;
    }
    return false;
}

const getBiggestValueNode = function(root){
    let q=[root], ret = root;
    while (q.length){
        let node = q.shift();
        if(node.data > ret.data) ret = node;
        if(node.left) q.push(node.left);
        if(node.right) q.push(node.right);
    }
    return ret;
}

let twoChild = function(node,root){
    let x = search(node.data,root);
    if((x.left && x.right)){
        return true;
    }
    return false;
}

deleteBST(4,node1);
deleteBST(7,node1);
deleteBST(18,node1);

/*
3) Convert a normal BST to a balanced BST.
*/

node1 = new Node(4);
node2 = new Node(3);
node3 = new Node(2);
node4 = new Node(1);
node5 = new Node(5);
node6 = new Node(6);
node7 = new Node(7);

node1.left = node2;
node2.left = node3;
node3.left = node4;
node1.right = node5;
node5.right = node6;
node6.right = node7;

let arr = [];

const balance = function(bst){
    inorder(bst);
    let mid = Math.floor((arr.length-1)/2);
    let ret = null;
    if(arr[mid] !== undefined) ret = insertBST(arr[mid],null);
    let l=mid-1,r=mid+1;
    while(arr[l] !== undefined && arr[r] !== undefined){
        if(arr[l] !== undefined) insertBST(arr[l],ret);
        if(arr[r] !== undefined) insertBST(arr[r],ret);
        l--;
        r++;
    }
    return ret;
};

const inorder = function(root){
    if(!root){
        return;
    }
    inorder(root.left);
    arr.push(root.data);
    inorder(root.right);
};

balance(node1);
