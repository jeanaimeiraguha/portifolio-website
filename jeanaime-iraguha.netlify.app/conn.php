<?php
$conn=mysqli_connect('localhost' ,'root' ,'','clnt');
if($conn){
    echo "<script>alert('Message sent Successfully')</script>";
}
else{
    echo "<script>alert('Message  not sent Successfully')</script>"; 
}
?>