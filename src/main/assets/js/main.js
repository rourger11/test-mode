// disable right click js
//function disableU(){
    document.onkeydown = function(e) {
      if (e.ctrlKey &&
          (e.keyCode === 67 ||
           e.keyCode === 86 ||
           e.keyCode === 85 ||
           e.keyCode === 117)) {
          return false;
      } else {
          return true;
      }
    };
    $(document).keypress("u",function(e) {
    if(e.ctrlKey)
    {
    return false;
    }
    else
    {
    return true;
    }
    });
    $(document).on('keydown', function(e){
      if(e.ctrlKey && e.which === 83){ // Check for the Ctrl key being pressed, and if the key = [S] (83)
          console.log('Ctrl+S!');
          e.preventDefault();
          return false;
      }
    });
    $(document).keydown(function (event) {
		if (event.keyCode == 123) { // Prevent F12
			return false;
		} else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
			return false;
		}
	});
}