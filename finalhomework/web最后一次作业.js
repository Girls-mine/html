var tim = document.getElementById("tim");
function times(){
	id=setInterval(function(){
		var now = new Date();
		tim.innerText=now.toLocaleString();
	},1000)
}
window.onload = times();
var pho = document.getElementById('pho');
pho.onmouseover = function (e) {
	var e = e || window.event;
	this.myTitle = this.title;
	this.title = "";
	var tooltip = document.createElement('div');
	tooltip.id = "tooltip";
	tooltip.innerHTML = this.myTitle;
	tooltip.style.left = e.clientX + 10 + "px";
	tooltip.style.top = e.clientY + 10 + "px";
	document.body.appendChild(tooltip);
};
pho.onmousemove = function (e) {
	var e = e || window.event;
	var tooltip = document.getElementById('tooltip');
	tooltip.style.left = e.clientX + 10 + "px";
	tooltip.style.top = e.clientY + 10 + "px";
};
pho.onmouseout = function () {
	var tooltip = document.getElementById('tooltip');
	this.title = this.myTitle;
	document.body.removeChild(tooltip);
}
var signIn = document.getElementById("signIn");
var signI = document.getElementById("signI");
var signOut = document.getElementById("signOut");
var id01 = document.getElementById("id01");
signIn.onclick = function(){
	id01.style.display='block';
}
signI.onclick = function(){
	id01.style.display='none';
}
signOut.onclick = function(){
	id01.style.display='none';
}