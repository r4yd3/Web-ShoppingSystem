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
let total = 0;
for (let i = 0; i < 39; i++) {
  let temp = JSON.parse(localStorage.getItem(allFood[i]));
  try {
      if (temp.qty != 0 || temp.qty == null) {
    total += temp.qty * temp.price;
  }
  } catch (err) {
    
  }

}
document.getElementById("totalPrice").innerHTML = "RM " + total;