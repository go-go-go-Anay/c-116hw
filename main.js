hatX = 0;
hatY = 0;
function preload(){
hat_image = loadImage("Hat.png");
}

function setup(){

    canvas = createCanvas(450, 360);
    canvas.position(535, 300);

    video = createCapture(VIDEO);
    video.hide();
    video.size(450, 450)

    poseNet  = ml5.poseNet(video, modelloaded);

poseNet.on('pose', gotPoses);
}

function draw(){

    image(video, 0, 0, 450, 360);
    image(hat_image, hatX, hatY, 200, 180);
}

function takepic(){
save("my_pix.png");

}

function modelloaded(){
    console.log("poseNet is initialised");
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);

    console.log("the x position of the nose is " + results[0].pose.nose.x);
    console.log("the y position of the nose is " + results[0].pose.nose.y);

    hatX = results[0].pose.nose.x - 100;
    hatY = results[0].pose.nose.y - 290;
}
}



