<?
include_once($_SERVER['DOCUMENT_ROOT']."/ui/framework/framework.php");
include_once($_SERVER['DOCUMENT_ROOT']."/apl/db.php");
include_once($_SERVER['DOCUMENT_ROOT']."/apl/profile/comments.php");
needSession();


echo "UID".$_POST["uid"];
echo "PID".$_POST["pid"];
//($postowner, $postid, $userId, $content)
addComment($_POST["uid"], $_POST["pid"],$_SESSION["charme_user"],  $_POST["txt"] );

?>