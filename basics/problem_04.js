/* 
Given two strings S and T. Return if they are equal when both are typed out! 
Any '#' that appears in the string counts as a backspace.

S:"ab#c" = T:"az#c" => True
*/

let S = "abc#d"
let T = "abcc##d"

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//  var backspaceCompare = function(s, t) {
//     return generateString(s) === generateString(t)
// }

// var generateString = function(string){
//   let generatedString = []
//   for(let i = 0; i < string.length; i++){
//     if(string[i]!=='#'){
//       generatedString.push(string[i])
//     }else{
//       generatedString.pop()
//     }
//   }
//   return generatedString.join('')
// }

/* 
T:O(s+t)
S:O(s+t)
*/

/* 
Az előző megoldásunk eléggé brute force, viszont átlátható, egyszerű és jól is működik. 
Próbáljuk meg optimalizálni a kódot azzal, hogy egyrészt a shifting pointers technikát 
alkalmazzuk, másrészt pedig nem hozunk létre új adatszerkezetet, hanem az eredeti adaton 
dolgozunk! Ebben az esetben semmilyen változást nem érünk el, ha a shifting pointereket 
a stringek elején indítjuk, hiszen eddig is ezt tettük. Ha viszont a string végétől indulunk, 
akkor egy '#' jel tulajdonképpen egy kettes ugrást jelent, ha a rákövetkező elem egy betű. 
Ha azonban ismét egy '#'-t ütünk el, 


S: 'abc#d' , T: 'abcc##d' => True
       _              _
első iteráció: p1=S[4], p2=T[6] => S[4]===T[6] => igen, ugrunk egy iterációt => p1=S[3], p2=T[5]
második iteráció:  p1=S[3], p2=T[5] => S[3]===T[5] => igen, de ezek '#'-ek => oké, mi lenne a rákövetkező elem? => 
  S esetében egy 'c' => ugorjunk kettőt p1-el, ez tulajdonképpen olyan mintha kitörölnénk 'c'-t =>  p1=S[1]
  T esetében egy '#' => oké, akkor kezdjünk már el ezeket a '#'-eket számolni mert ki tudja mennyi lesz... mi lenne a következő elem => 'c' => oké, 2 #-et számoltunk össze, akkor mivel egy '#'-nél kettőt ugrunk, most négyet fogunk =>  p2=T[1]
harmadik iteráció) p1=S[1], p2=T[1] => S[1]===T[1] => igen, ugrunk egy iterációt => p1=S[0], p2=T[0]
negyedik iteráció) p1=S[0], p2=T[0] => S[0]===T[0] => igen, végére értünk a két stringnek
*/

var backspaceCompare = function (s, t) {
  let p1 = s.length - 1
  let p2 = t.length - 1
  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === '#' || t[p2] === '#') {
      let counter = 0
      if (s[p1] === '#') {
        counter++
        while (counter !== 0) {
          p1--
          if (s[p1] === '#') counter++ // counting how many # symbols I can find
          else counter--
        }
        p1-- // delete operation is done, but dont forget to jump to the next letter
      } if (t[p2] === '#') {
        counter++
        while (counter !== 0) {
          p2--
          if (t[p2] === '#') counter++
          else counter--
        }
        p2--
      }
    }
    if (s[p1] === t[p2]) {
      p1--
      p2--
    } else {
      return false
    }
  }
  return true
}

console.log(backspaceCompare(S, T))

/* 
T:O(s+t)
S:O(1)
*/
