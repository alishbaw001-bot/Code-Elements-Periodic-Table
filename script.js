
// ======================================
// DATA: 24 HTML + 24 CSS + 24 JavaScript
// ======================================

const data = [

  // HTML ELEMENTS: 24

  ["HTML","div","<div>","Generic container jo elements ko group karta hai.","Layout sections aur CSS styling ke liye.",'<div class="box">Hello</div>',"Iska apna semantic meaning nahi hota."],

  ["HTML","p","<p>","Paragraph text ko represent karta hai.","Descriptions aur normal text ke liye.","<p>Hello world!</p>","Browser paragraph ke around spacing de sakta hai."],

  ["HTML","h1","H1","Page ki main heading hoti hai.","Page ka main title dikhane ke liye.","<h1>My Website</h1>","h1 se h6 tak heading levels hain."],

  ["HTML","h2","H2","Second-level heading hoti hai.","Sections ke titles ke liye.","<h2>About Me</h2>","Heading level content structure ke mutabiq choose karo."],

  ["HTML","a","<a>","Hyperlink banata hai.","Doosre page ya website par jane ke liye.",'<a href="about.html">About</a>',"href destination define karta hai."],

  ["HTML","img","IMG","Page par image show karta hai.","Product photos aur illustrations ke liye.",'<img src="photo.jpg" alt="A flower">',"src image path aur alt description hoti hai."],

  ["HTML","button","BTN","Clickable button banata hai.","Actions ya popup kholne ke liye.",'<button type="button">Click me</button>',"Form mein button ya submit type sahi choose karo."],

  ["HTML","input","IN","User se data leta hai.","Search, login aur signup fields ke liye.",'<input type="email" placeholder="Email">',"type field ki qisam batata hai."],

  ["HTML","form","FORM","User inputs ko group aur submit karta hai.","Login aur registration forms ke liye.",'<form><input required><button>Send</button></form>',"Data process karne ke liye submit handler ya backend chahiye."],

  ["HTML","label","LAB","Form field ka label deta hai.","Input ko samajhna aur accessibility behtar karna.",'<label for="email">Email</label><input id="email">',"for ki value input ke id se match honi chahiye."],

  ["HTML","section","SEC","Related content ka section define karta hai.","Page ko meaningful sections mein divide karne ke liye.","<section><h2>Services</h2></section>","Section ke liye heading helpful hoti hai."],

  ["HTML","header","HEAD","Page ya section ka introductory area hota hai.","Logo aur introductory content ke liye.","<header><h1>My Site</h1></header>","Har header zaroori nahi ke main site header ho."],

  ["HTML","footer","FOOT","Page ya section ka footer hota hai.","Copyright aur related links ke liye.","<footer>Copyright 2026</footer>","Aksar page ya section ke end par hota hai."],

  ["HTML","nav","NAV","Navigation links ka section define karta hai.","Website menu banane ke liye.",'<nav><a href="#home">Home</a></nav>',"Navigation links ko group karta hai."],

  ["HTML","main","MAIN","Page ke main content ko represent karta hai.","Primary content identify karne ke liye.","<main><h1>Welcome</h1></main>","Aam tor par visible page mein ek main element hota hai."],

  ["HTML","span","SPAN","Inline generic container hai.","Text ke chhote hisse ko style karne ke liye.",'<p>Hello <span>you</span></p>',"Aam tor par nayi line start nahi karta."],

  ["HTML","ul","UL","Bullets wali unordered list banata hai.","Jab list ka order important na ho.","<ul><li>HTML</li></ul>","List items li tags mein hote hain."],

  ["HTML","ol","OL","Numbered ya ordered list banata hai.","Steps ya sequence dikhane ke liye.","<ol><li>Learn</li></ol>","List items li tags mein hote hain."],

  ["HTML","li","LI","List ka ek item represent karta hai.","ul ya ol ke andar items banane ke liye.","<ul><li>JavaScript</li></ul>","Aam tor par ul ya ol ke andar use hota hai."],

  ["HTML","table","TABLE","Rows aur columns wala data table banata hai.","Tabular data organize karne ke liye.","<table><tr><td>HTML</td></tr></table>","Rows tr aur cells td ya th se bante hain."],

  ["HTML","video","VIDEO","Web page par video embed karta hai.","Tutorials aur video content ke liye.",'<video controls src="demo.mp4"></video>',"controls user ko playback control dete hain."],

  ["HTML","textarea","TEXT","Multi-line text input deta hai.","Comments aur longer messages ke liye.",'<textarea rows="4"></textarea>',"Multiple lines ka text enter ho sakta hai."],

  ["HTML","select","SEL","Dropdown options provide karta hai.","Predefined option select karwane ke liye.",'<select><option>Karachi</option></select>',"Options ko option tags mein likhte hain."],

  ["HTML","article","ART","Independent, self-contained content define karta hai.","Blog post ya standalone card ke liye.","<article><h2>Post</h2><p>Text</p></article>","Content apne aap mein meaningful hona chahiye."],


  // CSS PROPERTIES: 24

  ["CSS","color","Aa","Text ka rang set karta hai.","Text readability aur theme ke liye.","p { color: #fbd7da; }","Ye text color hai, background color nahi."],

  ["CSS","background-color","BG","Element ke background ka color set karta hai.","Cards aur page backgrounds ke liye.","body { background-color: #21191b; }","Hex, RGB aur color names use ho sakte hain."],

  ["CSS","display","DISP","Element ka layout behavior set karta hai.","Block, inline, flex ya grid layout ke liye.",".box { display: flex; }","Flex aur grid children ko arrange karte hain."],

  ["CSS","position","POS","Element ki positioning ka tareeqa set karta hai.","Relative, absolute, fixed ya sticky placement ke liye.",".nav { position: sticky; top: 0; }","top aur left ka effect position par depend karta hai."],

  ["CSS","margin","MAR","Element ke bahar ki spacing set karta hai.","Elements ke darmiyan gap dene ke liye.",".card { margin: 16px; }","Margin element ke bahar hota hai."],

  ["CSS","padding","PAD","Content aur border ke darmiyan inner spacing deta hai.","Cards aur buttons ko comfortable banane ke liye.",".card { padding: 20px; }","Padding element ke andar hoti hai."],

  ["CSS","width","W","Element ki width set karta hai.","Container ka size control karne ke liye.",".card { width: 100%; }","max-width responsive sizing mein useful hai."],

  ["CSS","height","H","Element ki height set karta hai.","Components ki vertical size ke liye.",".hero { min-height: 300px; }","min-height content ko grow karne deta hai."],

  ["CSS","border","BORD","Element ke around border draw karta hai.","Cards aur buttons ko define karne ke liye.",".card { border: 1px solid #c98c9a; }","Width, style aur color set hote hain."],

  ["CSS","border-radius","RND","Corners ko round karta hai.","Cards aur circular buttons ke liye.",".card { border-radius: 16px; }","50% circular shape bana sakta hai."],

  ["CSS","box-shadow","SHDW","Element ke peeche shadow effect deta hai.","Depth aur raised effect ke liye.",".card { box-shadow: 4px 4px 9px #140f10; }","Blur aur spread shadow ki appearance badalte hain."],

  ["CSS","font-size","Aa","Text ka size set karta hai.","Headings aur body text ki hierarchy ke liye.","h1 { font-size: 32px; }","rem aur clamp() responsive text ke liye useful hain."],

  ["CSS","font-weight","BOLD","Text ki motai set karta hai.","Heading ya important text emphasize karne ke liye.","h2 { font-weight: 700; }","400 normal aur 700 bold hota hai."],

  ["CSS","text-align","ALIGN","Text ki horizontal alignment set karta hai.","Text ko left, center ya right karne ke liye.",".hero { text-align: center; }","Flex items align karne ke liye doosri properties bhi hain."],

  ["CSS","justify-content","J-C","Flex/grid items ko main axis par arrange karta hai.","Items ki spacing aur placement ke liye.",".row { display: flex; justify-content: space-between; }","Flex mein main axis direction par depend karti hai."],

  ["CSS","align-items","A-I","Items ko cross axis par align karta hai.","Navbar aur card content align karne ke liye.",".row { display: flex; align-items: center; }","Flex row mein aam tor par vertical alignment hoti hai."],

  ["CSS","gap","GAP","Flex ya grid items ke darmiyan spacing deta hai.","Cards aur buttons ke consistent gap ke liye.",".grid { display: grid; gap: 12px; }","row-gap aur column-gap bhi use kar sakte ho."],

  ["CSS","grid-template-columns","GRID","CSS Grid ke columns define karta hai.","Periodic table aur card grids ke liye.",".grid { display: grid; grid-template-columns: repeat(4, 1fr); }","repeat() aur minmax() responsive grids mein useful hain."],

  ["CSS","flex-direction","DIR","Flex items ki direction set karta hai.","Row ya column layout ke liye.",".box { display: flex; flex-direction: column; }","Default direction row hoti hai."],

  ["CSS","overflow","OVF","Extra content ko handle karne ka tareeqa set karta hai.","Scroll areas aur clipping ke liye.",".panel { overflow: auto; }","auto zaroorat par scrolling deta hai."],

  ["CSS","opacity","OPAC","Element ki transparency set karta hai.","Fade effects aur subtle states ke liye.",".muted { opacity: .6; }","0 transparent aur 1 fully opaque hota hai."],

  ["CSS","transform","MOVE","Element ko translate, rotate ya scale karta hai.","Hover effects aur movement ke liye.",".card:hover { transform: translateY(-3px); }","Aam tor par normal layout flow nahi badalta."],

  ["CSS","transition","ANIM","CSS property changes ko smooth banata hai.","Hover aur state changes ko animate karne ke liye.",".btn { transition: transform .2s; }","Duration aur property define kar sakte ho."],

  ["CSS","z-index","LAYER","Elements ki stacking order control karta hai.","Popup ko content ke upar dikhane ke liye.",".modal { position: fixed; z-index: 1000; }","Stacking contexts bhi effect daal sakte hain."],


  // JAVASCRIPT METHODS: 24

  ["JavaScript","querySelector()","QSEL","CSS selector se pehla matching element select karta hai.","HTML element ko JavaScript se access karne ke liye.",'document.querySelector(".title");',"Match na mile to null return hota hai."],

  ["JavaScript","querySelectorAll()","QALL","Selector se match karne wale elements ki NodeList deta hai.","Multiple cards ya buttons select karne ke liye.",'document.querySelectorAll(".card");',"Ye static NodeList return karta hai."],

  ["JavaScript","addEventListener()","EVT","Element par event hone par callback chalata hai.","Click, input aur keyboard interactions ke liye.",'button.addEventListener("click", () => alert("Hi"));',"Event name string hota hai."],

  ["JavaScript","getElementById()","ID","ID se element select karta hai.","Unique ID wale element ko access karne ke liye.",'document.getElementById("title");',"ID aam tor par unique honi chahiye."],

  ["JavaScript","textContent","TEXT","Element ka text read ya set karta hai.","Text update karne ke liye.",'title.textContent = "Hello!";',"Text ko HTML ki tarah parse nahi karta."],

  ["JavaScript","innerHTML","HTML","Element ke andar ka HTML read ya set karta hai.","Markup dynamically update karne ke liye.",'box.innerHTML = "<strong>Hello</strong>";',"Untrusted user input ko directly inject karna unsafe ho sakta hai."],

  ["JavaScript","classList","CLASS","Element ki CSS classes manage karta hai.","Class add, remove ya toggle karne ke liye.",'card.classList.toggle("active");',"Modal aur theme states mein useful hai."],

  ["JavaScript","map()","MAP","Har array item ko transform karke naya array banata hai.","Data ko convert karne ke liye.","[1, 2, 3].map(n => n * 2);","Original array aam tor par change nahi hota."],

  ["JavaScript","filter()","FILT","Condition pass karne wale items ka naya array deta hai.","Search results ya categories filter karne ke liye.","[1, 2, 3, 4].filter(n => n > 2);","Zero ya zyada matching items mil sakte hain."],

  ["JavaScript","forEach()","EACH","Array ke har item par callback chalata hai.","Har item par action perform karne ke liye.","[1, 2, 3].forEach(n => console.log(n));","Naya transformed array return nahi karta."],

  ["JavaScript","find()","FIND","Condition pass karne wala pehla item deta hai.","Ek matching record dhoondne ke liye.","[3, 7, 9].find(n => n > 5);","Match na mile to undefined hota hai."],

  ["JavaScript","includes()","INCL","Check karta hai ke value maujood hai ya nahi.","Array ya string mein value search karne ke liye.",'["HTML", "CSS"].includes("CSS");',"true ya false return karta hai."],

  ["JavaScript","indexOf()","IDX","Value ka pehla index dhoondta hai.","Array ya string mein position check karne ke liye.",'["a", "b", "c"].indexOf("b");',"Value na mile to -1 return hota hai."],

  ["JavaScript","push()","PUSH","Array ke end par item add karta hai.","List mein naya item add karne ke liye.","let a = [1, 2]; a.push(3);","Original array modify hota hai."],

  ["JavaScript","pop()","POP","Array ka aakhri item remove aur return karta hai.","Last item remove karne ke liye.","let a = [1, 2, 3]; a.pop();","Original array modify hota hai."],

  ["JavaScript","slice()","SLICE","Array ya string ka selected hissa return karta hai.","Data ka portion extract karne ke liye.","[10, 20, 30, 40].slice(1, 3);","End index include nahi hota; original array nahi badalta."],

  ["JavaScript","splice()","SPLICE","Array mein items add, remove ya replace karta hai.","Array ko edit karne ke liye.","let a = [1, 2, 3]; a.splice(1, 1);","Original array modify hota hai."],

  ["JavaScript","reduce()","REDUCE","Array items ko combine karke ek final value banata hai.","Total ya sum calculate karne ke liye.","[1, 2, 3].reduce((sum, n) => sum + n, 0);","Accumulator aur initial value samjho."],

  ["JavaScript","some()","SOME","Check karta hai ke kam az kam ek item condition pass karta hai.","Kisi ek matching item ki mojoodgi check karne ke liye.","[1, 3, 4].some(n => n % 2 === 0);","Boolean return karta hai."],

  ["JavaScript","every()","EVERY","Check karta hai ke tamam items condition pass karte hain.","Validation ke liye.","[2, 4, 6].every(n => n % 2 === 0);","Boolean return karta hai."],

  ["JavaScript","setTimeout()","TIME","Delay ke baad callback ek martaba schedule karta hai.","Delayed message ya action ke liye.",'setTimeout(() => console.log("Hi"), 1000);',"Delay milliseconds mein hota hai."],

  ["JavaScript","setInterval()","LOOP","Callback ko regular interval par repeat karta hai.","Clock ya repeated updates ke liye.",'const id = setInterval(() => console.log("Hi"), 1000);',"Rokne ke liye clearInterval(id) use karo."],

  ["JavaScript","clearTimeout()","STOP","Pending timeout ko cancel karta hai.","Scheduled action rokne ke liye.","const id = setTimeout(doWork, 2000); clearTimeout(id);","Wahi timeout ID pass karo."],

  ["JavaScript","clearInterval()","END","Repeating interval ko stop karta hai.","Timer ya repeated callback rokne ke liye.","const id = setInterval(tick, 1000); clearInterval(id);","Wahi ID pass karo jo setInterval ne return ki thi."]
];


