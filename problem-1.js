// Problem number-1

// ত োমাকে cubeNumber() নামে একটা function দেওয়া হয়েছে । functionটা একটা input নাম্বার নি বে ।
// Task:
// 1. input নাম্বারটাকে cube করে result টা রিটার্ন করবে ফাংশন থেকে ।
// 2. ইনপুট হি সে বে number টাইপ এর পরি বর্তে অন্য কিছু দিলে তুমি একটা মি নি ংফুল মে সে জ রি টার্ন
// করে দিবে ফাংশন থেকে ।
function cubeNumber(number) {
    
    if (typeof number === 'number') {
        return Math.pow(number, 3);
    } 
    else{
        return "wrong input";
    }
}
console.log(cubeNumber(3));



