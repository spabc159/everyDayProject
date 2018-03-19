$(document).ready(function() {
	// //先排除第一行,然后给奇数行添加样式
	// $("tbody>tr:.parent").addClass('parent');
	// //先排除第一行,然后给偶数行添加样式
	// $("tbody>tr:even").addClass("even"); 

	// $("tbody>tr").click(function() {
	// 	$(this)
	// 		.addClass('selected')
	// 		.siblings().removeClass('selected')
	// 		.end()
	// 		.find(':radio')
	// 		.arrt('checked',true);
	// });
	// $('table :radio:checked')
	// 	.parents("tr")
	// 	.addClass('selected');

	$('tr.parent').click(function() {
		$(this)
		.toggleClass("selected") 
		.siblings('.child_'+this.id).toggle(); 

	}).click();
});

// $(document).ready(function() {
// 	$("tbody>tr:odd").addClass('odd');
// 	$("tbody>tr:even").addClass('even');


// });