$(function(){
	var x=10,y=20;//使得鼠标相对于tooltip偏离的距离
	$("a.tooltip-test").mouseover(function(e){
	this.myTitle=this.title;//获取title，临时存储
	this.title="";//避免和原生提示重复

	var tooltip="<div id='tooltip'>"+this.myTitle+"</div>";
	$("body").append(tooltip);
			//css()设置样式
			$("#tooltip").css({
			"top":(e.pageY+y)+"px",//e.pageX相对与文档，e.clientX相对于可视区
			"left":(e.pageX+x)+"px"
		}).show("fast");
		}).mouseout(function(){
	this.title=this.myTitle;//重复恢复
	$("#tooltip").remove();//记得要把生成的结点移除掉
}).mousemove(function(e){
	$("#tooltip").css({
		"left":(e.pageX+x)+"px",
		"top":(e.pageY+y)+"px",
	});
});
});