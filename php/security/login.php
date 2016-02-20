<html>
<head>
    <meta charset="UTF-8">
    <title>Программа поиска книг (файл search_book.php)</title>
</head>
<body>
<?php
$link = mysql_pconnect ("127.0.0.1","root","1234");
if ( !$link ) die ("Невозможно подключение к MySQL");
$db = "sakila";
$userName = $_POST['userName'];
$passwd   = $_POST['passwd'];
$userName = "akayerov";
$passwd   = "1234";

$result['success'] = true; 
$result['msg'] = 'User authenticated!'; 
echo json_encode($result);
exit();

mysql_select_db ( $db ) or die ("Невозможно открыть $db");
$query = "SELECT * FROM user WHERE userName='$userName'";
$result = mysql_query ( $query );
$n = mysql_num_rows ( $result );

for ( $i=0; $i<$n; $i++ )
{
    $row = mysql_fetch_array($result);
    if($row['password'] != $passwd) {
	    $result['success'] = false; 
	    $result['msg'] = "Password incorrect"; 
        echo json_encode($result);
	    exit();
    }
} 
if ( $n == 0 ) {
	$result['success'] = false; 
	$result['msg'] = 'User not found';
}
else {
    $result['success'] = true; 
    $result['msg'] = 'User authenticated!'; 
}    
echo json_encode($result);
//mysql_close ( $link );

?>
</body>
</html>