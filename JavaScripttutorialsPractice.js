// const pobj1 = new Promise( ( resolve, reject ) => {
//     setTimeout(() => {
//         let roll_no = [1,2,3,4]
//         resolve(roll_no)
//         reject("Error while communicating")
//     }, 2000)
// })

// const { reduce } = require("lodash");

// const { indexOf } = require("lodash")

// const { slice } = require("lodash");

// const { functions, map, mapKeys } = require("lodash")

// const { reject } = require("lodash")

// const { Resolver } = require("webpack")

// const { sum } = require("lodash")

// const { multiply } = require("lodash")

// const { join } = require("lodash");

// const { values } = require("lodash")

// const { xor } = require("lodash")

// const { sum } = require("lodash");

// const { forEach } = require("lodash")

// const { indexOf } = require("lodash")

// const { zip } = require("lodash")

// const bioData = (indexData) => {
//     return new Promise ((resolve,reject) => {
//         setTimeout((indexData) => {
//             let biodata = {
//                 name: 'vinod',
//                 age: 245
//             }
//             resolve(`my name is ${biodata.name}and my age is ${biodata.age} and my roll no is ${indexData}`)
//             reject("AGain face Error while communicating")
//         }, 2000, indexData)
//     })
// }

// // pobj1.then((rollNo) => {
// //     console.log(rollNo)
// //     return bioData(rollNo[2])

// // }).then((biodataResolve) => {
// //     console.log(biodataResolve)
// // })
// // .catch((error) => {
// //     console.log(error)
// // })


// async function getData(){
//     const getRollNo = await pobj1
//     console.log(getRollNo)

//     const getBio = await bioData(getRollNo[2])
//     console.log(getBio)

//     return getBio
// }

// const getName = getData().then((myName) => {
//     console.log(myName)
// }).catch((error) => {
//     console.log(error)
// })

// Value jab return hoti ha tu usko hold krna ka liya kisi variable ma rakhna parta ha







// console.log("Start")
// function getName(named){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Inside name setTimeout = " + named)
//             resolve(named)
//             reject("Error while communicating")
//         },2000)
//     })
// }
// function getHobbies(name){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Inside Hobbies setTimeout")
//             resolve(['playing','dancing', 'singing'])
//             reject("Again Face Error while communicating")
//         },2000)
//     })
// }
// function getDancing(hoby){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("INside dancing setTimeout")
//             resolve(['disco','do=it'])
//             reject("Last Error Faced while communicating")
//         }, 2000)
//     })
// }

// async function mydata(){
//     try{
//         const datas = await getName("Demands")
//         const hobies = await getHobbies(datas)
//         const dance = await getDancing(hobies)
//         console.log(dance)
//     }
//     catch{
//         console.log("Could not fetch dancing or hobbies")
//     }
// }
// mydata()

// console.log("End")

// fetch('https://reqres.in/api/users')
// .then(res => res.json())
// .then( data => console.log(data))



// console.log("Start")

// let a = "Junaid Mahmood"


// // if ( a != undefined ){
// //     throw new Error("Own created Error")
// //     console.log("A is not undefined")
// // }else{
// //     console.log("A is undefined")
// // }

// try{
//     console.log("We are inside try block")
//     func()
// }
// catch(error){
//     console.log("We are inside catch block")
//     console.log(error)
// }finally{
//     console.log("It runs in both scanerios")
// }




// get request with axios

// axios.get({
//     timeout: 2000,
//     params: {
//         id: 1
//     }
// })

// //axios post request

// axios.post({ url, { name: 'Junaid'}, config })


// document.getElementById("btn").addEventListener("click",makerequest)

// function makerequest(){
//     console.log("Button clicked")

    // config = {
    //     method: 'get',
    //     url: 'data.txt'
    // }
    // const promiseObject = axios(config)
    // promiseObject.then((res) => {
    //     console.log(res.headers)
    // }) 

    // OR

    // axios(config).then((res) => {
    //     console.log(res)
    // })

    // OR

    // axios({
    //     method: 'get',
    //     url: 'data.txt'
    // }).then((res) => {
    //     console.log(res)
    // })

    // OR 

    // axios.get('data.txt').then((res) => {
    //     console.log(res)                       => is the main method
    // })


    // axios by default method is get, we can also write it like

    // axios('data.txt').then((res) => {
    //     console.log(res)
    //     console.log(res.data)
    //     document.getElementById("divdata"). innerText = res.data
    // }).catch((error) => {
    //     console.log(error)
    // }).finally(()=> {
    //     console.log("Clean up please")
    // })

    // Now by doing async await
   
    
    // document.getElementById("btn").addEventListener("click", makerequest)

    // async function makerequest(){
    //     try{
    //         const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    //         console.log(res)
    //         console.log(res.data)
    //         let output = document.getElementById("divdata")
    //         res.data.forEach(element => {
    //             output.innerHTML += `
    //                 <div>ID: ${element.id} </div>
    //                 <div>Title: ${element.title} </div>
    //                 <div>Body: ${element.body} </div> <hr />
    //             `
    //         })
            
    //     }catch(error){
    //         console.log("Own generated Error = " + error)
    //     }
    // }

    //status 404 error means file not found


    // let names = ['Ali', 'Ahmad','Abdullah', 76,'Junaid']

    // names.forEach(function(values, index, abc){
    //     console.log(index)
    //     // document.write(values)
    //     document.write(abc + "<br />")
    // })


    // POST req by axios

    // document.getElementById('btn').addEventListener('click',makerequest)

    // async function makerequest(){
    //     try{
    //         const config = {
    //             // method: 'POST',
    //             // url: "https://reqres.in/api/users",
    //             // headers: {
    //             //     'content-ype': 'application/json'
    //             // },
    //             // data: "{ 'name': 'junaid', 'job': 'web-dev' }"
    //         }
    //         console.log("button clicked")
    //         const res = await axios.post("https://reqres.in/api/users", " { 'name': 'Junaid', 'job': 'web-dev' } " ,config)
    //         console.log("button clicked")
    //         console.log(res)
    //     }catch(error){
    //         console.log( "Own Generated Error =" + error)
    //     }
    // }


    // document.getElementById("btn").addEventListener("click", makeRequest)

    // async function makeRequest(){
    //     try{
    //         let name = document.getElementById("name").value
    //         let job = document.getElementById("job").value
    //         config = {
    //             data: JSON.stringify({ name:name, job:job })
    //         }
    //         console.log("button Clicked..")
    //         const res = await axios.post("https://reqres.in/api/users")
    //         console.log(res.data)
    //     }catch(error){
    //         console.log("This is my Own generated error = " + error)
    //     }
    // }



    // JSON stringify function => basically it converts to json 


    // let dog = {
    //     name: 'foo',
    //     age: 28,
    //     color: 'red'
    // }
    // console.log(dog)

    // const dogJson = JSON.stringify(dog)
    // console.log("After Implementation = " + dogJson)

    // // We can also use this JSON.stringify() on arrays

    // let abc = [ 'junaid', 'akd', 35, new Date(), Date()]

    // console.log(abc)
    // const def= JSON.stringify(abc)
    // console.log(def)


    // document.getElementById("btn").addEventListener("click",makerequest)

    // async function makerequest(){
    //     try{
    //         console.log("Button clicked")
    //         const req = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    //         console.log(res)
    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    // }

    // document.getElementById("btn").addEventListener("click", makerequest)

    // //Global Axios default
    // // axios.default.header.common['Authorization'] = 'fshyfwe7e8wwesfkduiei3e3k4r3kjhfhweuew78we98'

    // // Axios instance Creation
    // const ai = axios.create({
    //     baseURL: "https://reqres.in/api"
    // })
    
    // async function makerequest(){
    //     try{
    //         console.log("btn clicked")
    //         const res = await ai.post("/users")
    //         console.log(res.data)
    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    // }



    // Setting attributes in javaScript
    // p.setAttribute('id','mydiv')
    // p.setAttribute('style', 'font-size:80px')

    // var a = document.getElementById("jmk")
    // console.log(a)


    // a.setAttribute('class','jahaz')
    // console.log(a)

    //     OR 

    // a.className = 'prac3'
    // console.log(a)

    
    // var a = document.getElementById("jmk")
    // a.setAttribute('id', 'joker')
    // console.log(a)

    // var b = document.getElementById("jmk")
    // b.setAttribute('class', 'jokerss')
    // b.id
    // console.log(b)
    // console.log(b)

    // var c = document.getElementById("jmk")
    // c.setAttribute('style', 'background-color:red')
    // console.log(c)

    // var a = document.getElementById('jmk')
    // a.className = 'joked'
    // console.log(a)

    // a.id = 'forke'
    // console.log(a)

    // a.style = 'background-color:red'

    // document.getElementById("btn").addEventListener("click", makerequest)

    // async function makerequest(){
    //     try{
    //         const res = await axios.get("https://dog.ceo/api/breeds/image/random")
    //         console.log(res.data.message)
    //         document.getElementById("image").setAttribute("src", res.data.message)
    //     }
    // catch(error){
    //     console.log(error)
    // }
    // }
    

    // const stud = {
    //     name: 'junaid',
    //     rolNo: '35',
    //     result(){
    //         console.log("satisfactory")
    //     }
    // }

    // const another = Object.assign({
    //     age: 23,
    //     gender: 'male'
    // }, stud )
    // console.log(another)

    // const circle = {
    //     radius: 1,
    //     draw(){
    //         console.log('draw')
    //     }
    // }
    // const another = { ...circle, age: 23 }
    // console.log(another)
       
