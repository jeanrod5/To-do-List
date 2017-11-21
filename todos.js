//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});

//click on X to delete to-do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//hit enter to add a to-do
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new to-do text from input
		var todotext = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todotext + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})