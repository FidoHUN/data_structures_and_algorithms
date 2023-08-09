/*
Implement a function that computes the factorial of a number!
First implement the recursive version, then the tail recursive version!
*/

function recFactorial(x){
    if(x<=1){
        return 1;
    }else{
        return x * recFactorial(x-1);
    }
}

/*
Space: O(N)
A rekúrzió maga azért működőképes koncepció, mert a call stack képes számon tartani a függvényhívások sorrendjét. 
A call stack vár arra tulajdonképpen, hogy elérjük a recFactorial(1) állapotot, hogy aztán a call stack-en
végighaladva visszaadja nekünk a megfejtést:

recFactorial(4);black
4*recFactorial(3);
4*(3*recFactorial(2));
4*(3*(2*recFactorial(1)));
4*(3*(2*1);
--> 24
*/

function tailFactorial(x, totalSoFar=1){
    if(x===1){
        return totalSoFar;
    }else{
        return tailFactorial(x-1,totalSoFar*x);
    }
}

/*
Space: O(1)
Ebben az esetben nem a call stack képességeire hagyatkozunk, hanem mi magunk végezzük el a függvényhívásokat.

tailFactorial(4);
tailFactorial(4,1);
tailFactorial(3,4);
tailFactorial(2,12);
tailFactorial(1,24);
tailFactorial(0,24);
--> 24
*/

tailFactorial(4);