<?php session_start();
  // $youremail = 'contact.us@drcarolinemin.com';
  // $youremail = 'ken_riess@yahoo.com';
  $youremail = 'carolineminmd@gmail.com';

  $data = json_decode(file_get_contents("php://input"));
  $firstName = $data->firstName;
  $lastName =  $data->lastName;
  $email =   $data->email;
  $message =   $data->message;
  $phone = $data->phone;

  // use wordwrap() if lines are longer than 70 characters
  $msg = wordwrap($msg, $message);

  $headers = "From: " . $email . "\r\n";

  $bdy = "From: " . $firstName . " " . $lastName . "\n";
  $bdy .= "Email: " . $email . "\n";
  $bdy .= "Phone: " . $phone . "\n\n";
  $bdy .= "Message: " . $message . "\n\n";

  // send email
  mail($youremail, "Contact Us", $bdy, $headers);

  header('Content-Type: application/json; charset=utf-8');
  echo json_encode( $data );
?>
