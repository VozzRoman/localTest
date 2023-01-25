console.log('ok');
const buttonEl = document.querySelector('.button__add')
const buttonDel = document.querySelector('.button__delete');
const containerEl = document.querySelector('.save__list');
const LOCAL__KEY = 'someData';


const object = {
	name: 'Roma',
	age: 37,
	stat: true,
	id: Date.now()

}

//-----localStorage function--------//

console.log(object.id)

buttonEl.addEventListener('click', onButton)
buttonDel.addEventListener('click', onDeleteBth);

function onDeleteBth() {
	
	console.log('ok');
	data = JSON.parse(localStorage.getItem(LOCAL__KEY));
	const lastElement = data.length - 1;
	data.splice(lastElement, 1);
	
	localStorage.setItem(LOCAL__KEY, JSON.stringify(data));
	console.log(data);
	// createMarkup();
	
}



function onButton() {

	let data = JSON.parse(localStorage.getItem(LOCAL__KEY));
	if (!data) {
		data = [];
	}
	data.push(object);
	console.log(data);
	const toStringData = JSON.stringify(data);
	const setToLocal = localStorage.setItem(LOCAL__KEY, toStringData);
	console.log(setToLocal);
	createMarkup();

}
createMarkup();
function createMarkup() {
	containerClear();
	let getLocal = JSON.parse(localStorage.getItem(LOCAL__KEY));
	console.log(getLocal);
	const markUp = getLocal.map(el => {
		return `
		<li class='list__item'>
			<p>${el.name}</p>
			<p>${el.age}</p>
			<p>${el.stat}</p>
			<p>${el.id}</p>
		</li>
		`;
	}).join('');
	containerEl.insertAdjacentHTML('beforeend', markUp);
}


function containerClear() {
	containerEl.innerHTML = '';
}


// function save(key, value) { // --функция отправки данных в локалСторадж

// export function getData(){
// 	const dataLocalStorage = localStorage.getItem(LOCAL__KEY);
// 	if(dataLocalStorage !== null) {
// 		return JSON.parse(dataLocalStorage);
// 	}
// 	return [];
// }

// export function putData(data){ 
// 	let filmCard = getData(); // []
// 	const index = filmCard.indexOf(data);
// 	if (index === -1) {
// 		filmCard.push(data);
// 	} else {
// 		filmCard.splice(index, 1);
// 	}
	
// 	localStorage.setItem(LOCAL__KEY, JSON.stringify(filmCard));

// }

// export function deleteStorage() {
// 	localStorage.removeItem(LOCAL__KEY);
// }


// const index = cartPageItem.findIndex(el => el.id === cartItem.id);
// cartPageItem.splice(i, 1);