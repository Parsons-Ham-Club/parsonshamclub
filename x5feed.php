<?php include('res/x5engine.php'); header('Content-Type: text/xml'); echo '<?xml version="1.0" encoding="utf-8"?>'; ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<atom:link href="http://localhost/x5feed.php" rel="self" type="application/rss+xml" />
		<title><![CDATA[Summits on the Air]]></title>
		<link>http://localhost/</link>
		<description><![CDATA[Sota updated RSS feeds]]></description>
		<language>EN</language>
		<lastBuildDate><?php echo getLastAvailableDate(array(1542427080)); ?></lastBuildDate>
		<generator>Incomedia WebSite X5 Evo</generator>
<?php if (time() > 1542427080): ?>
		<item>
			<title><![CDATA[SOTA]]></title>
			<link>http://localhost/index.html</link>
			<description><![CDATA[<div id="imRSSArticle_ay0j4e1g"><div><span class="fs11 cf1 ff1">http://old.sota.org.uk/RssFeed</span></div></div>]]></description>
			<pubDate>Sat, 17 Nov 2018 03:58:00 GMT</pubDate>
			<category>imrssfeed</category>
			<guid isPermaLink="false">http://localhost/rss/ay0j4e1g</guid>
		</item>
<?php endif; ?>
	</channel>
</rss>