$(document).ready(function() {
	//对地址框进行操作
	$('#address').focus(function(){//地址框获得鼠标焦点时
		// 得到当前文本框的值
		var txt_value = $(this).val();
		if(txt_value=="请输入邮箱地址"){
			// 如果符合条件则清空文本框内容
			$(this).val("");
		};
		// 当地址框失去鼠标焦点的时候返回原值
	$('#address').blur(function() {
		/* Act on the event */
		var txt_value = $(this).val();
		if(txt_value==""){
			// 如果符合条件则清空文本框内容
			$(this).val("请输入邮箱地址");
	}
});
	// 对密码框修改
	$('#password').focus(function(){
		var txt_value = $(this).val();
		if(txt_value=="请输入邮箱密码"){
			// 如果符合条件则清空文本框内容
			$(this).val("");
		};
	});
	$('#password').blur(function(){
		var txt_value = $(this).val();
		if(txt_value==""){
			// 如果符合条件则清空文本框内容
			$(this).val("请输入邮箱密码");
		};
	})
})
});