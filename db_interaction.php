<?php


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



// START SEND ORDER
// GETTING DATA FROM HTML
$article = $_POST['art'];
$menge = $_POST['menge'];




//CALCULATE ges_preis
$price_query ="SELECT Preis FROM artikel WHERE Bezeichnung ='" . $article . "'";
$price_result = mysqli_query($conn, $price_query);
while($fetch = mysqli_fetch_assoc($price_result)){
	$price=  $fetch['Preis'];
}

$ges_price= $menge * $price;




//SEND DATA TO DB
$send_query = "INSERT INTO bestellungen (Artikel, Menge, Preis_ges) VALUES ('" .$article ."', '". $menge . "', '" . $ges_price . "')";


if (mysqli_query($conn, $send_query)) {
    echo " ++ SUCCESSFULLY SEND DATA TO DB ++ ";
} else {
    echo " ++ Error: " . $send_query . "<br>" . $conn->error . " ++ ";
}

// END SEND ORDER





mysqli_close($conn);





?>