// ======================================
// ELEMENTS AND STATE
// ======================================

const gridAll = document.getElementById("gridAll");
const search = document.getElementById("search");
const overlay = document.getElementById("overlay");
const modal = document.querySelector(".modal");

let activeCategory = "All";
let previousFocus = null;
let activeCode = "";

// Favorite aur Learned data
let favorites = JSON.parse(
  localStorage.getItem("favorites") || "[]"
);

let learned = JSON.parse(
  localStorage.getItem("learned") || "[]"
);

let activeItemKey = "";

// Buttons
const favoriteBtn = document.getElementById("favoriteBtn");
const learnBtn = document.getElementById("learnBtn");

// Button status update
function updateActionButtons() {

  const isFavorite = favorites.includes(activeItemKey);
  const isLearned = learned.includes(activeItemKey);

  favoriteBtn.textContent = isFavorite
    ? "♥ Remove Favorite"
    : "♡ Add Favorite";

  learnBtn.textContent = isLearned
    ? "✓ Learned"
    : "✓ Mark as Learned";

  favoriteBtn.classList.toggle("active", isFavorite);
  learnBtn.classList.toggle("active", isLearned);
}

// Favorite button
favoriteBtn.addEventListener("click", () => {

  if (favorites.includes(activeItemKey)) {

    favorites = favorites.filter(
      item => item !== activeItemKey
    );

  } else {

    favorites.push(activeItemKey);

  }

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );

  updateActionButtons();
render();
});

