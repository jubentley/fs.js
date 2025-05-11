# fs.js
JavaScript Full Screen Operation Script

## Public Functions

### fullscreen_toggle()

```JavaScript
async function fullscreen_toggle() {

    if (document.fullscreenElement) {
        await close_fullscreen_async();
    } else {
        await open_fullscreen_async()
    }
}
```

### end_fullscreen()

Will end full-screen mode if in full-screen, else it will do nothing, can be called safely.

```JavaScript
async function end_fullscreen() {

    if (document.fullscreenElement) {
        await close_fullscreen_async();
    }
}
```
