<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = ($_POST["name"]);
$phone = ($_POST["fone"]);
$email = ($_POST["email"]);
$text = ($_POST["text_order"]);
	



// $email = $_POST['user_email'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp-mail.outlook.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'anarhi9bolt@outlook.com';
$mail->Password = 'ccn748463'; // Ваш пароль от почты с которой будут отправляться письма
// $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 25; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('anarhi9bolt@outlook.com'); // от кого будет уходить письмо?
$mail->addAddress('ccn748463@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка из формы контактов';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone . ' ,его почта: ' .$email . ' задал вопрос: ' .$text;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} 


?>