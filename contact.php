<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'matthewsannerdev@gmail.com';
  $subject = 'New message from your website form';
  $messageBody = "
    Name: $name
    Email: $email
    Message: $message
  ";

  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";

  if (mail($to, $subject, $messageBody, $headers)) {
    $response = array('success' => true, 'message' => 'Email sent successfully!');
  } else {
    $response = array('success' => false, 'message' => 'An error occurred while sending the email.');
  }

  echo json_encode($response);
}
?>