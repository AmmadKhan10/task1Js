//<!-----------------------------Question no#01 --------------------->

function string_check() {
    var str =document.getElementById("field").value;
    if(str.startsWith ("py")) {
        document.getElementById("para1").innerText = str;
    }
    else{
        document.getElementById("para1").innerText = "py" + str;
    }
}

//<!-----------------------------Question no#02a --------------------->

function remove_letter() {
    var str1 = document.getElementById("remove").value;
    var pos = parseInt(document.getElementById("position").value);

    if (isNaN(pos) || pos < 0 || pos >= str1.length) {
        document.getElementById("result").innerHTML = "Invalid position.";
        return;
    }

    var newStr = str1.slice(0, pos) + str1.slice(pos + 1);
    document.getElementById("result").innerHTML = newStr;
}
//<!-----------------------------Question no#02b --------------------->

// function removeChar(str, pos) {
//     return str.slice(0, pos) + str.slice(pos + 1);
//   }
// function remove_letter() {
// var originalString = document.getElementById("remove").value;
// var position = parseInt(document.getElementById("position").value);
//if (isNaN(pos) || pos < 0 || pos >= str1.length) {
//document.getElementById("result").innerHTML = "Invalid position.";
//return; 
// var newString = removeChar(originalString, position);
// document.getElementById("result").innerHTML= newString;
// }

//<!-----------------------------Question no#03 ----------------------->
function add_New() {
    var str2 = document.getElementById("field1").value;
    if(str2.length<1) {
        document.getElementById("para2").innerHTML="The string length must be at least 1.";
        return;
    }
    if(str2.length ===1) {
        document.getElementById("para2").innerHTML=str2;
        return;
    }
    var firstChar = str2[0];
    var lastChar = str2[str2.length - 1];
    var newStr = lastChar + str2.slice(1, -1) + firstChar;
    document.getElementById("para2").innerHTML = newStr;
}

//<!-----------------------------Question no#04 ----------------------->

function add_FrontEnd() {
    var str3 = document.getElementById("field2").value;
    if(str3.length<1) {
        document.getElementById("para3").innerHTML="The string length must be at least 1.";
        return;
    }
    if(str3.length ===1) {
        document.getElementById("para3").innerHTML=str3;
        return;
    }
    var firstChar = str3[0];
    var newStr = firstChar + str3 + firstChar;
    document.getElementById("para3").innerHTML = newStr;
}

//<!-----------------------------Question no#05a ----------------------->
// function check_Multiple(){
//     var number = document.getElementById("field3").value;
   
//     if(number%3===0) {
//         document.getElementById("para4").innerHTML="Number is divisible by 3";
//         // return;
//     }
//    if(number%3===0 && number%7===0){
//         document.getElementById("para4").innerHTML="Number is divisible by 3 and 7";
//         return;
//     }
//     else {
//         document.getElementById("para4").innerHTML="Number is not divisible by 3";
//     }
//     if(number%7===0) {
//         document.getElementById("para4").innerHTML="Number is divisible by 7";
//         // return;
//     }
//     else {
//         document.getElementById("para4").innerHTML="Number is not divisible by 7 and 3";
//     }
// }

//<!-----------------------------Question no#05b ----------------------->
function check_Multiple(){
    var number = document.getElementById("field3").value;
    if(number%3===0 && number%7===0){
    document.getElementById("para4").innerHTML="Number is divisible by 3 and 7";
   }
   else if(number%3===0) {
    document.getElementById("para4").innerHTML="Number is divisible by 3";
   }
   else if(number%7===0) {
    document.getElementById("para4").innerHTML="Number is divisible by 7";
   }
   else {
    document.getElementById("para4").innerHTML="Number is not divisible by 7 and 3";
   }
}

//<!-----------------------------Question no#06 ----------------------->

function add_New3char() {
    var str4 = document.getElementById("field4").value;
    if(str4.length<3) {
        document.getElementById("para5").innerHTML="The string length must be at least 3 char.";
        return;
    }
    if(str4.length >=3) {
        document.getElementById("para5").innerHTML=str4;
        
        var lastChar = str4.slice(-3);
        var newStr = lastChar + str4 + lastChar;
        document.getElementById("para5").innerHTML = newStr;
    }
}

//<!-----------------------------Question no#07 ----------------------->
function largest_Number() {
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let number3 = document.getElementById("num3").value;
    
    // if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    //     document.getElementById("result1").innerHTML = "Please enter valid numbers.";
    //     //return;
    //}
    // /let largest;
     if(number1 >=number2 && number1 >=number3){
        document.getElementById("result1").innerHTML = "the largest number is."+number1;
    }
     if(number2 >=number1 && number2 >=number3){
        document.getElementById("result1").innerHTML = "the largest number is."+number2;
    }
    else {
        document.getElementById("result1").innerHTML = "the largest number is."+number3;
    }
}

function grade_Check() {
    let str5 = document.getElementById("grade").value;
    let str6 = document.getElementById("exam").value;

    if(str5 >=90 && str5<=100) {
        document.getElementById("result2").innerHTML = `Grade with ${str5} is A+`;
    }
    else {
        document.getElementById("result2").innerHTML = "No Grade";   
    }
    if(str6 === FinalExam) {
        document.getElementById("result3").innerHTML = "True";
    }
    else {
        document.getElementById("result3").innerHTML = "False";   
    }

}