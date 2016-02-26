/*
motext is a simple function on Vanilla JS for animating text.
License: GPLv2
Source: https://github.com/EmgrtE/motext.git
Author: EmgrtE
*/

function motext(textcont,time){
    var cont=document.querySelector(textcont),
        height=cont.clientHeight,
        width=cont.clientWidth,
        text=cont.textContent,
        left=cont.offsetLeft,
        top=cont.offsetTop;
        text.replace(/\n\s{2,}/g,' ');
    var word=text.split(' ');
    cont.innerHTML='';
    cont.style.position='relative';
    cont.style.overflow='hidden';
    cont.style.height=height+'px';
    cont.style.width=width+'px';
    for(var i=0;i<word.length;i++){
        var wrap=document.createElement('span');
        wrap.style.display='inline-block';
        wrap.className='wrap';
        wrap.innerHTML+=word[i];
        cont.appendChild(wrap);
        cont.innerHTML+=' ';
    }
    var wraps=document.querySelectorAll(textcont+' span.wrap'),
        posLeft=[],
        posTop=[],
        count=1;
    for(var i=0;i<wraps.length;i++){
        var leftWrap=wraps[i].offsetLeft,
            topWrap=wraps[i].offsetTop;
        posLeft.push(leftWrap);
        posTop.push(topWrap);
    }
    for(var i=0;i<wraps.length;i++){
        wraps[i].style.position='absolute';
        wraps[i].style.left=posLeft[i]+width+'px';
        wraps[i].style.top=posTop[i]+'px';
    }
    function counter(){
        setTimeout(function(){
            if(count>wraps.length){
                return;
            }else{
                wraps[count-1].style.left=posLeft[count-1]+'px';
                count++;
                return counter();
            }
        },time);
    }
    counter();
}

/*
 ___________________________
 | q w e r t y u i o p [ ] |
 |  a s d f g h j k l ; '  |
 |   z x c v b n m , . /   |
 |=========================|
*/