// Learned button
learnBtn.addEventListener("click", () => {

  if (learned.includes(activeItemKey)) {

    learned = learned.filter(
      item => item !== activeItemKey
    );

  } else {

    learned.push(activeItemKey);

  }

  localStorage.setItem(
    "learned",
    JSON.stringify(learned)
  );

updateActionButtons();
render();

previousFocus = Array.from(gridAll.children).find(
  card => card.dataset.itemKey === activeItemKey
) || previousFocus;

});
// ======================================
// RENDER ALL ELEMENTS IN ONE GRID
// ======================================

function render() {
  gridAll.replaceChildren();

  let shown = 0;
  const query = search.value.trim().toLowerCase();

  data.forEach((item, index) => {
    const [category, name, symbol] = item;

    const matchesCategory =
      activeCategory === "All" ||
      activeCategory === category;

    const matchesSearch =
      item.join(" ").toLowerCase().includes(query);

    if (!matchesCategory || !matchesSearch) return;

    shown++;

    const card = document.createElement("button");
    card.type = "button";
    card.className = "element";
    card.setAttribute("aria-label", `Learn about ${name}`);

    const number = document.createElement("span");
    number.className = "number";
    number.textContent = String(index + 1).padStart(2, "0");

    const sym = document.createElement("span");
    sym.className = "symbol";
    sym.textContent = symbol;

    const title = document.createElement("span");
    title.className = "element-name";
    title.textContent = name;

    const type = document.createElement("span");
    type.className = "element-type";
    type.textContent = category === "JavaScript" ? "JS" : category;

    // Favorite aur Learned status check
const itemKey = category + ":" + name;

const status = document.createElement("span");
status.className = "card-status";

status.textContent =
  (favorites.includes(itemKey) ? "♥ " : "") +
  (learned.includes(itemKey) ? "✓" : "");

card.dataset.itemKey = itemKey;

card.append(number, sym, title, type, status);

    card.addEventListener("click", () => {
      openModal(item);
    });

    gridAll.appendChild(card);
  });

  document.getElementById("empty").style.display =
    shown ? "none" : "block";
}


