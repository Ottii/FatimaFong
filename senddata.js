$(document).ready(function(){
  console.log('** senddata SCRIPT LOADED **');
    $("#submit").click(function(){
      console.log('** BUTTON ACTICATED **');
      var article = $('#dd1').val();
      var menge = $('#dd2').val();

      console.log('** VARIABLES FOR SENDING TO DB DECLARED! Article: ' + article + ', Amount: ' + menge + ' **');

      var datastring = 'art=' + article + '&menge=' + menge;
        if(article== null){
                $("#error").show(300);
                $("#error").delay(5000)
                           .fadeOut(400);

        } else {
          $.ajax({
            type: "POST",
            url: "db_interaction.php",
            data: datastring,
            cache: false,
            success: function(msg){
              console.log(msg);
              $("#ok").show(300);
              $("#ok").delay(5000)
                      .fadeOut(400);
            }
          });

        }
      return false;
});
});





