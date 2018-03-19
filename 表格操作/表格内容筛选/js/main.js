$(document).ready(function() {
	

	$('tr.parent').click(function() {
		$(this)
		.toggleClass("selected") 
		.siblings('.child_'+this.id).toggle(); 

	})


	

	$('.sousuo').not("tr.parent").keyup(function(){
		//当搜索栏启动的时候隐藏thead以外的值
		$('table tbody tr').hide()
		//然后找到filter这个函数this中的数值val()用变量值替代
		.filter(":contains('"+( $(this).val() )+"')")
		.show();
		
	}).keyup();
});

