define(['js/lib/swfobject','js/lib/md5'],function (swfobject, md5) {
    var options = {
        vid: "",
        type: 'video',
        width:"100%",
        height:"100%",
        player_url:'//static.1905.com/v1/playerv1/1905Player.swf',
        autoplay: true,
        hasads: true,
        flashvars:{},
        params:{
            allowScriptAccess: "always",
            allowNetworking: "all",
            allowFullScreen: "true"
        }
    };
    function play() {
        var i = "1905_videoplayer";

        var attributes = {
            id: "__M1905FlashPlayer__",
            name:"__M1905FlashPlayer__"
        };
        var version = swfobject.swfobject.getFlashPlayerVersion();
        if (document.getElementById && version["major"] > 10) {
            options.container.append('<div id="1905_videoplayer"></div>');
            swfobject.swfobject.embedSWF(options.player_url,i,options.width, options.height, "10.0.0", true, options.flashvars, options.params, attributes);
        }else{
            options.container.append('<div class="no-flash"><p><span class="flash-tip">您还没有安装flash播放器,请点击</span><a href="//www.adobe.com/go/getflash?spm=a2h0j.8191423.movie_player.5~5~5~8~A" target="_blank" data-spm-anchor-id="a2h0j.8191423.movie_player.5~5~5~8~A">这里</a><span>安装,完成后请刷新页面重试</span></p></div>');
        }
    }
    return{
        init:function (opts) {
            options = $.extend(true, options, opts);
            play();
        }
    }
})