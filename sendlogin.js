    $(document).ready(function(){
      $("#btn").click(function(){
      console.log('** BUTTOO FOR LOGIN ACTIVATED **');
      var usr = $('#usr').val();
      var pwd = $('#pwd').val();

      console.log('** VARIABLES FOR LOGIN DECLARED! ' + usr + ' ' + pwd + ' **');

      var loginstring = 'user=' + usr + '&password=' + pwd;
        if(usr== '' || pwd == ''){
                $("#errorlog").show(300);
                $("#errorlog").delay(5000)
                           .fadeOut(400);

        } else {
          $.ajax({
            type: "POST",
            url: "login_interaction.php",
            data: loginstring,
            cache: false,
            success: function(msg){
              console.log(msg);
              var res = msg.split("#");
              console.log(res[1]);
            }
          });

        }
      return false;
});
});