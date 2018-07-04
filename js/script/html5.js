define(['js/lib/hls.min','MPlayer'],function (hls, MPlayer) {
    var options = {
        vid:0,
        playerId:0,
        container:0,
        autoplay:true,
        playad:true
    };
    function play() {
        Hls = hls;
        var dp = new MPlayer({
            container: options.container[0],
            autoplay:options.autoplay,
            playad:options.playad,
            video: {
                url: options.url,
                type: 'auto'
            }
        });
    };
    function  notice(msg){
        options.container.append('<div class="player-notice"><p>'+ msg+'</p></div>');
    };
    return{
        init:function (opts) {
            options = $.extend(true, options, opts);
            play();
        }
    }
})