let tabl = document.querySelector('#tbody');
let sorting = document.querySelector('#sorting');
let details = JSON.parse(localStorage.getItem('details'))

let id = Math.floor(Math.random() * 100)
function anyThing(){
tabl.innerHTML = ""
details.forEach((item) => {
    tabl.innerHTML += `
    <div class="table-responsive">
    <tr>
    <th>${item.id}</th>
    <th>${item.name}</th>
    <th>${item.model}</th>
    <th>${item.price}</th>
    <th><img src="${item.image}" style="width: 7rem;"/></th>
    <th><button type="button" class="btn buttonA" id="buttonE" data-bs-toggle="modal" data-bs-target="#modal2${item.id}">Edit</button>

    <div class="modal fade" id="modal2${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content mod">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit a product</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Name:</label>
                <input type="text" class="form-control" id="namee${item.id}">
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Model:</label>
                <input type="text" class="form-control" id="modell${item.id}">
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Price:</label>
                <input type="text" class="form-control" id="pricee${item.id}">
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Link url:</label>
                <input type="text" class="form-control" id="linkUrll${item.id}">
              </div>
              
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-warning-subtle" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-warning-subtle" onclick="new EditItem(${JSON.stringify(item)})">Save</button>
          </div>
    
        </div>
      </div>
    </div></th>
    <th><button id="buttonD">Delete</button></th>
    </tr>
    
    </div>`
})
//local storage
localStorage.setItem("details",JSON.stringify(details))

// delete button
function deleteButtons(){
        delButton = [...document.querySelectorAll('#buttonD')];
        delButton.forEach((item)=>{
            item.addEventListener('click', deleteShoe)
        })
    }
    function deleteShoe(event){
        tabl.innerHTML= ""
        let start = delButton.indexOf(event.target);
        details.splice(start, 1);
        localStorage.setItem("details",JSON.stringify(details))
        anyThing()
        
    }
deleteButtons()
}

function add() {
    let name = document.querySelector("#nameLabel").value;
    let model = document.querySelector("#modelLabel").value;
    let price = document.querySelector("#priceLabel").value;
    let image = document.querySelector("#linkUrl").value;
    details.push({
        id: id,
        name: name,
        model: model,
        price: price,
        image: image
    })
    id++
    localStorage.setItem('details', JSON.stringify(details))
    anyThing()
}
anyThing()

sorting.addEventListener("click", (event) => {
    event.preventDefault();
    details.sort((a, b) => {
        if (a.id > b.id) {
            return -1;
        } else if (b.id > a.id) {
            return -1;
        } else {
            return 0;
        }
    });
    console.log(details);
    anyThing();
    location.reload()
  });
  
  //edit button
  function EditItem(item) {
    this.id = item.id;
    this.name = document.querySelector(`#namee${item.id}`).value;
    this.image = document.querySelector(`#linkUrll${item.id}`).value;
    this.model = document.querySelector(`#modell${item.id}`).value;
    this.price = document.querySelector(`#pricee${item.id}`).value;
    let itemIndex = details.findIndex((data)=>{
        return data.id == item.id;
    })
    details[itemIndex] = Object.assign({}, this)
    localStorage.setItem('details', JSON.stringify(details));
    anyThing();
    // let backdropIssue = document.querySelector('.modal-backdrop')
    // backdropIssue.remove()
}