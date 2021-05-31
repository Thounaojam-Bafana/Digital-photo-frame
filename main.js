function preload(){
    floral_border_left = loadImage('https://i.postimg.cc/nczGRGKM/toppng-com-flower-flowers-and-butterflies-butterflies-and-flowers-clipart-1486x1874.png');
    top_flower = loadImage('https://i.postimg.cc/SRL3g7cg/toppng-com-flowers-1548x550.png');
    floral_border_right = loadImage('https://i.postimg.cc/Y0f2QF0H/unnamed.png');
}

function setup(){
    canvas = createCanvas(800, 800);
    canvas.position(275, 175);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){

    fill(4, 217, 213);
    rect(10,0,425,470);

    image(video, 80,60,300,350);
    
    image(floral_border_left, 17, 220,150,250);

    image(top_flower, 75, 10,325,100);

    image(floral_border_right, 300, 220,140,270);
}

function take_snapshot(){
    save('image.png');
}

