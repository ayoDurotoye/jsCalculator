let inputs= document.getElementById('bigScreen');
let inputSmall=document.getElementById('smallScreen')
let canClear=false;
let operator='';
let firstValue='message';
let secondValue='message';
let result;

function toggle(message){
    if (canClear==true){
        inputs.innerHTML=''
        canClear=false
    }
    inputs.innerHTML +=message
    
}

function deletebtn(message){
    inputs.innerHTML = inputs.innerHTML.slice(0 , -1)

}

function reset(message){
    inputs.innerHTML =null
    inputSmall.innerHTML=null   
}

function deleteBig(message){
    inputs.innerHTML = null
}

function percentage(message){
    inputSmall.innerHTML=`(${inputs.innerHTML}) / 100`
    inputs.innerHTML = bigScreen.innerHTML / 100
}


function divided(message){
    inputSmall.innerHTML=`1 /(${inputs.innerHTML}) `
    inputs.innerHTML = 1 / bigScreen.innerHTML
}

function square(message){
    inputSmall.innerHTML=`sqr (${inputs.innerHTML})  `
    inputs.innerHTML *= bigScreen.innerHTML
}

function squareroot(message){
    inputSmall.innerHTML=`&#8730 (${inputs.innerHTML}) `
    inputs.innerHTML = Math.sqrt (bigScreen.innerHTML)
}




function add(message){
    if(operator){
        equal();
    }
    operator=message
    firstValue = (inputs.innerHTML);
    canClear=true
    inputSmall.innerHTML = inputs.innerHTML + message



    // operator = message;
    // inputSmall.innerHTML = inputs.innerHTML + operator;
    // canClear = true;
}

function equal(message){
    secondValue = (inputs.innerHTML);
     let equal;

     if (operator === '+') {
        result = Number(firstValue) + Number(secondValue);
    } else if (operator === '-') {
        result = firstValue - secondValue;
    } else if (operator === '*') {
        result = firstValue * secondValue;
    } else if (operator === '/') {
        result = firstValue / secondValue;
    }

    inputSmall.innerHTML += inputs.innerHTML + "="
    inputs.innerHTML = result;
    canClear = true;
    operator=''
}

// function percentage(message){
//     inputs.innerHTML = 
// }

// let textBox = document.getElementById('textInput');

// textBox ('input', function() {
//     let inputText = textBox.value .toLowercase();
    
//     if(inputText.includes('sex')){
//         inputText = inputText.replace('sex','Gender');
//         textBox.value = inputText;
//     }
// });

function change() {
    textInput.value = textInput.value.replace(/sex/i,'Gender');
    textInput.value = textInput.value.replace(/death/i,'');
    textInput.value = textInput.value.replace(/kill/i,'');
    textInput.value = textInput.value.replace(/die/i,'');
    

    
}


