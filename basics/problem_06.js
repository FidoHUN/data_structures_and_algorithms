/* 
Given a string. Determine if it is a palindrome, considering only alpanumeric characters and 
ignoring case sensitivity.

'A man, a plan, a canal: Panama' => true

We solving it by starting two pointers on the sides and moving them one by one towards the center
*/

// let s = 'A man, a plan, a canal: Panama'
// const regex = /[^a-zA-Z0-9]/g
// console.log(s.replace(regex, '').toLowerCase())

/* 
T:O(n)
S:O(1)
*/

let s = 'A man, a plan, ba canal: Panama'

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let lefty = 0
  let righty = s.length - 1
  while (lefty <= righty) {
    if (s[lefty] !== s[righty]) return false
    lefty++
    righty--
  }
  return true
};

console.log(isPalindrome(s));

/* 
Ez a kérdés elég egyszerű volt az eddigi tudásunkkal felruházva. Nézzük a következőt!

Given a string s, return true if the s can be palindrome after deleting at most one character from it.
*/

var subPalindromeProblem = function (s,lefty,righty) {
  while(lefty <= righty){
    if(s[lefty] !== s[righty]) return false
    lefty++
    righty--
  }
  return true
}

/**
 * @param {string} s
 * @return {boolean}
 */
var almostValidPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let lefty = 0
  let righty = s.length - 1
  while (lefty <= righty) {
    if (s[lefty] !== s[righty]) {
      return (subPalindromeProblem(s,lefty + 1, righty) || subPalindromeProblem(s,lefty, righty - 1))
    }
    lefty++
    righty--
  }
  return true
};

console.log(almostValidPalindrome(s))

/* 
T:O(n)
S:O(1)
*/