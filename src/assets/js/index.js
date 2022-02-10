const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const profileBtn = document.querySelector(".profile");
const profile = document.querySelector("#profile-menu");
// const closeSidebar1 = document.querySelector("#closeSidebar1");
// const closeSidebar2 = document.querySelector("#closeSidebar2");

// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// // close sidebar with press main
// closeSidebar1.addEventListener('click', () => {
//     sideMenu.style.display = 'none';
// });
// // close sidebar with press main
// closeSidebar2.addEventListener('click', () => {
//     sideMenu.style.display = 'none';
// });


//change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    // themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// open profie 
profileBtn.addEventListener('click', () => {
    profile.classList.toggle('active');
});

// Lenado de las datos en la tabla
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                    <td>${order.productName}</td>
                    <td>${order.productNumber}</td>
                    <td>${order.paymentStatus}</td>
                    <td class= "${order.shipping === 'Rechazado' ? 'danger' : order.shipping === 'Pendiente' ? 'warning': 'primary' }">${order.shipping}</td>
                    <td class="primary">Details</td>
    `
    tr.innerHTML = trContent
    document.querySelector('table tbody').appendChild(tr);
});