# Starter layouts - Digit

This repo contains starter layouts for the Digit UI set. You can use these layout components (app.reel) instead of the default Main component in your MontageJS application. 

## How to use

For example, to use the App 1 (phone) layout:

1. Clone this repo in your desktop.
2. Delete `index.html`.
3. Rename `1.html` to `index.html`.
4. Move the `ui/app1` folder content up one level: `ui/app1/app.reel` -> `ui/app.reel`.
5. Change the `mainModule` path in `index.html` to `"mainModule": "ui/app.reel"`.
6. Delete unused files in folders (e.g., 2.html, ui/app2 etc.).
7. Edit `ui/app.reel` and add new components.

![phone layout](ui/app1/screenshot.png)
