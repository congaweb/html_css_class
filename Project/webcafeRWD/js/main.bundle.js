(function(){
  document.addEventListener('keyup', function(event){
    if(event.key === 'Escape' || event.keyCode === 27){
      document.body.classList.toggle('gridShow');
    }
  });
})();