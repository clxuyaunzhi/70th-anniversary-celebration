var bigphoto=document.getElementById("bigphoto");
var change=true;
window.onmousewheel=function(){
	if(change==true){
		animate();
	}
	change=false;
	
}
function animate(){

	var time=setInterval(function(){
		var present=parseInt(bigphoto.style.height);
		var movement=present/60;
		bigphoto.style.height=present-movement+"px";
		if(present==487)
		{
			clearInterval(time);

		}			
	},30)

}

// var index = 0;                            //全局索引
// var colorIndex = 0;
// window.onclick=function( e){
// 	  var arr = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
//       var colorArr = new Array("red", "orange", "yellow", "green", "blue", "indigo", "purple");
//       var span=document.createElement("span");
//       var text=document.createTextNode(arr[index]);
//       span.appendChild(text);
//       document.body.appendChild(span);
//       index = (index + 1) % arr.length;           //取余,从0到arr数组长度，一直点击一直循环
//       var color = colorArr[colorIndex];
//       colorIndex = (colorIndex + 1) % colorArr.length;
//       console.log(span);
//       var x=e.offsetX;
//       var y=e.offsetY;
//       span.style.position="absolute";
//       span.style.marginTop=x+"px";
//       span.style.marginLeft=y+"px";
//       span.style.color=color;
//       span.style.fontSize="20px";
//       setInterval=(function(){
//       	span.parentNode.removeChild(span);
//       },2000)

// }
 var index=0;
 var colorIndex=0;
$(document).ready(function() {
    $("body").click(function(e) {         //鼠标点击事件
        var arr = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
        var colorArr = new Array("red", "orange", "yellow", "green", "blue", "indigo", "purple");
        var tmp = $("<span/>").text(arr[index]);    //添加一个span标签显示arr数组对应的第一个索引内容
        index = (index + 1) % arr.length;           //取余,从0到arr数组长度，一直点击一直循环
        var color = colorArr[colorIndex];
        colorIndex = (colorIndex + 1) % colorArr.length;
        var x = e.pageX, y = e.pageY;   //鼠标点击的x,y点坐标
        tmp.css({
            "z-index" : 999,            //堆叠顺序，越大越优先显示
            "top" : y - 20,             //y点坐标往上20像素
            "left" : x+20,                 //x点坐标
            "position" : "absolute",    //绝对定位
            "font-weight" : "bold",     //加粗
            "color" : color,            //颜色
            "font-size" : 20            //字体大小
        });
        $("body").append(tmp);
        tmp.animate({                   //自定义动画,样式--时间--功能
            "top" : y - 200, 
            "left":x + 200 ,        //y点坐标往上200像素
            "opacity" : 0               //饱和度,0即是透明了
        }, 2000, function() {           //2000毫秒
            tmp.remove();               //消失
        });
    });
});
var room=document.getElementsByClassName("room");
room[0].onclick=function(){
    document.getElementById("head").scrollIntoView();
}
room[1].onclick=function(){
    document.getElementById("greatMan").scrollIntoView();
}
room[2].onclick=function(){
    document.getElementById("majorEvent").scrollIntoView();
} 
room[3].onclick=function(){
    document.getElementById("blessing").scrollIntoView();
} 
room[4].onclick=function(){
    document.getElementById("moment").scrollIntoView();
} 
var pic=document.getElementById("picture");


var prev = document.querySelector(".arrow_left");
var imgwidth=pic.children[0].offsetWidth;

var move=0;
pic.onclick=function(){
    if(move==pic.children.length-1){
        move=0;
        pic.style.left=0+"px";
    }
    move++;
    animate1(pic,-move*imgwidth,move);
}
function autoPlay () {
timer = setInterval(function () {
    pic.onclick();
},3000);
}
autoPlay();
var one=document.getElementById("1")
var two=document.getElementById("2")
var tree=document.getElementById("3")
var four=document.getElementById("4")
var five=document.getElementById("5")
var six=document.getElementById("6")
var detailed=document.getElementsByClassName("detailed");
var title=document.getElementsByClassName("title")
for(var i=0;i<detailed.length;i++)
{

        detailed[i].style.display="none";

 

} 
 detailed[5].style.display="inline";
title[5].style.fontSize=15+"px";

