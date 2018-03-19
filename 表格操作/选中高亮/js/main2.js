$(document).ready(function() {
	//先排除第一行,然后给奇数行添加样式
	$("tbody>tr:odd").addClass('odd');
	//先排除第一行,然后给偶数行添加样式
	$("tbody>tr:even").addClass("even"); 

	$("tbody>tr").click(function(event) {
		if($(this).hasClass('selected')){
			//判断是否含有高亮显示的selected
			$(this)
				.removeClass('selected')
				.find(':checkbox')
				.attr('checked', false);
		} else {
			$(this)
				.addClass('selected')
				.find(':checkbox')
				.attr('checked', true);
		}
	});

});

