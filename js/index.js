window.addEventListener('load', function () {
    // js轮播图原生代码

    // 索引
    // var index = 0;
    // var circle = 0;
    // 获取左右按钮元素
    // var angle_right = document.querySelector('.angle-right');
    // var angle_left = document.querySelector('.angle-left');
    // 获取轮播图元素
    // var turn_picture = document.querySelector('.turn-picture');
    // 获取图片src元素
    // var img1 = document.getElementById("img1");
    // 定义存储照片的数组
    // var imgArr = ["./img/1.webp", "./img/2.webp", "./img/3.webp"];

    // 设置轮播图片自动播放
    // var picture = setInterval(fn, 4000);
    // var picture = setInterval(function () {
    //     // 手动调用点击事件
    //     $('.swiper-button-next').click();
    // }, 4000)

    // function fn() {
    //     index++;
    //     if (index >= imgArr.length) {
    //         index = 0;
    //     }
    //     img1.src = imgArr[index];

    //     // 设置小圆点跟着图片一起动
    //     circle++;
    //     if (circle == ul_dian.children.length) {
    //         circle = 0;
    //     }
    //     // 清除其他小圆圈的样式
    //     setDian();
    // }
    // 绑定按钮的翻页功能
    // 左按钮点击事件
    // 定义flag 为节流阀
    // var flag = true;
    // angle_left.onclick = function () {
    //     if (flag) {
    //         flag = false;
    //         index--;
    //         // alert("上一张");
    //         if (index < 0) {
    //             index = imgArr.length - 1;
    //         }
    //         img1.src = imgArr[index];

    //         // 设置小圆点跟着图片一起动
    //         circle--;
    //         if (circle < 0) {
    //             circle = imgArr.length - 1;
    //         }
    //         // 清除其他小圆圈的样式
    //         setDian();
    //     }
    // }

    // 右按钮点击事件
    // angle_right.onclick = function () {
    //     index++;
    //     // alert("下一张");
    //     if (index > imgArr.length - 1) {
    //         index = 0;
    //     }
    //     img1.src = imgArr[index];

    //     // 设置小圆点跟着图片一起动
    //     circle++;
    //     if (circle == ul_dian.children.length) {
    //         circle = 0;
    //     }
    //     setDian();
    // }

    // 设置鼠标进入轮播图
    // turn_picture.addEventListener('mouseenter', function () {
    //     angle_left.style.display = 'block';
    //     angle_right.style.display = 'block';
    //     // 进入轮播图时，图片停止自动播放
    //     clearInterval(picture);
    //     picture = null;
    // })
    // // 设置鼠标离开轮播图
    // turn_picture.addEventListener('mouseleave', function () {
    //     angle_left.style.display = 'none';
    //     angle_right.style.display = 'none';
    //     // 离开轮播图时，图片自动播放
    //     // setInterval(fn, 4000);
    //     picture = setInterval(function () {
    //         angle_right.click();
    //     }, 4000)
    // })

    // 动态获取导航点的个数
    // for (var i = 0; i < imgArr.length; i++) {
    //     // 创造一个a元素
    //     var dianAll = document.createElement('a');
    //     // 获取导航点ul元素
    //     var ul_dian = document.querySelector('.dian');
    //     // 给导航点设置自定义num值
    //     dianAll.setAttribute('num', i);
    //     ul_dian.appendChild(dianAll);
    //     dianAll.className = 'di';
    //     // 设置第一个导航点设为默认选中状态
    //     ul_dian.children[0].style.backgroundColor = 'white';
    //     ul_dian.children[0].style.border = '2px solid rgba(75, 73, 73, 0.4)';

    //     // 点击导航点切换图片
    //     var dian = document.querySelectorAll('.di');
    //     dian[i].onclick = function () {
    //         // 当我们点击小圆圈的时候，获取小圆圈的索引号
    //         var num = this.getAttribute('num');
    //         // 将num的值赋值给index
    //         index = num;
    //         // 将num的值赋值给circle
    //         circle = num;
    //         img1.src = imgArr[num];
    //         setDian();
    //     }
    // }

    // // 设置一个点的方法，排他方法
    // function setDian() {
    //     for (var i = 0; i < ul_dian.children.length; i++) {
    //         ul_dian.children[i].style.backgroundColor = '#b0b0b0';
    //         ul_dian.children[i].style.border = '2px solid rgba(201, 192, 192, 0.4)';
    //     }
    //     // 设置选中的小圆圈样式
    //     ul_dian.children[circle].style.backgroundColor = 'white';
    //     ul_dian.children[circle].style.border = '2px solid rgba(75, 73, 73, 0.4)';
    // }

    // 设置购物车的弹出提示
    $('.shop-car,.car-list').mouseenter(function () {
        $('.shop-car,.car-list').css({
            backgroundColor: '#fff',
        })
        $('.shop-car a').css({
            color: '#ff6700',
        });
        $('.car-list').stop().slideDown();
        $(function () {
            setTimeout(function () {
                $('.car-content').stop().fadeIn();
            }, 1500)
        });
    });
    $('.shop-car,.car-list').mouseleave(function () {
        $('.car-content').hide();
        $('.shop-car,.car-list').css({
            backgroundColor: '#fff',
        })
        $('.car-list').stop().slideUp(function () {
            $('.shop-car').css({
                backgroundColor: '#424242',
            })
            $('.shop-car a').css({
                color: '#b0b0b0',
            });
        });
    });

    // 设置logo导航栏下拉框
    $('.thing-wrapper').on({
        mouseenter: function () {
            $('.search-list').stop().slideUp();
            $('.search-inp').blur();
            let num = $(this).parent().index();
            // console.log(num);
            if (num != 8 && num != 9) {
                $('.phone-xiala').stop().slideDown(300);
                $('.phone-xiala').children().eq(num - 1).show().siblings().hide();
            }
        },
        mouseleave: function () {
            $('.phone-xiala').stop().slideUp(300);
        }
    })
    $('.phone-xiala').on({
        mouseenter: function () {
            $(this).stop().slideDown(300);
        },
        mouseleave: function () {
            $(this).stop().slideUp(300);
        }
    })



    // 获取left-menu元素
    var left_lis = document.querySelector('.left-menu').querySelectorAll('li');
    $('.turn-picture .item').hide();
    for (let i = 0; i < left_lis.length; i++) {
        // 给left-menu设置自定义属性index
        left_lis[i].setAttribute('index', i);
        left_lis[i].onmouseenter = function () {
            // item.style.display = 'block';
            $('.item').show();
        }
        left_lis[i].onmouseleave = function () {
            // item.style.display = 'none';
            $('.item').hide(); //
        }
    }

    // 设置搜索框内的提示
    getText();
    var time = null;
    function getText() {
        // 设置搜索栏里的提示信息
        var text = ['冰箱', '小平平板5', '小米手机', '红米', '耳机', '笔记本', '电视', '路由器', '空调', '洗衣机'];
        for (let i = 0; i < text.length; i++) {
            time = setTimeout(() => {
                // console.log(text[i]);
                $('.search-inp').attr('placeholder', text[i]);
            }, 8000 * i)
        }
    }

    // 设置点击搜索框弹出框
    $('.search-inp').on('focus', function () {
        $('.search-list').css({
            borderColor: '#ff6700',
        });
        $('search-list').show();
        $('.search-list').stop().slideDown();
    });
    $('.search-inp').on('blur', function () {
        $('.search-list').css({
            borderColor: '#e0e0e0',
        });
        $('.search-list').stop().slideUp();
    });

    // 设置网页工具栏(返回顶部的弹出)
    // 获取返回顶部按钮元素
    var toolTip_ul = document.querySelector('.back-top').querySelector('ul');
    window.addEventListener('scroll', function () {
        // console.log($('.top-active').offset().top);
        if (window.pageYOffset >= $('.top-active').offset().top) {
            toolTip_ul.children[5].style.display = 'block';
            $('.back-top').css({
                bottom: '164px'
            });
            $('.back-top-active').css({
                bottom: '-108px'
            })
            // toolTip_ul.children[5].className = 'back-top-active';
        } else {
            toolTip_ul.children[5].style.display = 'none';
            $('.back-top').css({
                bottom: '70px'
            });
            $('.back-top-active').css({
                bottom: '-14px'
            })
        }
    })
    // backtop.addEventListener('click', function () {
    //     // window.scroll(0,0);
    //     animate(window,0,15);
    // })

    // function animate(obj, target, time, callback) {
    //     clearInterval(obj.times);
    //     obj.times = setInterval(function () {
    //         var step = (target - window.pageYOffset) / 10;
    //         step = step < 0 ? Math.floor(step) : Math.ceil(step);
    //         if (window.pageYOffset == target) {
    //             clearInterval(obj.times);
    //             callback && callback();
    //         }
    //         // obj.style.left = window.pageYOffset + step + 'px';
    //         window.scroll(0, window.pageYOffset + step);
    //     }, time);
    // }

    // swiper框架的轮播图js代码
    var swiper = new Swiper(".mySwiper", {
        speed: 1500,
        // autoplay: true,
        autoplay: {
            delay: 3000
        },
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //设置返回顶部动画 
    $('.fa-angles-up').click(function () {
        $('body,html').stop().animate({
            scrollTop: 0,
        })
    });

    // 商品选择的特效
    $('.shop-thing li,.shop-thing-left,.av-tools .av-photo').on({
        mouseenter: function () {
            $(this).addClass('content');
        },
        mouseleave: function () {
            $(this).removeClass('content');
        }
    });

    // 悬着视频的特效
    $('.av-tools .av-img').on('mouseenter', function () {
        $(this).find('i').addClass('av-now');
    })
    $('.av-tools .av-img').on('mouseleave', function () {
        $(this).find('i').removeClass('av-now');
    })

    // 设置智能穿戴详情页导航栏切换
    $('.watch-box-1').hide();
    $('.watch p').mouseenter(function () {
        $(this).addClass('tab-active').siblings().removeClass();
        // console.log($(this).index());
        if ($(this).index() == 1) {
            $('.watch-box-1').hide();
            $('.watch-box-0').show();
        } else if ($(this).index() == 0) {
            $('.watch-box-1').show();
            $('.watch-box-0').hide();
        }
    });

    // 设置家电详情页导航栏切换
    $('.jiadian-box-1').hide();
    $('.jiadian p').mouseenter(function () {
        $(this).addClass('tab-active').siblings().removeClass();
        // console.log($(this).index());
        if ($(this).index() == 1) {
            $('.jiadian-box-1').hide();
            $('.jiadian-box-0').show();
        } else if ($(this).index() == 0) {
            $('.jiadian-box-1').show();
            $('.jiadian-box-0').hide();
        }
    });

    // 设置生活家电详情页导航栏切换
    $('.live-jiadian-box-0').hide();
    $('.live-jiadian-box-1').hide();
    $('.live-jiadian-box-2').hide();
    $('.live-jiadian p').mouseenter(function () {
        $(this).addClass('tab-active').siblings().removeClass();
        console.log($(this).index());
        if ($(this).index() == 3) {
            $('.live-jiadian-box-3').show();
            $('.live-jiadian-box-0,.live-jiadian-box-1,.live-jiadian-box-2').hide();
        } else if ($(this).index() == 2) {
            $('.live-jiadian-box-2').show();
            $('.live-jiadian-box-0,.live-jiadian-box-1,.live-jiadian-box-3').hide();
        } else if ($(this).index() == 1) {
            $('.live-jiadian-box-1').show();
            $('.live-jiadian-box-0,.live-jiadian-box-2,.live-jiadian-box-3').hide();
        } else if ($(this).index() == 0) {
            $('.live-jiadian-box-0').show();
            $('.live-jiadian-box-1,.live-jiadian-box-2,.live-jiadian-box-3').hide();
        }
    });

    //设置网页底部微信图标亮出二维码
    $('.floow .fa-weixin').on({
        mouseenter: function () {
            $('.qr-img').stop().fadeIn();
        },
        mouseleave: function () {
            $('.qr-img').stop().fadeOut();
        }
    })

});