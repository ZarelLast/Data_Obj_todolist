let todos = [];
const listDOM = document.getElementById('list');
const inputDOM = document.getElementById('input-todo');
const addDOM = document.getElementById('add-btn');
const hardisk = window.localStorage;
const nomorDOM = document.getElementById('nomor');
const data = JSON.parse(hardisk.getItem('todos'));

console.log(data);

if(data.length == 0){
	document.getElementById("starting").style.display = "block";
}else{
	todos = data;
	document.getElementById("starting").style.display = "none";
}

function render(){
	let index = 0;
	listDOM.innerHTML = "";
	while(index<todos.length){
		console.log(index);
		if(todos[index].status == true){
			listDOM.innerHTML += "<li><div class='posted'><input onchange='berubah("+index+")' type='checkbox' checked />&nbsp<strike>"+todos[index].nama+"</strike></div><button class='btn-del' onclick=hapus("+index+")><span>&times</span></button></li>";
		}else{
			listDOM.innerHTML += "<li><div class='posted'><input onchange='berubah("+index+")' type='checkbox' />&nbsp"+todos[index].nama+"</div><button class='btn-del' onclick=hapus("+index+")><span>&times</span></button></li>";
		}
		index = index + 1;
	}
};

addDOM.addEventListener('click',function(){
	const todo = {
		nama:inputDOM.value,
		status:false
	};
	todos.push(todo);
	console.log(todos);
	nomorDOM.innerHTML = data.length+" To Do";
	render();
	hardisk.setItem('todos',JSON.stringify(todos));
	if(data.length == 0){
	document.getElementById("starting").style.display = "block";
	}else{
	todos = data;
	document.getElementById("starting").style.display = "none";
	}
});

function berubah(index){
	if(todos[index].status == true)
	{
		todos[index].status = false
	}else{
		todos[index].status = true
	}
	render();
	hardisk.setItem('todos',JSON.stringify(todos));
}

function hapus(index){
	console.log(index); 
	todos.splice(index, 1)
	nomorDOM.innerHTML = data.length+" To Do";
	render();
	hardisk.setItem('todos',JSON.stringify(todos));
	if(data.length == 0){
	document.getElementById("starting").style.display = "block";
	}else{
	todos = data;
	document.getElementById("starting").style.display = "none";
	}
};
render();
nomorDOM.innerHTML += data.length+" To Do";

function showTime(){
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	
	var session =" AM";
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
