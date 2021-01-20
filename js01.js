
var timenow=0;

function timerprnt(){
	document.getElementById('timer').innerHTML='seconds passed since page loaded '+timenow;
	timenow++;
}

function timer(){
	window.setInterval(timerprnt,1000);
}


function ans(){
	var par=document.getElementById('par').value;
	var para=document.getElementById('para').value;
	var ans;
	var j=0;
	var cnt=0;
	for(i=0;i<para.length;i++){
	if (par[j]==para[i]) {
		cnt++;
	}}document.getElementById('ans').innerHTML=par[j]+':'+cnt;
}
function words(){
	var para=document.getElementById('para').value;
	var space=[' '];
	var cnt=0;
	for(i=0;i<para.length;i++){
	if (space[0]==para[i]) {
		cnt++;
	}}document.getElementById('ans').innerHTML='words '+':'+cnt;
}