<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method not allowed');
}

$name    = isset($_POST['fullname']) ? trim(strip_tags($_POST['fullname'])) : '';
$email   = isset($_POST['email'])    ? trim(strip_tags($_POST['email']))    : '';
$phone   = isset($_POST['phone'])    ? trim(strip_tags($_POST['phone']))    : '';
$subject = isset($_POST['subject'])  ? trim(strip_tags($_POST['subject']))  : 'Portfolio enquiry';
$message = isset($_POST['message'])  ? trim(strip_tags($_POST['message']))  : '';

if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit('Please fill in your name and a valid email address.');
}

$to      = 'ahmed.nadd@outlook.com';
$headers = "From: $name <$email>\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";
$body    = "Name: $name\n"
         . ($phone   ? "Phone: $phone\n"     : '')
         . "Email: $email\n\n"
         . $message;

if (mail($to, $subject, $body, $headers)) {
    echo 'Message sent successfully.';
} else {
    http_response_code(500);
    echo 'Failed to send message. Please try again.';
}
?>
