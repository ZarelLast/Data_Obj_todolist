const nama = prompt("Masukan username : ")
const Wellcome = "Malam";
const h4 = document.getElementById('subnama');

function hallo(){
	var waktu = date.getHours();
	if(waktu>3){
		Wellcome = "Pagi";
	};
	if(waktu>9){
		Wellcome = "Siang";
	};
	if(waktu>15){
		Wellcome = "Sore";
	};
	if(waktu>18){
		Wellcome = "Malam";
	};
	h4.innerHTML +="selamat "+Wellcome+", "+ nama;
};

function showTime(){
	var date = new Date();
	var session =" AM";
	var h = date.getHours();
	var m = date.getMinutes();

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
	document.getElementById("s").innerText = pm;
	document.getElementById("s").textContent = pm;
	document.getElementById("MyClockDisplay").innerText = time;
	document.getElementById("MyClockDisplay").textContent = time;
	setTimeout(showTime, 1000);
	};	
showTime();
hallo();
