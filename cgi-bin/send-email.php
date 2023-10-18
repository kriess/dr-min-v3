<?php session_start();

if(isset($_POST['message'])) {
  $youremail = 'contact.us@drcarolinemin.com';

  // form values
  $lastName = $_POST['lastName'];
  $firstName = $_POST['firstName'];
  $message = $_POST['message'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];

  // use wordwrap() if lines are longer than 70 characters
  $msg = wordwrap($msg, $message);

  $headers = "From: " . $email . "\r\n";

  $bdy = "From: " . $firstName . " " . lastName . "\n";
  $bdy .= "Email: " . $email . "\n\n";
  $bdy .= $msg;

  // send email
  mail($youremail, "Contact Us", $bdy, $headers);

  header('Content-Type: application/json; charset=utf-8');
  echo json_encode( $data );
}
else {
  // the message
  $msg = "No headers. First line of text\nSecond line of text";

  // use wordwrap() if lines are longer than 70 characters
  $msg = wordwrap($msg, 70);

  $headers = "From: webmaster@example.com" . "\r\n" .
  "CC: somebodyelse@example.com";

  // send email
  mail("ken_riess@yahoo.com", "My subject", $msg, $headers);

  echo "No headers. </br> Please go to <a href='/contact.php'>Contact Page</a>";
}
?>
