<?php
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		if (isset($_POST['pageurl'])) {$pageurl = $_POST['pageurl'];}
		if (isset($_POST['contactsName'])) {$Name = $_POST['contactsName'];}
		if (isset($_POST['contactsLastName'])) {$LastName = $_POST['contactsLastName'];}
		if (isset($_POST['contactsEmail'])) {$Email = $_POST['contactsEmail'];}
		if (isset($_POST['contactsMessage'])) {$Message = $_POST['contactsMessage'];}
		if (isset($_POST['formData'])) {$formData = $_POST['formData'];}
		if(!$pageurl) {$pageurl = "Контакты";}
		$to = "sequtel@yandex.ru, sequtel@gmail.com"; 
		$sendfrom   = "info@sequtel.ru";
		$headers  = "From: " . strip_tags($sendfrom) . "\r\n";
		$headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
		$subject = "Сообщение с сайта sequtel.ru";
		$message = "Здравствуйте!
		<br>Поступило сообщение с сайта <b>sequtel.ru</b>
		<br><b>Страница с которой отправлена заявка:</b> $pageurl
		<br><b>Имя:</b> $Name
		<br><b>Фамилия:</b> $LastName
		<br><b>Email:</b> $Email
		<br><b>Сообщение:</b> $Message";
		$send = mail ($to, $subject, $message, $headers);
		if ($send == 'true')
		{
			echo '<center>
			
			Спасибо за заявку! Мы свяжемся с вами в ближайшее время!
			
			</center>';
		}
		else
		{
			echo '<center>
			
			<b>Ошибка. Сообщение не отправлено!</b>
			
			</center>';
		}
		} else {
		http_response_code(403);
		echo "Попробуйте еще раз";
	}?>	