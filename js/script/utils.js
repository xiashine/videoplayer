define(function () {
    var settings = {},
        agent = navigator.userAgent.toLowerCase();
    var a = agent.toLowerCase();
        settings.browser = {},
        settings.os = {},
        settings.phone = {},
        settings.mobile = !1,
        a.indexOf("mobile") > -1 && (settings.mobile = !0);
    var b, c, d = {
        android_1: /android[\s\/]([\d\.]+)/i,
        android_2: /android/i,
        android_3: /MIDP-/i,
        ipod_1: /iPod\stouch;\sCPU\siPhone\sos\s([\d_]+)/i,
        ipod_100: /iPod.*os\s?([\d_\.]+)/i,
        iphone: /iPhone;\sCPU\siPhone\sos\s([\d_]+)/i,
        iphone_100: /iPhone.*os\s?([\d_\.]+)/i,
        ipad_1: /ipad;\scpu\sos\s([\d_]+)/i,
        ipad_2: /ipad([\d]+)?/i,
        windows: /windows\snt\s([\d\.]+)/i,
        mac: /Macintosh.*mac\sos\sx\s([\d_\.]+)/i,
        linux: /Linux/i
    };
    for (var e in d) if (b = d[e].exec(a)) {
        c = e.replace(/_\d+/, ""),
            settings.os[c] = !0,
            settings.os.name = c,
        b[1] && (settings.os.version = b[1].replace(/_/g, "."));
        break
    } (settings.os.iphone || settings.os.ipad || settings.os.ipod) && (settings.os.ios = !0);
    var f, g, h = {
        wechat: /MicroMessenger\/([\d\.]+)/i,
        ipadqq: /IPadQQ\/([\d\.]+)/i,
        mqq: /qq\/([\d\.]+)/i,
        qzone: /QZONEJSSDK\/([\d\.]+)/i,
        mqqbrowser: /mqqbrowser\/([\d\.]+)/i,
        qqbrowser: /[^m]QQBrowser\/([\d\.]+)/i,
        x5: /tbs\/(\d+)/i,
        uc: /UCBrowser\/([\d\.]+)/i,
        safari_1: /Version\/(([\d\.]+))\sSafari\/[\d\.]+/i,
        safari_2: /Safari\/([\d\.]+)/i,
        firefox: /Firefox\/([\d\.]+)/i,
        opera: /OPR\/([\d\.]+)/i,
        ie_1: /MSIE\s([\d\.]+)/i,
        ie_2: /(trident\/\d\.\d)/i,
        ie_3: /(Edge)\/\d+\.\d+/i,
        weibo: /weibo__([\d\.]+)/i,
        qqnews: /qqnews\/([\d\.]+)/i,
        qqlive_1: /QQLiveBrowser\/([\d\.]+)/i,
        qqlive_2: /QQLiveHDBrowser\/([\d\.]+)/i,
        kuaibao: /qnreading\/([\d\.]+)/i,
        liebao: /LieBaoFast\/([\d\.]+)/i,
        douban: /com\.douban\.frodo\/([\d\.]+)/i,
        miuibrowser: /MiuiBrowser/i,
        baidu: /baiduboxapp/i,
        browser360: /360browser/i,
        oppobrowser: /OppoBrowser/i,
        chrome_1: /CriOS\/([\d\.]+)/i,
        chrome_2: /Chrome\/([\d\.]+)/i,
        qqdownloader: /qqdownloader\/([\d\.]+)/i
    };
    for (var i in h) if (f = h[i].exec(a)) {
        if (g = i.replace(/_\d+/, ""), settings.browser[g]) break;
        settings.browser[g] = {
            version: f[1]
        }
    }
    settings.os.android && settings.browser.safari && delete settings.browser.safari,
    settings.browser.chrome && settings.browser.safari && delete settings.browser.safari,
    settings.browser.ie && settings.browser.ie.version && settings.browser.ie.version.indexOf("trident") > -1 && (settings.browser.ie.version.indexOf("6.0") > -1 ? settings.browser.ie.version = "10": settings.browser.ie.version.indexOf("5.0") > -1 ? settings.browser.ie.version = "9": settings.browser.ie.version.indexOf("4.0") > -1 ? settings.browser.ie.version = "8": settings.browser.ie.version = "11");
    var j, k = {
        ipod: /iPod/i,
        ipad: /iPad/i,
        iphone: /iPhone/i,
        huawei_1: /HUAWEI([\w_-]+)/i,
        huawei_2: /(CHM-\w+)/i,
        huawei_3: /(HonorChe)/i,
        huawei_4: /HONORPLK/i,
        huawei_5: /(Che\d+-CL\d+)/i,
        huawei_6: /(H\d+-L\d+)/i,
        huawei_100: /HUAWEI/i,
        xiaomi_1: /(HM\sNOTE)/i,
        xiaomi_2: /(HM\s\w+)/i,
        xiaomi_3: /(MI\s\w+)/i,
        xiaomi_4: /(MI-ONE\sPlus)/i,
        xiaomi_5: /(M1)\sBuild/i,
        xiaomi_6: /(HM\d+)/i,
        xiaomi_7: /Xiaomi[\s_]?([\w_]+)/i,
        samsung_1: /(GT-\w+)/i,
        samsung_2: /(SCH-\w+)/i,
        samsung_3: /(SM-\w+)/i,
        vivo: /vivo\s(\w+)/i,
        oneplus: /ONEPLUS-([a-z0-9]+)/i,
        lenovo_1: /Lenovo[\s-]?([\w-]+)/i,
        lenovo_100: /Lenovo/i,
        zte_1: /ZTE\s?(\w+)?/i,
        zte_2: /ZTE/i,
        coolpad_1: /Coolpad\s(\w+)/i,
        coolpad_100: /Coolpad/i,
        oppo_1: /OPPO\s?(\w+)/i,
        oppo_2: /(R7Plus|R8007|R801|R831S|R8205)/i,
        oppo_100: /OPPO/i,
        meizu_1: /(MX\d+)/i,
        meizu_2: /(m\d+\snote)\sBuild/i,
        htc_1: /HTC\s?(\w+)/i,
        htc_100: /HTC/i,
        tcl: /TCL\s(\w+)/i,
        lephone: /lephone\s(\w+)/i,
        lg: /LG[\s-]?(\w+)/i,
        galaxy: /(galaxy\d+)/,
        hisense_1: /Hisense/i,
        hisense_2: /HS-(\w+)/i,
        philips: /Philips\s?(\w+)?/i,
        "金立": /(GN\w+)\sBuild/i,
        sonny: /sonny/i,
        "天语": /K-Touch/i
    };
    for (var l in k) if (j = k[l].exec(a)) {
        settings.phone.name = l.replace(/_\d+/, ""),
        j[1] && (settings.phone.version = j[1].replace(/^[_-]/gi, ""));
        break
    }
    function compareVersion(a, b) {
        a = String(a).split("."),
            b = String(b).split(".");
        try {
            for (var c = 0,
                     d = Math.max(a.length, b.length); c < d; c++) {
                var e = isFinite(a[c]) && Number(a[c]) || 0,
                    f = isFinite(b[c]) && Number(b[c]) || 0;
                if (e < f) return - 1;
                if (e > f) return 1
            }
        } catch(g) {
            return - 1
        }
        return 0
    };
    function isSupportMP4() {
        var a = document.createElement("video");
        return "function" == typeof a.canPlayType && ("probably" == a.canPlayType('video/mp4; codecs="avc1.42E01E"') || "probably" == a.canPlayType('video/mp4; codecs="avc1.58A01E"') || "probably" == a.canPlayType('video/mp4; codecs="avc1.4D401E"') || "probably" == a.canPlayType('video/mp4; codecs="avc1.64001E"'))
    };
    function inArray(a, b) {
        var c = -1;
        if ("object" == typeof a && a.constructor === Array && a.length) for (var d = 0, e = a.length; d < e; d++) if (a[d] === b) {
            c = d;
            break
        }
        return c
    };
    function isSupportH5() {
        var p = settings;
        return !! (p.browser.firefox && compareVersion(p.browser.firefox.version, "48.0") >= 0 ) || !(p.browser.opera && compareVersion(p.browser.opera.version, "40.0") < 0) && (p.browser.chrome && compareVersion(p.browser.chrome.version, "40.0") >= 0)
    };
    return{
        os:settings.os,
        mobile:settings.mobile,
        ref:function(type){
        var ref = settings.os.ios ? 4 : settings.os.android ? 3 : 1,
            itype = /vod/i.test(type) ? 1 : /video/i.test(type) ? 2 : /vipexp/i.test(type) ? 6 : /vip/i.test(type)? 5: /live/i.test(type) ? 7:0;
        return ref+','+itype;
        },
        device:function () {
            var p = settings;
            return p.os.mac ? p.browser.safari && (compareVersion(p.browser.safari.version, "9.0") < 0 || compareVersion(p.os.version, "10.10") < 0) ? "flash": p.browser.firefox && compareVersion(p.browser.firefox.version, "48.0") < 0 ? "flash": isSupportMP4() ? "html5hd": "flash": p.os.windows ? isSupportH5() && isSupportMP4() ? "html5hd": "flash": p.os.linux ? "flash": p.os.ios ? p.os.ipad ? "ipadh5": "h5": p.os.android ? isSupportMP4() ? "h5": "mp4link": "flash";
        },
        getuuid:function(len, radix)
        {
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''), uuid = [], i;
            radix = radix || chars.length;

            if (len) {
                // Compact form
                for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
            } else {
                // rfc4122, version 4 form
                var r;

                // rfc4122 requires these characters
                uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                uuid[14] = '4';

                // Fill in random data.  At i==19 set the high bits of clock sequence as
                // per rfc4122, sec. 4.1.5
                for (i = 0; i < 36; i++) {
                    if (!uuid[i]) {
                        r = 0 | Math.random()*16;
                        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                    }
                }
            }

            return uuid.join('');
        }

    }
})