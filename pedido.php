<?php
// /api/pedido.php?id=2579

$id = $_GET['id'] ?? '2579';
if ($id === '') { http_response_code(400); echo "Falta id"; exit; }

$url = "https://crm.invitafy.com/Pedido/recuperar?id=" . urlencode($id);

$ch = curl_init($url);
curl_setopt_array($ch, [
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_TIMEOUT => 20,
  CURLOPT_HTTPHEADER => [
    "Accept: application/json"
  ],
]);

$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

http_response_code($httpcode);
header("Content-Type: application/json; charset=utf-8");
echo $response;