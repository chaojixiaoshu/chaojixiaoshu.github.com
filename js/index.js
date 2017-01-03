$(function(){
	$('#fullpage').fullpage({
		'anchors': ['page1', 'page2', 'page3', 'page4', 'page5','page6'],
		'scrollingSpeed': 300,
		'css3': true,
		'resize': false,
		'verticalCentered': true,
		'slidesColor': ['#ced7df', '#FFB5C5', '#FFB5C5', '#FFB5C5'],
		'navigation': true,
		'navigationPosition':'right',
		 navigationTooltips: ['page1', 'page2', 'page3', 'page4','page5','page6'],
		 
		 afterRender: function(){
				$("#home").css({"display":"block"}).addClass("home_zoom");
		
				$("header").before("<div id='header' style='opacity:0'></div>");	
			//	$("#home_head").css({"margin-top":"100px"});
			//	$("header").animate({opacity:"1"},1000,function(){
				//	$("#header").css({"opacity":"0.3"});
					$("#home_info1").fadeIn(700,function(){
						$(this).next().animate({width:"800px"},700,function(){
							$("#home_info2").fadeIn(450,function(){
								$(this).next().fadeIn(450,function(){
									$(this).next().fadeIn(450,function(){
										$(this).next().fadeIn(450);
									});
								});
							});
						});
					});
			//	});		
			},
		 afterLoad: function(anchorLink,index){
			if(index==1){
				$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
			}
			if(index==2){
				
				$("#about_content h1").after("<div class='title_en'><h2>· About me ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});
			}
			if(index==3){
				
				$("#skill_content h1").after("<div class='title_en'><h2>· Skill ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				$(".skill_list_content").addClass("skill_scale");
			}
			if(index==4){
				
				$("#exp_content h1").after("<div class='title_en'><h2>· Experience ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
			}
			if(index==5){
				
				$("#demo_content h1").after("<div class='title_en'><h2>· Demo ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});		
			}
			if(index==6){
				$("aside a").eq(5).addClass("selected").siblings().removeClass("selected");
				$("#contact_content h1").after("<div class='title_en'><h2>· Contact me ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});
			}
		},
		onLeave:function(index){
			if(index==2||index==3||index==4||index==5||index==6){
				$(".title_en").remove();	
			}
		}
	});
});

//顶部导航取消
$("header nav a:not(':first')").click(function(){
		alert("正在努力建设中...请稍等");
		return false;
});
//侧边导航文字切换
$("aside a").hover(function(){
	$(this).find("b").fadeToggle(200,"easeInOutCubic");
});
//图片轮播
$("#exp_list_slider").width($(".exp_list").width());
$("#exp_list_content").width($(".exp_list").width()*4);
$("#exp_list_slider_content").mouseenter(function(){
	$("#exp_list_to").stop(true,false).fadeTo(700,1);
}).mouseleave(function(){
	$("#exp_list_to").stop(true,false).fadeTo(700,0.1);
});
var page=1;
$("#exp_timeline a").click(function(){
	$("#exp_list_content").stop(true,false).animate({left:-$(".exp_list").width()*$(this).index()},2000,"easeInOutCubic");
	page=$(this).index()+1;
	});
$("#exp_list_toleft").click(function()
{
	if(!$("#exp_list_content").is(":animated")){
		if(page==1){
			$("#exp_list_content").animate({left:"+=50"},200,function(){
				$(this).animate({left:"-=50"},200);
			});
			return false;
		}	
		$("#exp_list_content").animate({left:"+="+$(".exp_list").width()});
		page--;
	}
});
$("#exp_list_toright").click(function(){
	if(!$("#exp_list_content").is(":animated")){
		if(page==4){
			$("#exp_list_content").animate({left:"-=50"},200,function(){
				$(this).animate({left:"+=50"},200);
			});
			return;
		}
		$("#exp_list_content").animate({left:"-="+$(".exp_list").width()});
		page++;
	}
});
//时光轴
var x=10;
var y=20;
$("#exp_timeline a").mouseover(function(e){
	this.aa=this.title;
	this.title="";
	$("body").append("<div class='exp_timeline_title'>"+this.aa+"</div>");	
	$(".exp_timeline_title").css({
		"top":e.pageY+y+"px",
		"left":e.pageX+x+"px"
	}).show("fast");
}).mouseout(function(){
	this.title=this.aa;
	$(".exp_timeline_title").remove();
}).mousemove(function(e){
	$(".exp_timeline_title").css({
		"top":e.pageY+y+"px",
		"left":e.pageX+x+"px"
	});
}).click(function(){
	return false;
});
//$(document).ready(function() {
//	$('#fullpage').fullpage({
//	paddingTop: '50px',
//	anchors:['firstPage', 'secondPage', 'thirdPage','fourthPage'],
//	menu: '#myMenu'});
//});

