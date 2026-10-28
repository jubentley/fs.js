/*####################################################################################
##  fs.js                                                                           ##
##  Version: 1.3                                                                    ##
##  Full Screen Operations                                            ###### ###### ##
##                                                                     ##    ##     ##
##  Justin Bentley 2022-2026                                          ##      ##    ##
##                                                             ##  ####   ######    ##
####################################################################################*/

/*

~ Due to Security from Browsers this must be be "user triggered" via a <btn> etc
  It cannot be called on-load
~ From what i can tell, ios wont accept any requestfullscreen, unless its video, or an app  
~ Overrides Edge's border radius on fullscreen

 */

//callbacks and onload must use Promises to resolve the onload/responce
/**
 * internal fs.js function
 */
async function _open_fullscreen_async() {
    function open_fullscreen() {
        return new Promise((resolve, reject) => {
            let elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen().then(resolve).catch(reject);
            } else if (elem.webkitRequestFullscreen) { /* Safari */
                elem.webkitRequestFullscreen().then(resolve).catch(reject);
            } else if (elem.msRequestFullscreen) { /* IE11 */
                elem.msRequestFullscreen().then(resolve).catch(reject);
            } else {
                alert(`[fullscreen]\n\nios says no`);
                //reject(new Error("Fullscreen request not supported"));
            }
        });
    }
    await open_fullscreen();
    /* Override Edge FS Border Radius */
    document.fullscreenElement?.style.setProperty("border-radius", "0", "important");
}

/**
 * internal fs.js function
 */
function _close_fullscreen_async() {
    return new Promise((resolve, reject) => {
        if (document.exitFullscreen) {
            document.exitFullscreen().then(resolve).catch(reject);
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen().then(resolve).catch(reject);
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen().then(resolve).catch(reject);
        } else {
            //reject(new Error("Exit fullscreen not supported"));
        }
    });
}

async function fullscreen_toggle() {

    if (document.fullscreenElement) {
        await _close_fullscreen_async();
    } else {
        await _open_fullscreen_async();
    }
}

// if not done this way, pressing ESC in fullscreen and browser bypassing this code for
// closing functions can (and has) caused issues

/**
 * Call to start FS
 * If already FS, silent error
 */
async function fullscreen_start() {

    if (!document.fullscreenElement) {
        await _open_fullscreen_async();
    }
}

/**
 * Call to exit FS before switching webpage
 * Can be called if unsure of FS status (silent error)
 */
async function fullscreen_end() {

    if (document.fullscreenElement) {
        await _close_fullscreen_async();
    }
}