// Original array 
// var object = [
//     { 'obj': 'moto', 'price': 19999 },
//     { 'obj': 'oppo', 'price': 18999 },
//     { 'obj': 'moto', 'price': 17999 },
//     { 'obj': 'oppo', 'price': 15999 } ];
     
//   // Use of _.sortBy() method
//   let gfg = _.sortBy(object, 
//       [function(o) { return o.obj; }]);
    
//   // Printing the output 
//   console.log(gfg);

    // -1 means descending 
    // 1 means ascending
    // 0 means nothings



    // Object destructuring in javaScript

    // let bioData = {
    //     name: 'Junaid',
    //     age: 23,
    //     hobbies: {
    //         first: 'playing outdoor games',
    //         second: 'Doing coding'
    //     }
    // }

    // let { name:myname,age,hobbies } = bioData

    // console.log(`My name is ${myname} and my age is ${age} and my hobbies are ${hobbies.first} and ${hobbies.second}`)


    //Array destructuring in javaScript 

    // let myArrayOfLanguages = [ 'java', 'python', 'ruby', 'js', 'c']

    // let [ a,b,c,d,e ] = myArrayOfLanguages

    // console.log(`My favourite programming languages are ${a}, ${b}, ${c},${d}, and ${e}`)

    // var id = setTimeout(anim, 3000)

    //     function anim(){
    //     var target = document.getElementById("test")
    //     target.style.width = '20px'
    //     console.log("Hello from setTimeout...")
    // }

    // function stopAnimation(){
    //     console.log("button Clicked")
    //     clearTimeout(id)
    // }
    // function popup(){
    //     alert("You hovered the button")
    // }
    // function popUp(){
    //     alert("You ended up with hovering")
    // }
    // // function popUp(){
    // //     alert("you single clicked the button")
    // // }
    // function allert(){
    //     alert("The key was pressed from keyboard")
    // }
    // function resized(){
    //     alert("The window was resized ")
    // }
    // function scrolled(){
    //     alert("you started scrolling")
    // }

    
    // document.querrySelector("#abc").removeAttribute("class")
    // var element = document.querySelectorAll("#abc p").innerText = "Was this value added or not"
    // console.log(element)

    // var a = [ 'junaid', 'ahmad', 'ali', 'Abdullah' ]
    // var b = a.slice(1,3)
    // document.write(a + "<br><br>")
    // document.write(b)

    // var a = [
    //     'ahmad','aslam', "akram", "ajmal","ikram"
    // ]

    // document.write( a + "<br><br>")

    // var b = a.slice(1,4)
    // document.write(b + "<br><br>")
    // "<br>"
    // a.splice(1,4,"junaid","zaibi")
    // document.write(a)

    // document.write(a+ "<br><br>")

    // a.splice(1,3,"Junaid","Mahmood","Khokhar","Mahmood Afzal Khokhar")
    // document.write(a)


    //Array - concat function in javaScript                 =>  Is the merge 2 or more arrays.

    // var a = [ 'juanid', 'mahmood', 'khokhar' ]

    // var b = [ 'Sohail', 'mahmood', 'khokhar' ]

    // var c = [ 'Shakir', 'mahmood', 'khokhar' ]

    // var d = a.concat(b,c)       //Merge array b and c with a.And store them in variable d.

    // document.write(d + "<br>")

    // //Array - join method in javaScript

    // var e = d.join(" <br> ")
    // document.write(e)


    //Array - Sort method in javaScript

    // var a = [ 'junaid', 'ahmad', 'zohaib', 'zartash', 'kashif']
    // a.reverse()
    // document.write(a + "<br><br>")

    // a.sort()

    // document.write(a + "<br>")

    // a.reverse()
    // document.write(a)

    //Array - Pop and push methods in javaScript

    // var a = [ 'junaid', 'mahmood', 'khokhar' ]
    // document.write(a + "<br><br>")
    // a.pop()
    // document.write(a + "<br><br>")
    // a.pop()
    // document.write(a + "<br><br>")
    // a.push("Aslam","Akram", "AAA")
    // document.write(a + "<br><br>")

    //Array Shift and unShift method in 
    
    // var a = [ 'junaid', 'mahmood', 'khokhar' ]
    // document.write( a + "<br><br>")
    // a.shift()
    // document.write( a + "<br><br>")
    // a.unshift("Sohail")
    // document.write(a + "<br><br>")
    
    //Array isArray() method in javaScript    ==> Is a method in javaScript that return true if an object is an array otherwise it returns false.

    // var a = [ 'junaid', 'mahmood', 'khokhar']

    // var c = 20
    // var f = "JMK"
    // document.write(a + "<br><br>")

    // var b = Array.isArray(a)
    // document.write(b + " is for A <br><br>")
    // var k = Array.isArray(c)
    // document.write(k + "is for C" + "<br><br>")

    // var kk = Array.isArray(f)
    // document.write(kk + "is for f" + "<br><br>")

    // var a = [ 'junaid', 'mahmood' ]
    // var a = 20

    // if(Array.isArray(a)){
    //     document.write("is an Array")
    // }else{
    //     document.write("is not an Array")
    // }

    //Array indexOf() method in javaScript          => indexOf("Search item", start)

    // var a = [ 'junaid', 'mahmood', 'sohail', 'mahmood', 'yasir', 'mahmood']
    // document.write(a + "<br><br>")
    // var b = a.indexOf("sohail")
    // document.write( b + "<br><br>")
    
    // var c = a.indexOf("mahmood", 3)
    // document.write(c + "<br><br>")

    // var d = a.indexOf("aqdas",1)
    // document.write( d + "<br><br>") // We will get -1 for the value which was not in array 

    //Array lastIndexOf() method in javaScript      => lastIndexOf("search item", end),23,63,11, 14 ]
    // document.write(a + "<br><br>")
     
    // var b = a.find(checkAdult)
    // document.write(b + "<br><br>")

    // function checkAdult(age){
    //     return age >= 23
    // }

    // var a = [ 'junaid', 'mahmood', 'sohail', 'mahmood', 'yasir', 'mahmood']

    // document.write(a + "<br><br>")
    // var b = a.lastIndexOf("mahmood",2)
    // document.write(b + "<br><br>")
    // var b = a.indexOf("mahmood",2)
    // document.write(b + "<br><br>")

    //Array includes method in javaScript  => Is a method that checks wheather that values exists in an array or not.

    // var a = [ 'junaid', 'mahmood', 'khokhar', 'sohail', 'mahmood', 'khokhar' ]

    // document.write(a + "<br><br>")

    // var b = a.includes("Mahmood")
    // document.write(b + "<br><br>")

    //Array some() function in javaScript               => returns true if only one is matched from whole array

    // var a = [ 2,3,34,23,1 ]
    // document.write(a + "<br><br>")
    // var b = a.some(checkAgeLimit)
    // document.write(b + "<br><br>")

    // function checkAgeLimit(age){
    //     return age >= 99
    // }


    // var a = [ 'junaid', 'mahmood', 'khokhar', 'sohail', 'mahmood']

    // document.write(a + "<br><br>")
    // var b = a.some(checkName)
    // document.write(b + "<br><br>")

    // function checkName(name){
    //     if( name === "mahmoodsdf"){
    //         return name
    //     }
    // }

    //Array every() method in javaScript              => returns true only if all value of an array satisfies the condition

    // var a = [ 2,3,43,23,18 ]
    
    // document.write( a + "<br><br>")
    // var b = a.every(checkAdult)
    // document.write(b)

    // function checkAdult(age){
    //     return age >= 2
    // }

    //Array find() method in javaScript    => find() method returns the value of first element in an array that passes a test.

    // var a = [ 2,34,23,63,11, 14 ]
    // document.write(a + "<br><br>")
     
    // var b = a.find(checkAdult)
    // document.write(b + "<br><br>")

    // function checkAdult(age){
    //     return age >= 23
    // }

    //Array findIndex() method in JavaScript   =>return the index of first element in an array that passes the test.

    //Array filter() method in javaScript

    // var a = [ 23, 3, 32, 14, 67 ]
    // document.write(a + "<br><br>")

    // var b = a.filter(checkAdults)
    // document.write(b + "<br><br>")

    // function checkAdults(age){
    //     return age >= 18
    // }

    //Array toString() method in javaScript

    // var a = [ 'junaid', 'mahmood', 'khokhar' ]
    // document.write(a + "<br><br>")
    // a.toString()
    // document.write(a + "<br><br>")

    //Array valueOf() method in javaScript => Is a default function of javaScript to display value of an array

    // var a = [ 'junaid', 'mahmood', 'khokhar' ]
    // document.write( a.valueOf())

    //Array fill() method in javaScript  => Fills whole array with a static value
    // var a = [ 'junaid', 'mahmood', 'khokhar','' ]
    // document.write(a + "<br><br>")
    // a.fill("JUNAID")
    // document.write(a + "<br><br>") 


    //Array forEach Loop in javaScript 

    // var a = [ 'junaid', 'mahmood', 'khokhar' ]

    // a.forEach(loop)

    // function loop(value,index){

    //     document.write( value + " : " + index + "<br><br>" )
    // }

    // var a = [ 'junaid', 'mahmood', 'khokhar' ]
    // // a.fill("JUNAID")
    // // a.toString()
    // // document.write( a + "<br><br>")
    // a.filter(checkm)
    // document.write(a + "<br><br>")
    // // document.write(a + " is filter " + "<br><br>")
    // function checkm(alpha){
    //     if(alpha === 'ajunaid'){
    //         return true
    //     }
    //     else{
    //         return false
    //     }
    // }

    // var a = [
    //     { name: 'junaid', age: 24 },
    //     { name: 'mursaleen', age: 76 },
    //     { name: 'zain', age: 24 }
    // ]
    // console.log(a)

    // for(var i = 0; i < a.length; i++){
    //     document.write(a[i].name + " and his age is " + a[i].age + "<br><br>")
    // }

    // var stud = {
    //     name: 'junaid',
    //     age: 24,
    //     roll_no: 243,
    //     subjects: [ 'math', 'phy', 'chem', 'maths' ]
    // }
    // for(var key in stud){
    //     document.write( key + " :  " + stud[key] + "<br><br>")
    // }

    //Array map() in javaScript
    //both the filter and map methods returns a new array they don't modifies the array, which means we can call them one after another in a chain.

    // var a = [ 2,23,21,12 ]
    // var b = a.map(test)
    // document.write(b)
    // function test(val){
    //     return val*10
    // }

    // var a = [ 'junaid', 'mahmood', 'khokhar' ]
    // var b = a.map(test)
    // document.write(b)
    // function test(val){
    //     return val + " " + "bbb"
    // }

    // var a = [
    //     { fname: 'junaid', lname: 'khokhar' },
    //     { fname: 'sohail', lname: 'khokhar' },
    //     { fname: 'shakir', lname: 'khokhar' }
    // ]
    // var b = a.map(test)
    // document.write(b + "<br><br>")
    // function test(val){
    //     return val.fname + " " + val.lname + "<br>" 
    // }

    //spread operators in javaScript

    // var a = [1,2,3]
    // var b = [...a,4,5,6]
    // console.log(b)

    // var a = [1,2,3]
    // function test(a,b,c){
    //     console.log(a+b+c)

    // }
    // test(...a)

    //debounce function in javaScript

    // document.getElementById("mybtn").addEventListener("click",debounce((e) => {
    //     console.log("clicked")
    // }, 2000))

    // function debounce(callback, wait){
    //     let timerId
    //     return (...args) => {
    //         clearTimeout(timerId)
    //        timerId = setTimeout(() => {
    //             callback(...args)
    //         },wait)
    //     }
    // }
    
    //throttle() in javaScript
    // document.getElementById("mybtn").addEventListener("click", throttle((e) => {
    //     console.log("clicked")
    // }, 2000))

    // function throttle( fn, delay ){
    //     let last = 0
    //     return (...args) => {
    //         const now = new Date.getTime()
    //         if( now - last < delay ){
    //             return 
    //         }
    //         now = last
    //         return fn(...args)
    //     }
    // }

    //parseInt(string, radix)

    // document.write(parseInt("10")," = " + "10yes" + "<br>")
    // document.write(parseInt("10 20")," = " + "10yes" + "<br>")
    // document.write(parseInt(" 20 "), " = " + "20yes" + "<br>")
    // document.write(parseInt("13.3656")," = " + "13yes" + "<br>")
    // document.write(parseInt("10 years")," = " + "10yes" + "<br>")
    // document.write(parseInt("years 10"), " = "+ "NaNyes" + "<br>")
    // document.write(parseInt("0x23")," = " + "35yes" + "<br>")
    // document.write(parseInt("24", 8), " = " + "20yes" + "<br>")
    // document.write(parseInt("76",16)," = " + "118yes" + "<br>")
    // document.write(parseInt("020"), " = " + "20yes" + "<br>")
    
    // document.write(parseInt("2a" + "4a"), " = " + "2 yes.")

    // document.write(parseInt(true), " = " + "NaN.")

    // const normalInput = document.getElementById("input-normal")
    // const debouncedInput = document.getElementById("input-debounced")

    // normalInput.addEventListener("keyup",logEvent)
    // debouncedInput.addEventListener("keyup", logEvent)

    // function logEvent(e) {
    //     e.target.parentElement.nextElementSibling.innerHTML += 
    //     e.target.value + "<br>"
    // }
    
    // $(document).ready(function(){   
    //     $('input').keypress(function(){
    //         $(this).css('backgroundColor', 'blue')
    //     })
    // })

    //for-in loop  => Is for objects 

    // let object1 = {
    //     name: 'vinod',
    //     age: 23,
    //     profession: "Developer"
    // }
    // // document.write(object.name)

    // for( x in object1 ){
    //     document.write( object1[x] + "<br>")
    // }

    //forEach loop in JavaScript
    // const myFavProg = [ 'JavaScript', 'PHP', 'Java', 'C', 'Python' ]
    // myFavProg.forEach((value,index) => {
    //     console.log(index + " - " + value)
    // })

    // const myValues = [ 1,2,4,6,7,66 ]

    // myValues.forEach(function(value,index,arr){
    //     console.log( value + " = " + index + " " +arr[index] + 232 )
    // })

    //Rest Parameters in JavaScript

    // function sum(...inputs){
    //     console.log(...inputs)
    //     let total = 0
    //     for ( i of inputs ){
    //         total += i
    //     }
    //     console.log(total)

    // }
    // sum(2,4,6,21,223)

    //spread operators in javaScript
    // function sum(a,b,c){
    //     console.log(a+b+c)
    // }
    // var arrVal = [ 1,2,3 ]
    // console.log(...arrVal)
    // sum(...arrVal)


    // let arr1 = [1,2,3,4]
    // let arr2 = [5,6,7,8]
    // let arr3 = [9,10,11,12]

    // let arr4 = [...arr1,...arr2,...arr3]

    // console.log(arr4)

    // let arr1 = [1,2,3]
    // let arr3 = [6,7,8]
    // arr2 = [...arr1,4,5,...arr3,9,10]
    // console.log(arr2)


    //Debounced function in javaScript


        // const debounce = ( fn, delay ) => {
        //     let timeoutId
            
        //     return function(...args){
        //         if(timeoutId){
        //             clearTimeout(timeoutId)
        //         }
        //         timeoutId = setTimeout(() => {
        //             fn(...args)
        //         }, delay)
        //     }
        // }

        // document.getElementById("myBtn").addEventListener("click", debounce(e => {
        //     console.log("button Clicked")
        // },2000))
        
        // const initLog = () => {
        //     console.log("clicked")
        // }
        
        // const initApp = () => {
        //     const button = document.getElementById("myBtn")
        //     button.addEventListener("click", initLog)
        // }
        
        // document.addEventListener("DOMContentLoaded", initApp)
    
    // const debounce = ( fn, delay ) => {
    //     let timeoutId
        
    //     return function(...args){
    //         if(timeoutId){
    //             clearTimeout(timeoutId)
    //         }
    //         timeoutId = setTimeout(() => {
    //             fn(...args)
    //         }, delay)
    //     }
    // }


    // document.getElementById("myBtn").addEventListener("click", debounce(e => {
    //     console.log("Button Clicked")
    // },2000))

    // document.getElementById("myBtn").addEventListener("click", debounce(e => {
    //     console.log("button Clicked")
    // },2000))



    //DOMContentLoaded Event in javaScript  => is used when script is placed before DOM elements(content).

    // document.addEventListener("DOMContentLoaded", function(){

    //     const debounce = ( fn, delay ) => {
    //         let timeoutId
            
    //         return function(...args){
    //             if(timeoutId){
    //                 clearTimeout(timeoutId)
    //             }
    //             timeoutId = setTimeout(() => {
    //                 fn(...args)
    //             }, delay)
    //         }
    //     }

    //     document.getElementById("myBtn").addEventListener("click", debounce(e => {
    //         console.log("button Clicked")
    //     },2000))
        
    // })

    // const myFunction = () => {
    //     let myValue = 2
    //     console.log("My Value is" + myValue)

    //     const childFunction = () => {
    //         console.log(myValue += 1)
    //     }
    //     return childFunction()
    // }

    // const result1 = myFunction()
    // console.log(result1)
    // result1()


