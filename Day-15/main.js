const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem('items')) || [];


function addItem(e){
    e.preventDefault();
    const text =  (this.querySelector('[name=item]')) .value; //text degiskeni degerini aldik.
    const item = { //item adinda bir dizi degisken olusturduk inputtan alinan degeri iki anlam yükledik.
        text: text, 
        done: false //check edildiginde true olmasi icin ilk kayitta tum elemanlar false yaptik.
    }; 
    items.push(item); //yukarida olustudugumuz items arrayine aktardik. 
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify (items)); 
    this.reset();
}
function populateList(plates = [], platesList ){
    platesList.innerHTML = plates.map((plate, i)=> {
        return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }



  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);

  populateList(items, itemsList);