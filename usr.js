function alpha(input){
	var name = /[^a-zA-Z\s]/gi;
	input.value = input.value.replace(name,"");
      
}
