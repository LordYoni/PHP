<?php
session_start();

if (isset($_SESSION['server_time'])) {
    $current_time = time();
    $server_time = $_SESSION['server_time'];
    $difference = $current_time - $server_time;
    echo $difference;
} else {
    echo 0;
}