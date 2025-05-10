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
