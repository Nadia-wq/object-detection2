img="";
objects=[];
status="";
function preload(){
    img=loadImage('people and elephant.jpeg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);

}
function modelLoaded(){
    console.log("model loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        objects=results
    }
}
function draw(){
    image(img,0,0,640,420);
    if(status!="")
    {
        
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="status:objectDetected"+objects.length;
            fill("black");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke ("green");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
        }
    }
}