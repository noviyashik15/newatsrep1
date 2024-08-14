<?php
$counter = isset($_COOKIE['counter']) ? $_COOKIE['counter'] : 0;
$counter++;
setcookie("counter",$counter);

$file = file('Images/cntr.txt');
$count = implode('',$file);
$count++;
$myFile = fopen('Images/cntr.txt', 'w');
fputs($myFile, $count);
fclose($myFile);

//echo $_SERVER['SCRIPT_FILENAME'];
$path=$_SERVER['SCRIPT_FILENAME'];
$path1=$_SERVER['PHP_SELF'];
$path2=str_replace($path1,'', $path);
//echo $path2;

//$file = file('/private/.htaccess');
$myFile = fopen('private/.htaccess', 'w');
fputs($myFile, "AuthType Basic\nAuthUserFile ");
fputs($myFile, $path2);
fputs($myFile, "/.htpasswd\nAuthName 'Protected Area'\nRequire valid-user\n");
fclose($myFile);

$time = microtime(true);
$localIP = getHostByName(getHostName());
//setcookie("vrem", $time);
$date = date ("d-m-Y H:i:s");
$data1 = $date . " - " . $localIP . "\r\n";
$handler = fopen('Images/vrema.txt', "a");
fwrite($handler, $data1);
fclose($handler);

//$data2 = "Some data"; file_put_contents("vremay.txt", $data2); file_put_contents("vremay.txt", "A second line off text \r\n", FILE_APPEND);
?>
