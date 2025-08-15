let switchbtn = document.querySelector("#s-btn")
let body = document.querySelector("body")
let formbtn = document.querySelector("#form-btn")
let talkbtn = document.querySelector(".btn")
let formsec = document.querySelector(".contact-sec")

switchbtn.addEventListener("click",(()=>{
    if(body.style.backgroundColor == "black"){
        body.style.backgroundColor = "white"
        body.style.color = "black"
        switchbtn.innerHTML = "Dark mode"
    }
    else{
        body.style.backgroundColor = "black"
        switchbtn.innerHTML = "Light mode"
    }
}))

formbtn.addEventListener("click",function(){
    formbtn.innerHTML= "Done"
    alert("Your form is submitted.")
})

talkbtn.addEventListener("click",function(){
    if(formsec){
        formsec.scrollIntoView({
            behavior:"smooth"
        })
    }
    else{
        alert("No form found")
    }
})