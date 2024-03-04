/* 
Given a string, find the length of the longest substring without repeating characters.
'abcad' => 4
*/

let S = "tmmzuxt"

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let characters = []
//   let longest = 0
//   for (let i = 0; i < s.length; i++) {
//     for(let j = i ; j < s.length ; j++){
//       if(characters.includes(s[j])){
//         characters = []
//         break
//       }
//       characters.push(s[j])
//       if(longest < characters.length) longest = characters.length
//     }
//   }
//   return longest
// }

// console.log(lengthOfLongestSubstring(S));

/* 
Technique name: Two Pointers
T:O(n2)
S:O(n)
*/

/* 
Ahhoz, hogy ezt a feladatot optimalizáljuk meg kell tanulnunk egy új módszert, melynek neve: Sliding Window technika.
Lényege, hogy két pointer segítségével egy 'abalkot' formálok, amelyek rendre az ablak két szélen helyezkednek el. 
Ezután a két pointert egyszerre mozgatom feladattól függően jobbra, vagy balra, minthogyha egy ablakot mozgatnánk.
Célszerű tömbök helyett ezentúl hash táblákat használnunk. A hash táblák nagyon hasonlóak a tömbökhöz, azzal a 
külöbséggel hogy egész indexek helyett egyedi kulcsok tartoznak az értékekhez. Emiatt a nagy hasonlóság miatt 
a keresés O(1) időben megoldható, amennyiben ismerjük a kulcsot. Ez a tömbökre is igaz. Annyival jobb ez az 
adatszerkezet a tömböknél, hogy a beillesztés és a törlés is O(1) időben megoldható, hiszen a tömbökkel ellentétben 
nem kötelező az indexeknek / kulcsoknak nagyság szerint követniük egymást. Arról nem is beszélve, hogy az egyedi 
kulcsnevek miatt eggyel több adatot tudunk lementeni. 

['1,'2,3,4,5,6]  ==>  [1,'2,'3,4,5,6]  ==>  [1,2,'3,'4,5,6]  ==>  [1,2,3,'4,'5,6] ==> [1,2,3,4,'5,'6]

Az ablak nagysága, mozgási iránya folyamatosan változtatható és mindig az adott feladattól függ!

S = 'abcadcad' 
első iteráció: lefty=0, righty=0, longest=0, hash={} => mentsük le az 'a' betűt a hash táblába az indexével együtt => lefty=0, righty=1, hash={a:0}, longest = righty-lefty=1 => longest=1
második iteráció: 'b' nem szerepel a hash táblában, mentsük le => hash={a:0,b:1}, longest=2 => léptessük a righty-t => lefty=0,righty=2
harmadik iteráció: 'c' nem szerepel a hash táblában, mentsük le => hash={a:0,b:1,c:2}, longest=3, léptessük a righty-t => lefty=0,righty=3
negyedik iteráció: 'a' szerepel a hash táblában => 'a' régi indexe 0, lefty új indexe 0+1=1 lesz => lefty=1,righty=4,hash={a:3,b:1,c:2}, longest=3
... addig megyünk, amíg a righty el nem ér a string végéig
FONTOS!! Attól, hogy találtunk a hash-ben szereplő karaktert, még nem fogjuk eldobni a string részletet, hiszen ha a lefty bal oldalán van, akkor már elhagytuk, nem vesszük figyelembe!
*/

var lengthOfLongestSubstring = function (s) {
  let lefty = 0
  let righty = 0
  let hash = {}
  let longest = 0
  console.log(s)
  while (righty !== s.length) {
    // Ha van új karakter, adjuk hozzá a hash-hez
    if (hash[s[righty]] === undefined) {
      hash[s[righty]] = righty
    } else {
      // Ha már van ilyen karakter, de kilóg az 'ablakból', akkor csak frissítem a hash-t
      if (hash[s[righty]] < lefty) {
        console.log('kilóg', longest)
        console.log(hash,lefty,righty)
        hash[s[righty]] = righty
        console.log(hash,lefty,righty)
      } else {
        // Ha már van ilyen karakter, de nem lóg ki az ablakból, akkor
        // el kell tolnom az ablakot = a lefty-t frissítem
        console.log('eltolom az ablakot', longest)
        console.log(hash,lefty,righty)
        lefty = hash[s[righty]] + 1
        hash[s[righty]] = righty
        console.log(hash,lefty,righty)
      }
    }
    if (righty - lefty + 1 > longest) longest = righty - lefty + 1
    righty++
  }
  return longest
}

console.log(lengthOfLongestSubstring(S))

/* 
Technique name: Shifting windows
T:O(n)
S:O(n)
*/

