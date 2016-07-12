# Big Mouse Particles

A cheese plugin for [Big Mouse](https://github.com/big-mouse/core)

## Do you like Gruyere Cheese ?

This provides beautiful particles visualizations for your data sources. Available axis are common properties as number of particles, size, color, and radius. Other possible properties coming soon are speed, brightness or distortion.

```bash
npm install big-mouse-particles
```

## Example

Take a look at this working [demo](https://big-mouse.github.io/examples) or check the example [source code](https://github.com/big-mouse/examples/blob/gh-pages/examples/home/index.js) below.

```js
// using npm (CommonJS)
import BigMouse form 'big-mouse';
import BigMouseParticles from 'big-mouse-particles';
```

Then use like this:

```js
BigMouse.configure({

    // Declare plugins to use
    "plugins": {"particles": BigMouseParticles()}, 
    // What elements you want to pick up, defaults to all
    "selector": "a",
    // Run every time an element is found and calls the plugin to render
    "draw": (element, done) => {
    
        switch(element.href){
        
            case "...": done("particles", {size: 10, number: 50}); break;
            default: done();
        }
    }
});
```

##  Author

Made with ♡ by Zuri Pabón 

Unlicensed.