<?php session_start();

$youremail = 'contact.us@drcarolinemin.com';

// form values
$subject = 'test' // $_POST['lastName'];
$fname = 'ken' //$_POST['firstName'];
$message = 'ksjdha kjdha ksdjhas kdjhas' // $_POST['message'];
$mail = 'ken_riess@yahoo.com' // $_POST['email'];
$phone = '3109687085' // $_POST['phone'];

$headers  = "From: $mail \n";
$headers .= 'X-Mailer: PHP/' . phpversion();
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=iso-8859-1\n";
$message = $_POST['message'];
$to = $youremail;
$subject = ''.$fromsubject. ' emailed from dr carolinemin';
$body = '
 Client: ' . $fname . '
 Phone Number: '.$phone.'
 E-mail: '.$mail.'

 Message:
 '.$message.'
 ';

header('Content-Type: application/json; charset=utf-8');
echo json_encode( $data );
mail($to, $subject, $body, $headers);
?>
