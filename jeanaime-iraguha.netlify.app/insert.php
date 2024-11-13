


<?php
include('conn.php');
if(isset($_POST['submit'])){
    $fullname=$_POST['fullname'];
    $email=$_POST['email'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];
    $insert=mysqli_query($conn, "INSERT INTO messages VALUES('','fullname','email','subject','message')");
if($insert){
    echo "<script> alert('Message submited to Iraguha')</script>";
}

}
?>