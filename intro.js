


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

    
    }


    function show() {
      let showArea = document.getElementById("showArea");
      showArea.innerHTML = "";
    
      artist.forEach((artistObj, index) => {
        let name = artistObj.name;
        let number = artistObj.number;
    
        showArea.innerHTML += `
          <tbody border="1" width="80%" text-align="center">
            <td>${index + 1}</td>
            <td>${name}</td>
            <td>${number}</td>
            <td><button onclick="deleteArtist(${index})">Delete</button></td>
          </tbody>
        `;
      });
    }

       function deleteArtist(index) {
      artist.splice(index, 1);
      show();
    }

    // let n;
    //  function  Multiply(){
    //   if (isNaN(input1.value) ||  isNaN(input2.value)){
    //   result.innerHTML='invalid'
    //   return;
      
    // }
    // if (input1.value > input2.value){
    //   result.innerHTML='invalid'
      
    // }
    //     for (let j = Number(input1.value) ; j <= Number(input2.value); j++) {
    //      for ( let i= 1; i <= 12; i++) {
    //         result.innerHTML += ` ${j} * ${i} =${j*i}<br>`
    //      } 
    //      result.innerHTML +=`<p></p>` ;
    //     }
    // }


    // function Multiply() {
    //   if (isNaN(input1.value) || isNaN(input2.value)) {
    //     result.innerHTML = 'invalid';
    //     return;
    //   }
    
    //   if (input1.value > input2.value) {
    //     result.innerHTML = 'invalid';
    //     return;
    //   }
    
    //   let numbers = [];
    //   let start =(input1.value);
    //   let end = (input2.value);
    //   let resultString = '';
    
    //   for (let j = start; j <= end; j++) {
    //     numbers.push(j);
    //   }
    //   result.innerHTML = ""
    
    //   numbers.forEach((j) => {
    //     for (let i = 1; i <= 12; i++) {
    //       result.innerHTML += `${j} * ${i} = ${j * i}<br>`;
    //     }

    //     result.innerHTML += `<p></p>`;
    //   });
    
      
    // }


    //  case study of Array.filter

    let names = ['teslim', 'titi', 'bolu', 'ayo', 'teslim', 'titi', 'bolu', 'ayom','come','photoshop', 'teslim', 'titi', 'bolu', 'ayomide'];
let searchInput = document.querySelector('#inpme');
let resultsDiv = document.querySelector('#hh3');

searchInput.addEventListener('input', () => {
  let searchTerm = searchInput.value.toLowerCase();
  let filteredNames = names.filter(name => name.toLowerCase().startsWith(searchTerm));
  displayResults(filteredNames);
});

// function displayResults(filteredNames) {
//   resultsDiv.innerHTML = '';

//   if (filteredNames.length === 0) {
//     resultsDiv.innerHTML = 'No results found.';
//   } else {
//     filteredNames.forEach(name => {
//       const nameDiv = document.createElement('div');
//       nameDiv.innerText = name;
//       resultsDiv.appendChild(nameDiv);
//     });
//   }

//   // Clear the screen if the search input is empty
//   if (searchInput.value === '') {
//     resultsDiv.innerHTML = '';
//   }
// }


// displayResults([]);
  



// let names = ['teslim', 'titi', 'bolu', 'ayo', 'ibro', 'ibro', 'teslim', 'titi', 'bolu', 'ayom','come','photoshop', 'teslim', 'titi', 'bolu', 'ayomide'];


// function sach(){
//   let input1=document.getElementById('inp1').value;


  
//   let finds= names.filter(function(p){
//     return p.toUpperCase() .includes(input1.toUpperCase())
//   })

//   errorr.innerHTML = "";
//   finds.forEach(function(el){
 
    
//     let p = document.createElement('p');
//     p.innerText = el;
    
   
//     // if (el.toUpperCase() === input1.toUpperCase()) {
//     //   p.classList.add('correct');
//     // }

//     errorr.innerHTML += finds.map(el => `<p${el.toUpperCase() === input1.toUpperCase() ? ' class="correct"' : ''}>${el}</p>`).join(' ');

//   })
// }

    
    // filter 
    // sum 
    // every 
    // induceded 
    // map


    // function doAction() {
    //   let height = document.querySelector('input[placeholder="height"]').value;
    //   let width = document.querySelector('input[placeholder="width"]').value;
    //   let margin = document.querySelector('input[placeholder="margin"]').value;
    //   let color = document.querySelector('input[placeholder="color"]').value;
    //   let div = document.querySelector('div');
      
    //   div.style.height = height;
    //   div.style.width = width;
    //   div.style.margin = margin;
    //   div.style.backgroundColor = color;
    // }
    // function doAction() {
    //   let inputs = document.querySelectorAll('input');
    //   let div = document.getElementById('showMe');
    
    //   inputs.forEach(function(input) {
    //     let attribute = input.getAttribute('placeholder');
    //     let value = input.value;
    //     div.style[attribute] = value;
    //   });
    // }
    
    // var button = document.getElementById('clickTochange');
    // button.addEventListener('click', doAction);


    function displaybox() {
      let width = document.getElementById("width").value;
      let height = document.getElementById("height").value;
      let colorValue = document.getElementById("colorValue").value;
      let margin = document.getElementById("margin").value;
      let div = document.getElementById("box");
      div.style.display = "block";
      div.style.width = width + "px";
      div.style.height = height + "px";
      div.style.backgroundColor = colorValue;  
      div.style.margin = margin + "px";

    }