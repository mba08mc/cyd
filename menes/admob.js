//_admob.fetchAd(document.getElementById('admob'));

if (typeof cy$aframe != "undefined")
    ++cy$aframe;
else {
    cy$aframe = 1;

    this.addEventListener("load", function() {
        for (var aframe = 0; aframe != cy$aframe; ++aframe)
            cy$fixad('aframe' + aframe);
    });
}

cy$fixad = function (id) {
    var ifrm = document.getElementById(id);
    var iwin = ifrm.contentWindow;

    var ifix = function() {
        var idoc = iwin.document;
        if (idoc.styleSheets.length == 0)
            return false;

        var isty = idoc.createElement('style');
        isty.type = 'text/css';
        idoc.getElementsByTagName('head')[0].appendChild(isty);

        var icss = isty.sheet;
        var rule = icss.cssRules.length;

        var isad = function() {
            var front = idoc.getElementsByClassName("front");
            if (front.length == 0) {
                setTimeout(isad, 100);
                return;
            }

            //alert(idoc.getElementsByTagName("div")[0].innerHTML);

            var gradient = idoc.getElementsByClassName("gradient");

            if (gradient.length > 0) {
                gradient[0].style.cssText = '';
            }

            var cavs = idoc.getElementsByClassName("cav");

            if (cavs.length > 0) {
                var style = cavs[0].style;
                style.left = '265px';
                style.top = '5px';
            }

            var labels = idoc.getElementsByClassName("label");

            if (labels.length > 0)  {
                var style = labels[0].style;
                style.left = '45px'; style.top = '5px';
                style.width = '212px';
            }

            if (labels.length > 1) {
                var style = labels[1].style;
                style.left = '192px'; style.top = '23px';
            }

            var style = front[0].style;

            var view = idoc.getElementById("view-0");
            if (view != null && view.tagName == 'html:img')
                style.height = '45px';

            style.visibility = 'visible';
        };

        isad();

        ifrm.height = 40;

        icss.insertRule('body { margin: 0 9px; }', rule++);

        icss.insertRule('.adText { line-height: 15px; }', rule++);
        icss.insertRule('.branding { left: 204px; top: 22px; }', rule++);
        icss.insertRule('.tile { padding: 4px; }', rule++);

        icss.insertRule('.front, .gradient { \
            -webkit-border-radius: 9px; \
            padding: 0px; \
            height: 38px; \
            width: 300px; \
        }', rule++);

        icss.insertRule('.front { \
            border: 1px solid #999999; \
            /*visibility: hidden;*/ \
        }', rule++);

        icss.insertRule('img#view-0 { \
            -webkit-border-radius: 7px; \
            max-height: 45px; \
            max-width: 300px; \
            margin: 1px 0 0 1px; \
        }', rule++);

        icss.insertRule('.beveled:not(.cav) { \
            background-position: center center; \
            background-repeat: no-repeat; \
            -webkit-border-bottom-left-radius: 7px; \
            -webkit-border-bottom-right-radius: 0; \
            -webkit-border-top-left-radius: 7px; \
            -webkit-border-top-right-radius: 0; \
            border: 1px solid #999999; \
            border-right: none; \
            height: 38px; \
            line-height: 38px; \
            margin: -5px; \
            width: 39px; \
        }', rule++);

        return true;
    };

    if (!ifix())
        iwin.addEventListener("load", ifix);
};


