let lastscroll = 0;
let h = document.getElementById('new');

window.addEventListener('scroll',scroll);
function scroll(){
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if(st > 150 && st > lastscroll){
            h.removeAttribute('class');
    }
    else if(st < lastscroll){
        h.setAttribute('class','new');
    }

    lastscroll = st;
}
