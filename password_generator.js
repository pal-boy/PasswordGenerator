
let randomPassword = '';
let uppercheckedValue;
let lowercheckedValue;
let numbercheckedValue;
let symbolscheckedValue; 

let generatebtn = document.querySelector(".generate-btn");

let uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let numbers = [1,2,3,4,5,6,7,8,9,0];
let symbols = ['~','!','@','#','$','%','^','&','*','(',')','_','-',':','/'];

let generateUppercaseLetters = ()=>{
    return uppercase[Math.floor(Math.random()*26)];
}
let generateLowercaseLetters = ()=>{
    return lowercase[Math.floor(Math.random()*26)];
}
let generateSymbols = ()=>{
    return symbols[Math.floor(Math.random()*15)];
}
let generateNumbers = ()=>{
    return numbers[Math.floor(Math.random()*10)];
}
generatebtn.addEventListener("click",()=>{
    if(uppercheckedValue && lowercheckedValue && numbercheckedValue && symbolscheckedValue){
        randomPassword = '';
        for (let i = 1; i <= document.getElementById("pwdLength").value; i++) {
            let password = Math.floor(Math.random()*4);
            
            if(password==0){
                randomPassword += generateUppercaseLetters();
            }
            else if(password==1){
                randomPassword += generateLowercaseLetters();
            }
            else if(password==2){
                randomPassword += generateSymbols();
            }
            else{
                randomPassword += generateNumbers();
            }
           
        }
        if(randomPassword.includes("NaN")){
            
            document.getElementById("pwdText").value = randomPassword.replace("NaN","");
        }else{
            
            document.getElementById("pwdText").value = randomPassword.replace("undefined","");
        }
    }
    else if(uppercheckedValue && lowercheckedValue && numbercheckedValue){
        randomPassword = '';
        for (let i = 1; i <= document.getElementById("pwdLength").value; i++) {
            let password = Math.floor(Math.random()*3);
            
            if(password==0){
                randomPassword += generateUppercaseLetters();
            }
            else if(password==1){
                randomPassword += generateLowercaseLetters();
            }
            else{
                randomPassword += generateNumbers();
            }
           
        }
        if(randomPassword.includes("NaN")){
            
            document.getElementById("pwdText").value = randomPassword.replace("NaN","");
        }else{
            
            document.getElementById("pwdText").value = randomPassword.replace("undefined","");
        }
    }
    else if(uppercheckedValue && lowercheckedValue && symbolscheckedValue){
        randomPassword = '';
        for (let i = 1; i <= document.getElementById("pwdLength").value; i++) {
            let password = Math.floor(Math.random()*3);
            
            if(password==0){
                randomPassword += generateUppercaseLetters();
            }
            else if(password==1){
                randomPassword += generateLowercaseLetters();
            }
            else{
                randomPassword += generateSymbols();
            }
           
        }
        if(randomPassword.includes("NaN")){
            
            document.getElementById("pwdText").value = randomPassword.replace("NaN","");
        }else{
           
            document.getElementById("pwdText").value = randomPassword.replace("undefined","");
        }
    }
    else if(uppercheckedValue && numbercheckedValue && symbolscheckedValue){
        randomPassword = '';
        for (let i = 1; i <= document.getElementById("pwdLength").value; i++) {
            let password = Math.floor(Math.random()*3);
            
            if(password==0){
                randomPassword += generateUppercaseLetters();
            }
            else if(password==1){
                randomPassword += generateNumbers();
            }
            else{
                randomPassword += generateSymbols();
            }
           
        }
        if(randomPassword.includes("NaN")){
            
            document.getElementById("pwdText").value = randomPassword.replace("NaN","");
        }else{
            
            document.getElementById("pwdText").value = randomPassword.replace("undefined","");
        }
    }
    else if(lowercheckedValue && numbercheckedValue && symbolscheckedValue){
        randomPassword = '';
        for (let i = 1; i <= document.getElementById("pwdLength").value; i++) {
            let password = Math.floor(Math.random()*3);
            
            if(password==0){
                randomPassword += generateLowercaseLetters();
            }
            else if(password==1){
                randomPassword += generateNumbers();
            }
            else{
                randomPassword += generateSymbols();
            }
           
        }
        if(randomPassword.includes("NaN")){
            
            document.getElementById("pwdText").value = randomPassword.replace("NaN","");
        }else{
            
            document.getElementById("pwdText").value = randomPassword.replace("undefined","");
        }
    }
    
    else if(uppercheckedValue && lowercheckedValue){
        randomPassword = '';
        for (let i = 1; i <= document.getElementById("pwdLength").value; i++){
            let password = Math.floor(Math.random()*2);
            if(password==0){
                randomPassword += generateUppercaseLetters();
            }
            else{
                randomPassword += generateLowercaseLetters();
            }
        }
        if(randomPassword.includes("NaN")){
            
            document.getElementById("pwdText").value = randomPassword.replace("NaN","");
        }else{
            
            document.getElementById("pwdText").value = randomPassword.replace("undefined","");
        }
    }
    else if(uppercheckedValue && numbercheckedValue){
        randomPassword = '';
        for (let i = 1; i <= document.getElementById("pwdLength").value; i++){
            let password = Math.floor(Math.random()*2);
            if(password==0){
                randomPassword += generateUppercaseLetters();
            }
            else{
                randomPassword += generateNumbers();
            }
        }
        if(randomPassword.includes("NaN")){
            
            document.getElementById("pwdText").value = randomPassword.replace("NaN","");
        }else{
            
            document.getElementById("pwdText").value = randomPassword.replace("undefined","");
        }
    }
    else if(lowercheckedValue && numbercheckedValue){
        randomPassword = '';
        for (let i = 1; i <= document.getElementById("pwdLength").value; i++){
            let password = Math.floor(Math.random()*2);
            if(password==0){
                randomPassword += generateLowercaseLetters();
            }
            else{
                randomPassword += generateNumbers();
            }
        }
        if(randomPassword.includes("NaN")){
            
            document.getElementById("pwdText").value = randomPassword.replace("NaN","");
        }else{
            
            document.getElementById("pwdText").value = randomPassword.replace("undefined","");
        }
    }
    else if(lowercheckedValue && symbolscheckedValue){
        randomPassword = '';
        for (let i = 1; i <= document.getElementById("pwdLength").value; i++){
            let password = Math.floor(Math.random()*2);
            if(password==0){
                randomPassword += generateLowercaseLetters();
            }
            else{
                randomPassword += generateSymbols();
            }
        }
        if(randomPassword.includes("NaN")){
            
            document.getElementById("pwdText").value = randomPassword.replace("NaN","");
        }else{
            
            document.getElementById("pwdText").value = randomPassword.replace("undefined","");
        }
    }
    else if(numbercheckedValue && symbolscheckedValue){
        randomPassword = '';
        for (let i = 1; i <= document.getElementById("pwdLength").value; i++){
            let password = Math.floor(Math.random()*2);
            if(password==0){
                randomPassword += generateNumbers();
            }
            else{
                randomPassword += generateSymbols();
            }
        }
        if(randomPassword.includes("NaN")){
            
            document.getElementById("pwdText").value = randomPassword.replace("NaN","");
        }else{
            
            document.getElementById("pwdText").value = randomPassword.replace("undefined","");
        }
    }
    else if(uppercheckedValue && symbolscheckedValue){
        randomPassword = '';
        for (let i = 1; i <= document.getElementById("pwdLength").value; i++){
            let password = Math.floor(Math.random()*2);
            if(password==0){
                randomPassword += generateUppercaseLetters();
            }
            else{
                randomPassword += generateSymbols();
            }
        }
        if(randomPassword.includes("NaN")){
            
            document.getElementById("pwdText").value = randomPassword.replace("NaN","");
        }else{
            
            document.getElementById("pwdText").value = randomPassword.replace("undefined","");
        }
    }
    else if(symbolscheckedValue){
        randomPassword = '';
        for (let i = 1; i <= document.getElementById("pwdLength").value; i++){
            randomPassword += generateSymbols();
        }
        if(randomPassword.includes("NaN")){
            
            document.getElementById("pwdText").value = randomPassword.replace("NaN","");
        }else{
            
            document.getElementById("pwdText").value = randomPassword.replace("undefined","");
        }
    }
    else if(numbercheckedValue){
        randomPassword = '';
        for (let i = 1; i <= document.getElementById("pwdLength").value; i++){
            randomPassword += generateNumbers();
        }
        if(randomPassword.includes("NaN")){
            
            document.getElementById("pwdText").value = randomPassword.replace("NaN","");
        }else{
            
            document.getElementById("pwdText").value = randomPassword.replace("undefined","");
        }
    }
    else if(lowercheckedValue){
        randomPassword = '';
        for (let i = 1; i <= document.getElementById("pwdLength").value; i++){
            randomPassword += generateLowercaseLetters();
        }
        if(randomPassword.includes("NaN")){
            
            document.getElementById("pwdText").value = randomPassword.replace("NaN","");
        }else{
            
            document.getElementById("pwdText").value = randomPassword.replace("undefined","");
        }
    }
    else if(uppercheckedValue){
        randomPassword = '';
        for (let i = 1; i <= document.getElementById("pwdLength").value; i++){
            randomPassword += generateUppercaseLetters();
        }
        if(randomPassword.includes("NaN")){
            
            document.getElementById("pwdText").value = randomPassword.replace("NaN","");
        }else{
            
            document.getElementById("pwdText").value = randomPassword.replace("undefined","");
        }
    }
    else{
        alert("Try Again");
    }
    
});

document.getElementById("checkbox1").addEventListener("click",()=>{
    uppercheckedValue = document.getElementById("checkbox1").checked;
})
document.getElementById("checkbox2").addEventListener("click",()=>{
    lowercheckedValue = document.getElementById("checkbox2").checked;
})
document.getElementById("checkbox3").addEventListener("click",()=>{
    numbercheckedValue = document.getElementById("checkbox3").checked;
})
document.getElementById("checkbox4").addEventListener("click",()=>{
    symbolscheckedValue = document.getElementById("checkbox4").checked;
})

document.getElementById("copybtn").addEventListener("click",()=>{
    let originalpswd = document.getElementById("pwdText");
    originalpswd.select();
    document.execCommand("copy");
    alert("Copied!");
})