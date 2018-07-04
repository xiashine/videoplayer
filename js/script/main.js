require.config({
    baseUrl: './',
    map: {
        '*': {
            css: 'js/lib/css.min.js'
        }
    },
    paths:{
        "MPlayer":"js/lib/MPlayer.min"
    },
    shim: {
        "js/script/html5": {deps: ['css!js/lib/MPlayer.min.css']},
        "js/script/mobile": {deps: ['css!js/lib/MPlayer.min.css']}
    }
});
require(['js/script/videoplayer'],function (videoplayer) {
    var options = {
        type:"video",
        vid:377732,
        playad:false,
        flashvars:{
            configUrl:escape('http://static.m1905.com/profile/video/3/7/377732.xml'),
            playAd:true
        },
        url:'http://www.jgsx6.com/xiashine/video/v201807022DL69LWTZV4QZJIE.mp4',
        container:$("#dplayer")
    };
    videoplayer.init(options);
})