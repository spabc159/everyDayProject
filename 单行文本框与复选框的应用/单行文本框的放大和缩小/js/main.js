$(document).ready(function() {
	$(":input").focus(function(){
		$(this).addClass("focus");
		if($(this).val()== this.defaultValue){
			$(this).val("");
		}
	}).blur(function(){
		$(this).removeClass("focus");
		if($(this).val() == '') {
			$(this).val(this.defaultValue);
		}
	});

	// var $commet=$("#comment");
	// $('.bigger').click(function(){
	// 	if($commet.height() < 500){
	// 		//重新设置高度。在原有的基础上加50
	// 		$commet.height($commet.height()+50);
	// 		return false;
	// 	}
	// });
	// $('.smaller').click(function(){
	// 	if($commet.height() > 50){
	// 		//重新设置高度。在原有的基础上-50
	// 		$commet.height($commet.height() - 50);
	// 		return false;
	// 	}
	// });
	// 
	// 
	// 带动画的放大缩小
	var $commet=$("#comment");
	$('.bigger').click(function(){
		if($commet.height() < 500){
			//重新设置高度。在原有的基础上加50
			$commet.animate({height: "+=50"},400);
			return false;
		}
	});
	$('.smaller').click(function(){
		if($commet.height() > 50){
			//重新设置高度。在原有的基础上-50
			$commet.animate({height: "=50"},400);
			return false;
		}
	});
})