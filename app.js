
$(function() {	
	for (var i = 1; i <= 100; i++) {
	   if (i%15===0) {
	   	document.write('<p>' + 'Fizz Buzz' + '</p>');
	   }

	   else if (i%3===0) {
	   	//$('body').append('<p>' + 'Fizz' + '</p>');
	   	document.write('<p>' + 'Fizz' + '</p>');
	   	//document.write('Fizz'); 
	   }
	   else if (i%5===0) {
	   	//$('body').append('<p>' + 'Buzz' + '</p>');
	   	document.write('<p>' + 'Buzz' + '</p>');
	   	//document.write('Buzz');
	   }

	  else {
	  	//$('body').append('<p>' + i + '</p>');
	  	document.write('<p>' + i + '</p>');
	  	//document.write(i);

	  }
	}
});