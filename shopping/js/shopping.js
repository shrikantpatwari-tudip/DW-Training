$(document).ready(function(){
	$("img").on('click',function(){
		var x=this.id;
		console.log(x);
  		window.location.href="item.html?name=" + this.id;
  		alert(x);
  	
	});
		
});
