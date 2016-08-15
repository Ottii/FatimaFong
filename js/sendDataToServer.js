$(document).ready(function(){
  console.log('in Funktion gesprungen');
    $("button").click(function(){
      console.log('Button');
      var article = $('#dd1').val();
      var menge = $('#dd2').val();

      console.log('Variablen deklariert' + menge);

      var datastring = 'art=' + article + '&menge=' + menge;
        if(article=='' || menge==''){
          var error = 'alert';
            $.ajax({
              type: "POST",
              url: "db_interaction.php",
              data: error,
              cache: false,
              success: function(result){
                console.log(result);
              }
            });

        } else {
          $.ajax({
            type: "POST",
            url: "db_interaction.php",
            data: datastring,
            cache: false,
            success: function(result){
              console.log(result);
            }
          });

        }
      return false;
});
});