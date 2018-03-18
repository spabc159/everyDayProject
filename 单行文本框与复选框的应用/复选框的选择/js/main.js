$(document).ready(function() {
	/*
	//全选
	$("#checkedAll").click(function(){
		$('[name=items]:checkbox').attr("checked",true);
		return false;
	});

	//全不选
	$("#checkedNo").click(function(){
		$('[name=items]:checkbox').attr("checked",false);
		return false;
	});

	//反选
	$("#checkedRev").click(function(event) {
		
		$('[name=items]:checkbox').each(function(){
			this.checked=!this.checked;
		});
		return false;
	});

	//提交
	$("#send").click(function(event) {
		
		var str = "你选中的是：\r\n";
		$('[name=items]:checkbox:checked').each(function(){
			str += $(this).val()+"\r\n";
		});
		alert(str);
	});
	*/

	//1.6的JQ设置disabled和checked属性就不用arrt改用prov了
	//
	//全选
	$("#checkedChage").click(function(){
		if(this.checked){
			$('input[type=checkbox][name=items]').prop("checked", true );
		}else{								
			$('input[type=checkbox][name=items]').prop("checked", false );
		}

	});
	 $('input[type=checkbox][name=items]').click(function(){
     		var flag=true;
	     	$('input[type=checkbox][name=items]').each(function(){
	     		if(!this.checked){
	     			flag = false;
	     		}
	     	});

	     	if( flag ){
	     		$('#checkedChage').prop('checked', true );
	     	}else{
	     		$('#checkedChage').prop('checked', false );
	     	}
	     });
		  //输出值
	$("#send").click(function(){
		  var str="你选中的是：\r\n";
		  $('input[type=checkbox][name=items]:checked').each(function(){
		  	str+=$(this).val()+"\r\n";
		  })
		  alert(str);
	});
})





