<?php
$admin_email = 'rolisovskiy@mail.ru';
$site_name   = 'dolina.ru';
$site_email  = 'robot@dolina.ru';


$action  = isset($_POST['action'])?$_POST['action']:'';
$phone   = isset($_POST['phone'])?$_POST['phone']:'';
$name    = isset($_POST['name'])?$_POST['name']:'';
$email   = isset($_POST['email'])?$_POST['email']:'';
$form_message = isset($_POST['message'])?$_POST['message']:'';

$send = false;
$message = '';

switch($action) {
    case 'a1':
        if ($phone!='') {
            $title = 'Получить консультацию';
            $message = "<h2>".$title."</h2>";
            $message .= "<p>Телефон: {$phone}</p>";
            $send = true;
        }
        break;
    case 'a2':
        if ($phone!='' && $name!='' && $email!='') {
            $title = 'Получить консультацию (форма в футере)';
            $message = "<h2>".$title."</h2>";
            $message .= "<p>Имя: {$name}</p>";
            $message .= "<p>Email: {$email}</p>";
            $message .= "<p>Телефон: {$phone}</p>";
            $message .= "<p>Сообщение: {$form_message}</p>";
            $send = true;
        }
        break;
}

if ($send) {
    $header   = "From: \"{$site_name}\" <{$site_email}>\n";
    $header  .= "Content-type: text/html; charset=\"utf-8\"";
    mail($admin_email, $title, $message, $header);
    echo '1';
} else {
    echo '0';
}

?>