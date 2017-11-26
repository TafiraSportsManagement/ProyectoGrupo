<?php

// Carga la configuracion de la base de datos
require_once ('config.php');

// class supports AJAX and PHP web form validation
class Consulta {
	// stored database connection
	private $mMysqli;

	// constructor opens database connection
	function __construct() {
		$this->mMysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
	}

	// destructor closes database connection
	function __destruct() {
		$this->mMysqli->close();
	}

/*
// validates all form fields on form submit
	public function ValidatePHP() {
		// error flag, becomes 1 when errors are found
		$errorsExist = 0;
		// clears errors session flag
		if (isset($_SESSION['errors']))
			unset($_SESSION['errors']);

		// by default all fields are considered valid
		$_SESSION['errors']['txtUsername'] = 'hidden';
		$_SESSION['errors']['txtName'] = 'hidden';
		$_SESSION['errors']['selGender'] = 'hidden';
		$_SESSION['errors']['selBthMonth'] = 'hidden';
		$_SESSION['errors']['txtBthDay'] = 'hidden';
		$_SESSION['errors']['txtBthYear'] = 'hidden';
		$_SESSION['errors']['txtEmail'] = 'hidden';
		$_SESSION['errors']['txtPhone'] = 'hidden';
		$_SESSION['errors']['chkReadTerms'] = 'hidden';

		// Validate username
		if (!$this->validateUserName($_POST['txtUsername'])) {
			$_SESSION['errors']['txtUsername'] = 'error';
			$errorsExist = 1;
		}

		if (!$this->validateName($_POST['txtName'])) { // Validate name
			$_SESSION['errors']['txtName'] = 'error';
			$errorsExist = 1;
		}

		if (!$this->validateEmail($_POST['txtEmail'])) { // Validate email
			$_SESSION['errors']['txtEmail'] = 'error';
			$errorsExist = 1;
		}

		if (!$this->validatePhone($_POST['txtPhone'])) { // Validate phone
			$_SESSION['errors']['txtPhone'] = 'error';
			$errorsExist = 1;
		}

		// If no errors, point to a successful validation page
		if ($errorsExist == 0) {
			return 'allok.php';
		} else {
			// If errors, save current user input
			foreach ($_POST as $key => $value) {
				$_SESSION['values'][$key] = $_POST[$key];
			}
			return 'index.php';
		}
	}
*/

	// validate user name
	//must not be empty, and must not be already registered
	private function validateUserName($value) {
		// trim and escape input value
		$value = $this->mMysqli->real_escape_string(trim($value));

		// empty user name is not valid
		if ($value == null) return 0; // not valid
		// check if username exists in database
			$query = $this->mMysqli->query('SELECT user_name FROM users' 'WHERE user_name="'. $value . '"');

		if ($this->mMysqli->affected_rows > 0)
			return '0’;//not valid
		else
			return '1'; // valid
	}


	public function consultaOpcionesFormulario($opcionMenu, $tipo) {

        $_opcionMenu_ = $this->mMysqli->real_escape_string(trim($opcionMenu));
        $_tipo_ = $this->mMysqli->real_escape_string(trim($tipo));

        if ( $_opcionMenu_ == null )
            return 0;
        if ( $_tipo_ == null )
            return 0;

        $query = $this->mMysqli->query('SELECT user_name FROM users' 'WHERE user_name="'. $value . '"');

        return $query;

	}


	private function consultaBD() {


	}

}
?>