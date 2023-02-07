# HOMEWORK_9_JS

My homework in DanIt.

1.Опишіть, як можна створити новий HTML тег на сторінці.
document.createElement("tag")
element.innerHTML = htmlString;;
element.insertAdjacentHTML(position, htmlString)

2.Опишіть, що означає перший параметр функції insertAdjacentHTML і опишіть можливі варіанти цього параметра.
.insertAdjacentHTML(position, htmlString); - позиція html тега.
'beforebegin': до самого element.
'afterbegin': відразу після тега element, що відкриває.
'beforeend': відразу перед закриваючим тегом element.
'afterend': після element.

3.Як можна видалити елемент зі сторінки?
element.remove()