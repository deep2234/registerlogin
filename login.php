<?php
session_start(); // Start the session

// Include database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userinfo";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userInput = $conn->real_escape_string($_POST['username']);
    $passwordInput = $conn->real_escape_string($_POST['password']);

    // Query to fetch user record based on username
    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $userInput);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if user exists
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        // Verify password
        if ($passwordInput === $row['password']){
            // Set session variables for the logged-in user
            $_SESSION['user_id'] = $row['ID'];
            $_SESSION['username'] = $row['username'];

            // Redirect to dashboard or welcome page
            header("Location: location.php");
            exit();
        } else {
            // Invalid password
            $error_message = "Invalid password. Please try again.";
        }
    } else {
        // No matching user found
        $error_message = "No user found with the provided username.";
    }
}
?>