//     const myFunction = () => {
//         let myValue = 2
//         console.log(myValue)
   
//         const childFunction = () => {
//              console.log(myValue += 1)
//         }
   
//         return childFunction  //once function is returned all the variables of myFunction are gone(vanished) from call stack.
//    }
   
//   const result = myFunction()
//   console.log(result)
//    result()
//    result()
//    result()


//call method in JavaScript(Call, bind and apply methods are approximately same in javaScript)
// const youtuber1 = {
//     name: 'Thapa Technical',
//     content: 'Programming and tech',
//     feature: function(ratings,support,donate){
//         console.log(`${this.name} is very great Channel and there people learn about ${this.content}.Please give us ${ratings} star ratings and ${support} channel.We can also accept ${donate}.`)
//     }
// }
// const youtuber2 = {
//     name: 'NewOne',
//     content: 'Thapa Competitor'
// }
// youtuber1.feature.call(youtuber2,5,"Subscribe","Donations")

// youtuber1.feature.apply(youtuber2,[5,"Subscribe","Donations"])

// // ---------------------
// let max = Math.max(1,2,3)
// console.log("Maximum value is = " + max)

// // let max1 = Math.max[1,2,3,4]
// // console.log("Maximum1 value is = " + max1)

// let max1 = Math.max.apply(null,[1,2,3,4])
// console.log("Maximum value of max1 is " + max1)


