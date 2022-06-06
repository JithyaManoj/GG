Webcam.set({
    width:350 ,
    height:300 ,
    image_format:"png" ,
    png_quality:90
});

Webcam.attach("#camera");

function takepic(){
    Webcam.snap(function(pic){
        document.getElementById("result").innerHTML="<img id='i' src='"+pic+"'>";
    });
    
}

facemodel= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Wax12tE_0/model.json",modeloaded);

function modeloaded(){
console.log("YAY");
}

p1="";
p2="";

 speak()
 
function speak(){
    speakdata1= "prediction 1 is" +p1;
    speakdata2= " and the prediction 2 is" +p2;
    speak_audio= new SpeechSynthesisUtterance(speakdata1+speakdata2);
    window.speechSynthesis.speak(speak_audio);
}