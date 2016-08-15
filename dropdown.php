<?php

$server = "localhost";
$user="root";
$password="";
$db = "bestellungen";
$conn_success = "<script>console.log('Verbindung zu Server hergestellt');</script>";

//create Connection
$conn = new mysqli($server, $user, $password, $db);

//check conn
if(!$conn){
  die("Connection failed: " . mysqli_connect_error());

}
echo $conn_success;


//Creating SQL Statement
$art_query = "SELECT Bezeichnung FROM artikel";
$dd_result = mysqli_query($conn, $art_query);
while($row = mysqli_fetch_assoc($dd_result)){
	echo "<option>" . $row['Bezeichnung'] . "</option>" ;
}
mysqli_close($conn);
?>