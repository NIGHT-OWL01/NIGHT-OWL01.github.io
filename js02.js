
function Ans(){
	var num1= parseInt(document.getElementById('num1').value);
	var num2= parseInt(document.getElementById('num2').value);
	var num3= parseInt(document.getElementById('num3').value);
	var num4= parseInt(document.getElementById('num4').value);
	var sign1= document.getElementById('signu').value;
	var sign2= document.getElementById('signd').value;
	var signu=document.getElementById('signu').value;
	var signd=document.getElementById('signd').value;
	var up;
	var down;
	if(signu=='+'){
		up=num1+num2;
	}
	else if (signu=='-') {
		up=num1-num2;
	}
	else if (signu=='*') {
		up=num1*num2;
	}
	else if (signu=='/') {
		up=num1/num2;
	}
	else{
		console.log('wrong')
	}
//down side dividers
	if(signd=='+'){
		down=num3+num4;
	}
	else if (signd=='-') {
		down=num3-num4;
	}
	else if (signd=='*') {
		down=num3*num4;
	}
	else if (signd=='/') {
		down=num3/num4;
	}
	else{
		console.log('wrong')
	}


ans=up/down;

document.getElementById('ans').innerHTML=ans;
console.log('up: '+up);
console.log('down: '+down)
console.log('ans: '+Ans)

}