six.style.backgroundImage="linear-gradient(to right,#cc0033, #330000)";
function animate1(element,distance,move){
    clearInterval(element.timer);
    element.timer=setInterval(function(){
        if(move==1){
            one.style.backgroundImage="linear-gradient(to right,#cc0033, #330000)";
            two.style.background="rgba(33,33,33,0.6)";
            tree.style.background="rgba(33,33,33,0.6)";
            four.style.background="rgba(33,33,33,0.6)";
            five.style.background="rgba(33,33,33,0.6)";
            six.style.background="rgba(33,33,33,0.6)";
            for(var i=0;i<detailed.length;i++)
            {
                if(i==move-1)
                {
                    detailed[i].style.display="inline";
                    title[i].style.fontSize=15+"px"
                }
                else{
                    title[i].style.fontSize=20+"px"
                    detailed[i].style.display="none";

                }
                
            }

            

        }
        if(move==2){
            one.style.background="rgba(33,33,33,0.6)";
            two.style.backgroundImage="linear-gradient(to right,#cc0033, #330000)";
            tree.style.background="rgba(33,33,33,0.6)";
            four.style.background="rgba(33,33,33,0.6)";
            five.style.background="rgba(33,33,33,0.6)";
            six.style.background="rgba(33,33,33,0.6)";
             
            for(var i=0;i<detailed.length;i++)
            {
                if(i==move-1)
                {
                    title[i].style.fontSize=15+"px"
                    detailed[i].style.display="inline";
                }
                else{
                    title[i].style.fontSize=20+"px"
                    detailed[i].style.display="none";

                }
                
                

            }
            
        }
        if(move==3){
            one.style.background="rgba(33,33,33,0.6)";
            two.style.background="rgba(33,33,33,0.6)";
            tree.style.backgroundImage="linear-gradient(to right,#cc0033, #330000)";
            four.style.background="rgba(33,33,33,0.6)";
            five.style.background="rgba(33,33,33,0.6)";
            six.style.background="rgba(33,33,33,0.6)";
            for(var i=0;i<detailed.length;i++)
            {
                if(i==move-1)
                {
                    title[i].style.fontSize=15+"px"
                    detailed[i].style.display="inline";
                }
                else{
                    title[i].style.fontSize=20+"px"
                    detailed[i].style.display="none";

                }
                

            }            
        }
        if(move==4){
            one.style.background="rgba(33,33,33,0.6)";
            two.style.background="rgba(33,33,33,0.6)";
            tree.style.background="rgba(33,33,33,0.6)";
            four.style.backgroundImage="linear-gradient(to right,#cc0033, #330000)";
            five.style.background="rgba(33,33,33,0.6)";
            six.style.background="rgba(33,33,33,0.6)";  
            for(var i=0;i<detailed.length;i++)
            {
                if(i==move-1)
                {
                    title[i].style.fontSize=15+"px"
                    detailed[i].style.display="inline";
                }
                else{
                    title[i].style.fontSize=20+"px"
                    detailed[i].style.display="none";

                }
                

            }             
        }
        if(move==5){
            one.style.background="rgba(33,33,33,0.6)";
            two.style.background="rgba(33,33,33,0.6)";
            tree.style.background="rgba(33,33,33,0.6)";
            four.style.background="rgba(33,33,33,0.6)";
            five.style.backgroundImage="linear-gradient(to right,#cc0033, #330000)";
            six.style.background="rgba(33,33,33,0.1)";   
            for(var i=0;i<detailed.length;i++)
            {
                if(i==move-1)
                {
                    title[i].style.fontSize=15+"px"
                    detailed[i].style.display="inline";
                }
                else{
                    title[i].style.fontSize=20+"px"
                    detailed[i].style.display="none";

                }
                

            }                
        }
        if(move==6){
            one.style.background="rgba(33,33,33,0.6)";
            two.style.background="rgba(33,33,33,0.6)";
            tree.style.background="rgba(33,33,33,0.6)";
            four.style.background="rgba(33,33,33,0.6)";
            five.style.background="rgba(33,33,33,0.6)";
            six.style.backgroundImage="linear-gradient(to right,#cc0033, #330000)";   
            for(var i=0;i<detailed.length;i++)
            {
                if(i==move-1)
                {
                    title[i].style.fontSize=15+"px"
                    detailed[i].style.display="inline";
                }
                else{
                    title[i].style.fontSize=20+"px"
                    detailed[i].style.display="none";

                }
                

            }              
        }


        var present=parseInt(element.offsetLeft);
        var speed=parseInt(((move*1200)+present)/10);
        speed=present<distance?speed:-speed;
        present+=speed;
        if(Math.abs(present)>=Math.abs(distance)){
            element.style.left=distance+"px";
            clearInterval(element.timer);
        }
        else{
            element.style.left=present-1+"px";
        }        
    },30)
}
one.onclick=function(){
    one.style.backgroundImage="linear-gradient(to right,#cc0033, #330000)";
    two.style.background="rgba(33,33,33,0.6)";
    tree.style.background="rgba(33,33,33,0.6)";
    four.style.background="rgba(33,33,33,0.6)";
    five.style.background="rgba(33,33,33,0.6)";
    six.style.background="rgba(33,33,33,0.6)";  


    move=1;
    for(var i=0;i<detailed.length;i++)
    {
        if(i==move-1)
        {
            title[i].style.fontSize=15+"px"
            detailed[i].style.display="inline";
        }
        else{
            title[i].style.fontSize=20+"px"
            detailed[i].style.display="none";

        }
        
    }    
    pic.style.left=-move*imgwidth+"px";



}
two.onclick=function(){
    one.style.background="rgba(33,33,33,0.6)";
    two.style.backgroundImage="linear-gradient(to right,#cc0033, #330000)";
    tree.style.background="rgba(33,33,33,0.6)";
    four.style.background="rgba(33,33,33,0.6)";
    five.style.background="rgba(33,33,33,0.6)";
    six.style.background="rgba(33,33,33,0.6)"; 
    move=2; 
    for(var i=0;i<detailed.length;i++)
    {
        if(i==move-1)
        {
            title[i].style.fontSize=15+"px"
            detailed[i].style.display="inline";
        }
        else{
            title[i].style.fontSize=20+"px"
            detailed[i].style.display="none";

        }
        
    }  
   
    
    pic.style.left=-move*imgwidth+"px";
    
}
tree.onclick=function(){
    one.style.background="rgba(33,33,33,0.6)";
    two.style.background="rgba(33,33,33,0.6)";
    tree.style.backgroundImage="linear-gradient(to right,#cc0033, #330000)";
    four.style.background="rgba(33,33,33,0.6)";
    five.style.background="rgba(33,33,33,0.6)";
    six.style.background="rgba(33,33,33,0.6)"; 

    
    move=3;
    for(var i=0;i<detailed.length;i++)
    {
        if(i==move-1)
        {
            title[i].style.fontSize=15+"px"
            detailed[i].style.display="inline";
        }
        else{
            title[i].style.fontSize=20+"px"
            detailed[i].style.display="none";

        }
        
    }  
    pic.style.left=-move*imgwidth+"px";
    
}
four.onclick=function(){
    one.style.background="rgba(33,33,33,0.6)";
    two.style.background="rgba(33,33,33,0.6)";
    tree.style.background="rgba(33,33,33,0.6)";
    four.style.backgroundImage="linear-gradient(to right,#cc0033, #330000)";
    five.style.background="rgba(33,33,33,0.6)";
    six.style.background="rgba(33,33,33,0.6)";  
    
    move=4;
    for(var i=0;i<detailed.length;i++)
    {
        if(i==move-1)
        {
            title[i].style.fontSize=15+"px"
            detailed[i].style.display="inline";
        }
        else{
            title[i].style.fontSize=20+"px"
            detailed[i].style.display="none";

        }
        
    }  
    pic.style.left=-move*imgwidth+"px";
    
}
five.onclick=function(){
    one.style.background="rgba(33,33,33,0.6)";
    two.style.background="rgba(33,33,33,0.6)";
    tree.style.background="rgba(33,33,33,0.6)";
    four.style.background="rgba(33,33,33,0.6)";
    five.style.backgroundImage="linear-gradient(to right,#cc0033, #330000)";
    six.style.background="rgba(33,33,33,0.6)";  
    
    move=5;
    for(var i=0;i<detailed.length;i++)
    {
        if(i==move-1)
        {
            title[i].style.fontSize=15+"px"
            detailed[i].style.display="inline";
        }
        else{
            title[i].style.fontSize=20+"px"
            detailed[i].style.display="none";

        }
        
    }  
    pic.style.left=-move*imgwidth+"px";
    
}
six.onclick=function(){
    one.style.background="rgba(33,33,33,0.6)";
    two.style.background="rgba(33,33,33,0.6)";
    tree.style.background="rgba(33,33,33,0.6)";
    four.style.background="rgba(33,33,33,0.6)";
    five.style.background="rgba(33,33,33,0.6)";
    six.style.backgroundImage="linear-gradient(to right,#cc0033, #330000)";  
    
    move=6;
    for(var i=0;i<detailed.length;i++)
    {
        if(i==move-1)
        {
            title[i].style.fontSize=15+"px"
            detailed[i].style.display="inline";
        }
        else{
            title[i].style.fontSize=20+"px"
            detailed[i].style.display="none";

        }
        
    }  
    pic.style.left=-move*imgwidth+"px";
    
}