// ======================================
// OPEN POPUP
// ======================================

function openModal(item) {
  const [
    category,
    name,
    symbol,
    description,
    why,
    code,
    point
  ] = item;
  activeItemKey = category + ":" + name;
updateActionButtons();

  previousFocus = document.activeElement;
  activeCode = code;

  document.getElementById("modalCategory").textContent =
    category + " ELEMENT";

  document.getElementById("modalTitle").textContent = name;
  document.getElementById("modalDescription").textContent = description;
  document.getElementById("modalWork").textContent = description;
  document.getElementById("modalWhy").textContent = why;
  document.getElementById("modalCode").textContent = code;

  const ul = document.getElementById("modalPoints");
  ul.replaceChildren();

  [
    point,
    "Example ko apne project mein try karke dekho.",
    category === "HTML"
      ? "HTML page ka structure banata hai."
      : category === "CSS"
      ? "CSS design aur layout control karti hai."
      : "JavaScript website mein behavior aur interactivity add karti hai."
  ].forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  });

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  modal.focus();
}


// ======================================
// CLOSE POPUP
// ======================================

function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";

  if (previousFocus && typeof previousFocus.focus === "function") {
    previousFocus.focus();
  }
}


// ======================================
// CATEGORY FILTER BUTTONS
// ======================================

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    activeCategory = btn.dataset.category;

    document.querySelectorAll(".filter").forEach(button => {
      button.classList.toggle("active", button === btn);
    });

    render();
  });
});


// ======================================
// SEARCH
// ======================================

search.addEventListener("input", render);


// ======================================
// CLOSE BUTTON, OUTSIDE CLICK, ESCAPE
// ======================================

document.getElementById("close").addEventListener("click", closeModal);

overlay.addEventListener("click", event => {
  if (event.target === overlay) {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (
    event.key === "Escape" &&
    overlay.classList.contains("open")
  ) {
    closeModal();
  }
});


// ======================================
// COPY EXAMPLE CODE
// ======================================

document.getElementById("copy").addEventListener("click", async () => {
  const button = document.getElementById("copy");

  try {
    await navigator.clipboard.writeText(activeCode);

    button.textContent = "Copied ✓";

    setTimeout(() => {
      button.textContent = "Copy Example";
    }, 1400);

  } catch {
    // Clipboard permission na mile to code select karne ka message
    const codeElement = document.getElementById("modalCode");
    const range = document.createRange();

    range.selectNodeContents(codeElement);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    button.textContent = "Code selected — copy it";
  }
});


// ======================================
// INITIAL DISPLAY
// ======================================

render();


const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");

  const isLight = document.body.classList.contains("light-theme");

  themeToggle.textContent = isLight
    ? "🌙 Dark"
    : "☀️ Light";
});


