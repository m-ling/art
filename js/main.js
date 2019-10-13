// 滚动条

$(document).ready(
    function() { 
      $("html").niceScroll({
        cursorcolor: "#f6a16a", // 改变滚动条颜色，使用16进制颜色值
        cursoropacitymin: .5, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
        cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
        cursorwidth: "7px", // 滚动条的宽度，单位：便素
        cursorborder: "1px solid #fff", // CSS方式定义滚动条边框
        cursorborderradius: "5px", // 滚动条圆角（像素）
        autohidemode: true, // 隐藏滚动条的方式, 可用的值: 
        background: "#f9eae4", // 轨道的背景颜色
        iframeautoresize: true, // 在加载事件时自动重置iframe大小
        cursorminheight: 32, // 设置滚动条的最小高度 (像素)
        spacebarenabled: true, // 当按下空格时使页面向下滚动
      });
    }
  );
  $(document).ready(
    function() { 
      $(".teacher-msg .ter_ul>li>div").niceScroll({
        cursorcolor: "#ccc", // 改变滚动条颜色，使用16进制颜色值
        cursoropacitymin: 0, // 当滚动条是隐藏状态时改变透明度, 值范围 1 到 0
        cursoropacitymax: 1, // 当滚动条是显示状态时改变透明度, 值范围 1 到 0
        cursorwidth: "2px", // 滚动条的宽度，单位：便素
        cursorborder: "1px solid #fff", // CSS方式定义滚动条边框
        cursorborderradius: "5px", // 滚动条圆角（像素）
        autohidemode: true, // 隐藏滚动条的方式, 可用的值: 
        background: "#424242", // 轨道的背景颜色
        iframeautoresize: true, // 在加载事件时自动重置iframe大小
        cursorminheight: 32, // 设置滚动条的最小高度 (像素)
        spacebarenabled: true, // 当按下空格时使页面向下滚动
      });
    }
  );

  // $(document)
  // .on('click', 'a[href*="#"]', function() {
  //   if ( this.hash ) {
  //     $.bbq.pushState( '#/' + this.hash.slice(1) );
  //     return false;
  //   }
  // })
  // .ready(function() {
  //   $(window).bind('hashchange', function(event) {
  //     var tgt = location.hash.replace(/^#\/?/,'');
  //     if ( document.getElementById(tgt) ) {
  //       $.smoothScroll({scrollTarget: '#' + tgt});
  //     }
  //   });

  //   $(window).trigger('hashchange');
  // });
// 标题栏 
$(window).scroll(function(){
    var scrollH=$(document).scrollTop();
    var viewH = $(window).height();  
    if(scrollH>380){
         $('#nav').addClass('nav_tit').removeClass('mm')
        //  $('.img_head').css('background-attachment','scroll')
        $('.menus_icon').css('display','none');
    }else{
        $('#nav').removeClass('nav_tit').addClass('mm').css('height','0');
        $('.menus_icon').show();
    }
    
})
//下拉菜单
window.onload = function () {
// var menus=document.getElementById("menus");
// menus.onclick=function(){
//   console.log(123);
// }
$('#menus').click(function(){
       var box=$('.menus_box')
       box.toggleClass('menus_chg');
       $('.menus_icon').toggleClass('menus_icon_2').css('margin-top','0');
       $('.menus_detail>ul').toggle();
})

// 走马灯
var i=0;//计数
var img_wid=152;//每个li的固定宽度
var img_tim=500;//每次轮播动画持续的时间
var img_count=10;

var ulImgs=$('.ul_imgs');
function moveTo(){  
 if(i==0){
  ulImgs.addClass('transition');
 }i++;
 ulImgs.css('margin-left',`${-i*img_wid}px`);
 if(i==img_count){
   i=0;
   setTimeout(function(){
     ulImgs.removeClass('transition');//定时清除过渡
     ulImgs.css('margin-left','0');
   }, img_tim)
 }
}
setInterval(()=>{
 moveTo();
},2000);

//按钮
$('#btn_1').click(function(){
  $(this).css({
    background:'#000',
    border:'0',  
  })
  $('#btn_2').css({
    background:'#2d2f34',
    border:'1px solid #ddd',
  })
  $('.info-list1').show();
  $('.info-list2').hide();
})
$('#btn_2').click(function(){
  $('#btn_1').css({
    background:'#2d2f34',
    border:'1px solid #ddd',
  })
  $(this).css({
    background:'#000',
    border:'0',
  })
  $('.info-list2').show();
  $('.info-list1').hide();
})


//教师模块

$('#aaa').on('click','.col-2>div',function(e){
  var terImg=$(this);
  $('#ter_img').attr('src',`${e.target.src}`);
  terImg.css({border:'3px solid #028e98'});
  var mm=terImg.parent().siblings().children('div');
  mm.css({border:'0'});

console.log(terImg.attr('id'));
var to=terImg.attr('id');
 moveto(to);
// console.log(to);
})

//  var query=document.
var m_w=$('.box1').css('width').slice(0,-2);
$('.teacher-msg .ter_ul>li').css({ width:`${m_w}px`});
// console.log(m_w);
// console.log(window.innerWidth);

function moveto(to){
  // console.log(to);
  var i=0;
  var liWidth=m_w;
  var terUl=$('.ter_ul');
  if(to==undefined){to=0;}
  i=to;
  terUl.css('margin-left',`${-i*liWidth+"px"}`);
  
}
// window.onresize = function(){
//   var m_w_c=$('.box1').css('width').slice(0,-2);
//   var liWidth=m_w_c;
//   var terUl=$('.ter_ul');
// if(to==undefined){to=0;}
// i=to;
// console.log(123123);
// console.log(-i);
// console.log(liWidth);
// console.log(-i*liWidth);
// terUl.css('margin-left',`${-i*liWidth+"px"}`)
//   }



}