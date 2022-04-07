import {Tilemap} from './tilemap';
// define a few globals here
const PIXI = require('pixi.js');
var stage = null;
var renderer = null;
var renderWidth = 800;
var renderHeight = 600;

var tilemap = null;
var menu = null;
var menuBarWidth = 120;

export function Main(tilesPath, w, h){
  console.log(tilesPath)
  // For zoomed-in pixel art, we want crisp pixels instead of fuzziness
  // Create the stage. This will be used to add sprites (or sprite containers) to the screen.
  stage = new PIXI.Container();
  // Create the renderer and add it to the page.
  // (autoDetectRenderer will choose hardware accelerated if possible)
  if(w != 0 && h != 0){
    renderWidth = w;
    renderHeight = h;
  }
  renderer = PIXI.autoDetectRenderer(renderWidth, renderHeight);
  //document.body.appendChild(renderer.view);

  // Set up the asset loader for sprite images with the .json data and a callback
  var tileAtlas = [ "./tiles.json"];

  var loader = new PIXI.Loader()
  loader.add(tileAtlas);
  loader.load((loader, resources) => {
    tilemap = new Tilemap(64, 50);
    tilemap.position.x = menuBarWidth;
    stage.addChild(tilemap);
    debugger
    // zoom in on the starting tile
    tilemap.selectTile(tilemap.startLocation.x, tilemap.startLocation.y);
    tilemap.zoomIn();

    // begin drawing
    requestAnimationFrame(animate);

  });

  return renderer.view;
}

// called when sprites are finished loading

function animate() {
  requestAnimationFrame(animate);
  renderer.render(stage);
}
