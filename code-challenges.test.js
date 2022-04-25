// // ASSESSMENT 5: JavaScript Coding Practical Questions with Jest



// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest


// // --------------------1) Create a function 
// // that takes in a string and returns a coded message. The coded message 
// //converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// // a) Create a test with expect statements using the variables provided.




describe("secrets", () => {
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"
    it("takes in a string and returns a coded message", () => {
      expect(secrets(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(secrets(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(secrets(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
// //********  
// //● secrets › takes in a string and returns a coded message
// // ReferenceError: secrets is not defined


// // b) Create the function that makes the test pass.

// //create a function called secrets
// //const tht replaces vowels to numbers, lower and upper case
// //const with a function that takes a parameter
// // use .hasOwnProperty which gives a boolean value on what we are calling
//  using key:value pair
// //return using 
// //split method  to split a string object into an array of strings 
// // // map method to go thru the elements of the array and return the array.
// // // use join method to join all elements of the  array back into a string.



const secrets = (message) => {
    const letters = {'a': 4, 'e': 3, 'i': 1, 'o': 0, 'A': 4, 'E': 3, 'I': 1, 'O': 0}
    const jumble = (words) => {
        return letters.hasOwnProperty(words)?
    letters[words]:words
    }
        return message.split('').map(jumble).join('')
}

// // // PASS  ./code-challenges.test.js
// // // secrets
// // //   ✓ takes in a string and returns a coded message (1 ms)

// // // Test Suites: 1 passed, 1 total
// // // Tests:       1 passed, 1 total
// // // console.log(secrets(secretCodeWord1))
// // // console.log(secrets(secretCodeWord2))
// // // console.log(secrets(secretCodeWord3))

// // // --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// // // a) Create a test with expects statement using the variable provided.



describe("tootyFruity", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
      expect(tootyFruity(arrayOfWords1,letterA)).toEqual(["Apple", "Banana", "Orange"])
      expect(tootyFruity(arrayOfWords2,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// ● tootyFruity › takes in an array of words and a single letter and returns all the words that contain that particular letter

// ReferenceError: tootyFruity is not defined

// // // b) Create the function that makes the test pass.

// // create a method tootyFruity
// //takes an arguments the array and letter
// //method .filter that looks thru the array that iterates thru each word 
//need to change the words to lowercase so it includes the lowercase letter
// //need to .include the letter to search for and return that word if it is included 


    const tootyFruity = (array, letter) => {
    return array.filter(value => value.toLowerCase().includes(letter))
}

// console.log(tootyFruity(arrayOfWords1, letterE))
// console.log(tootyFruity(arrayOfWords2, letterA))

//*****
// PASS  ./code-challenges.test.js
// tootyFruity
//   ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total






// // --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// // a) Create a test with expect statements using the variable provided.

 describe("bigWinna", () => {
    const hand1 = [5, 5, 5, 3, 3]
    const hand2 = [5, 5, 3, 3, 4]
    const hand3 = [5, 5, 5, 5, 4]
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”", () => {
          expect(bigWinna(hand1)).toEqual(true)
          expect(bigWinna(hand2)).toEqual(false)
          expect(bigWinna(hand3)).toEqual(false)
        })
    })
//     ● bigWinna › takes in an array of 5 numbers and determines whether or not the array is a “full house”

//     ReferenceError: bigWinna is not defined

// const hand1 = [5, 5, 5, 3, 3]
// // Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// // Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// // Expected output: false


// b) Create the function that makes the test pass.

// // create a function thats takes an array
// // create a var with an empty object
// // using for loop to look thru the array  values
// // and conditional statement to see if the values match
// // if values are equal return a true if not then false


const bigWinna = (array) => {
    let cardCount = {}
    for (let x of array) {
        cardCount[x] = (cardCount[x] || 0) + 1
    }
    let value = Object.values(cardCount)
    if ((value[0] === 2 && value[1] === 3) || (value[1] === 2 && value[0] === 3)) {
        return true
    }
    return false
}

// console.log(bigWinna(hand1))
// console.log(bigWinna(hand2))
// console.log(bigWinna(hand3))
// ******
// PASS  ./code-challenges.test.js
//   tootyFruity
//     ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter (1 ms)
//   bigWinna
//     ✓ takes in an array of 5 numbers and determines whether or not the array is a “full house” (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
