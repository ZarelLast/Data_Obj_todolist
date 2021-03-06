let todos = [];
const listDOM = document.getElementById('list');
const inputDOM = document.getElementById('input-todo');
const addDOM = document.getElementById('add-btn');
const hardisk = window.localStorage;
const nomorDOM = document.getElementById('nomor');
const toogle = document.getElementById("starting");

const data = JSON.parse(hardisk.getItem('todos'));
console.log(data);

if(data != null){
	todos = data;
	toogle.style.display = "none";
	if(data==0){
		toogle.style.display = "block";
	}
}else{
	toogle.style.display = "block";
	if(data!=null){
		toogle.style.display = "none";
		todos = data;
	}
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
	hardisk.setItem('todos',JSON.stringify(todos));
	nomorDOM.innerHTML = todos.length+" To Do";
	if(toogle.style.display == "block"){
	toogle.style.display = "none";};
	render();
});

function berubah(index){
	if(todos[index].status == true)
	{
		todos[index].status = false
	}else{
		todos[index].status = true
	};
	hardisk.setItem('todos',JSON.stringify(todos));
	render();
}

function hapus(index){
	console.log(index); 
	todos.splice(index, 1)
	nomorDOM.innerHTML = todos.length+" To Do";
	hardisk.setItem('todos',JSON.stringify(todos));
	if(data.length <= 0){
	toogle.style.display = "block";
	}else{
	toogle.style.display = "none";
	};
	render();
};
render();
nomorDOM.innerHTML += todos.length+" To Do";