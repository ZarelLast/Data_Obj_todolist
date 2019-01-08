const nama = prompt("Masukan username : ")
let Wellcome = "";
const h4 = document.getElementById('subnama');

function showTime(){
	var date = new Date();
	var session =" AM";
	var h = date.getHours();
	var m = date.getMinutes();
	if(h>=0){
	Wellcome = "Pagi";
	}
	if(h>=9){
	Wellcome = "Siang";
	}
	if(h>=15){
	Wellcome = "Sore";
	}
	if(h>=18){
	Wellcome = "Malam";
	}
	if(h==0){
		h=12;
	}
	if(h>12){
		h=h-12;
		session = " PM";
	}
	h = (h<10)? "0" + h :h;
	m = (m<10)? "0" + m :m;
	var time = h + ":" + m;
	var pm = session;
	h4.innerHTML ="selamat "+Wellcome+", "+ nama;

	document.getElementById("s").innerText = pm;
	document.getElementById("s").textContent = pm;
	document.getElementById("MyClockDisplay").innerText = time;
	document.getElementById("MyClockDisplay").textContent = time;
	setTimeout(showTime, 1000);
	};	
showTime();