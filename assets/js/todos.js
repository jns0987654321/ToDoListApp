/* Check off specific todos by clicking
	Why use on? can only add event listeners to elements that already exist on page. 
	ul exists in this case when page laoded . So, listener is added to parent ul then when 
	li is click it is fired. Only actually lsitens to li.
*/
$("ul").on("click", "li", function(){

	$(this).toggleClass("completed");

});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		// use callback to remove element AFTER fading
		$(this).remove();
	});
	
	event.stopPropagation(); //prevents event bubbling
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabs new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});