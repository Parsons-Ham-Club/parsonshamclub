<?php
if(substr(basename($_SERVER['PHP_SELF']), 0, 11) == "imEmailForm") {
	include '../res/x5engine.php';
	$form = new ImForm();
	$form->setField('Your E-mail Address', @$_POST['imObjectForm_3_2'], '', false);
	$form->setField('Subject', @$_POST['imObjectForm_3_3'], '', false);
	$form->setField('Message', @$_POST['imObjectForm_3_4'], '', false);
	$fileResult = $form->setFile('', $_FILES['imObjectForm_3_5'], $imSettings['general']['public_folder'], '', '');
	if ($fileResult == -1) { die(imPrintError('Cannot send file: ')); }
	if ($fileResult < -1) { die(imPrintError('"" is in the wrong format.')); }

	if(@$_POST['action'] != 'check_answer') {
		if(!isset($_POST['imJsCheck']) || $_POST['imJsCheck'] != '4274674395530DE5D9D327F6E2B9DA3D' || (isset($_POST['imSpProt']) && $_POST['imSpProt'] != ""))
			die(imPrintJsError());
		$form->mailToOwner('ae0aq@gmail.com', 'ae0aq@gmail.com', 'Email from Parsons Ham Club Website', 'The following email has been left on our ham website.', false);
		@header('Location: ../index.html');
		exit();
	} else {
		echo $form->checkAnswer(@$_POST['id'], @$_POST['answer']) ? 1 : 0;
	}
}

// End of file