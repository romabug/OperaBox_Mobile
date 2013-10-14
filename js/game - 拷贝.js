 /*********************************************
 version 1.0
 by: hanchang cai
 **********************************************/
 
$(document).ready(function(e) {
 game (); 
  
  // 测试 正文移入展示，下面的 层往下移动
  
  
  
 //方块飞出 
  $(".tempbtn2").click(function(e) {
      		
  // 目的地坐标
	var new_ll = -200 ;
    var new_tt = -200 ;	 
 	  
  var i =0;
	 
 window.setInterval( function () {
	
	if (i<8) {

  		// 各块 换成 固定定位，并 获取位置
	var offset_left =$("#tu_" + i).offset().left ;
	var offset_top =$("#tu_" + i).offset().top ;
	$("#tu_" + i).css({"position":"fixed", 
	"left":offset_left, "top":offset_top, "z-index":800	});
	$("#tu_" + i).addClass("click_effect2");
	
	//start flying
$("#tu_" + i).animate({left:new_ll, top:new_tt },1000,"easeInBack",
      function () {
 // $(this).hide(); 
  	
	$("#gamehouse").delay(500).hide(700);		 
	 }); 
 		   i=i+1; 
 	 }  // end for  
 		 }, 100);
		 
 
 });	
 
 
  		
 }); 
 
 
 
 
 
 
 