var bigger=document.getElementsByClassName("bigger");
var hide=document.getElementsByClassName("hide");
var names=document.getElementsByClassName("names");
hide[0].style.display="inline";
names[0].style.display="inline";
bigger[0].onmouseover=function(){
    for(var i=0;i<3;i++){
        if(i==0){
            hide[i].style.display="inline";
            names[i].style.display="inline";
        }
        else{
            hide[i].style.display="none";
            names[i].style.display="none";
        }

    }

    bigger[0].children[0].style.marginTop=0+"px";
    bigger[0].children[0].style.width=170+"px";
    bigger[0].children[0].style.height=200+"px";
    bigger[0].children[1].style.marginTop=0+"px";
    bigger[0].children[2].style.marginTop=0+"px";
    bigger[0].children[1].style.fontSize=20+"px";
    bigger[0].children[2].style.fontSize=15+"px";
    bigger[0].children[3].style.display="inline";
  

   
}
bigger[0].onmouseout=function(){

    
    bigger[0].children[0].style.marginTop=20+"px";
    bigger[0].children[0].style.width=130+"px";
    bigger[0].children[0].style.height=150+"px";
    bigger[0].children[1].style.marginTop=20+"px";
    bigger[0].children[2].style.marginTop=20+"px";
    bigger[0].children[1].style.fontSize=25+"px";
    bigger[0].children[2].style.fontSize=20+"px";
    bigger[0].children[3].style.display="none";

}


