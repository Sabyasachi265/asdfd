var prediction1 = "";
var prediction2 = "";

Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function Camman(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captureimage" src="'+data_uri+'"/>'
    });
}

console.log('ml5 version : ', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JRZ4MgI2p/model.json', ModelLoaded);

function ModelLoaded(){
    console.log("model loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    dataname1 = "The first prediction is:"+prediction1;
    dataname2 = "And the second prediction is:"+prediction2;
    var utterthis = new SpeechSynthesisUtterance(dataname1+dataname2);
     synth.speak(utterthis);
}

function Vs(){
    img = document.getElementById('captureimage');
    classifier.classify(img, Gotresult);
}

function Gotresult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if(results[0].label == "blush"){
            document.getElementById("new").innerHTML = "&#128522;";
        }
        if(results[0].label == "happy"){
            document.getElementById("new").innerHTML = "&#128512;";
        }
        if(results[0].label == "sad"){
            document.getElementById("new").innerHTML = "&#128532;";
        }
        if(results[0].label == "cry"){
            document.getElementById("new").innerHTML = "&#128546;";
        }
        if(results[0].label == "really angry"){
            document.getElementById("new").innerHTML = "&#128545;";
        }
        if(results[0].label == "angry"){
            document.getElementById("new").innerHTML = "&#128548;";
        }

        if(results[1].label == "blush"){
            document.getElementById("newemoji").innerHTML = "&#128522;";
        }
        
        if(results[1].label == "happy"){
            document.getElementById("newemoji").innerHTML = "&#128512;";
        }
        if(results[1].label == "sad"){
            document.getElementById("newemoji").innerHTML = "&#128532;";
        }
        if(results[1].label == "cry"){
            document.getElementById("newemoji").innerHTML = "&#128546;";
        }
        if(results[1].label == "really angry"){
            document.getElementById("newemoji").innerHTML = "&#128545;";
        }
        if(results[1].label == "angry"){
            document.getElementById("newemoji").innerHTML = "&#128548;";
        }


    }
}