<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$host = "";
$user = "";
$pass = "";
$name = "";
$mysqli = new mysqli($host, $user, $pass, $name);
