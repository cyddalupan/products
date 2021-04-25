<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$host = "127.0.0.1";
$user = "root";
$pass = "KDZfkse2n5MTc?b";
$name = "products";
$mysqli = new mysqli($host, $user, $pass, $name);
