<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$file = __DIR__ . '/results.json';
$data = json_decode(file_get_contents('php://input'), true);

$results = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
$results[] = $data;

file_put_contents($file, json_encode($results, JSON_PRETTY_PRINT));
echo json_encode(['status' => 'saved']);
?>