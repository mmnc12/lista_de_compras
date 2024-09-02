
const alert = document.querySelector("#alert");

const input = document.getElementById("name-item");
const button = document.getElementById("btn");
const listAll = document.querySelector(".items")
const message = document.querySelector("#alert")

let lists = [];


function addListItem() {
  if (input.value.trim() === "") {
    return
  }
  lists.push(input.value);

  input.value = "";

  viewList();

  disable();

}

function viewList() {
  let newList = "";

  lists.forEach((item, index) => {
    newList = newList + `
      <li class="item">
        <div>
          <div id="ckb" class="checkbox-image"></div>
          <input type="checkbox" class="checkbox" name="" id="">
          <span>${item}</span>
        </div>
        <button class="botao" onclick="deletarItem(${index})">
          <img src="assets/icons/delete.svg" alt="">
        </button>
      </li>
    `
  })

  listAll.innerHTML = newList;
}



function deletarItem(index) {
  lists.splice(index, 1);

  viewList();

  msgAlert();
}

function msgAlert() {
  let msn = `
      <div class="msg-alert">
        <div>
          <img src="assets/icons/alert.svg" alt="">
          <span>O item foi removido da lista</span>
        </div>
        <button id="btn-remove"><img src="assets/icons/close.svg" alt="" onclick="removeMessage()"></button>
      </div>
  `

  return message.innerHTML = msn;
}


function removeMessage() {
  let msn = "";
  
  return message.innerHTML = msn;

}


button.addEventListener("click", addListItem);
