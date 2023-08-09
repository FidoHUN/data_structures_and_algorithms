/*
Given a string containing only parentheses, like (,),{,},[,].
Determine if it is valid. The sting is valid if all the parentheses are closed.
Overlapping '({)}' is invalid

Tipp: 
A nyitó zárójeleket eltároljuk egy stack-be
Ha találunk egy záró zárójelet, a párjának a stack tetején kell lennie. Ha ez nem így van, a zárójelezés hibás.
Ha az ellenőrzés végén marad a stack-ben kimaradt zárójel aminek nem jutott pár, a zárójelezés szintén hibás
*/

let testCase = "{[]()}";

var validParentheses = function(parentheses){
    let stack = [];
    for(let i=0;i<parentheses.length;i++){
        if(parentheses[i] === '(' || parentheses[i] === '{' || parentheses[i] === '['){
            stack.push(parentheses[i]);
        }else{
            if(parentheses[i] === ')' && stack.length > 0 && stack[stack.length-1] === '('){
                stack.pop();
            }else if(parentheses[i] === ']' && stack.length > 0 && stack[stack.length-1] === '['){
                stack.pop();
            }else if(parentheses[i] === '}' && stack.length > 0 && stack[stack.length-1] === '{'){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    if(stack.length !== 0){
        return false;
    }
    return true;
};

console.log(validParentheses(testCase));