//トグルボタンが押されたときに、クラスを付与
  $(function() {

        $('.js-toggle').click(function () {
            $(this).toggleClass('active');
            if ($(this).hasClass('active')) {
                $('.sp-nav').addClass('active');　 //クラスを付与
            } else {
                $('.sp-nav').removeClass('active'); //クラスを外す
						}

						//ドロワーメニューをクリック（タップ）した時のクリックイベントを設定して、メニューの各項目（.sp-nav a）がクリック（タップ）されたらドロワーメニュー（.toggle）がクリックされるようにする
						$('.sp-nav a[href]').on('click', function (event) {
								$('.js-toggle').trigger('click');
					});
        });
	});

//要素がふわっと浮き出る(フェードイン・アウト)
	$(function () {
		function animation() {
			$('.js-fadein-up').each(function () {
				//ターゲットの位置を取得
				var target = $(this).offset().top;
				//スクロール量を取得
				var scroll = $(window).scrollTop();
				//ウィンドウの高さを取得
				var windowHeight = $(window).height();
				//ターゲットまでスクロールするとフェードインする
				if (scroll > target - windowHeight) {
					$(this).css('opacity', '1');
					$(this).css('transform', 'translateY(0)');
				}
			});
		}
		animation();
		$(window).scroll(function () {
			animation();
		});
	});