// //bind method in JavaScript
// let bindExample = youtuber1.feature.bind(youtuber1)
// bindExample()

//Bind example of binding function with an object

// let youtuber = {
//     name: 'Thapa',
//     content: 'Proramming'
// }
// let youtuber1 = {
//     name: 'Akshay',
//     content: 'Programming and Tech'
// }
// let youtuber2 = {
//     name: 'dcode',
//     content: 'Programming APIs'
// }
// function feature(ratings){
//     console.log(`My name is ${this.name} and i made videos on ${this.content} on youtube.Please Support me with with ${ratings} star ratings.`)
// }
// let fun2 = feature.bind(youtuber)
// fun2(5)

// let fun3 = feature.bind(youtuber2)
// fun3(3)


//onKeyUp in JavaScript

// document.getElementById("fname").onkeyup = () => {
//     let x = document.getElementById("fname")
//     x.value = x.value.toUpperCase()
// }

// let myFunction = () => {
//     let x = document.getElementById("fname")
//     x.value = x.value.toUpperCase()
// }

// document.getElementById("fname").addEventListener("keyup", myFunction)

// function myFunction(){
//     let x = document.getElementById("fname").value 
//     document.getElementById("demo").innerHTML = x.toUpperCase()
// }

//Debouncing by Akshay Saini

    // let counter = 0

    // let getData = () => {
    //     console.log("Fetching data.." + counter++)
    // }
    // let debounce = (fn, delay) => {
    //     let timer 
    //     return function(){
    //         let context = this
    //         let args = arguments
    //         clearTimeout(timer)
    //         timer = setTimeout(() => {
    //             getData.apply(context, args)
    //         }, delay)

    //     }
    // }

    // let betterFunction = debounce(getData, 300)


//Debouncing in JavaScript
// let initApp = () => {
//     let button = document.getElementById("myBtn")
//     button.addEventListener("click", initLog)
    
// }


// let initLog = () => {
//     console.log("Button Clicked")
// }


// document.addEventListener("DOMContentLoaded", initApp)


//reducer in javascript
//In reduce method we have total 4 arguments
// i)Accumulator
// ii)Current value
// iii)Current index
// iv)Source Array


//Finding Sum of an array using reduce method
// let arr = [1,2,3]
// let sum = arr.reduce((accum, curr) => {
//     return accum + curr
// },10)            //here 9 is the initial value for accumulator.
// console.log(sum)


// const numbers = [ 1, -1, 2, 3]
// const sum = numbers.reduce((accum, currVal) => {
//     return accum + currVal
// }, 20)
// console.log(sum)
// console.log(numbers)


//Now finding product of an array using reducer method
// let arr = [1,2,3,4,5]
// let product = arr.reduce((accum, currVal) => {
//     return accum * currVal
// })
// console.log(product)




//Now finding average of an array using reducer method
// let arr = [4,3,6,7]
// let avg = arr.reduce((accum, currVal, index, arr) => {
//     total = accum + currVal
//     if(index === arr.length-1){
    //         return total/arr.length
//     }
//     return total
// })
// console.log(avg)




//Decorator function in javaScript
// let sum = (...args) => {
//     return [...args].reduce((accum, currVal) => accum + currVal)
// }
// const callCount = (fn) => {  //This is the decorator function, it takes sum function as parameter(fn)
//     let counter = 0
//     return (...args) => {
//         console.log(`Sum has been called ${counter += 1 } times.`)
//         return fn(...args)
//     }
// }
// sum = callCount(sum)

// console.log(sum(1,4,4))
// console.log(sum(8,3,6,3,12))
// console.log(sum(2))
// console.log(sum(78,3,123,3,5,6,23,4))


//Decorators Functions in javaScript example2
//  let rectangleArea = (length, width) => {
//      return length * width
//  }

//  let countParams = (fn) => { //This is decorator function here it takes rectangleArea as parameter functionL(fn), we can also take more than one functions in parameter
//     let name = fn.name
//     return (...params) => {
//         if( params.length !== fn.length ){
//             throw new Error(`Incorrect number of parameters for ${fn.name}`)
//         }
//         return fn(...params)
//     }
//  }


// let rectangleArea = (length,breadth) => {
//     return length * breadth
// }

// const countParams = (fn) => {
//     return (...params) => {
//         if( params.length !== fn.length ){
//             throw new Error(`Incorrect no of parameters/arguments for ${fn.name}`)
//         }
//         return fn(...params)
//     }
// }

// const requireIntegers = (fn) => {
//     return (...args) => {
//         args.forEach(arg => {
//             if(!Number.isInteger(arg)){
//                 throw new TypeError(`params for ${fn.name} must be integers.`)
//             }
//         })
//         return fn(...args)
//     }
// }



// rectangleArea = countParams(rectangleArea)
// rectangleArea = requireIntegers(rectangleArea)

// console.log(rectangleArea(20,30))
// console.log(rectangleArea(20,"juni"))

//console.time method in javaScript 

// console.time('Junaid takes time while executing in seconds is')
// alert("For time Calculations...")
// console.timeEnd('Junaid takes time while executing in seconds is')

//Decorator function example 3 with async await(Needs practice)

// let requestData = async (url) => {
//     try{
//         const response = await fetch(url)
//         const data = await response.json()
//         return data
//     }
//     catch(err){
//         console.error(err)
//     }
// }


// const dataResponseTime = (fn) => {
//     return async (url) => {
//         console.time('fn')
//         const data = await fn(url)
//         console.timeEnd('fn')
//         return data
//     }
// }

// const myTestFunction = async (fn) => {
//     requestData = dataResponseTime(requestData)
//     const data = await requestData('https://jsonplaceholder.typicode.com/posts')
//     console.log(data)
// }

// myTestFunction()

//debouncing in javaScript

// const initApp = () => {
//     const button = document.getElementById("myBtn")
//     button.addEventListener("click", debounced(clickLog, 2000))
// }

// const clickLog = () => {
//     console.log("Button Clickedddddd...")
// }

// const debounced = (fn, delay) => {
//     let id
//     console.log(`Id at immediate load is ${id}..`)
//     return (...args) => {
//         console.log(`Previous Id is ${id}..`)
//         if(id) clearTimeout(id)
//         id = setTimeout (() => {
//             fn(...args)
//         },delay)

//     }
// }


// document.addEventListener("DOMContentLoaded", initApp)

    //   OR(Short solution than debouncing the button)

    // const initApp = () => {
    //     const button = document.getElementById("myBtn")
    //     button.addEventListener("click", () => {
    //         clickLog()
    //         button.disabled = true
    //         setTimeout(() => {
    //             button.disabled = false
    //         }, 2000)
    //     })
    // }

    // const clickLog = () => {
    //     console.log("Button Clicked..")
    // }

    // document.addEventListener("DOMContentLoaded", initApp)


    //JavaScript Short Array Concepts

    //indexOf() method in JavaScript  //It starts checking from the beginning of an array
    // var myFriends = [ "Nafees","Jahanzaib","Khurram","Usama"]
    // console.log(myFriends.indexOf("Khurram",3))

    //lastIndexOf() method in JavaScript  //it starts checking from the last of an array
    // var myFriends = [ "nafess", "Jahanzaib", "Omar", "Khurram", "nafess","Usama"]
    // console.log(myFriends.lastIndexOf("nafess"))

    //filter method in JavaScript

    // var names = ["nafess", "omar", "mudassar", "gohar", "khurram","jahanzaib"]

    // //  let result = names.filter(names => names.length > 6)
    // // let result = names.filter(names => names != "gohar")
    // let result = names.filter(names => names )

    //  console.log(result)

    //includes() method in javaScript
    // var myFriends = ["nafees", "jahanzaib", "khurram", "Omar", "mudassar","Omar"]
    // console.log(myFriends.includes("Omar"))

    // var myFriends = ["nafees","jahanzaib", "khurram", "Omar", "Mudassar"]
    // console.log(myFriends.includes("jahanzaib",3))

    //find() in JavaScript
    // var prices = [400,120,200,300,240,400,230,2350,450]
    // console.log(prices.find((currVal) => currVal < 300))

    //findIndex() in JavaScript

    // var prices = [400,120,200,300,240,400,230,2350,450]
    // console.log(prices.findIndex((currVal) => currVal < 300))

    //filter() method in javaScript    (Filter is best among all these and mostly used)
    // var prices = [ 200,120,23,240,649,2001,245]
    // console.log(prices.filter((currVal) => currVal < 300))
 
    //push() array method in javaScript

    // var arr = [1,2,3,5,6]
    // arr.push(7,3)
    // console.log(arr)

    //Decorator() function Example

