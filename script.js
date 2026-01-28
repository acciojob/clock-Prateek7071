//your JS code here. If required.
let timee = document.getElementById('timer')
setInterval(()=>{
	const date = new Date
	timee.innerHTML=`date.toLocaleDateString(), date.toLocaleTimeString()`
},100)