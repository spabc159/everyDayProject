$(document).ready(function() {
	
	var page =1;
	var i=4;

	//向后
	$("button.next").click(function(event) {
		/* Act on the event */
		var $parent = $(this).parents("div.show");//寻找父元素
		var $show = $parent.find("div.content_list");//获取图片展示区
		var $content = $parent.find("div.content");//获取图片展示区外面的div

		var v_width = $content.width();//获取展示区的宽度，带单位

		
		var len=$show.find('li').length;//视频总数
		var page_count = Math.ceil(len/i);//只要不是整数就往大的取整

		if( !$show.is(":animated") ){
			if(page == page_count){
		//动画到最后一个版面的时候，跳回第一个版面
		$show.animate({left:'0px'}, "slow");
		page=1;
	} else {

			$show.animate({ left : '-='+v_width }, "slow");  //通过改变left值，达到每次换一个版面
			page++;
		}
	}

});
	//向前
	$("button.prev").click(function(event) {
		/* Act on the event */
		var $parent = $(this).parents("div.show");//寻找父元素
		var $show = $parent.find("div.content_list");//获取图片展示区
		var $content = $parent.find("div.content");//获取图片展示区外面的div

		var $v_width = $content.width();//获取展示区的宽度，带单位

		var len = $show.find('li').length;//视频总数
		 var page_count = Math.ceil(len / i) ; //只要不是整数就往大的取整

		if( !$show.is(":animated") ){
			if(page ==1){
		//动画到最后一个版面的时候，跳回第一个版面
		$show.animate({ left : '-='+v_width*(page_count-1) }, "slow");
		page = page_count;
	} else {

			$show.animate({ left : '-='+v_width }, "slow");
				page--;
		}
	}


	});
});

