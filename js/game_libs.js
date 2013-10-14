 /*********************************************
 version 1.0
 by: hanchang cai
 **********************************************/
 
 
 
 
 //旋转飞出， 并下降 water
function Fly_out_box(temp_url,left,top)
 {
 var angle = 0;
 var dingshi =  setInterval(function(){
 angle+=55;
   $("#gbigbox_2").rotate(angle);   
   
},20);
 
  $("#gbigbox_2").animate({ left :left, top : top },500,"easeInBack"); 
  
   
 window.setTimeout( function () {
	 
	    Re_start(temp_url);
	 
 	 window.clearInterval(dingshi); 
 	 $("#gbigbox_2").stop(true,true);
 //回归原来地方	  
	  $("#gbigbox_2").removeAttr("style");
	   $("#gbigbox_2").css({"top":-320, "left": 0} );
 
	    $("#gbigbox_2").animate({top:0 },300,"easeOutBack", function () {
			
 
			});
 
 	 }, 800 );
	
 };
  
 
 
 
 // for 换图片
 
 function Fly_out_box2(myurl,left,top)
 {
 var angle = 0;
 var dingshi =  setInterval(function(){
 angle+=55;
   $("#gbigbox_2").rotate(angle);   
   
},20);
 
  $("#gbigbox_2").animate({ left :left, top : top },500,"easeInBack"); 
  
   
 window.setTimeout( function () {
	 
	    Re_start(myurl);
	 
 	 window.clearInterval(dingshi); 
 	 $("#gbigbox_2").stop(true,true);
 //回归原来地方	  
	  $("#gbigbox_2").removeAttr("style");
	   $("#gbigbox_2").css({"top":-320, "left": 0} );
 
	    $("#gbigbox_2").animate({top:0 },300,"easeOutBack", function () {
			
 
			});
 
 	 }, 800 );
	
 };
  
 
 
 
 
 
 
 
 
 
 
 


//小方块出 右侧, 插入图片
 
 function Fly_inner()
 {
	 
 var new_ll =  400 ;
    var new_tt = 100 ;	 
   var i =0;  
	 
 window.setInterval( function () {
	
	if (i<8) {  
 	//start flying
$("#tu_" + i).animate({left:new_ll, top:new_tt   },500,"easeInExpo",
      function () {    }); 
 // $(this).hide(); 
 	
 		   i=i+1; 
 	 }  // end for  
 		 }, 50);
 	 
	 };
 
 
 
 
 
  
//打乱图片的算法 
function  Radom_me(temp_url) {	 
//	var temp_url = "url(mydog5.jpg)" ;
	
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

var tmp = $("#block_radius").val();

for(var i=0; i<8;i++){   

var makeid ="tu_"+ i;
var makepp = "pp" +aArr[i];
 $("#"+ makeid).removeClass();
 $("#"+ makeid).removeAttr("style");
//  $("#"+ makeid).removeAttr();
 //重新定位图片  

//   $(".tu_public").css("background-image",temp_url);  
 $("#"+ makeid).addClass(makepp);

  $("#"+ makeid).addClass("tu_public");
    $("#"+ makeid).attr("mark",makepp ); 
   $("#"+ makeid).css("background-image",temp_url);
   
     $(".tu_public").css({
	 "border-radius": tmp +"px" ,
	"-webkit-border-radius": tmp +"px" ,
	 "-moz-border-radius" : tmp +"px" ,
	 "-o-border-radius": tmp +"px" ,
	 "-ms-border-radius": tmp +"px" 
 	 });	
      
  }  
 
}; 
   


// 图片重新 排列的 算法
function Re_start(temp_url) {
//	var temp_url = "url(mydog5.jpg)" ;
var tmp =$("#block_radius").val();
  
 for(var i=0; i<8;i++){   
 
var makeid ="tu_"+ i;
var makepp = "pp" +i;
//移除DIV 的所有参数
 $("#"+ makeid).removeClass();
  
   $("#"+ makeid).removeAttr("style");
 //  $("#"+ makeid).removeAttr();  
 //重新赋予DIV 参数
 $("#"+ makeid).attr("mark",makepp );

 $("#"+ makeid).addClass(makepp).addClass("tu_public");     };
   
   $(".tu_public").css("background-image",temp_url);
   
  $(".tu_public").css({
	 "border-radius": tmp +"px" ,
	"-webkit-border-radius": tmp +"px" ,
	 "-moz-border-radius" : tmp +"px" ,
	 "-o-border-radius": tmp +"px" ,
	 "-ms-border-radius": tmp +"px" 
 	 });	 

  

$("#iamhole").removeClass().addClass("pp8");
  $("#iamhole").removeAttr("style");
 $("#iamhole").attr("mark","pp8"); 
   
 	};
  



//从右边 插入图片 的 过程
function Insert_from_right (temp_url) {
	//原始小块 飞出右边
   Fly_inner();
   $("#gbigbox_pic_inner_tmp").css("background-image",temp_url);
 // $("#gbigbox_pic_inner_tmp").fadeIn( );
  
  window.setTimeout( function () {

// RE-START 
   Re_start(temp_url);
 // END RE-START 
 
  $("#temp_hole_cover").show();
  $("#gbigbox_2").css("left", 300 );


//外面右边插入图片	  
 $("#gbigbox_pic_inner_tmp").show().animate({left: 150 },900,"easeInOutBack"  ).delay(200).animate({left: 0 },700,"easeOutCirc", function () {
	 
 	 $("#gbigbox_pic_inner_tmp").hide();
	 $("#gbigbox_pic_inner_tmp").css("left",300);
	 
	   });   
 
  
  $("#gbigbox_2").show().animate({left: 150 },900,"easeInOutBack").delay(200).animate({left: 0 },700,"easeOutCirc", function()  { 
  
	$("#temp_hole_cover").animate({"top": 400 }, 400,"easeInCirc", function() {
	 $("#temp_hole_cover").hide(); 
 	$("#temp_hole_cover").removeAttr("style").addClass("pp8","tu_public");
 		}); 
 	}); 
 
 		  } , 1300);

 	
	};


 