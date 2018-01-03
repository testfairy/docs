<?php
	function glob_recursive($pattern, $flags = 0){
		$files = glob($pattern, $flags);

		foreach (glob(dirname($pattern).'/*', GLOB_ONLYDIR|GLOB_NOSORT) as $dir){
			$subtree = glob_recursive($dir.'/'.basename($pattern), $flags);
			$files = array_merge($files, $subtree);
		}

		return $files;
	}

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

	# main
	$requestedRoute = $_SERVER['REQUEST_URI'];

	# find all files in docs
	$files = glob_recursive(__DIR__ . "/*.html");

	# see if we have an strtolower match
	foreach($files as $file) {
		$file = substr($file, strlen(__DIR__));
		if (strtolower($file) == strtolower($requestedRoute)) {
			# found a match!
			header("Location: $file");
			exit;
		}
	}

	$url = trim(file_get_contents("/etc/testfairy/docs-404-slack-url"));
	sendSlackMessage($url, "docs-watchdog", "404 - not found: $requestedRoute");
?>

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
