/*
Given a string only containing round brackets '(' and ')' and lowercase characters.
Remove the least amount of brackets so the string is valid.
A string is considered valid if it is empty or if there are brackets, they all close
Exmaples:
"a)bc(d)" -> "abc(d)"
"(ab(c)a" -> "(abc)a" or "ab(c)a"
"))((" -> ""
Tips: combine your stacks and hashmap knowledge
*/

let testCase = "((a)b((c(d)";

var minimumBracketRemove = function (string) {
    let stack = [];
    let wrongParenthesisPos = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ")" || string[i] === "(") {
            if (string[i] === "(") {
                let map = new Map();
                map.set('(', i);
                stack.push(map);
            } else if (string[i] === ")" && stack.length > 0 && stack[stack.length - 1].has('(')) {
                stack.pop();
            }else{
                wrongParenthesisPos.push(i);
            }
        }
    }
    if(stack.length !== 0){
        while(stack.length > 0){
            let top = stack[stack.length-1]
            let wrongPos = top.get('(');
            wrongParenthesisPos.push(wrongPos);
            stack.pop();
        }
    }
    string = string.split('');
    for(let i=0;i<wrongParenthesisPos.length;i++){
        string[wrongParenthesisPos[i]] = '';
    }
    string = string.join('');
    return string;
};

console.log(minimumBracketRemove(testCase));
