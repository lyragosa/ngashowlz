// ==UserScript==
// @name         NGA LZ Show
// @namespace    https://github.com/lyragosa/ngashowlz
// @version      1.00 Beta
// @description  为NGA论坛帖子提供楼主显示功能（中间楼层如果有楼主发帖，则会标记[楼主]字样，类似Discuz论坛的同类功能）
// @author       Lyragosa
// @license      MIT License
// @require      http://cdn.bootcss.com/jquery/1.10.2/jquery.min.js
// @include      /^https://(bbs\.ngacn\.cc|nga\.178\.com|bbs\.nga\.cn|bbs\.bigccq\.cn)/(read\.php)/
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==


(function() {
    function a(s) {
        return s.replace('window.script_muti_get_var_store=','');
    }
    var t;
    function getLZ() {
         jQuery.get("/read.php?tid="+__CURRENT_TID+"&lite=js", function (e) {
             t = eval('(' + a(e) + ')');
             var lou = t.data.__T.authorid;
             $("table.forumbox").each(function(){
                 var nu = $(this).find("a[name=uid]").html();
                 if (nu == lou) {
                     $(this).find("span.small_colored_text_btn").after('<span>&nbsp;<span class="block_txt white nobr vertmod" style="background-color:#369;" title="这个楼层的帖子是由楼主发布的">楼主</span>&nbsp;</span>');
                 }
             })
         })
    }
    getLZ();
})();
