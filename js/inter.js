
window.onload = function () {
var height=$('.inter_img>img').css('height').slice(0,-2);
console.log(height);
$('.inter_img').css("height",`${height+300}px`);


window.onresize = function(){
    var height=$('.inter_img>img').css('height').slice(0,-2);
    $('.inter_img').css("height",`${height+300}px`);
}
}//响应式设置高