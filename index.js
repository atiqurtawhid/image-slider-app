

const images = [ "./image/3.jpg", "./image/4.jpg", "./image/5.jpg", "./image/6.jpg", "./image/8.jpg","./image/9.jpg", "./image/tawhid.jpg", "./image/doly.jpg", "./image/atiq.jpg" ]

const imgTag = document.querySelector("img");


let count = 0;
const next =()=>{
	count++
	if(count>=images.length){
		count=0
		imgTag.src=images[count]
	}
	
	else{
    imgTag.src=images[count]
	}
}
const pri =()=>{
	count--
	if(count<0){
		count=images.length-1
		imgTag.src=images[count]
	}
	
	else{
    imgTag.src=images[count]
	}
}


	
	
	
	
