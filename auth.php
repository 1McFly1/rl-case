Привет
<?php
require 'steamauth/steamauth.php';
loginbutton();
if(isset($_SESSION['steamid'])){
    require 'steamauth/userInfo.php';
    echo $steamprofile['personaname'];
    echo "<a href='steamauth/logout.php'>Выйти</a>";
}?>
