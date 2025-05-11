let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate= 0.8
    text_speak.pitch= -1
    text_speak.volume= 1
    text_speak.lang = "en-US"
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
    if(message.includes("hello") || message.includes("hi") ||  message.includes("hey")){
        speak("Hello I am Iris how can I help you?")
    }
    else if (message.includes("thank you")) {
        speak("welcome thanks for developing me")
    }
    else if (message.includes("how are you")) {
        speak("I am Fine thank you how are you")
    }
    else if (message.includes("help")) {
        speak("yes definetly I am your personalized assistant I am created to help you tell me what can i do for you")
    }
    else if (message.includes("who created you") || message.includes("who are you") ||  message.includes("who developed ")) {
        speak("I am an Virtual Assistant , you can call me Iris which is Created By Bhuvan Hingorani")
    }
    else if ( message.includes("introduce yourself")) {
        speak("Hello, I am an Virtual assistant named Iris I am here to help you by execcuting some commands that are already programmed in my system , I am able to do various functions like accessing google,you tube, whatsapp and many more and i am also give refernces to you and I also have my chat bot  with me")
    }
    else if (message.includes("did you work") || message.includes("can you open") || message.includes("access")) {
        speak("Yes I am able to get opened in android devices and Ios Devices")
    }
    else if (message.includes("suggestions") || message.includes("suggest") || message.includes("Guide") || message.includes("advice")){
    speak("Yes I am but I can only give you a reference of google I can't able to give you a suggestions like humans ")
    window.open("https://www.google.co.in/")   
    }
    else if (message.includes("open youtube")) {
        speak("opening youtube")
        window.open("https://www.youtube.com/")
    }
    else if (message.includes("music") || message.includes("songs")) {
        speak("opening Spotify")
        window.open("https://open.spotify.com/")
    } 
    else if (message.includes("open iris")) {
        speak("yes i am opened now , I am Irisss , The AI")
    }    
    else if (message.includes("open facebook")) {
        speak("opening facebook")
        window.open("https://www.facebook.com/")
    }
    else if (message.includes("open instagram")) {
        speak("opening instagram")
        window.open("https://www.instagram.com/")
    }
    else if (message.includes("open amazon")) {
        speak("opening Amazon")
        window.open("https://www.amazon.in/")
    }
    else if (message.includes("open Flipkart")) {
        speak("opening Flipkart")
        window.open("https://flipkart.com/")
    }
    else if (message.includes("open snapchat")) {
        speak("opening Snapchat")
        window.open("https://www.snapchat.com/")
    }
    else if (message.includes("coding") || message.includes("programming") || message.includes("code")) {
        speak("I am an Virtual Assitant named Iris which is created with the help of programming languages like HTML , CSS and JAVASCRIPt , i am a front end web application")
    }
    else if (message.includes("open google")) {
        speak("opening google")
        window.open("https://www.google.co.in/")
    }
    else if (message.includes("chatbot")) {
        speak("here it is , I am opening my personalised chat bot")
        window.open("https://irrischatbott.netlify.app/")
    }
    else if (message.includes("current location")) {
        speak("Going on google map")
        window.open("https://www.google.com/maps/")
    }
    else if (message.includes("open calculator")) {
        speak("opening calculator")
        window.open("calculator://")
    }
    else if (message.includes("open whatsapp")) {
        speak("opening whatsapp")
        window.open("https://www.whatsapp.com/")
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


