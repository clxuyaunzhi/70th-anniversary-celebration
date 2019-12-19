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
		console.log(present);
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