//     const radius = [3,1,2,4]
//     let area = (radius) => {
//         return Math.PI * radius * radius
//     }
//     let circumference = (radius) => {
//         return 2 * Math.PI * radius
//     }
//     let diameter = (radius) => {
//         return 2 * radius
//     }
//     const calculate = (fn, radius) => {
//         const output = []
//         for( let i = 0; i < radius.length; i ++ ){
//             output.push(fn(radius[i]))
//         }
//         return output
//     }

//     // area = calculate(area)
//     // console.log(area(2))
// area = calculate(area,radius)
// circumference = calculate(circumference, radius)
// diameter = calculate(diameter,radius)
//     console.log(area)
//     console.log(circumference)
//     console.log(diameter)


//map() method in javaScript

// const arr = [2,3,4,6,7,8]
// const arr2 = arr.map(multii)

// function multii(x){
//     return x * 10 - 20
// }
// console.log(arr2)


// let Mobile = function(model_no) {
//      this.model = model_no
//     this.price = 3000 
// }
// let samsung = new Mobile('Galaxy')
// let nokia = new Mobile('nokia')
// console.log(samsung)
// document.write(samsung)

//Constructor in javaScript

//constructor without parameters 
// function Mobile() {
//     this.model = '3310'
//     this.price = function(){
//         document.write(this.model+ " <br /> " + "Price is Rs. 2000...")
//     }
// }
// const samsung = new Mobile()
// samsung.price()
// const lg = new Mobile()
// lg.price()

//constructor with Parameters
// function Mobile(model_no, pricing){
//     this.model = model_no
//     this.price = pricing
//     this.purchased = function(){
//         document.write(this.model + ".Price is = " + this.price + ".<br />")
//     }
// }

// const samsung = new Mobile("Galaxy", "20000")
// samsung.purchased()
// const nokia = new Mobile("3310", "30000")
// nokia.purchased()


// factory() function in JavaScript
 
// Factory function withou parameters

// function mobile() {
//     return {
//         model: 'Galaxy',
//         price: function(){
//             return this.model + "Price is Rs. 30000..."
//         }
//     }
// }
// const samsung = mobile()
// const nokia = mobile()

// document.write(samsung.model + " " + samsung.price())
// document.write("<br />" + nokia.model + " 2nd obj price is = " + nokia.price())

//Factory function with parameters

// function mobile(model_no,price) {
//     return { 
//         model: model_no,
//         price: price,
//         purchased: function(){
//             return "<br />  Price of " + this.model + " is " + this.price + "."
//         }
//     }
// }
// const samsung = mobile('Galaxy', 3300)
// const nokia = mobile('3310', 2345)
// document.write(samsung.purchased())
// document.write(nokia.purchased())


//Factory functions with parameters and fat Arrow
// const mobile = (model_no,price) => {
//     return {
//         model: model_no,
//         price: price,
//         purchased: function(){
//             return "<br /> Price of " + this.model + " is " + this.price + " . "
//         }
//     }
// }
// const samsung = mobile('Galaxy',2980)
// const nokia = mobile('3310',8390)
// document.write(samsung.purchased())
// document.write(nokia.purchased()) 


//Object literal

//How to add key and value to object using object literal
// var fee = {"jun aid":200, 'ali':230}
// // fee['Junaid'] = 200
// console.log(fee)
// fee['Ahmad'] = 20000
// console.log(fee)
// fee.farhat = 290
// console.log(fee)

// function sum(){
//     return " Grand Totaal One..."
// }

// fee.total = function(){
//    return document.write("Grand Totaal...")
// }
// fee['GrandTotal'] = function(){
//     return ("This is grand Total Method in Object litersal" + sum())
            
// }
// console.log(fee.farhat)
// console.log(fee['jun aid'])
// console.log(fee.GrandTotal())
// // console.log(fee.total()) or 
// console.log(fee['total']())

//Object constructor in javaScript

// var fees = new Object()
// fees.rahul = 200
// console.log(fees)

//Prototype in JavaScript  (Also find instance and prototype members)

// function Mobile(model_no){
//     this.model = model_no   //These properties are called as instance Member
//     this.price = 3000       //These properties are called as instance Member
// }
// const samsung = new Mobile('Galaxy')
// const nokia = new Mobile('3310')


// console.log(samsung.price)et object1 = {
    //     name: 'vinod',
    //     age: 23,
    //     profession: "Developer"
    // }
    // // document.write(object.name)

    // for( x in object1 ){
    //     document.write( object1[x] + "<br>")
    // }
// // samsung.color = "white"   //This is most inconvienient to to give value to any key because if we want to assing same value to all keys then we use prototype
// console.log(samsung.color)
// document.write(samsung.color)
// console.log(samsung)

// console.log(nokia)
// // nokia.color = "Red"  //This is most inconvienient to to give value to any key because if we want to assing same value to all keys then we use prototype

// //classname.prototype.key = value
// Mobile.prototype.color = 'white'  //Now this color property becomes available to every object using prototype
// Mobile.prototype.genuine = 'refurb' //These properties are called as Prototype Members
// // console.log(nokia.color)
// // console.log(samsung.color)

//More about __proto__  (prototype)

// function Mobile(){
//     this.model = 'Galaxy'
// }
// const samsung = new Mobile()
// const nokia = new Mobile()
// console.log(samsung.__proto__ === Mobile.prototype)
// console.log(nokia.__proto__ === Mobile.prototype)

// function Mobile(){

// }
// const samsung = new Mobile()
// const apple = new Mobile()
// document.write(Mobile.prototype)
// console.log(Mobile.prototype)
// console.log(samsung.__proto__)

// console.log(Mobile === samsung.__proto__.constructor)
// console.log(Mobile.prototype.constructor === Mobile)
// console.log(samsung.__proto__.constructor === Mobile )


// function Mobile(){
//     const a = 10
// }
// const samsung = new Mobile()
// Mobile.prototype.a = 20
// console.log(samsung.a)

// console.log(Object.prototype)
// var b = new Object()
// var c = {}

// console.log(Object.getPrototypeOf(b))
// console.log(Object.getPrototypeOf(c))
// console.log(Object.getPrototypeOf(Object.prototype))

//Array prototype in javaScript
//  var a = new Array()

//  console.log(Object.getPrototypeOf(a))

//  console.log(Object.getPrototypeOf(Object.prototype))
 //String prototype in JavaScript

//  var a = new String()

//  console.log(Object.getPrototypeOf(a))

//  console.log(Object.getPrototypeOf(String.prototype))

//Prototype Inheritance in javaScript

// var Mobile = function(){
//     this.a = 10
// }
// Mobile.prototype.b = 20

// var Laptop = function(){
//     //To call Mobile method in Laptop method, we can write this
//     Mobile.call(this)
//     this.c = 30
// }


// //prototype inheritance, we can write
// //childClassName.prototype = Object.create(ParentClassName.prototype)
// Laptop.prototype = Object.create(Mobile.prototype)
// Laptop.prototype.constructor = Laptop

// var samsung = new Mobile()
// var hp = new Laptop()


// // console.log(samsung.a)
// // console.log(samsung.b)
// // console.log(samsung.c)

// console.log(hp.a)
// console.log(hp.b)
// console.log(hp.c)

//prototype inheritance in javascript
//One Super and one Sub Class(Single Level Inheritance)

//parent class
// const Mobile = function(){
//     //We are only able to make one call at a time
//     // Laptop.call(this)
//     this.a = 10
// }
// Mobile.prototype.b = 20

// //child class
// const Laptop = function(){
//     Mobile.call(this)
//     this.c = 30
// }
// Laptop.prototype.d = 40
// // Laptop.prototype.b = 60
// // Mobile.prototype.b = 100  //prototype in this case is overwritten

// //here at this line prototype b editing is shown but not after doing inheritance
// // const lenovo = new Laptop()
// // console.log(lenovo.b)


// // for prototype inheritance // {
    // Laptop.prototype = Object.create(Mobile.prototype)

    //prototype Constructor(To reset constructor of Laptop we can write)
    // Laptop.prototype.constructor = Laptop

// }

// Laptop.prototype.b = 400 //Editing of b in prototype works after inheritance


// //Both types don't work at a time, when one class is child it can't be parent of its child class, so that's why we can say it only works from top to bottom( means super to sub), child can acces properties of parent but parent won't be able to acces child properties.
// // Mobile.prototype = Object.create(Laptop.prototype)
// // Mobile.prototype.constructor = Mobile

// const samsung = new Mobile()
// // const apple = new Mobile()

// // const nokia = new Laptop()
// const hp = new Laptop()

// console.log(hp.a)
// console.log(hp.b)
// console.log(hp.c)

// // console.log(apple.a)
// // console.log(apple.b)
// // console.log(apple.c)
// // console.log(apple.d)

// // console.log(nokia.a)
// // console.log(nokia.b)
// // console.log(nokia.c)

// // document.write(hp.a + "<br>")
// // document.write(hp.b + "<br>") 
// // document.write(hp.c + "<br>")



//One Super and Two Sub class inheritance (Multilevel inheritance in javascript)
 
//super Class
// const Mobile = function(){

// }

