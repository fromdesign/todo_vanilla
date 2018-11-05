(function () {
	let data = ['JSX 사용해보기', '라이프 사이클 이해하기', 'React가 꼭 필요한지 이해하기'];
	let todo = document.querySelector('.todos');
	
	function init () {
		let store = '';
		
		for (let i = 0; i < data.length; i++) {
			store += `<li><span class="close">x</span>${data[i]}</li>`;
		}
		todo.innerHTML = store;
		let	todos = document.querySelectorAll('.todos li');
		let	close = document.querySelectorAll('.todos li .close');

		for(let i = 0; i < todos.length; i++){
			todos[i].addEventListener('click', function () {
				this.classList.toggle('done');
			});
			close[i].addEventListener('click', function () {
				var text = this.nextSibling.textContent;
				var removeIdx = data.indexOf(text);
				data.splice(removeIdx, 1);
				this.parentElement.remove();
			});
		}
	}
	
	let form = document.querySelector('.form');
	let input = form.querySelector('input');
	let formButton = form.querySelector('.button');
	
	function pushData () {
		if(!input.value) {
			alert('뭐하니?');
		} else {
			data.push(input.value);
			input.value = '';
			init();
		}	
	}
	
	input.addEventListener('keydown', function (event) {
		if(event.keyCode == 13) {
			pushData()
		}
	});
	formButton.addEventListener('click', function () {
		pushData();
	});
	
	init();
})();