<?php
$referrer = $_SERVER['HTTP_REFERER'];
$domain = "drcarolinemin.com";
$ua = $_SERVER['HTTP_USER_AGENT'];

function httpPost($data)
{
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $post = [
        'secret' => '6LepurAoAAAAAOMLoueYY0w0cmeqR5yuxKSo4Kc3',
        'response' => $data->token
    ];
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $post);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curl);
    curl_close($curl);
    return json_decode( $response );
}

if ( strpos( $referrer, $domain ) !== false ) {
    $error = '';
    $sendToEmail = 'info@drcarolinemin.com';
    // $sendToEmail = 'ken_riess@yahoo.com';
    // $sendToEmail = 'carolineminmd@gmail.com';

    $data = json_decode(file_get_contents("php://input"));
    if ($data->random !== '987654321') {
        $data->error = 'Random failed';
    }
    $data->postRes = httpPost($data);
    $data->sendToEmail  = $sendToEmail;
    $data->referrer     = $referrer;
    $data->ua   = $ua;
    $firstName  = htmlspecialchars(stripslashes(trim( $data->firstName )));
    $lastName   = htmlspecialchars(stripslashes(trim( $data->lastName )));
    $email      = htmlspecialchars(stripslashes(trim( $data->email )));
    $message    = htmlspecialchars(stripslashes(trim( $data->message )));
    $phone      = htmlspecialchars(stripslashes(trim( $data->phone )));

    // validation
    if(!preg_match("/^[A-Za-z .'-]+$/", $firstName)){
      $error = 'Invalid name';
    }
    if(!preg_match("/^[A-Za-z .'-]+$/", $lastName)){
      $error = 'Invalid name';
    }
//     if(!preg_match("/^[A-Za-z .'-]+$/", $phone)){
//       $error = 'Invalid phone';
//     }
    if(!preg_match("/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/", $email)){
      $error = 'Invalid email';
    }
    if(strlen($message) === 0 || strlen($message) > 500) {
      $error = 'Invalid message';
    }

    // validation
    if (strlen($error) > 0) {
        $data->error = $error;
    } else {
        // use wordwrap() if lines are longer than 70 characters
        $msg = wordwrap($msg, $message);
        $headers = "From: " . $email . "\r\n";
        $bdy = "From: " . $firstName . " " . $lastName . "\n";
        $bdy .= "Email: " . $email . "\n";
        $bdy .= "Phone: " . $phone . "\n\n";
        $bdy .= "Message: " . $message . "\n\n";

        // send email
        mail($sendToEmail, "Message from drcarolinemin.com", $bdy, $headers);
    }

    header('Content-Type: application/json; charset=utf-8');
    echo json_encode( $data );
} else {
    header('Content-Type: application/json; charset=utf-8');
    echo "{}";
}
?>
