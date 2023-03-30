links=Array.from(document.querySelectorAll("header a"));

links.forEach(element=>{
    element.addEventListener('click',(e)=>{
        e.preventDefault();
        elem=e.target.getAttribute('href');
        window.scrollTo({
            top: elem==='#' ? 0 : document.querySelector(elem).offsetTop,
            behavior: 'smooth'
          });
    })
})