// JavaScript Document

// 禁止缩放
var scrollFunc=function(e){
	e=e || window.event;
	if(e.wheelDelta && event.ctrlKey){//IE/Opera/Chrome
		event.returnValue=false;
	}else if(e.detail){//Firefox
		event.returnValue=false;
	}
}

/*注册事件*/
if(document.addEventListener){
	document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari

drawbg();

// 获取鼠标停滞事件
$(function () {  
    var timer;  
    var hidding = false;  
    $(document).mousemove(function () {  
        if(hidding){  
        	hidding = false;  
        	return;  
        }  
        if (timer) {  
        	clearTimeout(timer);  
        	timer = 0;  
        }  
        $("#canvas").css("display","none");
        timer = setTimeout(function () {  
        	hidding = true;  
        	$("#canvas").css("display","block");
        	drawbgp();
        }, 10000)  
    }); 
});

// 默认背景
function drawbg(){
    function o(w, v, i) {  
        return w.getAttribute(v) || i  
    }  
    
    function j(i) {  
        return document.getElementsByTagName(i)  
    }  
    
    function l() {  
        var i = j("script"),  
            w = i.length,  
            v = i[w - 1];  
        return {  
            l: w,  
            z: o(v, "zIndex", -1),//这里作为背景设置index:-1  
            o: o(v, "opacity", 0.5),  
            c: o(v, "color", "0,0,0"),//两点之间连线的颜色  
            n: o(v, "count", 99)//整个屏幕里面散点的数量  
        }
    }
    
    function k() {//这里设置了canvas的宽和高为屏幕的宽和高  
        r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight  
    }
    
    function b() {  
        e.clearRect(0, 0, r, n);  
        var w = [f].concat(t);  
        var x, v, A, B, z, y;  
        t.forEach(function(i) {  
            i.x += i.xa, i.y += i.ya, i.xa *= i.x > r || i.x < 0 ? -1 : 1, i.ya *= i.y > n || i.y < 0 ? -1 : 1, e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1);  
            for (v = 0; v < w.length; v++) {  
                x = w[v];  
                if (i !== x && null !== x.x && null !== x.y) {  
                    B = i.x - x.x, z = i.y - x.y, y = B * B + z * z;  
                    y < x.max && (x === f && y >= x.max / 2 && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, e.beginPath(), e.lineWidth = A / 2, e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")", e.moveTo(i.x, i.y), e.lineTo(x.x, x.y), e.stroke())  
                }
            }  
            w.splice(w.indexOf(i), 1)  
        }), m(b)  
    }
    
    var u = document.createElement("canvas"),  
        s = l(),  
        c = "canvas0",
        e = u.getContext("2d"),  
        r, n, m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        
        function(i) {  
    		window.setTimeout(i, 1000 / 45)  
    	}, a = Math.random, f = {  
    		x: null,  
    		y: null,  
    		max: 20000  
    	}; 
    	
    u.id = c;  
    u.style.cssText = "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o; 
    
    j("body")[0].appendChild(u);//将canvas元素插入的body里  
    k(), window.onresize = k;
    
    window.onmousemove = function(i) {  
        i = i || window.event, f.x = i.clientX, f.y = i.clientY  
    }, window.onmouseout = function() {  
        f.x = null, f.y = null  
    };
    
    for (var t = [], p = 0; s.n > p; p++) {  
        var h = a() * r,  
            g = a() * n,  
            q = 2 * a() - 1,  
            d = 2 * a() - 1;  
        t.push({  
            x: h,  
            y: g,  
            xa: q,  
            ya: d,  
            max: 6000  
        })  
    }
    
    setTimeout(function() {  
        b()
    }, 100)  
}

// 保护背景
function drawbgp(){
	// 创建画板
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");

	// 得到显示器的宽高
	var width,heigt;
	function getScreen(){
		width = window.innerWidth
		    	|| document.documentElement.clientWidth
	    			|| document.body.clientWidth;
		heigt = window.innerHeight
	    		|| document.documentElement.clientHeight
		    		|| document.body.clientHeight;
	}

	// 初始化页面的宽度和高度
	getScreen();
	c.width = width;
	c.height = heigt;

	// 初始化字符串数组
	var character = "就问你炫不炫酷!\"#$%&'()*+,-./0123456789:;<=>" + "?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{<=>" +
	"|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜[TRADE MARK SIGN]š›œžŸ ¡¢£¤¥¦§¨[COPYRIGHT " +
	"SIGN]ª«¬[REGISTEREDSIGN]¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ" +
	"×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖ" +"ėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨ";
			character = character.split("");
			
	// 设置页面字符宽度和列数
	var fontSize = 20;
	    columns = c.width / fontSize;

	var drops=[];
	for(var x=0;x<columns;x++) {
	    drops[x] = 0;
	}

	function draw(){
	    ctx.fillStyle="rgba(0,0,0,0.09)";
	    ctx.fillRect(0,0, c.width, c.height);

	    ctx.fillStyle="#0f0";
	    ctx.font = fontSize + "px arial";// arial is font.
		
	    for(var i=0;i<drops.length;i++){
	        var text = character[Math.floor(Math.random()*character.length)];
	        ctx.fillText(text,i*fontSize,drops[i]*fontSize);

	        drops[i]++;
	        if(drops[i]*fontSize > c.height && Math.random() > 0.9){
	            drops[i] = 0;
	        }
	    }
	}
	
	var intervalId1 = setInterval(draw,60);// 控制速度
	var intervalId2 = setInterval(checkScreen,500);// 检查间隔
	// 检查屏幕大小
	function checkScreen(){
		getScreen();
		if(c.width != width || c.height != heigt){
			c.width = width;
			c.height = heigt;
			columns = c.width / fontSize;
			for(var x=0;x<columns;x++) {
	 		   drops[x] = 0;
			}
		}
	}
	
	$("body").click(function(){
		$("#canvas").css("display","none");
		window.clearInterval(intervalId1);
		window.clearInterval(intervalId2);
	});
	$("body").mousemove(function(){
		$("#canvas").css("display","none");
		window.clearInterval(intervalId1);
		window.clearInterval(intervalId2);
	});
}
