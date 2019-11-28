// A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, 
// where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

// You will need to create a SubstitutionCipher constructor.
// The SubstitutionCipher will have at least two prototype methods: .encode and .decode
// Think about where you will store the alphabet and the alternate alphabet.

class SubstitutionCipher {
    constructor(abc1, abc2) {
        this.abc1 = abc1;
        this.abc2 = abc2;
    }
    encode(str) {
        str = str.toLowerCase();
        let newStr = '';
        for(let i = 0; i < str.length; i++) {
            for (let j = 0; j < this.abc1.length; j++) {
                if (str[i] === this.abc1[j]) {
                    newStr += this.abc2[j];
                }
            }
        }
        return newStr;
    }
    decode(str) {
        str = str.toLowerCase();
        let newStr = '';
        for(let i = 0; i < str.length; i++) {
            for (let j = 0; j < this.abc2.length; j++) {
                if (str[i] === this.abc2[j]) {
                    newStr += this.abc1[j];
                }
            }
        }
        return newStr;
    }
}

let abc1 = "abcdefghijklmnopqrstuvwxyz";
let abc2 = "etaoinshrdlucmfwypvbgkjqxz";

const sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode("abc")) // => "eta"
console.log(sub.encode("xyz")) // => "qxz"
console.log(sub.encode("aeiou")) // => "eirfg"

console.log(sub.decode("eta")) // => "abc"
console.log(sub.decode("qxz")) // => "xyz"
console.log(sub.decode("eirfg")) // => "aeiou"