<?php
//START SESSION

session_start();

$server = "localhost";
$user="root";
$password="";
$db = "bestellungen";
$conn_success = ' ++ SERVER CONNECTED ++ ';

//create Connection
$conn = new mysqli($server, $user, $password, $db);

//check conn
if(!$conn){
  die("++ Connection failed: " . mysqli_connect_error() . " ++ ");

}
echo $conn_success;

//LOGIN HANDLING
$usr = $_POST['user'];
$pwd = $_POST['password'];

$login_query = "SELECT Name, Password FROM test_user WHERE Name ='" . $usr . "' AND Password='" . $pwd . "'";
$login_result = mysqli_query($conn, $login_query);

if($login_result == null){
	echo "ERROR";

} else {
	echo "#OK#";
	$_SESSION["user"] = $usr;
	$_SESSION["password"] = $pwd;
}
?>
