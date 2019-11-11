window.onload=function(){
           
      $('.ad_ul').on('click','li',function(e){
        var li=$(this)
        var li_Id=li.attr('id');
        var cir_id=$('.circle-dot div').eq(li_Id);
        var cir_p=cir_id.children(['p']);
        var dist_id=$('.circle-son div').eq(li_Id);
        li.addClass('active').siblings().removeClass('active');
        cir_id.addClass('active').siblings().removeClass('active');
        cir_p.addClass('active');
        cir_id.siblings().children(['p']).removeClass('active');
        dist_id.addClass('active');
        dist_id.siblings().removeClass('active');
    })
// 标题栏 
      $(window).scroll(function(){
        var scrollH=$(document).scrollTop();
        var viewH = $(window).height();  
        console.log(scrollH);
        if(scrollH>380){
            $('#nav').addClass('nav_tit').removeClass('mm')
            $('.menus_icon').css('display','none');
          }else{
            $('#nav').removeClass('nav_tit').addClass('mm').css('height','0');
            $('.menus_icon').show();
        }

        if(scrollH>600 && scrollH<1705){
            $('.imgs').addClass('imgs-m');
          }else{
            $('.imgs').removeClass('imgs-m');
        }
        if(scrollH>1690){
            $('.imgs').css({top:'2061px'});
        }
        if(scrollH<1700){
            $('.imgs').css({top:'300px'});
        }
        if(scrollH<600){
           $('.imgs').css({top:'857px'});
        }
        if(scrollH>980){
            $('.imgs').css({background:"url(./img/2.png)"});
        }
        if(scrollH>1580){
            $('.imgs').css({background:"url(./img/3.jpg)"});
        }
        if(scrollH<680){
            $('.imgs').css({background:"url(./img/1.jpg)"});
        }
      })
//下拉菜单
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

}
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
        $(".ter_text").niceScroll({
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
