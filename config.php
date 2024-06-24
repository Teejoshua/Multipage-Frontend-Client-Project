
<?php
$servername = "sql212.byethost13.com"; 
$username = "b13_36727780";
$password = "webenoch";
$dbname = "b13_36727780_Enoch";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
