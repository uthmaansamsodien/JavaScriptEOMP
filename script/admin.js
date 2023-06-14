let tabl = document.querySelector('#tbody');
let details = JSON.parse(localStorage.getItem('details'))

let id = Math.floor(Math.random() * 100)
function anyThing(){
details.innerHTML = ""
details.forEach((data) => {
    tabl.innerHTML += `
    <div class="table-responsive">
    <tr>
    <th>${data.id}</th>
    <th>${data.name}</th>
    <th>${data.price}</th>
    <th>${data.model}</th>
    <th><img src="${data.image}" style="width: 7rem;"/></th>
    <th><button id="buttonE">Edit</button></th>
    <th><button id="buttonD">Delete</button></th>
    <th></th>
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