<?php
include("../res/x5engine.php");
$nameList = array("z47","jw7","63x","f8x","jyn","cjk","e6g","u2h","kvp","p4l");
$charList = array("N","Z","5","2","V","H","3","E","Z","F");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
