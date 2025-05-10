/*####################################################################################
##  fs.js                                                                           ##
##  Version: 1.2                                                                    ##
##  Full Screen Button Handler                                        ###### ###### ##
##  Justin Bentley 2022 - 2024                                         ##    ##     ##
##                                                                    ##      ##    ##
##                                                             ##  ####   ######    ##
####################################################################################*/



//callbacks and onload must use Promises to resolve the onload/responce
function open_fullscreen_async() {
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

function close_fullscreen_async() {
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
        await close_fullscreen_async();
    } else {
        await open_fullscreen_async()
    }
}

// if not done this way, pressing ESC in fullscreen and browser bypassing this code for
// closing functions can (and has) caused issues


/**
 * Call to exit FS before switching webpage
 * Can be called if unsure of FS status (silent error)
 */
async function end_fullscreen() {

    if (document.fullscreenElement) {
        await close_fullscreen_async();
    }
}