//DOM and animation functions
const header = document.querySelector(".header");
const company_name = document.querySelector(".comp-name");
const menu_modal = document.querySelector(".menu-modal");
const menu_icon = document.querySelector(".menu-icon");
const menu_card = document.querySelector(".menu-card");
const menu_close = document.querySelector(".menu-card__close");
const banner = document.querySelector(".banner");
const right_arrow = document.querySelector(".page-nav__arrow-right");
const left_arrow = document.querySelector(".page-nav__arrow-left");
const current_page = document.querySelector(".pages__current-page");
const banner__subtitle = document.querySelector(".banner__subtitle");
const search_close_icon = document.querySelector(".search-close");
const search_icon = document.querySelector(".search-icon");
const search_modal = document.querySelector(".search-modal");
const faifo_example = document.querySelector(".example");
const faifo_img = document.querySelectorAll(".faifo-img");
const faifo_text = document.querySelectorAll(".faifo-text");
const all_product = document.querySelector(".all-product");
const product_type = document.querySelectorAll(".product-type");
const left_arrow_product = document.querySelector(".product-arrow-left");
const right_arrow_product = document.querySelector(".product-arrow-right");
const product_categories = document.querySelector(".product-categories");
const product_img_one = document.querySelector(".img-one");
const product_img_two = document.querySelector(".img-two");
const product_img_three = document.querySelector(".img-three");
const product_title = document.querySelector(".product-title");
const product_description = document.querySelector(".product-descript");
const drift = document.querySelector(".drift");
const dot = document.querySelectorAll(".outer_circle");
const descript_card = document.querySelectorAll(".descript-card");
const homespaceImgOne = document.querySelector(".homespace__img-one");
const homespaceImgTwo = document.querySelector(".homespace__img-two");
const homespaceArrowLeft = document.querySelector(".homespace__arrow-left");
const homespaceArrowRight = document.querySelector(".homespace__arrow-right");
const newsRightArrow = document.querySelector(".news__right-arrow");
const newsLeftArrow = document.querySelector(".news__left-arrow");
const newsSummary = document.querySelector(".news__summary");
const newsDate = document.querySelector(".news__date");
const newsHeadline = document.querySelector(".news__headline");
const newsImage = document.querySelector(".news__img");
const currentNews = document.querySelector(".pages__current");
const homespaceCurrentSection = document.querySelector(
  ".homespace__current-section"
);
const homespaceCurrentPage = document.querySelector(".homespace__current-page");
const music = document.querySelector(".music-one");
const mobile_responsive = window.matchMedia("(min-width: 300px) and (max-width: 599px)")
const banner_background = [
  "/Assets/Images/tote-desktop-banner-result_1663575080_large.webp",
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
const homespace_img = {
  ImageOne: [
    "/Assets/Images/Home space/daytime indulgence/block5-daytime1-web_1661159505_xl.webp",
    "/Assets/Images/Home space/Scene-stealing feasts/block5-scene1-web_1661159511_xs.webp",
    "/Assets/Images/Home space/nocturnal delights/block5-nocturnal1-web_1661159505_tiny.webp",
    "/Assets/Images/Home space/Execellent playmates/block5-playmates1-web_1661159508_tiny.webp",
    "/Assets/Images/Home space/Optimum office/block5-office1-web_1661159507_tiny.webp",
  ],
  ImageTwo: [
    "/Assets/Images/Home space/daytime indulgence/block5-daytime2-web_1661159505_xl.webp",
    "/Assets/Images/Home space/Scene-stealing feasts/block5-scene2-web_1661159512_small.webp",
    "/Assets/Images/Home space/nocturnal delights/block5-nocturnal2-web_1661159506_tiny.webp",
    "/Assets/Images/Home space/Execellent playmates/block5-playmates2-web_1661159509_xs.webp",
    "/Assets/Images/Home space/Optimum office/block5-office2-web_1661159507_tiny.webp",
  ],
};
const seating_img = {
  Sofa: [
    "/Assets/Images/All products/Seatings/Sofa/block3-sofa1-web_1661161229_xs.webp",
    "/Assets/Images/All products/Seatings/Sofa/block3-sofa2-web_1661161232_grande.webp",
    "/Assets/Images/All products/Seatings/Sofa/block3-sofa3-web_1661161232_small.webp",
  ],
  Armchair: [
    "/Assets/Images/All products/Seatings/Armchair/block3-armchair1-web_1661161233_xs.webp",
    "/Assets/Images/All products/Seatings/Armchair/block3-armchair2-web_1661161234_grande.webp",
    "/Assets/Images/All products/Seatings/Armchair/block3-armchair3-web_1661161235_medium.webp",
  ],
  DiningChair: [
    "/Assets/Images/All products/Seatings/Dining chair/block3-diningchair1-web_1661161237_xs.webp",
    "/Assets/Images/All products/Seatings/Dining chair/block3-diningchair2-web_1661161284_grande.webp",
    "/Assets/Images/All products/Seatings/Dining chair/block3-diningchair3-web_1661161239_medium.webp",
  ],
  Lounge: [
    "/Assets/Images/All products/Seatings/Lounge chair/block3-loungechair1-web_1661161239_xs.webp",
    "/Assets/Images/All products/Seatings/Lounge chair/block3-loungechair2-web_1661161240_grande.webp",
    "/Assets/Images/All products/Seatings/Lounge chair/block3-loungechair3-web_1661161242_medium.webp",
  ],
  DeskChair: [
    "/Assets/Images/All products/Seatings/Desk chair/block3-deskchair1-web_1661161243_xs.webp",
    "/Assets/Images/All products/Seatings/Desk chair/block3-deskchair2-web_1661161248_grande.webp",
    "/Assets/Images/All products/Seatings/Desk chair/block3-deskchair3-web_1661161249_medium.webp",
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
    "/Assets/Images/All products/Tables/Dining table/block-3-diningtable-1-web_1661161718_xs.webp",
    "/Assets/Images/All products/Tables/Office desk/block-3-officedesk-2-we_1661161724_grande.webp",
    "/Assets/Images/All products/Tables/Dining table/block-3-diningtable-3-web_1661161719_large.webp",
  ],
  CoffeeTable: [
    "/Assets/Images/All products/Tables/Coffee table/block-3-coffeetable-1-we_1661161720_xs.webp",
    "/Assets/Images/All products/Tables/Coffee table/block-3-coffeetable-2-web_1661161721_grande.webp",
    "/Assets/Images/All products/Tables/Coffee table/block-3-coffeetable-3-web_1661161722_large.webp",
  ],
  OfficeDesk: [
    "/Assets/Images/All products/Tables/Office desk/block-3-officedesk-1-we_1661161722_xs.webp",
    "/Assets/Images/All products/Tables/Office desk/block-3-officedesk-2-we_1661161724_grande.webp",
    "/Assets/Images/All products/Tables/Office desk/block-3-officedesk-3-we_1661161723_large.webp",
  ],
};
const bed_img = {
  Bed: [
    "/Assets/Images/All products/Beds/block-3-bed-1-web_1661161816_xs.webp",
    "/Assets/Images/All products/Beds/block-3-bed-3-web_1661161817_xxl.webp",
    "/Assets/Images/All products/Beds/block-3-bed-2-web_1661161818_large.webp",
  ],
};

const storage_img = {
  Cabinet: [
    "/Assets/Images/All products/Storages/Cabinet/block-3-cabinet-1-web_1661161868_xs.webp",
    "/Assets/Images/All products/Storages/Cabinet/block-3-cabinet-2-web_1661161869_grande.webp",
    "/Assets/Images/All products/Storages/Cabinet/block-3-cabinet-3-web_1661161870_large.webp",
  ],
  Tallboy: [
    "/Assets/Images/All products/Storages/Tallboy/block-3-tallboy-1-web_1661161870_xs.webp",
    "/Assets/Images/All products/Storages/Tallboy/block-3-tallboy-2-web_1661161871_grande.webp",
    "/Assets/Images/All products/Storages/Tallboy/block-3-tallboy-3-web_1661161872_large.webp",
  ],
  Bookshelf: [
    "/Assets/Images/All products/Storages/Bookshelf/block-3-bookshelf-1-web_1661161866_xs.webp",
    "/Assets/Images/All products/Storages/Bookshelf/block-3-bookshelf-3-web_1661161868_grande.webp",
    "/Assets/Images/All products/Storages/Bookshelf/block-3-bookshelf-2-web_1661161866_large.webp",
  ],
};

const games_img = {
  PingPongTable: [
    "/Assets/Images/All products/Games/Ping pong table/block3-pingpong1-web_1661162059_xs.webp",
    "/Assets/Images/All products/Games/Ping pong table/block3-pingpong2-web_1661162067_grande.webp",
    "/Assets/Images/All products/Games/Ping pong table/block3-pingpong3-web_1661162064_large.webp",
  ],
  ShuffleBoardTable: [
    "/Assets/Images/All products/Games/Shuffleboard table/block3-shuffle1-web_1661162076_xs.webp",
    "/Assets/Images/All products/Games/Shuffleboard table/block3-shuffle3-web_1661162083_grande.webp",
    "/Assets/Images/All products/Games/Shuffleboard table/block3-shuffle2-web_1661162082_large.webp",
  ],
  FoosballTable: [
    "/Assets/Images/All products/Games/Foosball table/block3-foosball1-web_1661162054_xs.webp",
    "/Assets/Images/All products/Games/Foosball table/block3-foosball2-web_1661162055_grande.webp",
    "/Assets/Images/All products/Games/Foosball table/block3-foosball3-web_1661162055_large.webp",
  ],
  PokerTable: [
    "/Assets/Images/All products/Games/Poker table/block3-poker1-web_1661162064_xs.webp",
    "/Assets/Images/All products/Games/Poker table/block3-poker2-web_1661162067_grande.webp",
    "/Assets/Images/All products/Games/Poker table/block3-poker3-web_1661162070_large.webp",
  ],
  ChessSet: [
    "/Assets/Images/All products/Games/Chess set/block3-chess1-web_1661162053_xs.webp",
    "/Assets/Images/All products/Games/Chess set/block3-chess1-web_1661162053_xs.webp",
    "/Assets/Images/All products/Games/Chess set/block3-chess3-web_1661162053_large.webp",
  ],
  CardGameTable: [
    "/Assets/Images/All products/Games/Mahjong/block3-mahjong1-web_1661162056_xs.webp",
    "/Assets/Images/All products/Games/Mahjong/block3-mahjong2-web_1661162057_grande.webp",
    "/Assets/Images/All products/Games/Mahjong/block3-mahjong3-web_1661162058_large.webp",
  ],
};

const accessories_img = {
  Mirror: [
    "/Assets/Images/All products/Accessories/Mirror/block-3-mirror-1-web_1661162011_xs.webp",
    "/Assets/Images/All products/Accessories/Mirror/block-3-mirror-2-web_1661162013_grande.webp",
    "/Assets/Images/All products/Accessories/Mirror/block-3-mirror-3-web_1661162013_large.webp",
  ],
  Trolley: [
    "/Assets/Images/All products/Accessories/Trolley/block-3-trolley-2-web_1661163009_xs.webp",
    "/Assets/Images/All products/Accessories/Trolley/block-3-trolley-3-web_1661163008_grande.webp",
    "/Assets/Images/All products/Accessories/Trolley/block-3-trolley-1-web_1661163013_large.webp",
  ],
};

const sections = [
  seating_img,
  table_img,
  bed_img,
  storage_img,
  games_img,
  accessories_img,
];

const sections_name = [
  "SEATING",
  "TABLE",
  "BEDS",
  "STORAGE",
  "GAMES",
  "ACCESSORIES",
];
const subsections_names = {
  seating_subsection_name: [
    "SOFA",
    "ARMCHAIR",
    "DINING CHAIR",
    "LOUNGE CHAIR",
    "DESK CHAIR",
    "STOOL",
    "BENCH",
    "COUNTER / BAR CHAIR",
  ],
  table_subsection_name: ["DINING TABLE", "COFFEE TABLE", "OFFICE DESK"],
  beds_subsection_name: ["BED"],
  storage_subsection_name: ["CABINET", "TALLBOY", "BOOKSHELF"],
  games_subsection_name: [
    "PING PONG TABLE",
    "SHUFFLEBOARD TABLE",
    "FOOSBALL TABLE",
    "POKER TABLE",
    "CHESS SET",
    "MAHJONG/CARD GAME TABLE",
  ],
  accessories_subsection_name: ["MIRROR", "TROLLEY"],
};
const descriptions = [
  "Our wide-ranging variety of chairs, sofas, benches and stools demonstrates an affinity for clean lines, textural volumes, and understated details. The designs effortlessly fit into a diverse set of rooms and functions, offer versatility for pairings, while captivates with easy charm and enduring appeal.",
  "District Eight’s tables bring together artful impressions, built-in precision, and straightforward practicality. The selection reflects our passion to hone and honor quality materials, eloquently expressed through sculptural forms that respond to daily life and interior styles.  ",
  "Cultivate your ideal oasis where relaxation reigns supreme. District Eight’s bed designs embody our appreciation for tactile appeal and mindful construction, made to inspire comfort, balance and pleasure.",
  "Flexible modules of considered harmony and structural simplicity for a variety of purposes. From shelving systems to cabinets, consoles and drawers, every combination and customization are adaptable and thoughtfully built to your desired effect and efficiency.",
  "The Game Collection is our passionate quest to rethink classic games in high-quality materials and dedicated workmanship. A unique blend of fun and functionality, every detail is handsomely updated to transform your favorite leisures and pastimes into a statement",
  "Our selection of design items and ornaments to complement interiors of inspired palettes. Every smallest detail matters when it comes to quality in style and modern living.",
];
const homespace_sections = [
  "DAYTIME INDULGENCE",
  "SCENCE-STEALING FEASTS",
  "NOCTURNAL DELIGHTS",
  "EXECELLENT PLAYMATES",
  "OPTIMUM OFFICE",
];
const news_images = [
  "/Assets/Images/News/pic3-article-1659416085-2k_1662970922_medium.jpeg",
  "/Assets/Images/News/step-bed-cyrus-rocking-chair_1626072927_medium.jpg",
  "/Assets/Images/News/stilt-sofa-set_1625412967_medium.jpg",
  "/Assets/Images/News/2016-a-stilt-armchair-meo-ib-1057-1_1625412341_medium.jpg",
  "/Assets/Images/News/milan-banner-01_1636021068_medium.jpeg",
  "/Assets/Images/News/designer-toan-nguyen_1634265403_medium.jpeg",
  "/Assets/Images/News/236-mko-key-frame-1_1640052161_medium.jpg",
  "/Assets/Images/News/chess-set-m4004_1642665388_medium.jpg",
];
const news_headlines = [
  "THE LAUNCH OF SÀI GÒN SHOWROOM",
  "STEP BED: INTUITED INTIMACY",
  "HARMONY ON CONTRAST",
  "STILLT ARMCHAIR HAS WON ADA 2020",
  "MILAN DESIGN WEEK 2021 - SUPERCAMPUS",
  "DESIGNER: TOAN NGUYEN",
  "DRIFT COLLECTION: A BALANCED SLICE OF LIFE",
  "CHESS SET: AN INTIMATE CLASSIC, REIMAGINED",
];
const news_date = [
  "08 Jul 2022",
  "31 Aug 2021",
  "31 Aug 2021",
  "31 Aug 2021",
  "31 Aug 2021",
  "31 Aug 2021",
  "23 Apr 2021",
  "23 Apr 2021",
];
const news_paragraph = [
  "District Eight announced the launch of its pop up showroom in the heart of Sài Gòn on July 29, 2022, making it the brand’s first ever retail concept store in Vietnam that promises to offer a unique experience in contemporary furniture design scene.",
  "The Step Bed is an easeful sanctuary of contoured lines and enriching volume. Inspired by terraced fields in mountainous regions, its padded headboard folds gently inward to accentuate a sense of intimate privacy. The design engages both inviting sensibility and aesthetic ergonomics to easily suit all relaxing and sleeping habits.",
  "Stilt is a collection of relaxing comfort and simplicity. Its conscious and no-frills design underlines District Eight’s distinctive vision to articulate Vietnamese storied craftsmanship from a contemporary perspective - one that’s inspired by European ingenuity, and resonates with people all over the world.",
  "Stilt Armchair, designed by Toan Nguyen, has been announced as the Winner of Archiproducts Design Award 2020 in the Furniture Category.",
  "District Eight is excited to announce our participation in Milan Design Week 2021, where you will discover our latest collaborations with Michele De Lucchi and Toan Nguyen.",
  "Toan Nguyen's creative individuality has been acknowledged by many flagship contemporary design brands with a substantial number of creations have been awarded prestigious international prizes.",
  "A collection of shelves, cabinets and drawers to build functional wall systems for organizing your home and office. These configurable modules are fitted in oak finishes, steel tops and hand-crafted brass pulls for drawers.",
  "Modeled on the exacting standards of our beloved furniture, the Chess Set by District Eight combines the sheer beauty of materials with authentic inspirations from Vietnamese court attires of yore, resulting in unique pieces for keeps and magnetic hours of play.",
];
let banner_page = 0;
let index_product = 0;
let cur_section = seating_img;
let cur_section_index = 0;
let homespacePage = 0;
let cur_news = 0;

//animation and function
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

function getObjectSize(object) {
  let size = Object.keys(object).length;
  return size;
}

function close_search_modal() {
  search_modal.style.display = "none";
}

function show_search_modal() {
  search_modal.style.display = "block";
}

function nextBannerImage(page) {
  banner.style.background = "url(banner) no-repeat".replace(
    "banner",
    banner_background[page + 1]
  );
  banner.style.backgroundSize = "cover";
  banner.style.backgroundBlendMode = "darken";
}

function prevBannerImage(page) {
  banner.style.background = "url(banner) no-repeat".replace(
    "banner",
    banner_background[page - 1]
  );
  banner.style.backgroundSize = "cover";
  banner.style.backgroundBlendMode = "darken";
}

function setInitialImage(object) {
  product_img_one.src = object[Object.keys(object)[0]][0];
  product_img_two.src = object[Object.keys(object)[0]][1];
  product_img_three.src = object[Object.keys(object)[0]][2];
}

function setInitialSubsectionName(cur_section_index) {
  product_categories.innerHTML =
    subsections_names[Object.keys(subsections_names)[cur_section_index]][0];
}

function nextProductImage(index, object, cur_section_index) {
  product_img_one.src = object[Object.keys(object)[index + 1]][0];
  product_img_two.src = object[Object.keys(object)[index + 1]][1];
  product_img_three.src = object[Object.keys(object)[index + 1]][2];
  product_categories.innerHTML =
    subsections_names[Object.keys(subsections_names)[cur_section_index]][
      index + 1
    ];
}

function prevProductImage(index, object, cur_section_index) {
  product_img_one.src = object[Object.keys(object)[index - 1]][0];
  product_img_two.src = object[Object.keys(object)[index - 1]][1];
  product_img_three.src = object[Object.keys(object)[index - 1]][2];
  product_categories.innerHTML =
    subsections_names[Object.keys(subsections_names)[cur_section_index]][
      index - 1
    ];
}

function nextHomespaceImg() {
  homespaceImgOne.src =
    homespace_img[Object.keys(homespace_img)[0]][homespacePage + 1];
  homespaceImgTwo.src =
    homespace_img[Object.keys(homespace_img)[1]][homespacePage + 1];
  homespaceCurrentSection.innerHTML = homespace_sections[homespacePage + 1];
  homespaceCurrentPage.innerHTML = "0" + (homespacePage + 2).toString();
  homespacePage++;
}

function prevHomespaceImg() {
  homespaceImgOne.src =
    homespace_img[Object.keys(homespace_img)[0]][homespacePage - 1];
  homespaceImgTwo.src =
    homespace_img[Object.keys(homespace_img)[1]][homespacePage - 1];
  homespaceCurrentSection.innerHTML = homespace_sections[homespacePage - 1];
  homespaceCurrentPage.innerHTML = "0" + homespacePage.toString();
  homespacePage--;
}

function next_news() {
  newsDate.innerHTML = news_date[cur_news + 1];
  newsHeadline.innerHTML = news_headlines[cur_news + 1];
  newsSummary.innerHTML = news_paragraph[cur_news + 1];
  newsImage.src = news_images[cur_news + 1];
}

function prev_news() {
  newsDate.innerHTML = news_date[cur_news - 1];
  newsHeadline.innerHTML = news_headlines[cur_news - 1];
  newsSummary.innerHTML = news_paragraph[cur_news - 1];
  newsImage.src = news_images[cur_news - 1];
}

//show and hide
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

function show_descript(index) {
  descript_card[index].classList.add("open");
}

function play_music(element) {
  element.play();
}

function sound_stop(element) {
  element.pause();
}

function changeCompName(mobile_responsive) {
  if (mobile_responsive.matches) //if match mobile media max-width 
  {
    company_name.innerHTML = "<img src = '/Assets/Images/d8-logo-small-white_1611737208.svg' class = 'mobile-responsive__comp-name'/>";
  }
}

//next and previous images
right_arrow_product.addEventListener("click", (e) => {
  if (index_product >= getObjectSize(cur_section) - 2) {
    index_product = getObjectSize(cur_section) - 2;
  }
  if (getObjectSize(cur_section) > 1) {
    nextProductImage(index_product, cur_section, cur_section_index);
    index_product++;
  }
});

left_arrow_product.addEventListener("click", (e) => {
  if (index_product <= 1 && getObjectSize(cur_section) > 1) {
    index_product = 1;
  }
  if (getObjectSize(cur_section) > 1) {
    prevProductImage(index_product, cur_section, cur_section_index);
    index_product--;
  }
});

homespaceArrowLeft.addEventListener("click", (e) => {
  if (homespacePage <= 1) {
    homespacePage = 1;
  }
  prevHomespaceImg();
});

homespaceArrowRight.addEventListener("click", (e) => {
  if (homespacePage >= 3) {
    homespacePage = 3;
  }
  nextHomespaceImg();
});

right_arrow.addEventListener("click", (e) => {
  if (banner_page >= 4) {
    banner_page = 4;
  }
  nextBannerImage(banner_page);
  banner__subtitle.innerHTML = banner_subtitle_replace[banner_page + 1];
  current_page.innerHTML = "0" + (banner_page + 2).toString();
  banner_page++;
});

left_arrow.addEventListener("click", (e) => {
  if (banner_page <= 1) {
    banner_page = 1;
  }
  prevBannerImage(banner_page);
  current_page.innerHTML = "0" + banner_page.toString();
  banner_page--;
});
newsRightArrow.addEventListener("click", (e) => {
  if (cur_news >= 6) {
    cur_news = 6;
  }
  next_news(cur_news);
  currentNews.innerHTML = "0" + (cur_news + 2).toString();
  cur_news++;
});

newsLeftArrow.addEventListener("click", (e) => {
  if (cur_news <= 1) {
    cur_news = 1;
  }
  prev_news(cur_news);
  currentNews.innerHTML = "0" + cur_news.toString();
  cur_news--;
});

//hide menu modal and menu card
menu_modal.addEventListener("click", (e) => {
  hide_menu();
  menu_card.classList.remove("active");
});

menu_close.addEventListener("click", (e) => {
  hide_menu();
  menu_card.classList.remove("active");
});

//show menu modal and menu card
menu_icon.addEventListener("click", (e) => {
  show_menu();
  menu_card.classList.add("active");
});

search_close_icon.addEventListener("click", (e) => {
  close_search_modal();
  sound_stop(music);
});

search_icon.addEventListener("click", (e) => {
  show_search_modal();
  play_music(music);
});

window.addEventListener("scroll", (e) => {
  for (let img of faifo_img) {
    parallax(faifo_example, img, "scale-in");
  }
  for (let text of faifo_text) {
    parallax(faifo_example, text, "slide-in");
  }
});

//if click on product category, change state and style respectively
product_type.forEach((type, index) => {
  type.addEventListener("click", (e) => {
    for (let product of product_type) {
      abandoned(product);
    }
    chosen(type);
    index_product = 0;
    product_title.innerHTML = sections_name[index];
    product_description.innerHTML = descriptions[index];
    cur_section = sections[index];
    cur_section_index = index;
    setInitialImage(cur_section);
    setInitialSubsectionName(cur_section_index);
  });
});

//click on each dot, show description card respectively
dot.forEach((circle, index) => {
  circle.addEventListener("click", (e) => {
    for (let descriptions of descript_card) {
      descriptions.classList.remove("open");
    }
    show_descript(index);
  });
});

//click on parent, not child
drift.addEventListener("click", (e) => {
  if (e.target === drift) {
    for (let each of descript_card) {
      each.classList.remove("open");
    }
    sound_stop(music);
  }
});

mobile_responsive.addEventListener('change', (e) => {
  changeCompName(mobile_responsive);
});