// 1. ত োমাকে একটা function দে ওয়া হবে called “matchFinder()” যা ইনপুট হিসেবে দইুটা string নি বে ।
// Task:
// 1. যদি প্রথম স্ট্রি ংটির ক োন ো একটি অংশের সাথে দ্বিতীয় স্ট্রি ংটির পুর োপুরি মিল খুজে পাও সে ক্ষেত্রে তুমি
// boolean রিটার্ন করবে এক্ষে ত্রে ত োমাকে true রিটার্ন করতে হবে ।
// 2. আর যদি পুর োপুরি মি ল খুজে না পাও সে ক্ষে ত্রে তুমি boolean false রি টার্ন করবে ।
// 3.দটিু ইনপুট স্ট্রি ং দে ওয়া হল ো কি না সে টা validate করবে । যদি দইুটি বা যে ক োন ো একটি ইনপুট স্ট্রি ং
// না হয় সে ক্ষে ত্রে তুমি একটা মি নি ংফুল মে সে জ রি টার্ন করে দিবে ।

function matchFinder(str1, str2) {
    if (typeof str1 === 'string' && typeof str2 === 'string'){
        return true;
    }
    else {
        return false;
    }
}
const input1 = "javaScript";
const input2 = 9;
const result = matchFinder(input1, input2);

if(result) {
    console.log("Match Found");
}
else{
    console.log("Match Not Found");
}