//拼图游戏开始 
function game () {
	 
 var ini_pic =  "url(mydog.jpg)" ;
	
var temp_url = ini_pic;
 $("#gbigbox_pic").css("background-image",temp_url);
 $(".tu_public").css("background-image",temp_url);
 
var input_text ="";
  $("#turl").bind({ 
  "click" : function () {
	input_text = $(this).val();  $(this).val("")   },
 //	"change" : function () { $(this).val(input_text); } 
 	}); 
  

//点击偷瞄的时候	
   $("#toumiao").click(function(e) {
	  $(this).fadeOut(50);
 $("#gbigbox_pic").show().animate({ left:298 },500,"easeInOutExpo").delay(600).animate({ left:0 },800,"easeInOutExpo", function () {
	 $(this).hide();
	  $("#toumiao").fadeIn();
	 });
   
 });		
	
	

//点击 重新开始的时候	
$("#restart").click(function(e) {
	
 // 晃动框框
 for (i=0; i< 5; i++) {	
 
 $("#gbigbox").css("opacity",0.7 ); 
 $("#gbigbox").animate({left:-6},10).delay(10).animate({left:6 },10).delay(10).animate({left:0 },10, function() {
 Radom_me ();	//回调排序后 
 	});  
 };
 
//图框闪烁一下	
 $("#gbigbox").css("opacity",1 ); 
	$("#gbigbox").fadeOut(100,"easeInCirc", function() {
 	     Re_start();
	  $("#gbigbox").fadeIn();
			
		});
	
 });
 

 
 
//换图片 
$("#surl").click(function(e) {
   
 //检查是否为有效 URL
 var str =  $("#turl").val();
 str = str.match(/http:\/\/.+/);
if (str == null){
alert("can not get image from this URL, try it again...");
return false;
}else{
 
  temp_url ="url(" + $("#turl").val() + ")" ;
 
$("#gbigbox").fadeOut(900, function() {
 for(var i=0; i<8;i++){ var makeid ="tu_"+ i;  };
 
$(".tu_public").css("background-image",temp_url);
 $("#gbigbox_pic").css("background-image",temp_url);

//图片框重新煽一下	
 
	     Re_start();
 	 $("#gbigbox").fadeIn(500);
 		});  
 }
 
  
}); 
 	
	 

 // 图片晃动GAME START
 $("#hitme").click(function(e) {
	
 $(".tu_public").css("background-image",temp_url);
 for (i=0; i< 5; i++) {	

//alert (temp_url);
 $("#gbigbox").css("opacity",0.7 ); 
 $("#gbigbox").animate({left:-6},10).delay(10).animate({left:6 },10).delay(10).animate({left:0 },10, function() {
 Radom_me ();	//回调排序后 
 	});  
	

         
};

// 闪一下 重新开始 
 
 $("#gbigbox").fadeOut(10, function() {
	 $("#gbigbox").css("opacity",1);
	 });
 
  $("#gbigbox").fadeIn(600, function () {
     
	});
 
  	
}); 
 
 
 
//打乱图片函数 
function  Radom_me() {	 
	
var aArr = []; 
aArr.length = 0;  
 
for(var i=0; i<9;i++){ 
    aArr.push(i); //aArr[i] = i; 
} 
  function randomSort(a,b){ //数组元素随机排列 
    return Math.random()>.5 ? -1:1; 
} 

aArr.sort(randomSort);	 // 排序完成
//alert (aArr); 
  
	
$("#iamhole").removeAttr( );
$("#iamhole").attr("mark","pp"+aArr[8]);
$("#iamhole").removeClass();
$("#iamhole").addClass("pp"+aArr[8]);

for(var i=0; i<8;i++){   

var makeid ="tu_"+ i;
var makepp = "pp" +aArr[i];
 $("#"+ makeid).removeClass();
 $("#"+ makeid).removeAttr("style");
  $("#"+ makeid).removeAttr();
 //重新定位图片  

//   $(".tu_public").css("background-image",temp_url);  
 $("#"+ makeid).addClass(makepp);

  $("#"+ makeid).addClass("tu_public");
    $("#"+ makeid).attr("mark",makepp ); 
   $("#"+ makeid).css("background-image",temp_url);  
  }  
 
}; 
 



function Re_start() {
 for(var i=0; i<8;i++){   
 
var makeid ="tu_"+ i;
var makepp = "pp" +i;
//移除DIV 的所有参数
 $("#"+ makeid).removeClass();
 $("#"+ makeid).removeAttr("style");
   $("#"+ makeid).removeAttr();  
 //重新赋予DIV 参数
 $("#"+ makeid).attr("mark",makepp );

 $("#"+ makeid).addClass(makepp).addClass("tu_public");
  $(".tu_public").css("background-image",temp_url);
 
   }	

$("#iamhole").removeClass().addClass("pp8");
  $("#iamhole").removeAttr("style");
 $("#iamhole").attr("mark","pp8"); 
   
 	};
  
  
 	
//点击图片的时候	
$(".tu_public").bind("click", function () {
	
 var which_tu = "";  //记录 被点击 图的 位置 
 which_tu =$(this).attr("mark");
// 点击后图片换皮肤	
	$(".tu_public").removeClass("click_effect");
	$(this).addClass("click_effect");
  
// alert ( $(this).css("left") );  
  
  var hole_top = $("#iamhole").css("top");
  var hole_left = $("#iamhole").css("left");
 var  hole_top_v = $("#iamhole").position().top;
  var  hole_left_v = $("#iamhole").position().left;

 var this_top_v =$(this).position().top;
  var this_left_v =$(this).position().left;
  //alert ("TOP -" +this_top_v + "LEFT -" + this_left_v );  
  var hole_mark =$("#iamhole").attr("mark");
 var diff = Math.abs(hole_top_v - this_top_v + hole_left_v - this_left_v);
 
   
// 判断是否 有效移动  
 if ( hole_top_v != this_top_v  && hole_left_v != this_left_v  ) 
  { 
  $("#info").append(" <p > can not move this one  :( </p> ").fadeIn( ).delay(500).fadeOut();
 
   return false;
    } 
	
 else if (diff > 100 )
  { 
   $("#info").append(" <p >can not move it :< </p> ").fadeIn( ).delay(500).fadeOut();
  return false; }
  else
 { 
  
  $(this).animate({ top:  hole_top, left:hole_left},250,"easeOutBounce", 
  function () {  
// alert ("more over");  
//图片 换坐标
$(this).attr("mark","").removeClass().attr("mark",hole_mark);
$(this).addClass("tu_public");  $(this).addClass(hole_mark);

//空缺的HOLE 换坐标 
  $("#iamhole").attr("mark",which_tu);
    $("#iamhole").removeClass().addClass(which_tu);
	
// 判断 成功与否，陈功的条件 还需要完善   
    if ($("#iamhole").attr("mark") == "pp8"  )
 { // alert ("亲，你赢了，请客哦!!") ; 
   // alert (" 哈哈，程序还没 写完呢, 哪有那么简单!") ;
  }; 
  
    });

   }; // end animation
  
 		}); 
 	 };
	 
//拼图游戏结束 	 