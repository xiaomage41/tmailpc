window.onload=function(){
	//侧导航
	let banner=document.querySelector(".banner");
	let li=banner.getElementsByTagName("li");
	let nav=banner.getElementsByClassName("nav");
	for(let i=0;i<li.length;i++){
		li[i].onmouseenter=function(){
			nav[i].style.display="block";
		}
		li[i].onmouseleave=function(){
			nav[i].style.display="none";
		}
	}
	//搜索框
	let sezrch1=document.querySelector(".sezrch1")
	let wh=innerHeight;
	window.onscroll=function(){
		let st=document.body.scrollTop||document.documentElement.scrollTop;
		if(st>780){
			sezrch1.style.top=0
			

		}else{
			sezrch1.style.top="-60px"
			
			
		}
	}

	//轮播图
	let banner1=document.querySelector(".banner_img")
	let img=banner1.getElementsByTagName("img")
	let num=0
	let t=setInterval(move,2000)
	function move(){
		num++;
		if(num==img.length){
			num=0;
		}
		for(i=0;i<img.length;i++){
			img[i].style.zIndex=3;
			
		}
		img[num].style.zIndex=5;
		
	}



}