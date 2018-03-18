$(document).ready(function() {
	var x=10;
	var y=20;//设置定位
	$("a.tooltip-list").mouseover(function(e) {
		/* Act on the event */
		this.myTitle = this.title;
		this.title = "";
		//创建div元素
		var tooltip = "<div id='tooltip'><img src='"+this.href+"' alt='你在干什么'/></div>";
		// 插入文档中
		$("body").append(tooltip);
		$("#tooltip")
			.css({
			"top":(e.pageY+y)+"px",//e.pageX相对与文档，e.clientX相对于可视区
			"left":(e.pageX+x)+"px"
		}).show("fast");
		}).mouseout(function(e) {
			/* Act on the event */
			this.title = this.myTitle;
			$("#tooltip").remove();
		}).mousemove(function(e) {
			/* Act on the event */
			$("#tooltip")
			.css({
			"left":(e.pageX+x)+"px",
			"top":(e.pageY+y)+"px"
		});
	});
});
