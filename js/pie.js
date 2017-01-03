/*
	Author   : Lancer Lin
	Version  : 1.0.1
	Add 	 : 支持旋转，即不一定都要从12点钟方向开始
*/

var Pie = function(args){

	var isAnimate = args.animite, // 是否需要动画
		isRing = args.ring,  // 是否空心
		color = args.color,  // 自定义颜色
		isShowNumber = args.number, // 是否显示中间的百分比
		rotate = args.rotate;     // 是否旋转

	function _append(me,percent){
		var divs = '<div class="div_1"></div><div class="div_2"></div>';
		var num = '<strong>'+(percent * 100).toFixed() + '%</strong>';
		var content = '';
		var ringStyle = '';
		if (isRing) {
			var w = isRing*100;
			var ringStyle = 'style='+
								'width:'+ w +'%;'+
								'height:'+ w +'%;'+
								'top:'+ (50-w/2) +'%;'+
								'left:'+ (50-w/2) +'%;'+
								'background:#fff;';
		}
		if (isShowNumber == false) {
			num = '';
		}

		content =  num + divs + '<span '+ringStyle+'></span>';
		$(me).html(content);

		if(color){
			$(me).css({
				'background-image': 'linear-gradient(to right, transparent 50%, '+ color +' 0)'
			}).find('.div_2').css({
				'background':color
			});
		}
	}

	this.showPie = function(me,percent){
		function _showSecondHalf(){
			$(me).children('.div_2').css({
				'opacity' : 1,
				'transform':'rotate('+ (percent-0.5) +'turn)'
			});
		}
		if (percent > 0.5) {
			$(me).children('.div_1').css({
				'transform':'rotate(0.5turn)'
			});
			if (isAnimate) {
				setTimeout(_showSecondHalf,700);
			}else{
				_showSecondHalf();
			}
		}else{
			$(me).children('.div_1').css({
				'transform':'rotate('+ percent +'turn)'
			});
		}
	}

	this.init = function(){
		var self = this;
		$(args.el).each(function(){
			var me = $(this);
			var percent = me.attr('data-value');
			_append(me,percent);
			if (isAnimate) {
				setTimeout(function(){
					self.showPie(me,percent);
				},100);
			}else {
				self.showPie(me,percent);
			}

			if(rotate){
				me.css({
					'transform' : 'rotate('+ rotate +'deg)'
				}).children('strong').css({
					'transform' : 'rotate('+ -rotate +'deg)'
				});
			}
		});
	}
};
//<!-- 初始化各种百分比的饼状图 -->


var pie1 = new Pie({
	el : '#HTML-pie'
});
pie1.init();

var pie3 = new Pie({
	el : '#CSS-pie',
	animite : true,
	number :true,
	color : '#ff9433'
});
pie3.init();

var pie4 = new Pie({
	el : '#Javascript-pie',
	animite : true,
	ring : 0.5
});
pie4.init();

var pie5 = new Pie({
	el : '#Java-pie',
	animite : true,
	ring : 0.7,
	color : '#ff9433'
});
pie5.init();

var pie6 = new Pie({
	el : '#jquery-pie',
	animite : true,
	ring : 0.8,
	color : '#ff6699',
	rotate : -40
});
pie6.init();
var pie7 = new Pie({
	el : '#angular-pie',
	animite : true,
	ring : 0.8,
	color : '#ff6699',
	rotate : -60
});
pie7.init();
var pie8 = new Pie({
	el : '#MySQL-pie',
	animite : true,
	ring : 0.5,
	color : '#ff6699',
	rotate : -40
});
pie8.init();
var pie9 = new Pie({
	el : '#node-pie',
	animite : true,
	ring : 0.5,
	color : '#ff6699',
	rotate : -40
});
pie9.init();