bigger[1].onmouseover=function(){  
    for(var i=0;i<3;i++){
        if(i==1){
            hide[i].style.display="inline";
            names[i].style.display="inline";
        }
        else{
            hide[i].style.display="none";
            names[i].style.display="none";
        }

    } 
    bigger[1].children[0].style.marginTop=0+"px";
    bigger[1].children[0].style.width=170+"px";
    bigger[1].children[0].style.height=200+"px";
    bigger[1].children[1].style.marginTop=0+"px";
    bigger[1].children[2].style.marginTop=0+"px";
    bigger[1].children[1].style.fontSize=20+"px";
    bigger[1].children[2].style.fontSize=15+"px";
    bigger[1].children[3].style.display="inline";
  

   
}
bigger[1].onmouseout=function(){

    
    bigger[1].children[0].style.marginTop=20+"px";
    bigger[1].children[0].style.width=130+"px";
    bigger[1].children[0].style.height=150+"px";
    bigger[1].children[1].style.marginTop=20+"px";
    bigger[1].children[2].style.marginTop=20+"px";
    bigger[1].children[1].style.fontSize=25+"px";
    bigger[1].children[2].style.fontSize=20+"px";
    bigger[1].children[3].style.display="none";

}

bigger[2].onmouseover=function(){   
        for(var i=0;i<3;i++){
        if(i==2){
            hide[i].style.display="inline";
            names[i].style.display="inline";
        }
        else{
            hide[i].style.display="none";
            names[i].style.display="none";
        }

    } 
    bigger[2].children[0].style.marginTop=0+"px";
    bigger[2].children[0].style.width=170+"px";
    bigger[2].children[0].style.height=200+"px";
    bigger[2].children[1].style.marginTop=0+"px";
    bigger[2].children[2].style.marginTop=0+"px";
    bigger[2].children[1].style.fontSize=20+"px";
    bigger[2].children[2].style.fontSize=15+"px";
    bigger[2].children[3].style.display="inline";
  

   
}
bigger[2].onmouseout=function(){
 
    
    bigger[2].children[0].style.marginTop=20+"px";
    bigger[2].children[0].style.width=130+"px";
    bigger[2].children[0].style.height=150+"px";
    bigger[2].children[1].style.marginTop=20+"px";
    bigger[2].children[2].style.marginTop=20+"px";
    bigger[2].children[1].style.fontSize=25+"px";
    bigger[2].children[2].style.fontSize=20+"px";
    bigger[2].children[3].style.display="none";

}
console.log(bigger[0]);


