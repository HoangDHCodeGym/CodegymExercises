let canvas = document.getElementById("myCanvas");
const WIDTH = canvas.width;
const HEIGHT = canvas.height;
//Main program
let objectList = [];
createBalls(objectList,18);
animate(objectList);

function createBalls(objectList, numberOfBalls) {
    let ColorList = ["red","blue","green","orange","yellow","brown","pink","tan"];
    let leftAcc =0;
    let topAcc = 0;
    let left,top,radius,color;
    for (let i = 0; i < numberOfBalls; i++) {
        do {
        radius = getRandom(10,30);
        left = getRandom(0+radius,WIDTH-radius);
        top = getRandom(0+radius, HEIGHT-radius);
        color = ColorList[getRandom(0,7)];
        leftAcc = getRandom(-4,4);
        topAcc = getRandom(-4,4);
        } while ((leftAcc==0)&(topAcc==0));

        let ball = new Ball(left, top, radius, color, leftAcc, topAcc);
        objectList.push(ball);
    }
}
//Lấy ngẫu nhiên
function getRandom(low,high) {
    let result = Math.floor(Math.random()*(high-low)+low);
    return result;
}
//Chuyển động
function animate(objectList) {
    let timeFrame = 20;
    setInterval(function() {render(objectList)},timeFrame);
}
//Vẽ hình
function render(objectList) {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (let element of objectList) {
        element.randomMove();
        element.draw();
    }
}

//Kiểm tra va chạm
function checkCollision(objA, objB) {
    if ((objA.top!=objB.top)&&(objA.left!=objB.left)) {
        distance = Math.pow(objA.top-objB.top,2)+Math.pow(objA.left-objB.left,2)
        if (distance<Math.pow(objA.radius+objB.radius,2)) {
            return true;
        }
    }
    return false;
}
function ifCollideAnyObject(objA, objectList) {
    for (let objB in objectList) {
        if (checkCollision(objA, objB)==true) {
            return true;
        }
    }
    return false;   
}