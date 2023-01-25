
const buttonEl = document.querySelector('.button__add');

const LOCAL__KEY = 'someData';

const object = {
	name: 'Yana',
	age: 37,
	stat: true,
	id: Date.now()

}

buttonEl.addEventListener('click', onButton)

function onButton() {
    console.log('ok');
    
    let local = JSON.parse(localStorage.getItem(LOCAL__KEY));
    console.log(local);
    if (local === null) {
        local = [];
    }
    console.log(local);
   //проверка на повторяющтся обьект
    for (let el of local) {
        if (el.name === object.name) {
            console.log('уже есть такой обьект')
            return
        } 
    }
    local.push(object);
  
    const stringifyData = localStorage.setItem(LOCAL__KEY, JSON.stringify(local));
    console.log(stringifyData);
    
}







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
