<?php 

$con = mysqli_connect("localhost","root","","registration");
if(!$con)
{
    die("Connection failed");
}

if(isset($_POST["submit"]))
{
    $name = $_POST["name"];
    $password = $_POST["password"];

    $sql_query = "insert into
    user_details('name', 'password') VALUES ('$name', '$password');";
    
    if(mysqli_query($con,$sql_query))
    {
        echo "Sucessfully registered" ;
    }
    else{
        echo "error " ; 
    }

    mysqli_close($con);



}







?>