<?php
$conn = new mysqli("localhost", "root", "", "healix_db");
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = password_hash($_POST["password"], PASSWORD_BCRYPT);
    
    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $password);
    if ($stmt->execute()) {
        echo "Signup successful! You can now login.";
    } else {
        echo "Error: Username might already exist.";
    }
    $stmt->close();
}
$conn->close();
?>