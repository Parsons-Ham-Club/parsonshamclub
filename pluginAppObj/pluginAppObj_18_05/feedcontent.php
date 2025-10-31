<?php
header('Content-Type: text/html; charset=utf-8');
//if the pathResFolder exists I get it, else I set the default
$resPath = "../../res/";
if(!isset($resPath) || trim($resPath)===''){
    $resPath = "../res/";
}
include $resPath ."x5engine.php";
include "src/Feed.php";

//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);

$public_folder = $imSettings['general']['public_folder'];

if (!ini_get('date.timezone')) {
	date_default_timezone_set('Europe/Rome');
}

if (isset($_GET['action'])) {
    
    switch($_GET['action']) {
        //check type of call action    
        case 'getFeed': 
            $link = $_POST["linkFeedRss"];
            $isFeedWSX5 = $_POST["isFeedWSX5"];
            $cacheExpire = $_POST["cacheExpire"];

            getFeed($link, $isFeedWSX5, $cacheExpire, $public_folder);
            break;
        default: break;
    }
} 

function getFeed($link, $isFeedWSX5, $cacheExpire, $public_folder){

    try {
    
        $doc = new DOMDocument();

         if($isFeedWSX5 == "false"){
            $link = finalUrl($link, $doc);
        }
    
        $rss = Feed::load($link, $public_folder, $cacheExpire);
    
        $output['Result'] = 'OK';
        $output['Message'] = 'Success';

        if ($rss->type == "rss") {
            $output['Feed']['feed_type'] = htmlSpecialChars($rss->type);
            $output['Feed']['feed_title'] = htmlSpecialChars($rss->title);
            $output['Feed']['feed_description'] = htmlSpecialChars($rss->description);
            $output['Feed']['feed_link'] = htmlSpecialChars($rss->link);
            $output['Feed']['feed_last_update'] = date('d/m/Y H:i',strtotime(htmlSpecialChars($rss->lastBuildDate)));
            $output['Feed']['feed_ttl'] = htmlSpecialChars($rss->ttl);
            foreach ($rss->item as $item){

                /*find image of item*/
                $image_url = array();
                if (property_exists($item, 'enclosure' )) {
                    foreach ($item->enclosure as $enclosure){
                        $typeEnclosure =  htmlSpecialChars($enclosure->attributes()->type);
                        if(substr($typeEnclosure, 0, 6) === "image/"){
                            $image_url[] = htmlSpecialChars($enclosure->attributes()->url);
                        }
                    }
                }
                else {
                    $image_url[] = getImage(htmlspecialchars_decode($item->description, ENT_NOQUOTES), $doc);
                }

                $output['Feed']['feed_items'][] = array( 
                    "feed_item_title" => htmlSpecialChars($item->title),
                    "feed_item_link" => htmlSpecialChars($item->link),
                    "feed_item_date" => date('d/m/Y H:i',strtotime(htmlSpecialChars($item->pubDate))),
                    "feed_item_description" => htmlSpecialChars($item->description),
                    "feed_item_source" => htmlSpecialChars($item->source),
                    "feed_item_image" => $image_url
                 );
            }
        }
        else if($rss->type == "atom"){
            $output['Feed']["feed_type"] = htmlSpecialChars($rss->type);
            $output['Feed']["feed_title"] = htmlSpecialChars($rss->title);
            $output['Feed']["feed_description"] = htmlSpecialChars($rss->subtitle);
            $output['Feed']["feed_link"] = htmlSpecialChars($rss->link->attributes()->href);
            $output['Feed']["feed_last_update"] = date('d/m/Y H:i',strtotime(htmlSpecialChars($rss->updated)));

            foreach ($rss->entry as $entry){

                $image_url = getImage(htmlspecialchars_decode($entry->summary, ENT_NOQUOTES), $doc);

                $linkAlternate = "";
                foreach ($entry->link as $l){
                    if(htmlSpecialChars($l->attributes()->rel) == "alternate"){
                        $linkAlternate = htmlSpecialChars($l->attributes()->href);
                        break;
                    }
                }
                if($linkAlternate == ""){
                    $linkAlternate = htmlSpecialChars($entry->link->attributes()->href);
                }
                
                $output['Feed']['feed_items'][] = array( 
                    "feed_item_title" => htmlSpecialChars($entry->title),
                    "feed_item_link" => $linkAlternate,
                    "feed_item_date" => date('d/m/Y H:i',strtotime(htmlSpecialChars($entry->published))),
                    "feed_item_description" => htmlSpecialChars($entry->summary),
                    "feed_item_source" => htmlSpecialChars($entry->source),
                    "feed_item_image" => $image_url
                 );
            }
        }
        else{
            $output['Feed'] = array();
            $output['Result'] = 'KO';
            $output['Message'] = 'Invalid type';
        }

        uasort($output['Feed']['feed_items'], 'cmp');        
    } 
    //catch exception
    catch(Exception $e) {
      $output['Result'] = 'KO';
    }
    echo json_encode($output);
    exit();
}

/**
 * find image inside description element feed
 * @param  desccription element feed
 * @return image if exist
 */
function getImage($desc_dom, $doc){
    
    $image_url = "";
     try {
        if($desc_dom != strip_tags($desc_dom)) {
            // contains HTML
            @$doc->loadHTML('<?xml encoding="UTF-8">' .$desc_dom);
            $tags = $doc->getElementsByTagName('img');
            if($tags->length > 0){
                $image_url = $tags->item(0)->getAttribute('src');
            }
        }
        else{
            $image_url = "";
        }
    }
    catch(Exception $e) {
        $image_url = "";
    }
    return $image_url;
}


/**
 * order array of feed by date of item of Feed.
 * @param  item a
 * @param  item b
 * @return Sort Feed
 */
function cmp($a, $b) {
    if ($a['feed_item_date'] == $b['feed_item_date']) {
      return 0;
    }
    return ($a['feed_item_date'] < $b['feed_item_date']) ? -1 : 1;
}

function finalUrl($url, $doc) {
    
    if (preg_match("#https?://#", $url) === 0) {
        $url = 'http://'.$url;
    }

    $res = feedSearch($url, $doc);
    if($res == true){
        $url = $res[0]; 
    }
    return $url;
}

/**
 * Search feed url in to header from page url.
 * @param  url
 * @return Array of url feed
 */
function feedSearch($url, $doc) {
    
    try{
        $html = file_get_contents($url);
        @$doc->loadHTML($html);
        $xpath = new DOMXpath($doc);
        $feeds = $xpath->query("//head/link[@href][@type='application/rss+xml']/@href");

        $results = array();
        foreach($feeds as $feed) {
            $results[] = $feed->nodeValue;
        }
        return $results;
        
    }
    catch(Exception $e) {
        return false;
    }
    return false;
}

?>