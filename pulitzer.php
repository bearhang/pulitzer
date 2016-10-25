<?php
include 'config.php';

$db = new mysqli($db_host, $db_username, $db_password, $db_name);
if (mysqli_connect_errno()) {
    echo 'Connect database fail.';
    exit;
}
$year = $_GET['year'];
if (!is_numeric($year)) {
	echo 'year must be number.';
	exit;
}
$results = array();
$infos = array();
$type_count = array();

$query = "select * from info where year = $year";

if ($result = $db->query($query)) {
    while ($row = $result->fetch_array(MYSQL_ASSOC)) {
        $infos[] = $row;
        
        if ($type_count[$row['type']]) {
            $type_count[$row['type']]++;
        } else {
            $type_count[$row['type']] = 1;
        }
        
    }
}

$results['infos'] = $infos;
$results['type_count'] = $type_count;

echo json_encode($results);
