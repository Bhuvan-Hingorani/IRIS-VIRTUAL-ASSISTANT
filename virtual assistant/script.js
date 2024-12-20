let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-US"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    console.log(hours)
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon Sir")
    }
    else{
        speak("Good Evening Sir")
    }

}
window.addEventListener('load',()=>{ 
   wishMe()
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener('click',()=>{
       recognition.start()
       btn.style.display="none"  
       voice.style.display="block"          
})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none" 
    if(message.includes("hello")){
        speak("Hello sir how can I help you?")
        
    }
    else if (message.includes("thank you")) {
        speak("welcome sir thanks to developing me")
    }
    else if (message.includes("who created you")) {
        speak("I am an Virtual Assistant Created By Bhuvan Hingorani")
    }
    else if (message.includes("open youtube")) {
        speak("opening youtube")
        window.open("https://www.youtube.com/")
    }
    else if (message.includes("open facebook")) {
        speak("opening facebook")
        window.open("https://www.facebook.com/")
    }
    else if (message.includes("open instagram")) {
        speak("opening instagram")
        window.open("https://www.instagram.com/")
    }
    else if (message.includes("open google")) {
        speak("opening google")
        window.open("https://www.google.co.in/")
    }
    else if (message.includes("open calculator")) {
        speak("opening calculator")
        window.open("calculator://")
    }
    else if (message.includes("open whatsapp")) {
        speak("open whatsapp")
        window.open("whatsapp://")
    }
    else if (message.includes("time")) {
        let time= new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else{
       let final = "this i found on internet regarding" + message.replace("iris","") || message.replace("virus","")
        speak(final)
        window.open(`https://www.google.com/search?q=${message.replace("iris","") }`)
    }
}

