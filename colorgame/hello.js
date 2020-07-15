 var noofs=6;
 var color= genrandon(noofs);
 var square=document.querySelectorAll(".square");
 var pickedc=ranm();
 var colordisp=document.getElementById("colordd");
 colordisp.textContent=pickedc;
 var messagedisplay=document.querySelector("#mess");
 var h1=document.querySelector("h1");
 var resetb=document.querySelector("#reset");
 var easybtn=document.querySelector("#easyb");
 var hardbtn=document.querySelector("#hardb");


 
 easybtn.addEventListener("click",function(){
 	easybtn.classList.add("sel");
 	hardbtn.classList.remove("sel");
 	noofs=3;
 	color=genrandon(noofs);
 	pickedc=ranm();
 	colordisp.textContent=pickedc;
for(var i=0;i<square.length;i++)
{
	if(color[i])
	{
		square[i].style.background=color[i];
	}
	else{
		square[i].style.display="none";
	}
}

 });

 hardbtn.addEventListener("click",function(){
 hardbtn.classList.add("sel");
 	easybtn.classList.remove("sel");
 	noofs=6;

color=genrandon(noofs);
 	pickedc=ranm();
 	colordisp.textContent=pickedc;
for(var i=0;i<square.length;i++)
{
	
	
		square[i].style.background=color[i];
		square[i].style.display="block";
	
	 
}
 	

 });


 resetb.addEventListener("click",function(){
color= genrandon(noofs);
pickedc=ranm();

colordisp.textContent=pickedc;
for(var i=0;i<square.length;i++)
{
	square[i].style.background=color[i];
}
h1.style.background="steelblue";

 });
 for(var i=0;i<color.length;i++)
 {
 	square[i].style.background=color[i];
 	square[i].addEventListener("click",function(){
 		
 		var c=this.style.background;
 		if(c===pickedc)
 		{
 			change(c);
 			h1.style.background=c;
 			 messagedisplay.textContent="correct";
 			 resetb.textContent="play again";
 		}
 		else{
 			this.style.background="#232323";
 			messagedisplay.textContent="tryagain";
 		}

 	});
 }

 function change(c)
 {
for(var i=0;i<square.length;i++)
{
	square[i].style.background=c;
 }
}
function ranm()
{
	var v=Math.floor(Math.random()*color.length)
	return color[v];
}

function genrandon(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{

arr.push(rc()); 
	}

	return arr;
}
function rc()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}