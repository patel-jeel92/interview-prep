var letterCombinations = function(digits) {
    if (digits === "") return [];

    // Array to hold the final answer.
    const res = [];

    // Map to figure out what the letters for each digit maps to.
    const map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    };

    // Start at index 0 of the digit and an empty string to build the answer.
    findAllCombinations(0, "");
    
    return res;

    // Helper function that uses backtracking for each digit.
    function findAllCombinations(index, str) {
        // Base case. If digit length === index then we have gone through all possibilities for the single char.
        if (index === digits.length) {
            res.push(str);
            return;
        }

        // Grab the mapping for the first digit at index.
        const chars = map[digits.charAt(index)];
        
        // Iterate through all the chars and add recursively call with incremented index and char added to the string.
        for (let i = 0; i < chars.length; i++) {
            findAllCombinations(index + 1, str + chars[i]);
        }
        
        return;
    }
};

console.log(letterCombinations("23"));