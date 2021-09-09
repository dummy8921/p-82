canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouse_event="empty";
var last_posofx,lestposofy;
color="purple";
width_of_line=4;

canvas.addEventListener("mousedown",MyMouseDown);
function MyMouseDown(e)
{
    color=document.getElementById("color").value;
    mouse_event="mousedown";
}

canvas.addEventListener("mouseup",MyMouseup);
function MyMouseup(e)
{
    mouse_event="mouseup";
}

canvas.addEventListener("mouseleave",MyMouseleave);
function MyMouseleave(e)
{
    mouse_event="mouseleave";
}

canvas.addEventListener("mousemove",MyMouseMove);
function MyMouseMove(e)
{
    current_pos_x=e.clientX-canvas.offsetLeft;
    current_pos_y=e.clientY-canvas.offsetTop;

    if(mouse_event=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_posofx,lestposofy);
        ctx.arc(current_pos_x,current_pos_y,40,0,2*Math.PI);
        ctx.stroke();
    }
    last_posofx=current_pos_x;
    lestposofy=current_pos_y;
   
}

function clearArea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}
