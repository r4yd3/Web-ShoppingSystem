const allFood = [
  "Monster",
  "Evian",
  "Drumstick",
  "Bleu",
  "Milo",
  "Coke",
  "Avocado",
  "Brocolli",
  "HeavenEarth",
  "Cucumber",
  "Prawn",
  "Tomato",
  "Chickenwing",
  "Nescafe",
  "Salmon",
  "HPlus",
  "Pepsi",
  "Lemon",
  "Anmuxi",
  "Tinge",
  "Banana",
  "Grape",
  "Ladyfinger",
  "Minmaid",
  "Steak",
  "Dragonfruit",
  "Oldtown",
  "Chapai",
  "Apple",
  "Orange",
  "Bacon",
  "Pocari",
  "Mangosteen",
  "Cabbage",
  "Carrot",
  "Sushi",
  "Spaghetti",
  "GrilledChicken",
  "Quesadillas",
  "ChickenPie",
];
for (let i = 0, r = 0; i < 39; i++) {
  let temp = JSON.parse(localStorage.getItem(allFood[i]));
  let testingTable = document.getElementById(`testingTable`);
try {
  if (temp.qty != 0 && temp.qty != null) {
     r += 1;
    // Children of Number, Name, Base Price and Quantity hehehe
    let node = document.createElement("tr");
    let node2 = document.createElement("td");
    let itemName = document.createElement("td");
    let itemAmount = document.createElement("td"); // amount td
    let itemPrice = document.createElement("td");
    let itemNameNode = document.createTextNode(temp.name);
    let itemPriceNode = document.createTextNode(`RM ${temp.price}`);
    let itemAmountNode = document.createTextNode(temp.qty); //amount td
    itemAmount.className = "cartButton";
    itemAmount.id = i + 100;
    let textNode = document.createTextNode(r);
    node2.appendChild(textNode);
    node.appendChild(node2);
    itemName.appendChild(itemNameNode);
    node.appendChild(itemName);
    itemPrice.appendChild(itemPriceNode);
    node.appendChild(itemPrice);
    
    node.appendChild(itemAmount);
    document.getElementById("tableThing").appendChild(node);
    let newTempInfo = {
      name: temp.name,
      origin: temp.origin,
      price: temp.price,
      qty: temp.qty,
      position: i,
    };
    localStorage.setItem(`${allFood[i]}`, JSON.stringify(newTempInfo));
    let addButton = document.createElement("button");
    addButton.innerText = "+";
    addButton.id = i;
    addButton.onclick = addButtonz;
    itemAmount.appendChild(addButton);
    itemAmount.appendChild(itemAmountNode);
    
    let minusButton = document.createElement("button");
    minusButton.innerText = "-";
    minusButton.id = i + 200;
    minusButton.onclick = minusButtonz;
    itemAmount.appendChild(minusButton);
  } 
} catch (err) {
  // i hate that no qty error
}
}
//================== add button ================================
function addButtonz() {
  try {
    for (let j = 0; j < 39; j++) {
     let temp = JSON.parse(localStorage.getItem(allFood[j]));
      try {
        if (temp.position == this.id) {
        let newTempInfo = {
      name: temp.name,
      origin: temp.origin,
      price: temp.price,
      qty: temp.qty + 1,
      position: temp.position,
    };
        localStorage.setItem(`${allFood[j]}`, JSON.stringify(newTempInfo));
         document.getElementById(`${parseInt(this.id) + 100}`).innerHTML = ` <button id="${this.id}">+</button>${parseInt(temp.qty) + 1}<button id="${parseInt(this.id) + 200}">-</button>`;
          document.getElementById(`${this.id}`).onclick = addButtonz;
          document.getElementById(`${parseInt(this.id) + 200}`).onclick = minusButtonz;
      } 
      } catch (err) {} // stupid loop won't continue if there's error therefore we need to catch it, spent like 1 hour on this oh lord
  }
  } catch (err) {} 

}
//======================= minus button ===========================
function minusButtonz() {
  try {
    for (let j = 0; j < 39; j++) {
     let temp = JSON.parse(localStorage.getItem(allFood[j]));
      try {
        if ((temp.position + 200) == this.id && temp.qty != 0) {
        let newTempInfo = {
      name: temp.name,
      origin: temp.origin,
      price: temp.price,
      qty: temp.qty - 1,
      position: temp.position,
    };
        localStorage.setItem(`${allFood[j]}`, JSON.stringify(newTempInfo));
         document.getElementById(`${parseInt(this.id) - 100}`).innerHTML = ` <button id="${parseInt(this.id) - 200}">+</button>${parseInt(temp.qty) - 1}<button id="${this.id}">-</button>`;
          document.getElementById(`${this.id}`).onclick = minusButtonz;
          document.getElementById(`${parseInt(this.id) - 200}`).onclick = addButtonz;
      } 
      } catch (err) {} 
  }
  } catch (err) {} 

}
