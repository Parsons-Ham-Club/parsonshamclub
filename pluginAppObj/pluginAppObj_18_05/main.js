function init_pluginAppObj_18_05() {
    
    var divcontainer = "";
    var isOnline = "";
    var max_width = "";
    var page_current = 0;
    var container_carousel = [];
    var index_carousel = [];
    var def_image = '';
    var itemlength;
    var siteUrl = '';
    var typeFeed = '';

    x5engine.boot.push(function(){ 
            
    siteUrl = "http://parsonshamclub.com/";
    divcontainer =  $("#rssfeedready_pluginAppObj_18_05");
    isOnline = true;    
    max_width = 400; 
    
    def_image = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="def_image" viewBox="0 0 402.04 402"><defs></defs><path class="a" d="M54.82,292.36q-22.84,0-38.83,16T0,347.18Q0,370,16,386t38.84,16q22.83,0,38.82-16t16-38.82q0-22.85-16-38.83T54.82,292.36Z"/><path class="a" d="M181,221a252.28,252.28,0,0,0-73.95-51.81,256.09,256.09,0,0,0-87.36-23H18.27A16.6,16.6,0,0,0,6,151a16.8,16.8,0,0,0-6,13.41V203a17.54,17.54,0,0,0,4.71,12.28A17.32,17.32,0,0,0,16.56,221q65.37,6.28,111.77,52.68T181,385.43a17.34,17.34,0,0,0,5.71,11.85A17.51,17.51,0,0,0,199,402h38.55A16.8,16.8,0,0,0,251,396a17.33,17.33,0,0,0,4.87-13.71,256.15,256.15,0,0,0-23-87.36A252.5,252.5,0,0,0,181,221Z"/><path class="a" d="M367.73,239.68A400.39,400.39,0,0,0,283.79,118.2,400.27,400.27,0,0,0,162.31,34.26,396.21,396.21,0,0,0,19.13,0h-.86A17.07,17.07,0,0,0,5.71,5.14,16.85,16.85,0,0,0,0,18.27V59.1A17.49,17.49,0,0,0,5,71.52a17.11,17.11,0,0,0,12.13,5.57,323.52,323.52,0,0,1,116.63,29.13Q189,131.63,229.69,172.3t66.09,95.94a319.27,319.27,0,0,1,28.84,116.62A17.06,17.06,0,0,0,330.18,397a17.84,17.84,0,0,0,12.71,5h40.82a16.9,16.9,0,0,0,13.14-5.71A16.54,16.54,0,0,0,402,382.87,396.26,396.26,0,0,0,367.73,239.68Z"/></svg>'; 
    
    boot_pluginAppObj_18_05();
});

/*
    Boot objects
*/
function boot_pluginAppObj_18_05() {
    var lang = "en";
    lang = (lang === 'br') ? 'pt' : lang; 
    moment.locale(lang);
    render_content();
}

function render_content(){
        
    var container = $("<div class='container_feed_content'></div>");
    if(true){
        
        divcontainer.append(x5engine.settings.imLoadingAnimation);
        
        var linkFeedRss = "";
        typeFeed = "rss_custom";
        var isFeedWSX5 = true;
        if(typeFeed == "rss_site"){
            linkFeedRss = location.href.substring(0, location.href.lastIndexOf("/")+1) + x5engine.settings.currentPath + "x5feed.php";
        }
        else if(typeFeed == "rss_blog"){
            linkFeedRss = location.href.substring(0, location.href.lastIndexOf("/")+1) + x5engine.settings.currentPath + "blog/x5feed.php";
        }
        else{
            linkFeedRss = "https://www.spaceweatherwoman.com/feed/podcast/".replaceAll("&amp;", "&");
            isFeedWSX5 = false;
        }

        $.ajax({
                url: x5engine.settings.currentPath + 'pluginAppObj/pluginAppObj_18_05/feedcontent.php?action=getFeed',
                type: 'POST',
                data: { 
                    'linkFeedRss': linkFeedRss,
                    'cacheExpire': '1440 min',
                    'isFeedWSX5': isFeedWSX5
                    
                },
                dataType: "json"
            })
            .fail(function () {
                $("#rssfeedready_pluginAppObj_18_05 .imLoadAnim").remove();
                showError("Cannot open this link.");
            })
            .done(function (data) {
                $("#rssfeedready_pluginAppObj_18_05 .imLoadAnim").remove();

                if (data.Result != "OK") {
                    showError(data.Message);
                } else {
                    
                    itemlength = data.Feed.feed_items.length;
                    if(itemlength == undefined){
                        /*is a wsx5 feed*/
                        itemlength = Object.keys(data.Feed.feed_items).length;
                    }
                    itemlength = itemlength < 5 ? itemlength : 5;
                     
                    render_feed_information(data.Feed);
                    render_style_list(container,data.Feed);
                    divcontainer.append(container);  
                    final_operation_style_list(data.Feed);
                    
                    if(itemlength == 0){
                        showError("There is no news to display");
                    }
                }
            });
    }
    else{
        itemlength = feedPreview.feed_items.length < 5 ? feedPreview.feed_items.length : 5;
        
        render_feed_information(feedPreview);
        render_style_list(container,feedPreview);
        divcontainer.append(container);  
        final_operation_style_list(feedPreview);
    }   
}

function render_feed_information(Feed){
    
    var hasHeader = false;
    var feed_title = "";
    var feed_description = "";
    if ($("#rssfeedready_pluginAppObj_18_05").hasClass('feed_title_true')) {
        feed_title = $("<div class='feed_information_attribute feed_title'><a href=\""+ Feed.feed_link +"\" title=\""+ Feed.feed_title +"\" target='_blank'>"+ Feed.feed_title +"</a></div>");
        hasHeader = true;
    }
    if ($("#rssfeedready_pluginAppObj_18_05").hasClass('feed_description_true')) {
        hasHeader = true;
        if ($("#rssfeedready_pluginAppObj_18_05").hasClass('feed_title_true')) {
            feed_description = $("<div class='feed_information_attribute feed_description'>"+ Feed.feed_description +"</div>");
        }
        else{
            feed_description = $("<div class='feed_information_attribute feed_description'><a href=\""+ Feed.feed_link +"\" title=\""+ Feed.feed_description +"\" target='_blank'>"+ Feed.feed_description +"</a></div>");
        }
    }
    if(hasHeader){
        var container_information = $("<div class='container_feed_information'></div>");
        container_information.append(feed_title).append(feed_description);
        divcontainer.append(container_information);  
    }
}

/*list*/
function render_style_list(container,Feed){
    
    var index_image = 0;
    for (i = 0; i < itemlength; i++) {
        
        var item = Feed.feed_items[i];
        var desc = getDescription(item.feed_item_description);
        var date = getDate(item.feed_item_date);

        /*container item*/
        var feed_item_container = $("<div class='feed_item_container_list feed_item_container_list_"+i+"'></div>");
        /*container content item*/
        var feed_item_content = $("<div class='feed_item_content_list'></div>");
        var feed_item_title = $("<div class='feed_item_info feed_item_title'><a href=\""+ item.feed_item_link +"\" title=\""+ item.feed_item_title +"\" target='_blank'>"+ item.feed_item_title + "</a></div>");

        var feed_item_description = $("<div class='feed_item_info feed_item_description' title=\""+ desc +"\">"+ desc +"</div>");
        var feed_item_date = $("<div class='feed_item_info feed_item_date'>"+ date +"</div>");
        
        var feed_item_image = [];
        if(true){
            if(!isOnline){   
                feed_item_image.push($('<div class="feed_item_image" style=" background-size: contain; background-image: url('+ item.feed_item_image +') "></div>'));
            }
            else if(item.feed_item_image == "" && isOnline){
                feed_item_image.push($('<div class="feed_item_image">'+ def_image +'</div>'));  
            }
            else{
                for (k = 0; k < item.feed_item_image.length; k++) {
                    feed_item_image.push($('<div class="feed_item_image carousel mySlides_'+ index_image +'" style="background-size: cover; background-image: url('+ item.feed_item_image[k] +')"></div>'));   
                }
                
                container_carousel.push(feed_item_container);
                window["index_" +index_image] = 0;
                index_carousel.push(window["index_" + index_image]);
                index_image++;
            }
        }

        feed_item_content.append(feed_item_title);
        feed_item_content.append(feed_item_description);
        feed_item_content.append(feed_item_date);
        
        feed_item_container.append(feed_item_content);
        
        if(feed_item_image.length > 0){
            var feed_item_container_image = $("<div class='feed_item_container_image_list'></div>");
            for (z = 0; z < feed_item_image.length; z++) {
                feed_item_container_image.append(feed_item_image[z]);
            }
            
            feed_item_container.append(feed_item_container_image);
        }

        container.append(feed_item_container);
    }
}

function final_operation_style_list(){  
    var heightRow = $("#rssfeedready_pluginAppObj_18_05 .feed_item_container_list").css('height');
    $("#rssfeedready_pluginAppObj_18_05 .feed_item_container_image_list").css('min-width', heightRow).css('max-width', heightRow);
    carousel();
}

/*box*/
function render_style_box(container,Feed){
    
    var index_image = 0;
    for (i = 0; i < itemlength; i++) {
        var item = Feed.feed_items[i];
        var date = getDate(item.feed_item_date);
        var feed_item_container = "";
        /*container item*/
        if(i==0){
            feed_item_container = $("<div class='feed_item_container_box item_"+i+"'></div>");
        }
        else{
            feed_item_container = $("<div class='feed_item_container_box item_"+i+"' style='display:none;'></div>");
        }
        /*container content item*/
        var feed_item_content = $("<div class='feed_item_content_box'></div>");
           
        var feed_item_image = [];
        if(true){
            
            if(!isOnline){   
                feed_item_image.push($('<div class="feed_item_image" style="background-image: url('+ item.feed_item_image +');"></div>'));
            }
            else if(item.feed_item_image == "" && isOnline){
                feed_item_image.push($('<div class="feed_item_image">'+ def_image +'</div>'));
            }
            else{
                for (k = 0; k < item.feed_item_image.length; k++) {
                    feed_item_image.push($('<div class="feed_item_image carousel mySlides_' + index_image + '" style="background-image: url('+ item.feed_item_image[k] +');"></div>'));   
                }   
                container_carousel.push(feed_item_container);
                window["index_"+i] = 0;
                index_carousel.push(window["index_" + index_image]);
                index_image++;
            }
        }
    
        var feed_item_title = $("<div class='feed_item_info feed_item_title'><a href=\""+ item.feed_item_link +"\" title=\""+ item.feed_item_title +"\" target='_blank'>"+ item.feed_item_title + "</a></div>");
        var desc = getDescription(item.feed_item_description);
        var feed_item_description = $("<div class='feed_item_info feed_item_description' title=\""+ desc +"\">"+ desc +"</div>");
        var feed_item_date = $("<div class='feed_item_info feed_item_date'>"+ date +"</div>");
        var feed_item_only_content = $("<div class='feed_item_only_content'></div>");

        feed_item_only_content.append(feed_item_title);
        feed_item_only_content.append(feed_item_date);
        feed_item_only_content.append(feed_item_description);
        
        /*arrow*/
        var div_pagination = $("<div class='div_pagination'></div>");
        var div_prev = $("<div class='div_pagination_prev'><svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" class=\"yt-icon\"><g class=\"yt-icon\"><path d=\"M8 5v14l11-7z\" class=\"yt-icon\"></path></g></svg></div>");
        var div_fwd = $("<div class='div_pagination_fwd'><svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" class=\"yt-icon\"><g class=\"yt-icon\"><path d=\"M8 5v14l11-7z\" class=\"yt-icon\"></path></g></svg></div>");
        div_pagination.append(div_prev).append(div_fwd);
        
        if(feed_item_image.length > 0){
            var feed_item_container_image = $("<div class='feed_item_container_image_box'></div>");
            for (z = 0; z < feed_item_image.length; z++) {
                feed_item_container_image.append(feed_item_image[z]);
            }
            feed_item_container.append(feed_item_container_image);
        }
        
        feed_item_content.append(feed_item_only_content);
        feed_item_content.append(div_pagination);
        feed_item_container.append(feed_item_content);
        container.append(feed_item_container);
    }
}

function pagination(Feed){

    var total_page = itemlength < 5 ? itemlength : 5;
    
    if(total_page == 1){
        $("#rssfeedready_pluginAppObj_18_05 .div_pagination").css("visibility", "hidden");
    }
    else{
        $('#rssfeedready_pluginAppObj_18_05 .container_feed_content .feed_item_container_box .feed_item_content_box .div_pagination_fwd svg').click(function (e) {
            e.preventDefault();

            if (page_current < total_page - 1){
                page_current++;
            }
            
            pagination_enable(page_current, total_page);
            
            $('#rssfeedready_pluginAppObj_18_05 .container_feed_content .feed_item_container_box').css("display", "none");
            $('#rssfeedready_pluginAppObj_18_05 .container_feed_content .feed_item_container_box.item_' + page_current + '').css("display", "block");
        });

        $('#rssfeedready_pluginAppObj_18_05 .container_feed_content .feed_item_container_box .feed_item_content_box .div_pagination_prev svg').click(function (e) {
            e.preventDefault();

            if (page_current > 0){
                page_current--;
            }
                
            pagination_enable(page_current, total_page);
            
            $('#rssfeedready_pluginAppObj_18_05 .container_feed_content .feed_item_container_box').css("display", "none");
            $('#rssfeedready_pluginAppObj_18_05 .container_feed_content .feed_item_container_box.item_' + page_current + '').css("display", "block");
        });
        
        pagination_enable(page_current, total_page);
    }
}

function pagination_enable(page_current, total_page){
    
    if(page_current == 0){
        $('#rssfeedready_pluginAppObj_18_05 .container_feed_content .feed_item_container_box .feed_item_content_box .div_pagination_prev svg').addClass("disabled");
    }
    else{
        $('#rssfeedready_pluginAppObj_18_05 .container_feed_content .feed_item_container_box .feed_item_content_box .div_pagination_prev svg').removeClass("disabled");
    }
    if(page_current == total_page -1){
        $('#rssfeedready_pluginAppObj_18_05 .container_feed_content .feed_item_container_box .feed_item_content_box .div_pagination_fwd svg').addClass("disabled");
    }
    else{
        $('#rssfeedready_pluginAppObj_18_05 .container_feed_content .feed_item_container_box .feed_item_content_box .div_pagination_fwd svg').removeClass("disabled");
    }
}


function final_operation_style_box(Feed){
    pagination(Feed);
    carousel();
}

function getDate(feed_item_date){
    return moment(feed_item_date, "DD/MM/YYYY hh:mm").fromNow();
}

function getDescription(feed_item_description){
    //prevent
    feed_item_description = feed_item_description.replace(/<\/div>/g, " ").replace(/<\/p>/g, " ").replace(/<br>/g, " ").replace(/<br\/>/g, " ").replace(/<br \/>/g, " ");
    
    return removeTags($('<div />').html(feed_item_description).text().replace(/<\/div>/g, " ").replace(/<\/p>/g, " ").replace(/<br>/g, " ").replace(/<br\/>/g, " ").replace(/<br \/>/g, " ").trim());
}

function removeTags(txt){
    var rex = /(<([^>]+)>)/ig;
    return txt.replace(rex , "");
}

function carousel() {
    
    for (s = 0; s < container_carousel.length; s++) {  
        var i;
        var x = $("#rssfeedready_pluginAppObj_18_05 .mySlides_"+ s +"");
        if(x.length > 1){
            for (i = 0; i < x.length; i++) {
                x[i].style.opacity = 0;  
            }
            index_carousel[s]++;
            if (index_carousel[s] > x.length) {
                index_carousel[s] = 1;
            }    

            x[index_carousel[s]-1].style.opacity = 1; 
        }
    }
    setTimeout(carousel, 3000); // Change image every 2 seconds
}

function showError(message){
    $(divcontainer).empty();
    $(divcontainer).append("<p class=\"p_error\">"+message+"</p>");
}

var feedPreview = {
    "feed_type": "rss",
    "feed_title": "WebSite X5",
    "feed_description": "Shape! Design your fantastic website.",
    "feed_link": "http://www.websitex5.com",
    "feed_last_update": "15/11/2017 07:00",
    "feed_ttl": "",
    "feed_items": [{
            "feed_item_title": "Lorem Ipsum",
            "feed_item_link": "http://www.websitex5.com",
            "feed_item_date": "15/11/2017 07:00",
            "feed_item_description": "Lorem ipsum dolor sit amet, consectetur elitamet.",
            "feed_item_image": "pluginAppObj/pluginAppObj_18_05/img/example_1.jpg"
        },
        {
            "feed_item_title": "Lorem Ipsum",
            "feed_item_link": "http://www.websitex5.com",
            "feed_item_date": "13/11/2017 16:30",
            "feed_item_description": "Lorem ipsum dolor sit amet, consectetur elitamet.",
            "feed_item_image": "pluginAppObj/pluginAppObj_18_05/img/example_2.jpg"
        },
        {
            "feed_item_title": "Lorem Ipsum",
            "feed_item_link": "http://www.websitex5.com",
            "feed_item_date": "11/11/2017 13:30",
            "feed_item_description": "Lorem ipsum dolor sit amet, consectetur elitamet.",
            "feed_item_image": "pluginAppObj/pluginAppObj_18_05/img/example_3.jpg"
        },
        {
            "feed_item_title": "Lorem Ipsum",
            "feed_item_link": "http://www.websitex5.com",
            "feed_item_date": "20/10/2017 12:00",
            "feed_item_description": "Lorem ipsum dolor sit amet, consectetur elitamet.",
            "feed_item_image": "pluginAppObj/pluginAppObj_18_05/img/example_1.jpg"
        },
        {
            "feed_item_title": "Lorem Ipsum",
            "feed_item_link": "http://www.websitex5.com",
            "feed_item_date": "10/10/2017 10:30",
            "feed_item_description": "Lorem ipsum dolor sit amet, consectetur elitamet.",
            "feed_item_image": "pluginAppObj/pluginAppObj_18_05/img/example_2.jpg"
        },
        {
            "feed_item_title": "Lorem Ipsum",
            "feed_item_link": "http://www.websitex5.com",
            "feed_item_date": "10/10/2016 10:30",
            "feed_item_description": "Lorem ipsum dolor sit amet, consectetur elitamet.",
            "feed_item_image": "pluginAppObj/pluginAppObj_18_05/img/example_3.jpg"
        }
    ]
};

}