// //prototype Method( that we can access through prototype inheritance )
// Mobile.prototype.getModel = function(){
//     return this.model + " " +  this.price
// }

// //sub class
// const Samsung = function( model, price ) {
//     this.model = model 
//     this.price = price
// }

// //sub class
// const Lenovo = function( model ) {
//     this.model = model
// }

// //Inheritance Code
// Samsung.prototype = Object.create(Mobile.prototype)
// //To reset constructor of Samsung
// Samsung.prototype.constructor = Samsung

// Lenovo.prototype = Object.create(Mobile.prototype)
// //To reset constructor of Lenovo
// Lenovo.prototype.constructor = Lenovo

// const m = new Samsung('Galaxy', 2000)

// console.log(m.getModel())

// const l = new Lenovo("Primax5")
// console.log(l.getModel())

//Inheritance 

// // //super class
// const Mobile = function(){

// }

// //super class prototype object method
// Mobile.prototype.getModel = function(){
//     return "Model is = " + this.model 
// }

// //sub class
// const Samsung = function(model, price){
//     this.model = model,
//     this.price = price
// }

// //sub class
// const Lenovo = function(model){
//     this.model = model
// }

// //inheritance 1st class
// Samsung.prototype = Object.create(Mobile.prototype)

// //to reset Constructor of Samsung
// Samsung.prototype.constructor = Samsung

// //inheritance 2nd class
// Lenovo.prototype = Object.create(Mobile.prototype)

// //to reset constructor of Lenovo
// Lenovo.prototype.constructor = Lenovo


// const galaxy = new Samsung('Galaxy Grand Prime', 47999 )
// Samsung.prototype.getPrice = function(){
//     return  " and its price is " + this.price
// }
// console.log(galaxy.getModel() + galaxy.getPrice())

// const phab2 = new Lenovo ('PHAB@2')
// console.log(phab2.getModel())


//Using decorators in inheritance

// function extend ( child, parent ){
//     child.prototype = Object.create(parent.prototype)
//     child.prototype.constructor = child
// }

// //super class
// const Mobile = function(){

// }
// Mobile.prototype.getModel = function(){
//     return this.model
// }

// //sub class
// const Samsung = function(model, price){
//     this.model = model 
//     this.price = price
// }

// //sub class
// const Lenovo = function(model){
//     this.model = model
// }
// extend( Samsung, Mobile)
// extend( Lenovo, Mobile)

// Samsung.prototype.getPrice = function(price){
//     return " and its price is " + this.price + "..."
// }

// const galaxy = new Samsung('Galaxy',2300)

// const phab2 = new Lenovo('PHAB@2')

// console.log(galaxy.getModel() + galaxy.getPrice())
// console.log(phab2.getModel())

//call method parameter passing in inheritance

// //inheritance decorator
// let inherit = (child,parent ) => {
//     child.prototype = Object.create(parent.prototype)
//     child.prototype.constructor = child
// }

// const Mobile = function(model) {
//     this.model = model
// } 
    
// Mobile.prototype.getModel = function() { 
//     return this.price
// }

// const Samsung = function(model, price) {
//     Mobile.call(this, model)
//     this.price = price
// }

// //inheritance decorator call
// inherit(Samsung, Mobile)

// const galaxy = new Samsung( 'Galaxy', 230000 )

// console.log(galaxy.getModel() + " = " + galaxy.model)

//Composition and Mixins in javaScript

// const eating = {
//     eat: function(){
//         return "I can eat. <br>"
//     }
// }
// const walking = {
//     walk: function(){
//         return "I can walk. <br>"
//     }
// }
// const talking = {
//     talk: function(){
//         return "I can talk. <br>"
//     }
// }
// const starting = {
//     start: function(){
//         return "Robocop can start ."
//     }
// }
// const stopping = {
//     stop: function(){
//         return "RoboCop can Stop .."
//     }
// }

// const Rahul = Object.assign({}, eating, walking, talking)
// document.write(Rahul.eat())
// document.write(Rahul.walk())
// document.write(Rahul.talk())
 
// const RoboCop = Object.assign({}, walking,talking,stopping,starting)
// document.write(RoboCop.start() + "<br>" + RoboCop.stop() + "<br>")
// document.write("RoboCop says "  + RoboCop.walk() )

//Composition and mixins with generic decorator for every object

// //mixin function
// function mixin (target, ...sources){
//     Object.assign(target, ...sources)
// }

// const eating = {
//     eat: function(){
//         return "I can eat. <br>"
//     }
// }

// const walking = {
//     walk: function(){
//         return "I can walk. <br>"
//     }
// }

// const talking = {
//     talk: function(){
//         return "I can talk. <br>"
//     }
// }

// //class human
// const Human = function() {

// }

// //class RoboCop
// const RoboCop = function(){

// }

// //Compositing features to RoboCop
// mixin(RoboCop.prototype, walking, talking)

// //Compositing features to human
// mixin(Human.prototype, eating , walking, talking)

// const Rahul = new Human()
// const Robot1 = new RoboCop()

// document.write(Robot1.walk() + " and RR " + Robot1.talk())

// document.write(Rahul.eat() + "<br>" + Rahul.walk() + "<br>" + Rahul.talk())

//inheritance in es6 is modified and class keyword is used with extends for subClass

// class Father {
//     showFMoney(){
//         return "Show Father Money. <br>"
//     }
// }
// class Son extends Father {
//     showSMoney(){
//         return "Show Sons Money <br>"
//     }
// }
// class GrandSon extends Son {
//     showGMoney(){
//         return "Show Grandson's Money <br>"
//     }
// }

// const Ahmed = new Son()
// document.write(Ahmed.showFMoney() + " and " + Ahmed.showSMoney())

// const Ali = new GrandSon() //GrandSon can access properties of its parent and grandparent also, so that's why we call it as multilevel inheritance
// document.write(Ali.showGMoney() + " " + Ali.showSMoney() + " " + Ali.showFMoney() + "...")


// //inheritance with super keyword
// class Father {
//     constructor(money){
//         this.FMoney = money
//     }
//     showFMoney(){
//         return this.FMoney + "Father Money + <br>"
//     }
// }
// class Son extends Father {
//     constructor(money){
//         // this.a = 12  //First line before constructor must be super otherwise it shows error
//         super(money)
//         // this.a = 12  //here it works fine
//     }
//     showSMoney(){
//         return "This is Son's Money.."
//     }
// }

// const s = new Son(1000)
// document.write(s.showFMoney())

// //inheritance little constuctor concept
// class Father {
//     constructor(money){
//         this.FMoney = money
//         const a = 23 //if we use const, var or let instead of this, then it becomes private variable we are not able to access outside class.
//                     //To access variable with objects we need to assign them with this keyword.
//         this.b = 25
//     }
// }
// class Son extends Father {
//     constructor(money){
//         super(money)
//     }
//     showSMoney(){
//         return this.FMoney + "is father Money and son also has his own some money..."
//     }
// }
// const s = new Son(2000)
// document.write(s.showSMoney() + " and " + s.b + " and " + s.a)

// const f = new Father(10)
// document.write("<br>" + s.b + " and " + s.a)

//Creating 2D array in JavaScript
// const junaid = []
// const rows = 4
// const columns = 7

// for ( let i = 0; i < rows; i ++ ){
//     junaid[i] = []
//     for ( let j = 0; j < columns; j ++ ){
//         // document.write( i + " " + j + " | ")
//         document.write([i] + " " + [j] + " | " )
//     }
//         document.write("<br>" + " - ")
// }

//Creating 2D Array 2nd method

// const rows = 3
// const cols = 5
// const junaid = new Array(rows)
// for ( let i = 0; i < rows; i ++ ){
//     junaid[i] = new Array(cols)
//     for( let j = 0; j < cols; j ++ ){
//         document.write( i + " " + j  + " | ")
//     }

// }

//Closures
// debugger
// function outFun(){
//     const j = " J a local Variable of Outer Function..."
//     document.write( j + "<br")
//     function innerFun(){
//         const k = "K a Local variale of inner Function..."
//         return document.write( k + "abc" + "<br>")
//     }
//     innerFun()
// }
// outFun()



//Array deStructuring in JavaScript

// const a = [ " JavaScript", "Six Months", "Geeky Shows" ]
// const [ courseName,duration, tutor] = a

// console.log(courseName + " " + duration + " " + tutor)

// //Array deStructuring in JavaScript

// const a = [ 'JavaScript', 'Six Months', 'Geeky Shows' ]
// // const [ courseName] = a
// // const [,duration] = a
// const [courseName,, tutor ] = a

// console.log(courseName, tutor)

// // console.log(duration)
// // console.log(courseName)

// var a, b
// // var [ a,b=20 ] = [10] // here default value of b is 20 (default value priority is less)
// // console.log(a + " " + b)

// var [ a = 10 , b = 20 ] = [ 30, 40] //here default values of a and b are 10 and 20 but we can change it to 30 and 40, so the new values of a and b are 30 and 40.
// console.log(a + " " + b)

// const abc = [ 23, 35,778, 345]
// const arr = [ 2, 4 ,6]
// function show([value1, value2, value3]){
//     console.log( value1 + " " + value2 + " " + value3 )
// }
// show(abc)
// show (arr)

