function preload(){

}

function setup(){
canvas=createCanvas(500,400);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();

tint_color="";
}

function draw(){
image(video,0,0,500,400);
tint(tint_color);
fill(255, 0, 0);
stroke(255, 0, 0);
circle(30, 30, 65);
circle(468, 30, 65);
circle(30, 368, 65);
circle(468, 368, 65);
fill(0, 255, 0);
stroke(0, 255, 0);
rect(62, 368, 375, 20);
rect(20, 60, 20, 280);
rect(460, 60, 20, 280);
rect(62, 30, 375, 20);

}
function tint_Filter(){
tint_color=document.getElementById("filter_input").value;
}

function take_snapshot(){
    save('image.png');
}