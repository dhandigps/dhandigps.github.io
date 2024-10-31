<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if(

        !empty($_POST['name'])

        && !empty($_POST['email'])

        && !empty($_POST['message'])

    ){

        $name = $_POST["name"];

        $email = $_POST["email"];

        $message = $_POST["message"];

        $to = "anchermaster@gmail.com";

        $subject = "New Message Recieved";

        $body = "Sender: {$name}\nEmail: {$email}\nMessage: {$message}";

        $headers = "From: {$email}";

        if (mail($to, $subject, $body, $headers)) {

            echo "<center><font color='green'>Your Message sent successfully! </font></center>";

        } else {

            echo "<center><font color='red'>Failed to send message. Please try again.</font></center>";

        }

    }

}

?>