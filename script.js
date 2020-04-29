// Get input element
let filterInput = document.querySelector("#filterInput");
// Add event listener
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  // get value of input
  let filterValue = document.querySelector("#filterInput").value.toUpperCase();
  console.log(filterValue);

  // get names ul
  let namesUl = document.getElementById('names');
  // get names from ul
  let names = namesUl.querySelectorAll('.collection-item');

  // loop through names
  for (let i = 0; i < names.length; i++) {
    let a = names[i].getElementsByTagName('a')[0];

    if (a.innerHTML.toUpperCase().indexOf(filterValue) != -1) {
      names[i].style.display = '';
    } else {
      names[i].style.display = 'none';
    }
  }
}
