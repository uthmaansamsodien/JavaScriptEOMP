let tabl =
document.querySelector('#tbody');
let details = [
    {
        id: 0,
        name: 'PUMA',
        model: 'Neymar Jr Future 2.4 FG AG',
        price: 'R4799',
        image: 'https://i.postimg.cc/qMy6bD43/Puma-Future-Z-NJR-1-4-FG-AG-removebg-preview.png'
    },
    {
        id: 1,
        name: 'NIKE',
        model: 'Phantom GT Elite FG',
        price: 'R4899',
        image: 'https://i.postimg.cc/fLD9mx69/1061956-removebg-preview.png'
    },
    {
        id: 2,
        name: 'ADIDAS',
        model: 'Predator Edge+',
        price: 'R5499',
        image: 'https://i.postimg.cc/CL3dbG8x/adidas-predator-edge-plus-removebg-preview.png' 
    },
    {
        id: 3,
        name: 'NEW BALANCE',
        model: 'NB Furon v6',
        price: 'R1499',
        image: 'https://i.postimg.cc/MZty0FZK/5f68d0a5bbb7f-removebg-preview.png'
    },
    {
        id: 4,
        name: 'UNDER ARMOUR',
        model: 'ClutchFit 3.0 Hybrid SG',
        price: 'R2899',
        image: 'https://i.postimg.cc/90NR6szd/1235575-removebg-preview.png'
    },
    {
        id: 5,
        name: 'UNDER ARMOUR',
        model: 'Clone Magnetico Pro',
        price: 'R2899',
        image: 'https://i.postimg.cc/05JzjX6B/Rebel-62717101-whiteblue-hi-res-removebg-preview.png'
    },
    {
        id: 6,
        name: 'ADIDAS',
        model: 'X SpeedPortal.3',
        price: 'R2199',
        image: 'https://i.postimg.cc/6q75vq5Z/adidas-x-speedportal-3-mg-removebg-preview.png'
    }, 
    {
        id: 7,
        name:  'PUMA',
        model: 'Future Ultimate (BLACK)',
        price: 'R3599',
        image: 'https://i.postimg.cc/SxfCbqTp/107164-02-sv01-removebg-preview.png'
    },
    {
        id: 8,
        name:  'NIKE',
        model: 'CR7 Mercurial "Campeões"',
        price: 'R6399',
        image: 'https://i.postimg.cc/fy3ZY8m8/ronaldo-19-min-removebg-preview.png'
    },
    {
        id: 9,
        name: 'NEW BALANCE', 
        model: '442 v2',
        price: 'R1299',
        image: 'https://i.postimg.cc/fy0DbPBj/M-JS43-FWD2-M-WHITE-V3-550x550-removebg-preview.png'
    }
]

function anyThing(){
details.forEach((data) => {
    tabl.innerHTML += `
    <tr>
    <th>${data.id}</th>
    <th>${data.name}</th>
    <th>${data.price}</th>
    <th>${data.model}</th>
    <th><img src="${data.image}" style="width: 7rem;"/></th>
    <th><button id="buttonE">Edit</button></th>
    <th><button id="buttonD">Delete</button></th>
    </tr>`
})
//local storage
localStorage.setItem("shoes",JSON.stringify(details))

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
        localStorage.setItem("shoes",JSON.stringify(details))
        anyThing()
        
    }
deleteButtons()
}
anyThing()