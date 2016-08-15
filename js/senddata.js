$(document).ready(function(){
  console.log('Script loaded');
    $("button").click(function(){
      console.log('Button');
      var article = $('#dd1').val();
      var menge = $('#dd2').val();

      console.log('Variables declared!');

      var datastring = 'art=' + article + '&menge=' + menge;
        if(article=='' || menge==''){
          var error = 'alert=error';
            $.ajax({
              type: "POST",
              url: "db_interaction.php",
              data: error,
              cache: false,
              success: function(result){
                $('#alert').show();
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