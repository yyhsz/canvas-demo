var canvas = document.getElementById('canvas'); var ctx = canvas.getContext('2d'); var usingpencil = false;
var newPoint = {x:undefined , y:undefined} ; lastPoint = {x:undefined , y:undefined};var usingrubber = false;
var rubberEnabled = false; var pencilEnabled = false;

setPageSize()
//设置页面大小
function setPageSize() {
    pagesize()
    window.onresize = function(a){
        pagesize()
    }
}
function pagesize() {  //设置页面大小函数
    var pageHeight = document.documentElement.clientHeight; var pageWidth = document.documentElement.clientWidth;
    canvas.height = pageHeight; canvas.width = pageWidth;
}


//
function drawCircle(x,y,radius) {
ctx.beginPath();ctx.arc(x,y,radius,0,Math.PI*2);ctx.fill();
}
function drawLine(x1,y1,x2,y2) {
    ctx.beginPath();ctx.moveTo(x1,y1); ctx.lineWidth = 4;  ctx.lineTo(x2,y2); ctx.stroke();
}
//按下鼠标
canvas.onmousedown = function(a){
    var x = a.clientX; var y = a.clientY; //cilenXY是相对于视口的坐标
    

    if (rubberEnabled) {
        ctx.clearRect(x-10,y-10,20,20);usingrubber = true;
    }
    if (pencilEnabled){
        usingpencil = true;drawCircle(x,y,2)
        lastPoint.x = x ; lastPoint.y = y;
    }
}    
//抬起鼠标
canvas.onmouseup = function(a){
    usingpencil = false;usingrubber = false;
}
//移动鼠标
canvas.onmousemove = function(a){
    var x = a.clientX; var y = a.clientY; //cilenXY是相对于视口的坐标
    if (usingpencil) {
        newPoint.x = x; newPoint.y = y;
        drawCircle(x,y,2); 
        drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
        lastPoint.x = newPoint.x; lastPoint.y = newPoint.y;
    }
    if (usingrubber){
        ctx.clearRect(x-10,y-10,20,20)
    }
}
//使用橡皮擦

rubber.onclick = function(a){
    pencilEnabled = false;rubberEnabled = true;
    
    
    }
//使用铅笔
pencil.onclick = function (a){
    pencilEnabled = true; rubberEnabled = false;
}