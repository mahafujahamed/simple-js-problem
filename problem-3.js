// ত োমাকে একটা ফাংশন লি খতে হবে যার নাম হবে sortMaker()। এই ফাংশনে র parameter হবে একটি array এবং
// এই array তে সবসময় দইুটি উপাদান থাকবে ।
// Task:
// 1. যদি অ্যারে র দইুটি উপাদান পজিটিভ সংখ্যা হয় সে ক্ষে ত্রে তুমি অ্যারে টিকে বড় ো থেকে ছ োট ক্রমে সাজিয়ে রিটার্ন
// করবে ।
// 2. যদি দইুটি উপাদান একই হয় সে ক্ষেত্রে তুমি এই স্ট্রি ং রিটার্ন করবে ঃ “equal”
// 3. Bonus: যদি অ্যারের যে ক োন ো একটি উপাদান নেগেটিভ সংখ্যা হয় সে ক্ষেত্রে তুমি রিটার্ন করবে “Invalid
// Input”

function sortMaker(array) {
    // Checking if both elements are numbers
    if (typeof array[0] === 'number' && typeof array[1] === 'number') {
        // Sorting the array in ascending order
        return array.sort((a, b) => a - b);
    }
    
    // Checking if both elements are equal
    if (array[0] === array[1]) {
        return "equal";
    }

    // If any element is a number
    for (let element of array) {
        if (typeof element === 'number') {
            return "Invalid Input";
        }
    }

    // Default case: Invalid Input
    return "Invalid Input";
}

// Test cases:
const array1 = [4, 4];
const sorted1 = sortMaker(array1);
console.log(sorted1);



