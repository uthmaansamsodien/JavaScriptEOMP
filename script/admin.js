let tabl =
document.querySelector('#tbody');
let details = [
    {
        id: 1,
        name: 'NIKE, Zoom Mercurial Vapor 15 Elite',
        price: 'R5099',
        image: 'https://i.postimg.cc/Lsmbn43w/5dfb1c83-c4c0-4b16-b78e-d8af300afa2c.webp'
    },
    {
        id: 2,
        name: 'PUMA, Future Ultimate Creativity',
        price: 'R4799',
        image: 'https://i.postimg.cc/zfG4hNFp/png.webp'
    },
    {
        id: 3,
        name: 'ADIDAS, X Speedportal+',
        price: 'R5499',
        image: 'https://i.postimg.cc/BQbFF31j/24713c3db23d4f05adc7afaa00b36e48-9366.webp'
    },
    {
        id: 4,
        name: 'NEW BALANCE, 422 v2 Pro FG',
        price: 'R1499',
        image: 'https://i.postimg.cc/yN6YjJRs/ms41fwd2-nb-02-i.webp'
    },
    {
        id: 5,
        name: 'UNDER ARMOUR, Shadow Pro FG ',
        price: 'R2899',
        image: 'https://i.postimg.cc/q7pgFbPf/3025643-300-DEFAULT.webp'
    },
    {
        id: 6,
        name: 'UNDER ARMOUR, Clone Magnetico Premier 2',
        price: 'R2899',
        image: 'https://i.postimg.cc/0jSYjVXP/3025641-400-A.webp'
    },
    {
        id: 7,
        name: 'NEW BALANCE, Tekela V3+ Magique AG',
        price: 'R1299',
        image: 'https://i.postimg.cc/KvFF0R78/mst3ap35-nb-02-i.webp'
    }, 
    {
        id: 8,
        name: 'ADIDAS, Preditor',
        price: 'R2199',
        image: 'https://i.postimg.cc/KcM5vYMF/adidas-predator-18-4-fxg-jr-db2321-football-boots-green-multicolored-2000x2000.jpg'
    },
    {
        id: 9,
        name: 'PUMA, Future Ultimate (BLACK)',
        price: 'R3599',
        image: 'https://i.postimg.cc/y6MHBYjB/107164-02-sv01.jpg'
    },
    {
        id: 10,
        name: 'NIKE, Zoom Mercurial Dream Speed Superfly 9 (CR7)',
        price: 'R5399',
        image: 'https://i.postimg.cc/Pq5P9LdH/zoom-mercurial-dream-speed-superfly-9-elite-fg-football-boot-cr83p-T.jpg'
    }
]
details.forEach((data) => {
    tabl.innerHTML += `
    <tr>
    <th>${data.id}</th>
    <th>${data.name}</th>
    <th>${data.price}</th>
    <th><img src="${data.image}" style="height:100px"/></th>
    <th><button id="buttonE">Edit</button></th>
    <th><button id="buttonD">Delete</button></th>
    </tr>`
})
