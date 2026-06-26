<?php
// PanDao lead handler. Receives name+phone from the contact form.
header('Content-Type: application/json; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['ok'=>false]); exit; }

$name  = trim($_POST['name']  ?? '');
$phone = trim($_POST['phone'] ?? '');
if ($name === '' || $phone === '') {
  http_response_code(422);
  echo json_encode(['ok'=>false,'error'=>'Заполните имя и телефон']); exit;
}

$to   = 'info@pandaologistics.com';
$body = "Новая заявка с сайта PanDao\n\nИмя: $name\nТелефон: $phone\nДата: " . date('Y-m-d H:i');
$head = "From: site@pandaologistics.com\r\nContent-Type: text/plain; charset=utf-8";
@mail($to, '=?UTF-8?B?'.base64_encode('Заявка с сайта PanDao').'?=', $body, $head);

// append to a CSV the admin panel can read (one row per lead)
$row = date('c').';'.str_replace(';', ',', $name).';'.str_replace(';', ',', $phone)."\n";
@file_put_contents(__DIR__.'/leads.csv', $row, FILE_APPEND | LOCK_EX);

echo json_encode(['ok'=>true]);
