<?

//$useProfileImage, 

function string_format($str)
{


}
function comment_format()
{


}
function post_format($obj, $useimg = false)
{



if (isset($obj["typ"]) && $obj["typ"]==2)
{


	return array("<img src='apl/fs/?i=".$obj["reference"]."'>", 1);
}
else
{

$img = "";
$img2 = "";
if ($useimg)
{
$img = "<a href='/?p=profile&q=about&userId=".urlencode($obj["userid"])."'>
<img class='profilePic' src='ui/media/phantom.jpg'><div class='subDiv'></a>";
$img2 = "</div>";
}




if (is_array($obj["_id"]))
{
$obj["_id"] = $obj["_id"]['$id'];
$ttime = $obj["posttime"]["sec"];
}
else
{
$ttime = $obj["posttime"]->sec;
}
var_dump($obj);

	return array("<div class='collectionPost'>".$img."
<span class='time'>".supertime($ttime)."</span>
<a href='/?p=profile&q=about&userId=".urlencode($obj["userid"])."'>".$obj["username"]."</a><div class='cont'>".$obj["content"]."</div>
	<div>
     <a onclick='displayCommentBox(this)'>Comment</a>
      - <a onclick='lovePost(this)'>Love</a> - <a onclick='followPost(this)'>Follow</a>
	<div class='commentBox'><textarea></textarea><br>
    <a class='button' data-postid='".$obj["_id"]."'
    data-userid='".$obj["userid"]."' onclick='doCommentReq(this)'>Post comment</a></div>
	</div>".$img2."

    </div>", 2);

}

}

function supertime($ptime) {
    $etime = time() - $ptime;
 
    if ($etime > 0*24 * 60 * 60)
    	return date("d.m.y H:i",  ($ptime));
    if ($etime < 1) {
        return '0 seconds';
    }
    
    $a = array( 12 * 30 * 24 * 60 * 60  =>  'year',
                30 * 24 * 60 * 60       =>  'month',
                24 * 60 * 60            =>  'day',
                60 * 60                 =>  'hour',
                60                      =>  'minute',
                1                       =>  'second'
                );
    
    foreach ($a as $secs => $str) {
        $d = $etime / $secs;
        if ($d >= 1) {
            $r = round($d);
            return $r . ' ' . $str . ($r > 1 ? 's' : '')." ago";
        }
    }
}

?>