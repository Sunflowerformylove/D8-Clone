const menu_modal = document.querySelector(".menu-modal");
const menu_icon = document.querySelector(".menu-icon");
const menu_card = document.querySelector(".menu-card");
const banner = document.querySelector(".banner");
const right_arrow = document.querySelector(".page-nav__arrow-right");
const left_arrow = document.querySelector(".page-nav__arrow-left");
const current_page = document.querySelector(".pages__current-page");
const banner__subtitle = document.querySelector(".banner__subtitle");
const close_icon = document.querySelector(".fa-times");
const search_icon = document.querySelector(".search-icon");
const search_modal = document.querySelector(".search-modal");
const faifo_example = document.querySelector(".example");
const faifo_img = document.querySelectorAll(".faifo-img");
const faifo_text = document.querySelectorAll(".faifo-text");
const product_type = document.querySelectorAll(".product-type");
const left_arrow_product = document.querySelector(".product-arrow-left");
const right_arrow_product = document.querySelector(".product-arrow-right");
const product_categories = document.querySelector(".product-categories");
const product_img_one = document.querySelector(".img-one");
const product_img_two = document.querySelector(".img-two");
const product_img_three = document.querySelector(".img-three");
const banner_background = [
  "./Assets/Images/tote-desktop-banner-result_1663575080_large.webp",
  "/Assets/Images/desktop-banner-joss-opted_1662017351_grande.webp",
  "/Assets/Images/stilt-expansion-banner-opted_1660894112_grande.webp",
  "/Assets/Images/banner-1-faifo-result-20sep_1663647754_grande.webp",
  "/Assets/Images/banner-2-mahjong-opted-1659348092-grande_1661153869_grande.webp",
  "/Assets/Images/banner-3-drift-opted-1659348092-grande_1661153869_grande.webp",
];
const banner_subtitle_replace = [
  "INSPIRING MINIMALISM FOR MODERN KEEPSAKES",
  "A STATEMENT IN HARMONY AND SERENITY",
  "CHARACTERISE BY COMFORT AND SIMPLICITY",
  "A TRIBUTE TO GATHERINGS AND CONVIVIALITY",
  "MAHJONG TABLE: COMMUNAL LEISURE REFINED",
  "DRIFT COLLECTION: A BALANCED SLICE OF LIFE",
];
const seating_img = {
  Sofa: [
    "/Assets/Images/All products/Seatings/Sofa/block3-sofa1-web_1661161229_xs.webp",
    "./Assets/Images/All products/Seatings/Sofa/block3-sofa2-web_1661161232_grande.webp",
    "/Assets/Images/All products/Seatings/Sofa/block3-sofa3-web_1661161232_small.webp",
  ],
  Armchair: [
    "./Assets/Images/All products/Seatings/Armchair/block3-armchair1-web_1661161233_xs.webp",
    "/Assets/Images/All products/Seatings/Armchair/block3-armchair2-web_1661161234_grande.webp",
    "./Assets/Images/All products/Seatings/Armchair/block3-armchair3-web_1661161235_medium.webp",
  ],
  DiningChair: [
    "./Assets/Images/All products/Seatings/Dining chair/block3-diningchair1-web_1661161237_xs.webp",
    "./Assets/Images/All products/Seatings/Dining chair/block3-diningchair2-web_1661161284_grande.webp",
    "./Assets/Images/All products/Seatings/Dining chair/block3-diningchair3-web_1661161239_medium.webp",
  ],
  Lounge: [
    "./Assets/Images/All products/Seatings/Lounge chair/block3-loungechair1-web_1661161239_xs.webp",
    "./Assets/Images/All products/Seatings/Lounge chair/block3-loungechair2-web_1661161240_grande.webp",
    "./Assets/Images/All products/Seatings/Lounge chair/block3-loungechair3-web_1661161242_medium.webp",
  ],
  DeskChair: [
    "/Assets/Images/All products/Seatings/Desk chair/block3-deskchair1-web_1661161243_xs.webp",
    "/Assets/Images/All products/Seatings/Desk chair/block3-deskchair2-web_1661161248_grande.webp",
    "./Assets/Images/All products/Seatings/Desk chair/block3-deskchair3-web_1661161249_medium.webp",
  ],
  Stool: [
    "/Assets/Images/All products/Seatings/Stool/block3-stool1-web_1661161253_tiny.webp",
    "/Assets/Images/All products/Seatings/Stool/block3-stool2-web_1661161254_xl.webp",
    "/Assets/Images/All products/Seatings/Stool/block3-stool3-web_1661161284_small.webp",
  ],
  Bench: [
    "/Assets/Images/All products/Seatings/Bench/block3-bench1-web_1661161259_xs.webp",
    "/Assets/Images/All products/Seatings/Bench/block3-bench2-web_1661161264_2k.webp",
    "/Assets/Images/All products/Seatings/Bench/block3-bench3-web_1661161274_medium.webp",
  ],
  Counter: [
    "/Assets/Images/All products/Seatings/CounterBar Chair/block3-counter1-web_1661161274_xs.webp",
    "/Assets/Images/All products/Seatings/CounterBar Chair/block3-bench2-web_1661161624_2k.jpg",
    "/Assets/Images/All products/Seatings/CounterBar Chair/block3-counter3-web_1661161229_large.webp",
  ],
};
const table_img = {
  DiningTable: [
    '/Assets/Images/All products/Tables/Dining table/block-3-diningtable-1-web_1661161718_xs.webp',
    '/Assets/Images/All products/Tables/Office desk/block-3-officedesk-2-we_1661161724_grande.webp',
    '/Assets/Images/All products/Tables/Dining table/block-3-diningtable-3-web_1661161719_large.webp'
  ],
  CoffeeTable: [
    '/Assets/Images/All products/Tables/Coffee tabel/block-3-coffeetable-1-we_1661161720_xs.webp',
    '/Assets/Images/All products/Tables/Coffee tabel/block-3-coffeetable-2-web_1661161721_grande.webp',
    './Assets/Images/All products/Tables/Coffee tabel/block-3-coffeetable-3-web_1661161722_large.webp'
  ],
  OfficeDesk: [
    '/Assets/Images/All products/Tables/Office desk/block-3-officedesk-1-we_1661161722_xs.webp',
    '/Assets/Images/All products/Tables/Office desk/block-3-officedesk-3-we_1661161723_large.webp',
    '/Assets/Images/All products/Tables/Office desk/block-3-officedesk-3-we_1661161723_large.webp'
  ]
}
const bed_img = {
  
}
const sections = [seating_img, table_img, bed_img, storage_img, games_img, accessories_img];
const seating_subsection_name = ['SOFA', 'ARMCHAIR', 'DINING CHAIR', 'LOUNGE CHAIR', 'DESK CHAIR', 'STOOL', 'BENCH', 'COUNTER / BAR CHAIR']
let page = 0;
let index = 0;
let cur_section = seating_img;

