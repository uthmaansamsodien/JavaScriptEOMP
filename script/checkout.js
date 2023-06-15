let checkInBox = JSON.parse(localStorage.getItem("checkIn")) || []

  console.log(checkInBox);

  let displayBody = document.querySelector('#headBox')

  checkInBox.forEach((data) => {
    displayBody.innerHTML +=
    `
   <tr class="border-1">
   <td class="border-1 class="bordOne"">${data.model}</td>
   <td class="border-1 class="bordOne"">${data.name}</td>
   <td class="border-1 class="bordOne"">${data.price}</td>
   <td class="border-1 class="bordOne""><img src="${data.image}<" loading="lazy" class="img-fluid" id="picCheck" alt="${data.name}"></td>

   </tr>
   `
  });
  let remover = document.querySelector("#removeItem")
  remover.addEventListener("click", () => {
    localStorage.removeItem("checkIn");
    location.reload();
  });
