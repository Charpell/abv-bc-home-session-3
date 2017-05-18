let findMissing  = function (){

	var arr1 = [4,66,7];
	var arr2 = [66,77,7,4];

	let difference = []; 

	if (arr1.length === arr2.length){
		difference.push(0)
	}

	else{

		for(var i=0;i<arr2.length;i++){

		   if(arr1.indexOf(arr2[i])==-1){
		   	difference.push(arr2[i]);
		   	var result = parseInt(difference.join());

	   		}
		}
		
	}
 return result;
}

//console.log(findMissing([2],[2,3]))

console.log(findMissing())