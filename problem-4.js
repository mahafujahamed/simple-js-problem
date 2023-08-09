// ত োমাকে একটা function দে ওয়া হবে called “findAddress()” যা ইনপুট হি সে বে একটা object নি বে । Object এর
// তি নটি property থাকবে ।
// Task:
// 1. ত োমাকে ১ম sample output এর format এ output return করতে হবে ।

function findAddress(inputObject) {
    const note = inputObject.note;

    const output = {
        message: `The note is: ${note}`
    };

    return output;
}

// Test case:
const input = {

    street: 10,
    house: "15A",
    society: "Earth Perfect"

};

const output = findAddress(input);
console.log(output);
