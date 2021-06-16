function setup(){
canvas=createCanvas(350,350);
canvas.position(800,190);
video=createCapture(VIDEO);
video.size(400,400);
video.position(100,190);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function draw(){
background("#694200");
}
function modelLoaded(){
    console.log("model is initialized")
}

function gotPoses(results){
    if(results.length>0){
console.log("results");
    };

}
