//Objective is, given two words, to find the number of subsequences that 
//word2 can fit in word1, given that word1 is longer than word2

let s = 'bagbagbag'
let t = 'bag'


//O(n * m) solution using dynamic programming where n and m are the lengths of the two words

let dp = new Array(s.length + 1).fill(0).map(() => new Array(t.length + 1).fill(0))
    
for (let j = 0; j <= t.length; j++) {
    dp[s.length][j] = 0
}

//Every string has an empty subsequence, aka '1'
for (let i = 0; i <= s.length; i++) {
    dp[i][t.length] = 1
}

for (let i = s.length - 1; i >= 0; i--) {
    for (let j = t.length - 1; j >= 0; j--) {
        //If the characters don't match, we move up on the first word
        dp[i][j] = dp[i + 1][j]
        
        //The characters match, so move up one on both words
        if (s[i] == t[j]) {
            dp[i][j] += dp[i + 1][j + 1]
        }
    }
}

return dp[0][0]