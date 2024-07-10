import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
//import axios from 'axios'

// const num = document.querySelector('.number')
// const numVal = Number(num.getAttribute('data-value'))
// let counter = 0
let bars_icon = document.querySelector('.icon')
let close_icon = document.querySelector('.icon-x')
const orderButton =document.querySelectorAll(".order-button")
const paymentForm = document.getElementById('paymentForm');
// const priceAmt = document.querySelectorAll('.price-amt')
const formClose = document.querySelector(".form-close")
let z =document.getElementById("amount")
let t = document.getElementById("amount").value 
// let page = document.querySelectorAll("sect")

window.addEventListener('load',()=>{
  
  document.querySelector('.loader').classList.add('rem_loader')
  document.querySelector('.carousel').classList.add('carousel-show')
}) 


// window.addEventListener("load", ()=>{

bars_icon.addEventListener('click', ()=>{
  document.querySelector('nav').classList.add('show')
})

close_icon.addEventListener("click",()=>{
  document.querySelector("nav").classList.remove('show')
})

document.querySelector("nav").addEventListener('click',()=>{
  document.querySelector("nav").classList.remove('show')
})

const options = {
  root:null,
  threshold:0.1,
  // rootMargin:"2px"
}


let observer =new IntersectionObserver(e=>{
  e.forEach(entry=>{
    console.log(entry.target)
    if(entry.isIntersecting){
      entry.target.classList.add("shows")

    }
  })
},options)

const hiddenElement = document.querySelectorAll(".hidden")
hiddenElement.forEach(el=>observer.observe(el))

let result = function h1(e,h1Element,amt){
  h1Element = e.target.parentElement.querySelector('.price-amt');
  // console.log(h1Element.innerHTML)
   amt = Number(h1Element.innerHTML)
  // console.log(amt)
  paymentForm.classList.add("display")
  t = amt
  return  z.setAttribute("value",t);
}

orderButton.forEach(order=>{
  order.addEventListener("click", result)
})



formClose.addEventListener("click",()=>{
  paymentForm.classList.remove("display")
})

paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();

  
  
  let handler = PaystackPop.setup({
    key: 'pk_test_46f241be533ea3c26f9b4871d3a81003d2897376', // Replace with your public key
    email: document.getElementById("email-address").value,
    // page: document.getElementById("page").value
    amount: t*100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();

  document.getElementById('paymentForm').classList.remove("display");
  document.getElementById("email-address").value = " ";
  document.getElementById("first-name").value = " ";
  document.getElementById("last-name").value = " " ;
}



document.getElementById('contact-form').onsubmit = (e) =>{
  e.preventDefault()
 
  // if(document.getElementById('phone').value.length !== 11 ){
  collector()

 const params= {
  from_name:document.getElementById('fname').value,
  email_id:document.getElementById('email').value,
  message:document.getElementById('message').value

 }
 const serviceId="service_dssii1s"
const templateId="template_k0uieaw"
emailjs.send(serviceId,templateId,params).then(
  res=>{
  alert("Message sent successfully")

console.log(res)

})
.catch(err=>console.log(err));


document.getElementById('fname').value =" "
document.getElementById('lname').value =" "
document.getElementById('email').value =" "
document.getElementById('phone').value =" "
document.getElementById('message').value =" "
}//else{
//   alert("Please check if the number is up to 11 digits and The email has an @ symbol")
//   return false
// }
//}


function collector(){

  const firstName = document.getElementById('fname').value;
  const lastName = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  
  const userInputs ={
   firstName,
   lastName,
   email,
   phone,
   message
  }

  fetch('/user',{
    method: 'POST',
    headers: {
       'Content-Type': 'application/json'
    },
    body: JSON.stringify({ firstName,lastName,email,phone,message})
 })
 .then(response => {
  if (response.ok) {
    console.log('User registered successfully');
  } else {
    console.error('Failed to register user');
  }
})
.catch(error => {
  console.error('Failed to register user:', error);
});
  // const myUserInput = JSON.stringify(userInputs)
  // localStorage.setItem("userTable", myUserInput)
}


// })


//function loader(){






  // interval = setInterval(() => {
  //   if (counter !== numVal) {
  //     //document.querySelector(".loader").style.display ="block";
  //     // counter++
  //     // num.innerHTML = `${counter}%`
  //     document.querySelector("body").style.overflowY= "hidden";
  //     document.querySelector('.carousel').style.display = "none"
  //   }
  //   if(counter === numVal){

  //     console.log('done')
  //     document.querySelector(".loader").style.display ="none";
  //     document.querySelector('.carousel').style.display = "block"
  //     document.querySelector("body").style.overflowY= "scroll";
  //     clearInterval(interval)
  //   }
  // }, 80)
//}




// const scrollTracker= document.querySelector(".scroll-tracker")
// const scrollTrackingTimeline = new ScrollTimeline({
//   source:document.scrollingElement,
//   orientation:"block",
//   scrollOffsets: [CSS.percent(0), CSS.percent(100)]
// });

// scrollTracker.animate(
//   {
//     transform:["scaleX(0)", "scaleY(1)"],
//   },
//   { 
//     duration: 1,
//     timeline:scrollTrackingTimeline,
//   }
// );













// page.forEach(i=>{
//   i.addEventListener('click',()=>{
//     document.querySelector("nav").classList.remove('show')
//   })
// })

// var page = 1;

// function showPage(n) {
//   var pages = document.getElementsByClassName('page');
  
//   if (n > pages.length) {
//     page = 1;
//   }
//   if (n < 1) {
//     page = pages.length;
//   }
//   for (var i = 0; i < pages.length; i++) {
//     pages[i].style.display = 'none';
//   }
//   pages[page-1].style.display = 'block';
// }

// function prevPage() {
//   showPage(page -= 1);
// }

// function nextPage() {
//   showPage(page += 1);
// }


// var prevBtn = document.querySelector('.prev');

// function showPage(n) {
//   var pages = document.getElementsByClassName('page');
  
//   if (n > pages.length) {
//     page = 1;
//   }
//   if (n < 1) {
//     page = pages.length;
//   }
//   for (var i = 0; i < pages.length; i++) {
//     pages[i].style.display = 'none';
//   }
//   pages[page-1].style.display = 'block';
  
//   // check if first page
//   if (page === 1) {
//     prevBtn.style.display = 'none';
//   } else {
//     prevBtn.style.display = 'block';
//   }
// }

// function prevPage() {
//   showPage(page -= 1);
// }

// function nextPage() {
//   showPage(page += 1);
// }

// showPage(page);

// showPage(page);


// var page = 1;
// var prevBtn = document.querySelector('.prev');
// var controls = document.querySelectorAll('.control');

// function showPage(n) {
//   var pages = document.getElementsByClassName('page');
  
//   if (n > pages.length) {
//     page = 1;
//   }
//   if (n < 1) {
//     page = pages.length;
//   }
//   for (var i = 0; i < pages.length; i++) {
//     pages[i].style.display = 'none';
//   }
//   pages[page-1].style.display = 'block';
  
//   // check if first page
//   if (page === 1) {
//     prevBtn.style.display = 'none';
//   } else {
//     prevBtn.style.display = 'block';
//   }
  
//   // update active control
//   for (var i = 0; i < controls.length; i++) {
//     controls[i].classList.remove('active');
//   }
//   controls[page-1].classList.add('active');
// }

// function prevPage() {
//   showPage(page -= 1);
// }

// function nextPage() {
//   showPage(page += 1);
// }

// showPage(page);
