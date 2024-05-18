const headerNavbar = document.getElementById("header-navbar")
const mobileNavbarIcon = document.getElementById("mobile-navbar-icon")
const header = document.getElementById("header")
const headerLogo = document.getElementById("header-logo")
const headerRigtblock = document.getElementById("header-rigtblock")
const closeMobileNavbar = document.getElementById("close-mobile-navbar")
const ShopBox = document.getElementById("shop-box")
import flowers from '../base/flowers.json' with { type: 'json' };

function mobileNavbar() {
    headerNavbar.id = "mobile-navbar"
    header.id = "mobile-header"
    headerLogo.style.display = "none"
    headerRigtblock.style.display = "none"
}

function closeMobilenavbarFUNC() {
    header.id = "header"
    headerNavbar.id = "header-navbar"
    headerLogo.style.display = "flex"
    headerRigtblock.style.display = "flex"
}

closeMobileNavbar.addEventListener("click", closeMobilenavbarFUNC)
mobileNavbarIcon.addEventListener("click", mobileNavbar);

for (const i in flowers) {
    if (Object.hasOwnProperty.call(flowers, i)) {
            ShopBox.innerHTML += `<div class="shop-box-items">
            <img src="${flowers[i]["image"]}" class="shop-box-item-image" alt="">
            ${flowers[i]["name"]}
            </div>`
            console.log(flowers[i]["name"]);
    }
}
