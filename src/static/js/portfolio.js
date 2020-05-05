$(function() {

  // チャート表示が完了済みかどうか
  var isShowChart = false;

  // Twitter表示が完了済みかどうか
  var isShowTwitter = false;

  // Thanks表示が完了済みかどうか
  var isShowThanks = false;

	// ページトップに戻るボタンを表示
	// (function () {
	// 	var topBtn = $('#page-top'),
	// 		showFlg = false;
	// 	var scroll = function (scrollTop) {
	// 		if (scrollTop > $(window).height()) {
	// 			if (showFlg == false) {
	// 				showFlg = true;
	// 				topBtn.removeClass('hide');
	// 			}
	// 		} else {
	// 			if (showFlg) {
	// 				showFlg = false;
	// 				topBtn.addClass('hide');
	// 			}
	// 		}
	// 	} 
	// 	//スクロールが100に達したらボタン表示
	// 	$(window).scroll(function () {
	// 		scroll($(this).scrollTop());
	// 	});
	// 	//スクロールしてトップ
	// 	topBtn.click(function () {
	// 		$('body,html').animate({
	// 			scrollTop: 0
	// 		}, 500);
	// 		return false;
	// 	});
	// 	scroll($(window).scrollTop());
	// }());

  // スクロール時のフェードイン表示
  $(window).on('load scroll',function(){

    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    // // 下からフェイドインするアニメーション
    // $('.fadein').each(function(){
    //   var elemPos = $(this).offset().top;
    //   if (scroll > elemPos - windowHeight + windowHeight/20){
    //     $(this).delay(100).queue(function() {
    //       $(this).addClass('scrollin').dequeue();
    //     })
    //   }
    // });

    // 中央からサイドに下線を太くするアニメーション
    $('hr').each(function(){
      var elemPos = $(this).offset().top;
      if (scroll > elemPos - windowHeight + windowHeight/50){
        $(this).delay(300).queue(function() {
          $(this).addClass('centerToSide').dequeue();
        })
      }
    });

    // チャートの表示
    if (scroll > $('#specialty').offset().top - windowHeight + windowHeight/2){
      if (!isShowChart) {
        // viewChart();
        isShowChart = true;
      }
    }
    
    // 数字のランダム表示
    if (scroll > $('#twitter').offset().top - windowHeight + windowHeight/20){
      if (!isShowTwitter) {
        $('.js-shuffleNum').each(function() {
          var self = $(this),
            defautVal = self.text(),
            count = 0;
          var id = setInterval(setRandom, 20);
          function setRandom(){
            var random = Math.floor( Math.random() * 9999 );
            self.text(random);
            count++;
            if(count > 60){　
              clearInterval(id);
              self.text(defautVal);
            }
          }
        });
        $('.tweet').each(function() {
          $([
            
            '<a class="twitter-timeline" data-height="400" data-dnt="true" data-chrome=”noheader,nofooter” href="https://twitter.com/ise0615?ref_src=twsrc%5Etfw">','Tweets by ise0615',
            '</a>',
            '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
            ].join('')).appendTo(this);
        });
        isShowTwitter = true;
      }
    }

    // // ThanksページのSNSボタン表示
    // if (scroll > $('.thanks').offset().top - windowHeight + windowHeight/2){
    //   if (!isShowThanks) {
    //     $('.sns-buttons').each(function() {
    //       $([
    //         '<ul class="sns-button">',
    //         '<li><div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="" data-layout="button" data-action="like" data-size="small" data-share="true"></div></li>',
    //         '<li><a href="https://twitter.com/share" class="twitter-share-button">Tweet</a></li>',
    //         '</ul>',
    //         '<div id="fb-root"></div>',
    //         '<script async defer crossorigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v5.0"></script>',
    //         '<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");</script>'
    //         ].join('')).appendTo(this);
    //     });
    //     isShowThanks = true;

    //   }
    // }
    
  });

  // // ドロワーメニューの開閉
  // (function() {
  //   var menuBtn = document.querySelector('.menu-btn');
  //   var menu = document.querySelector('#side-menu');
  //   var layerPanel = document.querySelector('#layer-panel');

  //   var toggleMenu = () => {
  //     if(menuBtn.classList.contains('on')){
  //       menuBtn.classList.remove('on');
  //       menu.classList.remove('open'); layerPanel.classList.remove('on');
  //     }else{
  //       menuBtn.classList.add('on');
  //       menu.classList.add('open');
  //       layerPanel.classList.add('on');
  //     }
  //   };

  //   menuBtn.addEventListener('click', toggleMenu);
  //   layerPanel.addEventListener('click', toggleMenu);
  // })();
  
	// ページ内リンク
	$('.js-link').pageLink();

  // バックグラウンドの幾何学アニメーション
  (function() {
    particleground(document.querySelector('.bg'), {
      dotColor: '#eee',
      lineColor: '#fff'
    });
    $(".pg-canvas").css({
      position: 'absolute',
      width: '80%',
      height: '70%'
    });
  })();


	// var viewChart = function() {
  //   // レーダーチャート
  //   (function() {
  //     var radar = document.getElementById('radar').getContext('2d');
  //     var options = {
  //       responsive: true,
  //       responsiveAnimationDuration: 0,
  //       maintainAspectRatio: false,
  //       title: {
  //         display: true,
  //         position: "top",
  //         fontSize: 16,
  //         padding: 10,
  //         text: "Webシステムにおける開発能力"
  //       },
  //       legend: {
  //         display: false,
  //       },
  //       tooltips: {
  //         display: true
  //       },
  //       scale: {
  //         ticks: {
  //           suggestedMin: 0,
  //           suggestedMax: 100
  //         }
  //       }
  //     };
  //     new Chart(radar, {
  //       type: 'radar',
  //       data: {
  //         labels: ["スピード感", "精度", "セキュリティ対応", "デザイン力", "SEO"],
  //         datasets: [
  //           {
  //             label: "Webシステムにおける開発能力",
  //             backgroundColor: "rgba(0, 50, 255, 0.5)",
  //             borderColor: "rgba(0, 50, 255, 0.5)",
  //             lineTension: 0,
  //             fill: true,
  //             borderWidth: 3,
  //             data: [100, 80, 60, 40, 70]
  //           }
  //         ]
  //       },
  //       options: options
  //     });
  //   })();
      
  //   // ドーナツチャート
  //   (function() {
  //     var doughnut = document.getElementById('doughnut').getContext('2d');
  //     var options = {
  //       responsive: true,
  //       responsiveAnimationDuration: 0,
  //       maintainAspectRatio: false,
  //       title: {
  //         display: true,
  //         position: "top",
  //         fontSize: 16,
  //         padding: 10,
  //         text: "プログラミングの得意言語"
  //       },
  //       legend: {
  //         display: true, // 凡例を表示します。
  //         position: "bottom" // 凡例の位置
  //       },
  //       tooltips: {
  //         display: true
  //       }
  //     };
  //     new Chart(doughnut, {
  //       type: 'doughnut',
  //       data: {
  //         labels: ["Java", "Jquery", "Typescript", "Nuxt.js", "Kotlin", "PHP", "Python"],
  //         datasets: [
  //           {
  //             label: "プログラミングの得意言語",
  //             backgroundColor:  ["#FF0000", "#FFFF00", "#00FFFF", "#800000", "#00FF00", "#FF00FF", "#C0C0C0"],
  //             borderColor: "#FFFFFF",
  //             data: [40, 25, 15, 10, 5, 3, 2]
  //           }
  //         ]
  //       },
  //       options: options
  //     });
  //   })();
	// };

	
});


/*
 * pageLink
 *
 * Description:
 *  ページ内遷移が可能です。
 */
(function($){

	// デフォルト値
	var options = {
		margin_top : 0,
		speed : 600
	};

	$.fn.pageLink = function(opts, callback){

		// 引数に値が存在する場合、デフォルト値を上書きする
		var settings = $.extend({}, options, opts);

		// 対象をJqueryオブジェクトに変換
		var to = $($(this).data('target'));
		if (!to || to.length === 0) {
			return;
		}

		$(this).bind('click', function(e) {
			// イベントをキャンセルする
			e.preventDefault();
			var to_top = ( to.offset().top - settings.margin_top);
			$('html, body').animate({scrollTop: to_top}, settings.speed, callback);
		});

		return this;
	};

})(jQuery);
