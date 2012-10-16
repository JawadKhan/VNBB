<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<title>Welcome To Virtual Notice Board</title>
	<script src="js/bootstrap.min.js" ></script>
	<script src="js/jquery.js" ></script>
	<script src="js/jquery-ui.js" ></script>
	<script src="js/script.js" ></script>
	
	<link rel="stylesheet" href="css/bootstrap.min.css" />
</head>
<body>
	<div class="navbar">
    <div class="navbar-inner">
        <div class="container">
            <!-- brand class is from bootstrap.css  -->
            <a class="brand" href="addNotification.php">
			<img src="image/image001.jpg" height="40px" width="40px"/>
			<strong>!... Virtual Notice Board ...!</strong>
			<img src="image/image001.jpg" height="40px" width="40px"/>
			</a>
            <div class="nav-collapse">
                <ul class="nav">
                </ul>
				<div align="right">
                <form class="form-inline">
				  <input type="text" class="input-small" placeholder="Email" name="name_email_text"id="id_email_text">
				  <input type="password" class="input-small" placeholder="Password" name="name_password_text"id="id_password_text">
				  <button type="submit" class="btn" id="id_signin_button">Sign in</button>
				</form>
				</div>
            </div><!-- /.nav-collapse -->
        </div>
    </div><!-- /navbar-inner -->
</div><!-- /navbar -->
</body>


</html>
