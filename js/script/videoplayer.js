define(['js/script/utils'],function (utils) {
    var options = {};
    function flash(opts) {
        require(['js/script/flash'], function(flash) {
            flash.init(opts);
        })
    };
    function html5(opts) {
        require(['js/script/html5'], function(html5) {
            console.log(opts);
            html5.init(opts);
        })
    };
    return{
        init:function (opts) {
            options = $.extend(true, options, opts);
            var device = utils.device();
            options.ref = utils.ref(options.type);
            options.playerId = utils.getuuid(15,10);
            options.os = utils.os;
            if(device != 'flash')
            {
                html5(options);
            }
            else
            {
                flash(options);

            }

        }
    }
})