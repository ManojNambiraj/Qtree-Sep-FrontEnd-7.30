// DOM ---> (Document object model)

// JS ---> ES5

// let ele1 = document.getElementById("demo")

// console.log(ele1);

// ele.innerText="hi"
// ele.innerHTML = "<h1>Hello, Good Evening</h1>"


// let ele2 = document.getElementsByClassName("para")

// console.log(ele2);

// ele2[2].innerText = "hello"



// let ele3 = document.getElementsByTagName("p")

// console.log(ele3);

// ele3[0].innerText = "Last para"
// ele3[0].style.backgroundColor = "red"
// ele3[0].style.color = "yellow"
// ele3[0].style.fontSize = "2em"


// let ele = document.querySelector("#demo")

// console.log(ele);

// ele.innerHTML="<h2>Hello</h2>"

// let ele = document.querySelectorAll("p")

// console.log(ele);



// C R U D ---> Create Read Update Delete


// let newEle = document.createElement("h1")

// newEle.innerText="Hello world"

// document.body.append(newEle)

let newDiv = document.createElement("div")

let newH1 = document.createElement("h1")

newH1.innerText = "Hello"

let newP = document.createElement("p")

newP.setAttribute("class", "para10")

newP.innerText="Good evening...!"
// newP.style.backgroundColor = "yellow"

newDiv.appendChild(newH1)

newDiv.appendChild(newP)

document.body.append(newDiv)