function shortcut(s1, s2) {
	let str="";
   if(s1.empty()|| s2.empty()){
	   return  str;
   }
	let st = s1[0]+s2[0];
	str=st;
	return str;
}

// // Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
