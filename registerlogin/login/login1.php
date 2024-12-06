<?php
session_start();
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'userinfo';

$connect = mysqli_connect($servername,$username,$password,$dbname);
if(mysqli_connect_error()){
    die("Failed to connect with MY_SQL". mysqli_connect_error());
}

$user_name=$_POST['username'];
$pass_word=$_POST['password'];

//prevent mysqli injection

$user_name = stripcslashes($user_name);
$pass_word = stripcslashes($pass_word);
$user_name = mysqli_real_escape_string($connect,$user_name);
$pass_word = mysqli_real_escape_string($connect,$pass_word);

//check for user in db

$sql = "SELECT * FROM users where username = '$user_name' and password = '$pass_word'";
$result = mysqli_query($connect,$sql);
$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
$count = mysqli_num_rows($result);

if($count == 1)
{

    echo "<Login Successful";
}
else{
    echo "<h1><centre>Username or Password Incorrect!</centre><h1>";
}
?>