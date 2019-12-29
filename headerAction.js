let LastScroll = 0;

window.onscroll = function() {
    let CurrentPosition = window.pageYOffset || document.documentElement.scrollTop;

    if(LastScroll > CurrentPosition){
        document.getElementsByTagName('header')[0].style.top = '0';
    }
    else {
        document.getElementsByTagName('header')[0].style.top = '-50px';
    }
    LastScroll = CurrentPosition;
};