//animation
function parallax(parent, child, parallaxStyle) {
  let distanceTop = 600;
  let distanceBottom = 200;
  let windowHeight = window.innerHeight;
  let elementTop = parent.getBoundingClientRect().top;
  let elementBottom = parent.getBoundingClientRect().bottom;
  if (
    elementTop < windowHeight - distanceTop &&
    elementBottom > distanceBottom
  ) {
    child.classList.add("parallax");
    child.classList.add(parallaxStyle.toString());
  } else {
    child.classList.remove("parallax");
    child.classList.remove(parallaxStyle.toString());
  }
}

function close_search_modal() {
  search_modal.style.display = "none";
}

function show_search_modal() {
  search_modal.style.display = "block";
}

function next_banner_image(page) {
  banner.style.background = "url(banner) no-repeat".replace(
    "banner",
    banner_background[page + 1]
  );
  banner.style.backgroundSize = "cover";
  banner.style.backgroundBlendMode = "darken";
}

function prev_banner_image(page) {
  banner.style.background = "url(banner) no-repeat".replace(
    "banner",
    banner_background[page - 1]
  );
  banner.style.backgroundSize = "cover";
  banner.style.backgroundBlendMode = "darken";
}

function next_product_image(index) {
  product_img_one.src = object[Object.keys(object)[index + 1]][0];
  product_img_two.src = object[Object.keys(object)[index + 1]][1];
  product_img_three.src = object[Object.keys(object)[index + 1]][2];
  product_categories.innerHTML = seating_subsection_name[index + 1];
}

function prev_product_image(index,object) {
  product_img_one.src = object[Object.keys(object)[index - 1]][0];
  product_img_two.src = object[Object.keys(object)[index - 1]][1];
  product_img_three.src = object[Object.keys(object)[index - 1]][2];
  product_categories.innerHTML = seating_subsection_name[index - 1];
}

function hide_menu() {
  menu_modal.classList.remove("active");
}

function show_menu() {
  menu_modal.classList.add("active");
}

function chosen(element) {
  element.classList.add("chosen");
}

function abandoned(element) {
  element.classList.remove("chosen");
}

//events handlers

right_arrow_product.addEventListener("click", (e) => {
  if (index >= 6) {
    index = 6;
  }
  next_product_image(index);
  index++;
});

left_arrow_product.addEventListener("click", (e) => {
  if (index <= 1) {
    index = 1;
  }
  prev_product_image(index);
    index--;
});

right_arrow.addEventListener("click", (e) => {
  if (page >= 4) {
    page = 4;
  }
  next_banner_image(page);
  banner__subtitle.innerHTML = banner_subtitle_replace[page + 1];
  current_page.innerHTML = "0" + (page + 2).toString();
  page++;
});

left_arrow.addEventListener("click", (e) => {
  if (page <= 1) {
    page = 1;
  }
  prev_banner_image(page);
  current_page.innerHTML = "0" + page.toString();
  page--;
});

//hide menu modal and menu card
menu_modal.addEventListener("click", (e) => {
  hide_menu();
  menu_card.classList.remove("active");
});

//show menu modal and menu card
menu_icon.addEventListener("click", (e) => {
  show_menu();
  menu_card.classList.add("active");
});

close_icon.addEventListener("click", close_search_modal);
search_icon.addEventListener("click", show_search_modal);
window.addEventListener("scroll", (e) => {
  for (let img of faifo_img) {
    parallax(faifo_example, img, "scale-in");
  }
  for (let text of faifo_text) {
    parallax(faifo_example, text, "slide-in");
  }
});

product_type.forEach((type, index) => {
  type.addEventListener("click", (e) => {
    for (let product of product_type) {
      abandoned(product);
    }
    chosen(type);
    cur_section = sections[index];
  });
});
