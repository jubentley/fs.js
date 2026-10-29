# fs.js
JavaScript Full Screen Operation Script

## Attributes
* Overrides Edge border radius on fullscreen
* Self-contained and infinitely recallable
* Will not work on iphone, have tried, not sure anything will, works on most everywhere else
  
## Public Functions

### fullscreen_toggle()

```JavaScript
async function fullscreen_toggle() {

    if (document.fullscreenElement) {
        await _close_fullscreen_async();
    } else {
        await _open_fullscreen_async();
    }
}
```

### fullscreen_start()

Will start full-screen mode if not in full-screen, else it will do nothing, can be called safely.

```JavaScript
async function fullscreen_start() {

    if (!document.fullscreenElement) {
        await _open_fullscreen_async();
    }
}
```

### fullscreen_end()

Will end full-screen mode if in full-screen, else it will do nothing, can be called safely.

```JavaScript
async function fullscreen_end() {

    if (document.fullscreenElement) {
        await _close_fullscreen_async();
    }
}
```
