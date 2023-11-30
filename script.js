const makeChange = (c) => {
    let obj = {
		q : 0,
	n:0,
	d:0,
	p:0
	};
  while(c >= 25){
	  c-=25;
	  obj.q++;
  }

	while(c >= 10){
		 c-=10;
		obj.d++;
	}

	while(c >= 5){
		c -= 5;
		obj.n++;
	}

	while(c >= 1){
		c-=1;
		obj.p++;
	}

	return obj;
};


// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
