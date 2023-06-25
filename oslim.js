//object destruction & spread operator
let number = [1,2,3,4,5,6,7,8]

let [first, second, third, ...rest] = numbers 

console.log(rest);

//spread operator

let user = {name: 'oslim', career: 'web dev', city:'ibadan'}

let {name, career, ..rest} = user 

//to show something in an HTMl //
show.innerHTML = users.name


//spread operator

let user = ['user A','user B','user C']
let product = ['user D','user E','user F']

const combineArr = [...user, ...product]

//object joining 

//nested object destruction
let person2 ={
    name: 'titi'
    career: 'ui/ux'
    address:{
        city: 'ibadan'
        country:'togo'
    }
}

let {name, career, address:{city, country}}= person2

//default value

//manipulating spread operator
let nubs = [1,2,3,4,5,6]

let newArr = [...nubs, 8,9,10]

console.log(newArr);

let userList = {name:'ay', email:'aymikun@gmail.com'}

let newuserList = {...userList, address:'oworonshoki', country:'togo'}

console.log(newuserList);
