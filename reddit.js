// JavaScript source code
function start(){
	var htmlComments = document.getElementsByClassName("comment");
	var objs = [];
	for (var i = 0; i < htmlComments.length; i++) {
		if(format(json) >= 0.6){
			console.log("Are you sure you want to display this hateful comment?");
		}else{
			objs.push({
				element: htmlComments[i],
				text: htmlComments[i].getElementsByClassName("md")[0].textContent
			});
		}
	}
}