// const arr = [ 23 , 24, 244, 78]
// function show(a){
//     console.log(a[1] + " " + a[2] + " " + a[0] )
// }
// show(arr)

// const arr = [ 23, 24, 34, 35, 46]
// function show([value1, value2, value3, value4, value5]){
    // function show(value1, value2, value3, value4, value5){ //this line won't work for array value, it considers value1 as arr and consider remaining values as undefined
//     console.log(value1 + " " + value2 )
// }
// show(arr)

// const arr = [ 10, 20, 30, 40, 50,60, 70,80,90]
// function show([ val1, val2, ...restOp]){
//     console.log(val1 + " " + val2 + " " + restOp )
// }
// show(arr)

// const arr = [ 20, 30, 40, 50 ]
// function show(a){
//     return a
// } 
// const x = show(arr) //here "return a" returns value to show(arr) and const x becomes arr. 
// console.log(x[1] + " " + x[0])

// const arr = [ 20, 30, 40, 50 ]
// function show(a) {
//     return a
// }
// const x = show(arr)
// const [ val1, val2, val3, val4 ] = x
// console.log(val1 + " " + val2 + " " + val3 + " " + val4)

// const arr = [ 20, 30 , 40 , 60 ]
// function show(a){
//     return a
// }
// const [ val1, val2, val3, val4 ] =  show(arr)
// console.log(val1 + " " + val2 + " " + val3 + " " + val4 )

//Nested array destructuring 
// const arr = [ 20, 50, [60, 69] ]
// const  [ val1, val2, [val3, val4]] = arr

// console.log( val1 + " " + val2 + " " + val3 + " " + val4 )

// const students = [ "ali", "ahmed" , ["iqra", "ayesha"]]
// const [stu1, stu2, [stu3, stu4]] = students //with destructuring
// console.log(stu1 + " " + stu2 + stu3 + stu4)

// console.log(students[0] + " " + students[1] + " " + students[2][0] + " " + students[2][1]) //Without desturcturing

//Object destructuring in javaScript
// const course = {
//     courseName: 'JavaScript',
//     duration: 'six Months',
//     tutor: 'Geeky Shows'
// }
// const { courseName, duration, tutor } = course
// console.log(courseName + " " + duration + " " + tutor + " end ")

// const students = {
//     comp: "Ali",
//     bio: "Ahmed",
//     arts: "Abdullah",
//     civics: "Aliyan",
//     persian: "usman"
// }
// const { comp, bio, arts, civics, persian } = students

// console.log(comp + " " + bio + " " + arts + " " + civics + " " + persian + "...")

// const students = {
//     comp: "Ali",
//     bio: "Ahmad",
//     arts: "Abdullah",
//     civics: "Aliyan"
// }
// const { comp:cn, bio:bn, arts:an, civics:ac } = students

// console.log(cn + " " + bn + " " + an + " " + ac + " end .")

// const { a, b } = { a:20, b:47 }
// console.log(a + " " + b + " . ")

// let { a, b= 20 } = { a:400, b:240 }
// console.log( a + " " + b + " . end. ")

// let { a: value = 230, b: val = 300 } = { a: 200 }

// console.log(value + " " + val + ".")

// const course = {
//     courseName: "JavaScript",
//     duration: "six Maths",
//     tutor: "Geeky Shows"
// }
// function show({courseName,duration,tutor}){
//     console.log(courseName + " " + duration + " " + tutor + " . ")
// }
// show(cour )

//Promises in javaScript
// const obj1 = new Promise(( resolve, reject ) => {
//     setTimeout(() => {
//         const roll_no = [ 11,22,33,44,55]
//         resolve(roll_no)
//         reject(`Unable to accomplish promise..`)
//     }, 2000)
// })
// const getBioData = (indexData) => {
//     return new Promise ( ( resolve, reject ) => {
//         setTimeout((indexData) => {
//             let bioData = {
//                 name: "Junaid",
//                 age: 2880
//             }
//             resolve(`My name is ${bioData.name} and my age is ${bioData.age} and my roll number is = ${indexData}.`)
//         }, 2000, indexData)
//     })
// }
// obj1.then((resolveRollNo) => {
//     console.log(resolveRollNo)
//    return getBioData(resolveRollNo[2])
// }).then((foRresolveRollNo) => {
//     console.log(foRresolveRollNo)
// })
// .catch((rejectError) => {
//     console.log(rejectError)
// })


//We can handle errors in async await function using try catch block

// async function getData() {
//     const forRoll = await obj1
//     console.log(forRoll)

//     const forObj = await getBioData(forRoll[2])
//     console.log(forObj)

//     return forObj //Whenever we return value, then we need to store it in some variable to access it(for display).Like seen 2 lines below
// }
// // getData()
// const obje = getData() //Whenever we return value, then we need to store it in some variable to access it(for display).Like seen here
// console.log(obje) //Now here we are able to access that returned value


// //axios get request 
// axios.get("https://example.com/events")
// .then(response => {
//     console.log(response.data)
// }).catch((error) => {
//     console.log(error)
// })

// //axios syntax
// config = {
//     method: 'method',
//     url: 'url',
//     data: {},
//     responseType: 'json'
// }
// axios(config)

                // or 

// axios({
//     method: 'method',
//     url: 'url',
//     data: {},
//     responseType: 'json'
// })

// axios({
//     method: 'post/get',
//     url: '/registration',
//     data: {name: 'Sonam'},
//     responseType: 'json'
// })

// var a = 10
// console.log(a)
// var a = 20
// console.log(a)


// // "use strict"  //Its good practice to use "use strict" before starting code in javaScript
 
// function sum(a,b){
//     console.log(typeof(add))
//     add = a + b
//     console.log(typeof(add))
    

// }
// sum(2,4)



//exports in JavaScript
// There are two types of exports in javaScript
//  1.Default Exports
//  2.Named Exports 


// Class exports in javaScript

//Default Exports
//export default class Nokia {
    //properties
    //methods
// }
        // OR
// class Nokia{
//     properties
//     methods
// }
//export default Nokia



// function exports in javaScript
// export default function show(){

// }
// function show(){

// }
            // OR
// export default show()


//variables default export in javaScript
//export default const a = 10  //Not works

//const a = 10
//export default a

//................

//Named Exports class in javaScript
// export class Nokia {
//     properties 
//     Methods
// }
                // OR
// class Nokia {
//     ...
// }
//export {Nokia}


//Named Exports functions in javaScript
//export function show(){
// }
                //OR
// function show(){
//     ...
// }
// export {show()}


//Named Exports variables in JavaScript
// export const  a = 10
            // OR
// const a = 10
// export {a}
//..................................................................................................................


//We can have multiple named exports per module
//like this

// export { Nokia,show }


//Imports in modules

//Default Imports
//You can only have one default export per module.A default export can be imported with any name.
// e.g import className from path
// import Nokia from './mobiles.js'  //we can write any name instead of 'Nokia'

//Named Imports
//In named imports it is mandatory to put the same name as written in the export defaults
// e.g import {className} from path
// import {Nokia} from './mobile.js'

//We can have multiple named exports in the same module
// import { Nokia, show } from './mobile.js' 

// or we can import all named exports like this
// import * as device from '/mobile.js'    // device is alas, we can write anything instead of device, and once we write this line than we can access it with 
// device.Nokia 
//device.show
//device.a
  

//importing Named and default export together
//import default export, { named export } from path
// import Nokia, { show } from './mobile.js'


// Immediate calling of function
// (() => {
//     var a = "This is Immediate function object"
//     console.log("a = " + a)
// })()


//JavaScript have two data types
// 1)Primitive Data types        => These data types pass values         => Primitives are immutable  (But the reassingnment is not the same as mutable or immutable)
// 2)Structural Data types       => These data types pass references     => Structure contains mutable data, and they still shares reference

// Primitive data types are of following types    =>We are passing values in primitive data types

// 1)undefined
// 2)Boolean
// 3)String
// 4)Number
// 5)BigInt
// 6)Symbol

//Structural Data types         => These data types uses references in memory like a pointer to where those values are, instead of passing the values themselves
// 1)Objects: (new) Object, Array, map, Set, WeakMap, Date
// 2)Functions 

//Pure functions require you to avoid mutating the data.
//Impure functions that mutates the data


//Mutable Vs Immutable
// let myName = "Dave"
// // myName[0] = "W",     //It doesn't changes the output because "myName" is a string, it is not an array.
// // myName = "Wavee"   //it changes output because it is a reassignment of variable
// console.log(myName)  

//Structures contains mutable data(means we can change its values in between)
// let xArray = [1,2,3,4]
// yArray = xArray  //It does not assigns values, yArray references to xArray value, so after writing this line when we change yArray it changes xArray also because yArray is referencing to xArray so when we change yArray value it basically changes the values of xArray because yArray is referencing to xArray value.  


// // yArray = [1,2,3,4]
// console.log(yArray)
// // yArray[0] = 9
// yArray[2] = 1
// // yArray[4] = 9
// console.log(yArray)
// console.log("See, now xArray is changes but we didn't changed that because structure data types use references." + xArray)


//Pure functions require us to avoid mutating the data

