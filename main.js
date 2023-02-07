const myArray = [
  "Kharkiv",
  "Kiev",
  ["Borispol", "Irpin"],
  "Odessa",
  "Lviv",
  "Dnieper",
];
const prepareUL = (root, arr) => {
  let ul = document.createElement("ul");
  let li;
  root.appendChild(ul);
  arr.forEach(function (item) {
    if (Array.isArray(item)) {
      prepareUL(li, item);
      return;
    }
    li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
  });
};
const div = document.getElementById("myList");
prepareUL(div, myArray);

const seconds = 3;

function times(numb, int_id) {
  const time = numb;
  if (time <= 0) {
    clearInterval(int_id);
    div.remove();
  }
  return time < 10 ? "0" + time : time;
}

function interval(int_id, numb) {
  var span = document.getElementById(int_id);
  int_id = setInterval(function () {
    span.innerHTML = times(numb--, int_id);
  }, 1000);
}

interval("times", seconds);
