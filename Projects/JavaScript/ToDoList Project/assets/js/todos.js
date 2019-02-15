// Check Off Specific Todos By Clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
	eraser.play();
})

/*
//Click on X to delete Todo
$("ul").on("click","span",function(event){	
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();		
	});

	var sound = new Howl({
  	src: ['C:/Users/MY DELL/Desktop/Web Development/JQuery/ToDoList Project/assets/js/tick.mp3']
	});
	
	sound.play();	

});
*/

var tick = new Audio();
tick.src = "tick.mp3";

var add = new Audio();
add.src = "add.mp3";

var error = new Audio();
error.src = "error.mp3";

var eraser = new Audio();
eraser.src = "eraser.mp3";

$("ul").on("click","span",function(event){	
		event.stopPropagation();
		$(this).parent().fadeOut(500,function(){
			$(this).remove();		
		});				
		tick.play();
		/*var sound = new Howl({
	  	src: ['C:/Users/MY DELL/Desktop/Web Development/JQuery/ToDoList Project/assets/js/tick.mp3']
		});
	
		sound.play();*/
});






$("input[type='text'").keypress(function(event){
	if(event.which === 13)
	{
		//grabbbing new todo text from input		
		var todoText = $(this).val();
		if(todoText!=="")
		{
			add.play();
			$(this).val("");
			//create a new li and add to ul
			$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+todoText+"</li>")
			$('[placeholder]').attr("placeholder","Add New Todo                       - Hit Enter");			
		}
		else
		{
			error.play();
			$('[placeholder]').attr("placeholder","Enter something                    - Hit Enter");			
		}
	}
})
$(".fa-plus").click(function(){
	//$("input[type='text']").fadeToggle();	
	console.log($("input[type='text'").val());
	if(event.which === 1)
	{
		var todoText = $("input[type='text'").val();		
		
		//create a new li and add to ul
		if(todoText!=="")
		{
			add.play();
			$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+todoText+"</li>")	
			$("input[type='text'").val("");
			$('[placeholder]').attr("placeholder","Add New Todo                       - Hit Enter");			
		}
		else
		{
			error.play();
			$('[placeholder]').attr("placeholder","Enter something                    - Hit Enter");			
		}
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});