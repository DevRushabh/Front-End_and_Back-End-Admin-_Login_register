function flipTo(digit, n){
    var current = digit.attr('data-num');
    digit.attr('data-num', n);
    digit.find('.front').attr('data-content', current);
    digit.find('.back, .under').attr('data-content', n);
    digit.find('.flap').css('display', 'block');
    setTimeout(function(){
        digit.find('.base').text(n);
        digit.find('.flap').css('display', 'none');
    }, 350);
}

function jumpTo(digit, n){
    digit.attr('data-num', n);
    digit.find('.base').text(n);
}

function updateGroup(group, n, flip){
    var digit1 = $('.ten'+group);
    var digit2 = $('.'+group);
    n = String(n);
    if(n.length == 1) n = '0'+n;
    var num1 = n.substr(0, 1);
    var num2 = n.substr(1, 1);
    if(digit1.attr('data-num') != num1){
        if(flip) flipTo(digit1, num1);
        else jumpTo(digit1, num1);
    }
    if(digit2.attr('data-num') != num2){
        if(flip) flipTo(digit2, num2);
        else jumpTo(digit2, num2);
    }
}

function setTime(flip){
    var t = new Date();
    updateGroup('hour', t.getHours(), flip);
    updateGroup('min', t.getMinutes(), flip);
    updateGroup('sec', t.getSeconds(), flip);
}

$(document).ready(function(){
    
    setTime(false);
    setInterval(function(){
        setTime(true);
    }, 1000);
    
});