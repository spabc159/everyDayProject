$(document).ready(function() {
	// 获取第四个元素后所有的li元素，除了最后一个
	var $i = $('ul li:gt(4):not(:last)');
	$i.hide();

	// 获取btn的所有a元素
	var $j = $('button.showMore > a');
	$j.click(function() {
		/* Act on the event */
		// 如果i是显示的，隐藏起来
		if($i.is(":visible")){
			$i.hide();
			// 找到j这个（this）函数里的span然后改变span里的css样式
			$(this).find("span")
				.css({
					"background":"green",
					"font-size":"20px"
				})
				.text("显示全部品牌");
			$('ul li').removeClass("promoted");
		} else {
			$i.show();
			$(this).find('span')
			.css({
				"background":"yellow",
				"font-size":"15px"

		})
			.text("精简全部品牌");
		$('ul li').filter(":contains('耐克'),:contains('松下'),:contains('哆啦A梦')")
			.addClass('promoted');

		}
		return false;
	});
});