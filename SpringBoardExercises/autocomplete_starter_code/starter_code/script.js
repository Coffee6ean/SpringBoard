const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const listedItems = document.querySelector("ul");

const fruit = [
	'Apple', 'Apricot', 'Avocado 🥑', 
	'Banana', 'Bilberry', 'Blackberry', 
	'Blackcurrant', 'Blueberry', 'Boysenberry', 
	'Currant', 'Cherry', 'Coconut', 
	'Cranberry', 'Cucumber', 'Custard apple', 
	'Damson', 'Date', 'Dragonfruit', 
	'Durian', 'Elderberry', 'Feijoa', 
	'Fig', 'Gooseberry', 'Grape', 
	'Raisin', 'Grapefruit', 'Guava', 
	'Honeyberry', 'Huckleberry', 'Jabuticaba', 
	'Jackfruit', 'Jambul', 'Juniper berry', 
	'Kiwifruit', 'Kumquat', 'Lemon', 
	'Lime', 'Loquat', 'Longan', 
	'Lychee', 'Mango', 'Mangosteen', 
	'Marionberry', 'Melon', 'Cantaloupe', 
	'Honeydew', 'Watermelon', 'Miracle fruit', 
	'Mulberry', 'Nectarine', 'Nance', 
	'Olive', 'Orange', 'Clementine', 
	'Mandarine', 'Tangerine', 'Papaya', 
	'Passionfruit', 'Peach', 'Pear', 
	'Persimmon', 'Plantain', 'Plum', 
	'Pineapple', 'Pomegranate', 'Pomelo', 
	'Quince', 'Raspberry', 'Salmonberry', 
	'Rambutan', 'Redcurrant', 'Salak', 
	'Satsuma', 'Soursop', 'Star fruit', 
	'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	return fruit.filter((element) => {
		return element.toLowerCase().includes(str.toLowerCase());
	}, []);
}

function searchHandler(e) {
	suggestions.innerHTML = '';  //Clear previous suggestions

	let filteredSearch = search(input.value);
	showSuggestions(filteredSearch);
}

function showSuggestions(results) {
	for(let item of results) {
		let li = document.createElement("li");
		li.innerText = item;
		suggestions.append(li);
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerHTML = "";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);