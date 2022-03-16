window.addEventListener('load', function () {
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

    // 设置全部商品
    $('.all-thing,.left-menu').on({
        mouseenter: function () {
            $(".left-menu").show();
        },
        mouseleave: function () {
            $(".left-menu").hide();
        }
    })

    // 设置logo导航栏下拉框
    $('.thing-wrapper').on({
        mouseenter: function () {
            $('.search-list').stop().slideUp();
            $('.search-inp').blur();
            let num = $(this).parent().index();
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

    // 设置左侧left-meau弹出
    $('.all-thing,.left-meau').on({
        mouseenter: function () {
            $('.left-meau').show();
        },
        mouseleave: function () {
            $('.left-meau').hide();
        }
    })
    $('.left-meau li').on({
        mouseenter: function () {
            $('.item').show();
        },
        mouseleave: function () {
            $('.item').hide();
        }
    })


    // 设置搜索框内的提示
    getText();
    var time = null;
    function getText(callback) {
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
        if (window.pageYOffset >= $('.service-index-fquestion').offset().top) {
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

    //设置返回顶部动画 
    $('.fa-angles-up').click(function () {
        $('body,html').stop().animate({
            scrollTop: 0,
        })
    });

    //设置鼠标选中特效
    $('.service-transi-up,.service-transi-bottom').on({
        mouseenter: function () {
            $(this).addClass('content');
        },
        mouseleave: function () {
            $(this).removeClass('content');
        }
    })


    // swiper轮播图
    var swiper = new Swiper(".mySwiper", {
        speed: 1000,
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

    // 设置搜索框的提升信息
    $('.service-index-question button').click(function () {
        console.log($('.question').val());
        if ($('.question').val() === "") {
            $(this).siblings('p').show();
        } else {
            $(this).siblings('p').hide();
        }
    });

    // 设置搜索框下的tab排他样式
    $('.tab-list li').mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
        // 设置tab选择框下的内容显示
        let num = $(this).index();
        if (num === 0) {
            const array = ['小米账户如何注册?', '手机如何申诉解锁?', '什么是账号申诉重置密码保护?', '如何进行重置密码保护?', '小米账号忘记密码如何找回?', '如何认证小米社区VIP?']
            $.each(array, function (index, ele){
                $('.per li a').eq(index).text(ele);
            });
        } else if (num === 1) {
            const array = ['缺货的产品什么时间可以下单购买?', '为什么订单满99元还要支付快递费用?', '活动时赠送的产品可选吗?', '下单后多长时间发货?', '小米商城支持什么方法支付?', '为什么购物车中显示有货,去结算时无货?']
            $.each(array, function (index, ele){
                $('.per li a').eq(index).text(ele);
            });
        } else if (num === 2) {
            const array = ['如何修改订单发票?', '如何修改订单?', '如何取消订单?', '优惠劵如何使用?', '如何查询物流信息?', '小米产品如何辨别真伪?']
            $.each(array, function (index, ele){
                $('.per li a').eq(index).text(ele);
            });
        } else if (num === 3) {
            const array = ['如何查询维修网点?', '小米售后服务政策', '取消订单/退货后如何退款?', '在小米商城购买商品如何申请售后?', '如何查询售后进度?', '维修价格查询']
            $.each(array, function (index, ele){
                $('.per li a').eq(index).text(ele);
            });
        } else if (num === 4) {
            const array = ['电视挂件按照收费标准', '如何以旧换新?', '以旧换新常见问题', '如何登录小米云服务?', '如何购买手机上门维修', '米家互联网空调如何安装以及收费标准?']
            $.each(array, function (index, ele){
                $('.per li a').eq(index).text(ele);
            });
        } else if (num === 5) {
            const array = ['天星金融 钱包账户问题', '理财相关问题', '小米分期相关问题', '米粉卡相关问题', '全球上网相关问题', '对小米有意见或建议怎么办?']
            $.each(array, function (index, ele){
                $('.per li a').eq(index).text(ele);
            });
        } else if (num === 6) {
            const array = ['小米之家功能介绍', '如何查询您身边的小米之家', '什么是小米授权体验店', '如何查询小米授权体验店', '如何查询小米KA门店(大型连锁卖场)', '如何查询小米小店']
            // for (let i = 0; i < array.length; i++) {
            //     $('.per li a').eq(i).text(array[i]);
            // }
            $.each(array, function (index, ele){
                $('.per li a').eq(index).text(ele);
            });
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
    });

});