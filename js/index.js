/*
* @Author: Administrator
* @Date:   2018-01-19 11:20:12
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-20 15:43:18
*/

// 获取天气
// 请求太原天气情况
var weather;
var city;
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
	dataType:"jsonp",
	// 请求方式
	type:"get",
	success:function(obj){
		weather=obj.data.weather;
		console.log(weather);
		weather.city_name
	}
})
// 请求城市
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
	dataType:"jsonp",
	type:"get",
	success:function(obj){
		city=obj.data;
		console.log(obj.data);
		console.log(city);
	}
})
//渲染数据
function updata(){
	//渲染城市  获取元素
	var city_name=document.getElementsByClassName("header")[0];
	// 改变内容
	city_name.innerHTML=weather.city_name;
	//渲染温度
	var current_temperature=document.getElementsByClassName("wendu")[0];
	current_temperature.innerHTML=weather.current_temperature+"°";
	//获取当前的天气状况
	var current_condition=document.getElementsByClassName("zhuangtai")[0];
	current_condition.innerHTML=weather.current_condition;
	//今天的最高温
    var dat_high_temperature=document.getElementById("dat_high_temperature");
	dat_high_temperature.innerHTML=weather.dat_high_temperature;
	//今天的最低温
    var dat_low_temperature=document.getElementById("dat_low_temperature");
	dat_low_temperature.innerHTML=weather.dat_low_temperature;
	//今天的天气状况
    var day_condition=document.getElementById("day_condition");
	day_condition.innerHTML=weather.day_condition;
	//今天的图片
	var dat_weather_icon_id=document.getElementById("dat_weather_icon_id");
	// console.log(dat_weather_icon_id);
	dat_weather_icon_id.style=`background-image:url(img/${weather.dat_weather_icon_id}.png);`;
	//明天的最高温
    var tomorrow_high_temperature=document.getElementById("tomorrow_high_temperature");
	tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature;
	//明天的最低温
    var tomorrow_low_temperature=document.getElementById("tomorrow_low_temperature");
	tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature;
	//明天的天气状况
    var tomorrow_condition=document.getElementById("tomorrow_condition");
	tomorrow_condition.innerHTML=weather.tomorrow_condition;
	//明天的图片
	var tomorrow_weather_icon_id=document.getElementById("tomorrow_weather_icon_id");
	tomorrow_weather_icon_id.style=`background-image:url(img/${weather.tomorrow_weather_icon_id}.png);`;
	//获取日期
	




	for(var i in weather.hourly_forecast){
		// 创建父元素div
		var now=document.createElement("div")
		// 给父元素div加样式
		now.className="now";
	 	//获取now的父元素
		var nowp=document.getElementById("now");
	  	//把now插入到父元素中
	    nowp.appendChild(now);

	    var now_time=document.createElement("h2");
	    now_time.className="now_time";
	    now_time.innerHTML=weather.hourly_forecast[i].hour+":00";
	    now.appendChild(now_time);
	    //插入图片
	    var now_icon=document.createElement("div");
	    now_icon.className="now_icon";
	    now_icon.style=`background-image:url(img/${weather.hourly_forecast[i].weather_icon_id}.png);`;
	    now.appendChild(now_icon);
	   
	    var now_temperature=document.createElement("h3");
	    now_temperature.className="now_temperature";
	    now_temperature.innerHTML=weather.hourly_forecast[i].temperature+"°";
	    now.appendChild(now_temperature);
  	}
  	for(var j in weather.forecast_list){
		var recent=document.createElement("div")
		recent.className="recent";
		var recentp=document.getElementById("recent");
		recentp.appendChild(recent);
		//获取日期
		//console.log(weather.forecast_list[j].date.);
		// // 获取月份
		// console.log(weather.forecast_list[j].date.substring(5,7));
		// // 获取日期
		// console.log(weather.forecast_list[j].date.substring(8));
		//获取天气状况
		var recent_time=document.createElement("div");
	    recent_time.className="recent_time";
	    recent.appendChild(recent_time);
	    // 获取月份
	    var month=document.createElement("span");
	    month.className="month";
	    month.innerHTML=weather.forecast_list[j].date.substring(5,7)+"/";
	    recent_time.appendChild(month);
	    // 获取日期
	    var day=document.createElement("span");
	    day.className="day";
	    day.innerHTML=weather.forecast_list[j].date.substring(8);
	    recent_time.appendChild(day);
	    // 获取天气第二种方法
	    // var recent_time=document.createElement("div");
	    // recent_time.className="recent_time";
	    // recent_time.innerHTML=weather.forecast_list[j].date.substring(5,7)+"/"+weather.forecast_list[j].date.substring(8);
	    // recent.appendChild(recent_time);
		//获取天气状况
		var recent_wea=document.createElement("h2");
	    recent_wea.className="recent_wea";
	    recent_wea.innerHTML=weather.forecast_list[j].condition;
	    recent.appendChild(recent_wea);
	    //获取图片
	    var recent_pic=document.createElement("div");
	    recent_pic.className="recent_pic";
	    recent_pic.style=`background-image:url(img/${weather.forecast_list[j].weather_icon_id}.png);`;
	    recent.appendChild(recent_pic);
	    //获取最高温度
	    var recent_high=document.createElement("h3");
	    recent_high.className="recent_high";
	    recent_high.innerHTML=weather.forecast_list[j].high_temperature+"°";
	    recent.appendChild(recent_high);
	    //获取最低温度
	    var recent_low=document.createElement("h4");
	    recent_low.className="recent_low";
	    recent_low.innerHTML=weather.forecast_list[j].low_temperature+"°";
	    recent.appendChild(recent_low);
	    //获取风向
	    var recent_wind=document.createElement("h5");
	    recent_wind.className="recent_wind";
	    recent_wind.innerHTML=weather.forecast_list[j].wind_direction;
	    recent.appendChild(recent_wind);
	    //获取几级
	    var recent_level=document.createElement("h6");
	    recent_level.className="recent_level";
	    recent_level.innerHTML=weather.forecast_list[j].wind_level+"级";
	    recent.appendChild(recent_level);
	}
		//获取元素
		var header=document.getElementsByClassName("header")[0];
		var city_box=document.getElementsByClassName("city_box")[0];
		// 点击事件
		header.onclick=function(){
			$(".text").val("");
			$(".button").html("取消");
			city_box.style="display:block";
		}

		// 渲染城市
	for(var k in city){
		// console.log(k);
		// 获取到父元素
		var cityp=document.getElementById("city");
		var title=document.createElement("h1");
		title.className="title";
		title.innerHTML=k;
		cityp.appendChild(title);

		var con=document.createElement("div");
		con.className="con";
		for(var y in city[k]){
			// console.log(y);
			var erji=document.createElement("div");
			erji.className="son";
			erji.innerHTML=y;
			con.appendChild(erji);
		}
		cityp.appendChild(con);
	}
}
	

