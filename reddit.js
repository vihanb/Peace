// JavaScript source code
function start(){
	var htmlComments = document.getElementsByClassName("comment");
	var objs = [];
	for (var i = 0; i < htmlComments.length; i++) {
		objs.push({
			element: htmlComments[i],
			text: htmlComments[i].getElementsByClassName("md")[0].textContent
		});
	}
}