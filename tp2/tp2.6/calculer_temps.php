<?php
session_start();
if (isset($_SESSION['server_time'])) {
    $current_time = time();
    $server_time = $_SESSION['server_time'];
    $difference = $current_time - $server_time;

    $formatted_time = date('H:i:s ', $server_time);

    $response = array(
        "heure" => $formatted_time,
        "chrono" => $difference
    );

    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    echo json_encode(array("heure" => "N/A", "chrono" => 0));
}