//Impure functions mutates the data
// e.g
// const addToScoreHistory = ( array, score ) => {
//     array.push(score)
//     return array
// }
// const scoreHistory = [1,2,3,4]
// console.log(addToScoreHistory(scoreHistory, 23))
// console.log(scoreHistory)

//This mutates the orignal array.
//This is considered to be the side-effect 
// & we want to avoid side effects when we are creating pure functions 


//Notice: "const" does not immutates the array
//because array is a structural data type(means mutable), so thats why we can still change the elements in array with "const" but we are not able to reassing this array.


//We need to modify our function so, it does not mutate the orignal data.

//Shallow copy Vs Deep Copy  (both of them are clones)

//Shallow Copy
// const yArray = [ 9,2,3,4 ]
// const zArray = [...yArray, 100 ]  //These spread operators makes it shallow copy 
// console.log(zArray) 
// console.log(yArray)
// console.log(yArray === zArray)

// //With object.assign()  => Shallow Copy
// const tArray = Object.assign([], zArray)
// console.log(tArray)
// console.log(tArray === zArray)    //Are not equal because they are not using he same references in the memory, so here we have made a clone that is independent

// tArray.push(11)
// console.log(tArray)
// console.log(zArray) 

//So, we learned that spread operators and object.assign() does not uses the same references they make clones that are independent(called shallow copies)

//But nested data structures still share the same references, when we use shallow copies.No matter we use object.assign() or spread operators to make a new array or even a new object.
//They don't share references until that orignal has a nested structural data type.

//But the problem is the shallow copies does not goes the levels deep when it comes to structural data types.

//So, any nested structural data types still share a reference although the types that are not nested they dont, so that's why it is called as shallow copy.

//Note: Array.from() and slice() create shallow copies, too.

//When it comes to objects, what about..
// ...Object.freeze() ??        => Object.freeze() creates a shallow freeze

// const scoreObj = {
//     "first" : 11,
//     "second": 22,
//     "third" : { "a": 1, "b":2 }
// }
// console.log(scoreObj)
// Object.freeze(scoreObj)     //Object.freeze is essentially a shallow freeze    => still mutates nested objects
// scoreObj.third.a = 9        //Even though we freeze the object, we are still able to mutate its value,under the nested object
// console.log(scoreObj)

//Object.freeze will not stop our issue, we need to avoid these mutations.

//Deep copy is needed to avoid these mutations with structural data types
//Several libraries like lodash, Ramda, and others have this feature built-in.

//Here is one line Vanilla JS Solution, 
//but it does not work with functions, Dates, undefined, Infinity, RegExps, Maps, Sets, Blobs, FileLists, ImageDatas and
//other complex data types

// const newScoreObj = JSON.parse(JSON.stringify(scoreObj))
// //but the issues is JSON.stringify() loses the data types that we list above(3 or 4 lines above).
// console.log(newScoreObj)
// console.log( newScoreObj === scoreObj )  //Are not equal means they both are not pointing to the same references.

// newScoreObj.third.a = 20
// console.log( newScoreObj )
// console.log( scoreObj )

//Instead of using a library, here is a vanilla JS function

// const deepClone = (obj) => {
//     if (typeof obj !== "object"  ||  obj === null ) return obj

//     //Create an object or an Array to hold the values
//     const newObject = Array.isArray(obj) ? [] : {}

//     for( let key in obj ) {
//         const value = obj[key]
//         //Recursive call for nested objects and Arrays
//         newObject[key] = deepClone(value)
//     }
//     return newObject
// }

// // const newScoreObj = deepClone(scoreObj)
// // console.log( newScoreObj)
// // console.log( newScoreObj === scoreObj )

// //Now after deepCloning we are able to make pure functions, pure functions will not mutate the data
// const pureAddToScoreHistory = ( array, score, cloneFunc) => {
//     const newArray = cloneFunc(array)
//     newArray.push(score)
//     return newArray
// }
// const dataWeHave = [ 2,3,4,5]
// const pureScoreHistory = pureAddToScoreHistory( dataWeHave, 19, deepClone )
// console.log(pureScoreHistory)
// console.log(dataWeHave)  //Now its value is not mutated because of deepClone


//So we conclude that deep Copies share no references, that's why we need to learn how to make deep copies because through this
//way we are able to protect our orignal data from overwriting.
//Otherwise without deepCloning we are unable to protect our orignal data from changing(in shallow copies).


//Pure Functions 

//A part of functional programming paradigm

//Why write pure function?
// 1. Clean Code.
// 2. Easy to test.
// 3. Easy to debug.
// 4. Decoupled and Independent
// 5. Could be added to your utility functions.

//Rules for writing pure functions:
// 1) The same input always gives the same output.
// 2) No side effects.

// e.g
// const add = (x, y ) => x + y                                                       console.log(add(2,3))
// const fullName = (firstName, lastName) => `${firstName} ${lastName}`               console.log(fullName("Dave", "Gray"))

//We can replace the function with the output itself.
//This is called "referential transparency".(this makes pure functions easy to test).

// -------
// A pure function should have atleast one parameter

//Pure functions cannot:
// Access a database, API, file system, storage, etc.
// Modify the DOM
// OR even log to the console

//That said, clearly "impure" functions are necessary 
//but they are harder to test and debug

//In pure functions
//No input state can be modified.
//That is, no data should be "mutated".
//Consider all input data to be immutable.


//Impure function (increment)
// let x = 1
// const impureIncrement = () =>  x += 1        //Function without having atleast one parameter is impure
// console.log(impureIncrement())
// console.log(x)           // x value is also mutated, so that's why its impure

// // pure function (increment)
// let x = 1
// const pureIncrement = (num) => num += 1
// console.log(pureIncrement(x))
// console.log(x)           // x becomes immutable, it does not changes,so that's why its pure


// Impure function
// const myArray = [ 1,2,3 ]
// const addToArray = ( array, data ) => {
//     array.push(data)
//     return array
// }
// console.log(addToArray(myArray, 4))
// console.log(myArray)                     //myArray value is also mutated

//Pure function
// const myArray = [1,2,3]



// let x = 1

// const incremented = (val) => val = val + x
// console.log(incremented(6))
// console.log(x)

//Impure function
// const myArray = [1,2,3]
// const addToArray = (array,data) => {
//     array.push(data)
//     return array
// }
// console.log(addToArray(myArray, 4))
// console.log(myArray)

//Pure Function
// const myArray = [1,2,3]
// const addToArray = (array,data) => [...array, data]       //Spread operator method is used.Short method is used to make this function pure.
// console.log(addToArray(myArray, 4))
// console.log(myArray)

//Note: Pure functions always return something.
//No returns means you do not have a pure function.

//The common higher order functions are pure functions.
// e.g
//      1)
    // const oneToFive = [1,2,3,4,5]
    // const oddToFive = oneToFive.filter(elem => elem % 2 != 0)
    // console.log(oddToFive)
    // console.log(oneToFive)

//   2)
    // const oneToFive = [1,2,3,4,5]
    // const doubled = oneToFive.map(elem => elem * 2)
    // console.log(doubled)
    // console.log(oneToFive)

    // 3)
    // const summed = oneToFive.reduce

    //splice method in javaScript
    // var friends = ['junaid','mudassar', 'jahanzaib', 'omar']
    // console.log(friends.splice(3,1,"Samsung"))  // 1.Starts from ,2.Deletion, 3.Insertion
    // var friends = [ 'mobile', 'tablet', 'smartphones', 'watches']
    // friends.splice(2,0, "Dell", "HP" ) //Starts from index 2, delete from index 0, and add "Dell" and "HP" to index 2 
    // console.log(friends)
    // //splice parameters(have 4 parameters)
    // //  1) From array index                                  (from above example => from array index 2)
    // //  2) Delete value which is given in first parameter    (from above example => delete 0 index, means nothing to delete)
    // //  3) Add value to the place from where it is deleted in 2nd parameter    (from above example => add "Dell" from 2nd index)
    // //  4) 
    // console.log(friends)

// Intefaces in typeScript

// interface Point {
//     x: number,
//     y: number
// }

// const myPoint = {
//     x: 20,
//     y: 30
// }

// function logPoint( p, y ) {
//     console.log( p.x + p.y )
// }

// logPoint()

// Reflect Object in JavaScript

// let students = {
//     name: 'Junaid',
//     // class: 'FSC',
//     age: 200,
//     likes: ( a, b ) => {
//         console.log(`Name of the student is ${students.name} and his called with name = ${a} wheras his age = ${b}`)
//     }
// }

// console.log(Reflect.ownKeys(students))
// console.log(Reflect.get(students, 'age'))
// console.log(Reflect.set(students, 'age', 45))
// console.log(Reflect.get(students, 'age'))
// console.log(Reflect.has(students, 'class'))
// console.log(Reflect.apply(students.likes, students, Reflect.ownKeys(students)))   //is used for object functions(above all are only used for object values)
// console.log(Reflect.defineProperty(students, 'class', { value: 'EcoFriendly' }))
// console.log(Reflect.get(students, 'class'))

// defineProperty in JavaScript

// let Student = {
//     name: 'Junaid',
//     age: 333,
//     class: 'Abc'
// }
Object.defineProperty(Student, 'height', {
    value: 'def'
})
console.log(Student)
console.log("These are total Students = " + Students )