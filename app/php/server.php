<?php
global $conn;
include 'login.php';
include 'signup.php';
include 'update.php';

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Database connection configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "driverless";

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (isset($_POST['login'])){
    login($conn);
  }  
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (isset($_POST['signup'])){
    signup($conn);
  }  
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (isset($_POST['update'])){
    updateUserData($conn);
  }  
}

if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// Close the database connection
$conn->close();
?>