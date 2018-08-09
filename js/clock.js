	  
	  const secondHand = document.querySelector('.second-hand');
	  
	  const minuteHand = document.querySelector('.min-hand');
	  
	  const hourHand = document.querySelector('.hour-hand');
	  
	  function setDate(){
		  const now=new Date();
		  const seconds=now.getSeconds();
		  const secondsDegrees = ((seconds/60) * 360) + 90;
		  secondHand.style.transform=`rotate(${secondsDegrees}deg)`;
		  
		  const min=now.getMinutes();
		  const minsDegrees=((min/60) * 60)+ 90;
		  minuteHand.style.transform=`rotate(${minsDegrees}deg)`;
		  
		  
		  const hour=now.getHours();
		  const hoursDegrees=((hour/12) * 60)+ 210;
		  hourHand.style.transform=`rotate(${hoursDegrees}deg)`;
		  
		  
	  }
	  
	  setInterval(setDate,1000);