let tabl = document.querySelector('.products');

let details = JSON.parse(localStorage.getItem("details"))
  ? JSON.parse(localStorage.getItem("details"))
  : localStorage.setItem(
      "details",
      JSON.stringify([
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
        model: 'Predator Edge+ (JUNIOR)',
        price: 'R5499',
        image: 'https://i.postimg.cc/CL3dbG8x/adidas-predator-edge-plus-removebg-preview.png' 
    },
    {
        id: 3,
        name: 'NEW BALANCE',
        model: 'NB Furon v6 (JUNIOR)',
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
        model: 'X SpeedPortal.3 (JUNIOR)',
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
]));

  function anyThing(){
    tabl.innerHTML = ''
    details.forEach((data) => {
        tabl.innerHTML += `
        
        <div class="card carsprod" style="width: 18rem;">
        <div class="image">
        <img src="${data.image}" class="card-img-top"id="cardZ" alt="logo" loading="lazy">
        </div>
        <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${data.model}</p>
        <p class="card-price">${data.price}</p>
        <a href="#" class="btn btn-warning-subtle">Add to cart</a>
        </div>
        </div>
        `
    })
}
anyThing()

console.log(details);