/**
 * Created by WEB-UID-JAVA on 2017/9/15.
 */
window.onload = function() {
    var banner = document.getElementsByClassName("banner")[0];
    var sliderImg = document.getElementsByClassName('sliderImg')[0];
    var sliderIndexs = document.getElementById('sliderIndex').getElementsByTagName('span');
    var prev = document.getElementsByClassName('prev')[0];
    var next = document.getElementsByClassName('next')[0];
    var index = 1;
    var timer;

    function animate(offset) {
        var newLeft = parseInt(sliderImg.style.left) + offset;
        sliderImg.style.left = newLeft + 'px';
        if (newLeft > -720) {
            sliderImg.style.left = -2880 + 'px';
        }
        if (newLeft < -2880) {
            sliderImg.style.left = -720 + 'px';
        }
    }

    function play() {
        timer = setInterval(function() {
            next.onclick();
        }, 3000)
    }

    function stop(){
        clearInterval(timer);
    }

    function sliderIndexShow() {
        for (var i = 0; i < sliderIndexs.length; i++) {
            if (sliderIndexs[i].className == "on") {
                sliderIndexs[i].className = "";
            }
        }
        sliderIndexs[index - 1].className = "on";
    }

    prev.onclick = function() {
        index -= 1;
        if (index < 1) {
            index = 4
        }
        sliderIndexShow();
        animate(720);
    };

    next.onclick = function() {
        index += 1;
        if (index > 4) {
            index = 1
        }
        animate(-720);
        sliderIndexShow();
    };

    for (var i = 0; i < sliderIndexs.length; i++) {
        (function(i) {
            sliderIndexs[i].onmouseover = function() {
                var clickIndex = parseInt(this.getAttribute('index'));
                var offset = 720 * (index - clickIndex);
                animate(offset);
                index = clickIndex;
                sliderIndexShow();
            }
        })(i)
    }
    banner.onmouseover = stop;
    banner.onmouseout = play;
    play();
}