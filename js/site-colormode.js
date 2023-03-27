var actualColorMode = 0;

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkColorMode() {
    let colorMode = getCookie("colorMode");
    if (colorMode != null && colorMode != "") {
        actualColorMode = colorMode;
    } else {
        actualColorMode = 0;
        setCookie("colorMode", 0, 365);
    }
}

function setColorMode(value) {
    try {
        actualColorMode = value;

        var $input = $('#audioLevel');
        $input.val(value);

        setCookie("colorMode", value, 365);

        if (actualColorMode == 1) {
            $(".colormode").css('background', '#202124');
            $(".bg1").css('filter', 'brightness(85%)');
            $(".bg2").css('filter', 'brightness(85%)');
            $(".bg3").css('filter', 'brightness(85%)');
            $(".mini-icon").css('filter', 'invert(50%)');
            $(".invert-filter-colormode").css('filter', 'invert(80%)');
            $(".copyright").css('filter', 'invert(80%)');
        } else {
            $(".colormode").css('background', '#fff');
            $(".bg1").css('filter', 'none');
            $(".bg2").css('filter', 'none');
            $(".bg3").css('filter', 'none');
            $(".invert-filter-colormode").css('filter', 'none');
            $(".mini-icon").css('filter', 'none');
            $(".copyright").css('filter', 'none');
        }
    } catch (ex) {
        console.log('Failed to set color mode, Exception: ' + ex);
    }
}

async function switchSetColorMode() {
    try {
        setColorMode((actualColorMode == 1) ? 0 : 1);
    } catch (ex) {
        console.log('Failed to set color mode (switch method), Exception: ' + ex);
    }
}

checkColorMode();
setColorMode(actualColorMode);
