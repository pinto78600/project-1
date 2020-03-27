let mouseCursor = document.querySelector(".cursor");

window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}


// CURSOR GROWING
let navLinks = document.querySelectorAll(".nav-links li");

navLinks.forEach(link => {

  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });

  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
});
let footerLinks = document.querySelectorAll(".footer-links");
footerLinks.forEach(link =>{
    
    link.addEventListener('mouseover' , () =>{
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link")

    });

    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    });   
});

/*------------------------------------------*/
let mainNavArticle1 =  document.getElementById('mainNavArticle1');
let navToggle1 = document.getElementById('navToggle1');

let mainNavArticle2 =  document.getElementById('mainNavArticle2');
let navToggle2 = document.getElementById('navToggle2');

let mainNavArticle3 =  document.getElementById('mainNavArticle3');
let navToggle3 = document.getElementById('navToggle3');

// Start by adding the class "collapse" to the mainNav
mainNavArticle1.classList.add('collapsed');
mainNavArticle2.classList.add('collapsed');
mainNavArticle3.classList.add('collapsed');

// Establish a function to toggle the class "collapse"
function mainArticleNavToggle1() {
  mainNavArticle1.classList.toggle('collapsed');
}
function mainArticleNavToggle2() {
  mainNavArticle2.classList.toggle('collapsed');
}function mainArticleNavToggle3() {
  mainNavArticle3.classList.toggle('collapsed');
}

  // Add a click event to run the mainNavToggle function
navToggle1.addEventListener('click', mainArticleNavToggle1);
navToggle2.addEventListener('click', mainArticleNavToggle2);
navToggle3.addEventListener('click', mainArticleNavToggle3);