// 查找各个城市的天气信息
// 设置变量￥{变量}
function AJAX(str){
	$.ajax({
		url:`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`,
		dataType:"jsonp",
		// 请求方式
		type:"get",
		success:function(obj){
			weather=obj.data.weather;
			// console.log(2);
			updata();
			$(".city_box").css({"display":"none"});
		}
    })
}


// 当页面加载完成执行的代码
window.onload=function(){
	updata();
	// console.log(1);
	$(".son").on("click",function(){
		// console.log(1);
		var cityh=this.innerHTML;
		// console.log(cityh);
		AJAX(cityh);
	
	})

	//当点击输入框input获取焦点 button变确认
	// focus获取焦点
	$(".text").on("focus",function(){
		// html设置或改变元素的内容
		$(".button").html("确认");
	})

	// 操作按钮
	var button=document.getElementsByClassName("button")[0];
	// console.log(button);
	// 添加点击事件
	// console.log(1); 
	button.onclick=function(){
		// console.log(1);
		var btn=this.innerHTML;
		// 获取button中间的内容
		console.log(btn);
		if(btn=="取消"){
			// console.log(1);
			var city_box1=document.getElementsByClassName("city_box")[0];
			// console.log(city_box1);
			city_box1.style="display:none";
		}
		else{
			// 如何获取input变量 str 输入的城市
			var str1=document.getElementsByClassName("text")[0].value;
			// console.log(str);
			for(var i in city){
				for(var j in city[i]){
					if(j==str1){
					AJAX(str1);
					return;	
					}
				}
			}
			alert("没有该城市气象信息");
		}
	}
}

