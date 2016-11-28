<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html>
<head>
	<title>404 Not Found</title>
</head>
<body>
<h1>Not Found</h1>
<p>The requested URL /404 was not found on this server.</p>
</body>
</html>

<?php
	function sendSlackMessage($url, $username, $text)
	{
		$args = array(
			"username" => $username,
			"text" => $text,
			"color" => "danger",
		);

		$post_data = "payload=" . json_encode($args);
		$context = stream_context_create(array(
			'http' => array(
				'protocol_version' => 1.1,
				'method' => 'POST',
				'header' => "Content-type: application/x-www-form-urlencoded\r\n" .
					"Content-length: " . strlen($post_data) . "\r\n" .
					"Connection: close\r\n",
				'content' => $post_data
			),
		));

		@file_get_contents($url, false, $context);
	}

	$requestedRoute = $_SERVER['REQUEST_URI'];
	$url = trim(file_get_contents("/etc/testfairy/docs-404-slack-url"));
	sendSlackMessage($url, "tishma", "404 - not found: $requestedRoute");
