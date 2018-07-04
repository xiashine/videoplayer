({
    appDir: "./",
    baseUrl: "./",
    dir: "./build",
    paths: {
     "MPlayer": "js/lib/MPlayer.min",
   },
    modules: [{
        name:'js/script/main'
    },{
        name: 'js/script/flash'
    },{
        name:'js/script/html5'
    },{
        name:'js/script/videoplayer'
    }
    ]
})