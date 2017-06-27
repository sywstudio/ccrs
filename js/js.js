
function Show_Hidden(trid){
		var xhrurl = 'http://elu.1024cmi.com/Home/Index/getWxJsParam';
				$.ajax({
				type: "GET",
				data:{url:'elu.1024cmi.com/Home/Index/toIndex?openId='+openid},
				url: xhrurl, 
				success: function(data){
					
					if(data.code ==10000){
						  appId_share =data.data.appId;
						  nonceStr_share =data.data.nonceStr;
						  timestamp_share =data.data.timestamp;
						  url_share =data.data.url;
						  signature_share =data.data.signature;
						  rawString_share =data.data.rawString;
					}else{
						alert_html5(data.msg);
					}
					
				}
			}); 
			
	if(trid.style.display=="block"){
		trid.style.display='none';
	}else{
		trid.style.display='block';
	}
}

$(function(){
	$("#butNext").click(function(){
		$(this).parent().hide();
		$("#body").show();
	});
	  $("#tg").click(function(){
		$(this).parent().hide();
		$("#body").show();
	});
	 
	  
	$("#zl").click(function(){
		$(this).hide();
		$("#rankOne").hide();
		$("#rankTwo").show();
		$("#ph").show();
	});
	$("#ph").click(function(){
		$(this).hide();
		$("#rankTwo").hide();
		$("#rankOne").show();
		$("#zl").show();
	});
	$(".back").click(function(){
		$(this).parent().hide();	
	});
	  
	
	 $(".viewRank").click(function(){
		var xh = 1;
		 
			 var xhrurl = 'http://elu.1024cmi.com/Home/Index/getRank';
				$.ajax({
				type: "GET",
				data:{currentPage:1},
				url: xhrurl, 
				success: function(data){
					
					if(data.code ==10000){
							$("#bd0").empty();
							var data1 = data.data.data;
 
							for(var i = 0; i < data1.length; i++){
								//$(".bd").append("<li><span '>" + data1[i][0] +"</span><span style='float:right;'>" + data1[i][1] +"</span></li>");
								$("#bd0").append("<li><div class='Mc'>"+ xh +"</div><img src='"+ data1[i].wx_head +"' class='headJpg'><div class='nickName'>"+ data1[i].wx_name +"</div><div class='fenS'>"+ data1[i].score +"</div></li>");
								xh++;
							}
							if(data1.length <7){
								for(var i = 0; i < 7-data1.length; i++){
									$("#bd0").append("<li></li>");
								}
							}
							$("#rankList").show();
					}else{
						//alert(data.msg);
						alert_html5(data.msg);
					}
					
				}
			}); 
	})
	
	
})

