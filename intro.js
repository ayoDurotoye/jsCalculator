


// function toggle(){
// let value=document.getElementById('color').value

// document.getElementById('display').value=value




// console.log();


function toggle(message){
   
    document.getElementById('input-display').value += message
    
   
    console.log();
    
}

// function toggle2(){
//     let button =document.getElementById('mybtn2').value

//     document.getElementById('input-display').value +=2 

    
   
//     console.log();
    
// }

// function toggle3(){
//     let button =document.getElementById('mybtn2').value
//     document.getElementById('input-display').value +=3 
    
   
//     console.log();
    
// }

// function toggle4(){
//     document.getElementById('mybtn2').value
//     document.getElementById('input-display').value +=4
    
   
//     console.log();
    
// }

// function toggle5(){
//     ldocument.getElementById('mybtn2').value
//     document.getElementById('input-display').value +=5
    
//     console.log();
    
// }

// function toggle6(){
//     let button =document.getElementById('mybtn2').value
//     document.getElementById('input-display').value +=6
    
   
//     console.log();
    
// }

// function toggle7(){
//     let button =document.getElementById('mybtn2').value
//     document.getElementById('input-display').value +=7
    
   
//     console.log();
    
// }

// function toggle8(){
//     document.getElementById('mybtn2').value
//     document.getElementById('input-display').value +=8
    
   
//     console.log();
    
// }

// function toggle9(){
//     let button =document.getElementById('mybtn2').value
//     document.getElementById('input-display').value +=9
    
   
//     console.log();
    
// }
// function toggle0(){
//     let button =document.getElementById('mybtn2').value
//     document.getElementById('input-display').value +=10 
    
   
//     console.log();
    
// }


function popUp() {
    let input1 = document.getElementById("firstInput").value;
    let input2 = document.getElementById("secondInput").value;


    text=input1.split("")

    if (text. includes(input2)) {
        alert("word found");
        return;
    }   else {
        alert("word not found");
    }

}



let ar=['tessy','titi','ay', 'bolu']

// change an element
ar[1]='titlayo'




function onclick() {
    let inputField = document.getElementById('inputDisplay').value;
    let outputElement = document.getElementById('outDisplay').value;
    let addButton = document.getElementById('addButton');
    let valuesArray = [];
    
    function addToArray() {
      let inputValue = inputField.value;
      valuesArray.push(inputValue);
      outputElement.value = outputElement.value + inputField;
    }

    
}




// ar.push add element to the pack from the right
// unshift() add element to the left
// shift() remove element from the left
// pop() remove element from the right
// join() convert array to string
// split() convert strings to array
// splice () to cut some part of an array 


// function popUp() {
//     let input1 = document.getElementById("firstInput").value;
//     let input2 = document.getElementById("secondInput").value;

//     let words1 = input1.split(" ");
//     let words2 = input2.split(" ");

//     let found = false;
//     for (let i = 0; i < words1.length; i++) {
//         if (words2.includes(words1[i])) {
//             found = true;
//             break;
//         }
//     }

//     if (found) {
//         alert("Word found");
//     } else {
//         alert("Word not found");
//     }
// }

// for (let index = 20; index > 0; index--) {
//     console.log(index);
// }





// function multiplicationTable() {
//     let table;
//     table='<table id="mtable">';
//     let num=document.getElementById("number").value;
//     if(num==null || num=="")
//     num=5;
//        for(i=1;i<=12;i++){
//           table+='<tr><td>'+num+'*'+i+'='+num*i+'</td></tr>';
//        }
//     table+='</table>';
//     document.getElementById("result").innerHTML = table;
// }

// function mutiplicationTables(){

//     if (isNaN(input001.value) || isNaN(input002.value)) {
//         showTabless.innerHTML = 'Invalid';
//         return;
//       }

//     if (input001.value > input002.value) {
//         showTabless.innerHTML = `Invalid`
//       }
   
//     let start= input001;
//     let end= input002;
//     // showTabless.innerHTML="";

   
    
    

//         for (let index = Number(start.value) ; index <= Number(end.value); index++) {
//             for(let i= 1; i < 13; i++) {
                
//              showTabless.innerHTML += `${index} * ${i} = ${index*i} <br>`;
            
//             }
//             showTabless.innerHTML +=`<p><p>` ;
//         }

       
// }





// push array into table

let artist = [];

    function add() {
      let input = document.getElementById('blackwood').value;
      let inputphone = document.getElementById('artistNumber').value;
     
      let newArtist = {
        name: input,
        number: inputphone
      };
      
      artist.push(newArtist);
      
      show();
    }

    function show() {
      let showArea = document.getElementById("showArea");
      showArea.innerHTML = "";

      for (let i = 0; i < artist.length; i++) {
        // let name = artist[i].split(" ")[0];
        // let number = artist[i].split(" ")[1];
        let name = artist[i].name;
       let number = artist[i].number;


        showArea.innerHTML += `
          
          <tbody border="1" width="80%" text-align="center">
            <td>${i + 1}</td>
            <td>${name}</td>
            <td>${number}</td>
            <td><button onclick="deleteArtist(${i})">Delete</button></td>
          </tbody>
          
         
        `;
      }

      // showArea.innerHTML += `</table>`;
    }

    function deleteArtist(index) {
      artist.splice(index, 1);
      show();
    }