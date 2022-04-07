import React from 'react';
import {PixiComponent, Stage, Sprite} from '@inlet/react-pixi'
import * as PIXI from 'pixi.js'
import {Tilemap} from './tilemap'
import { CanvasRenderer } from '@pixi/canvas-renderer';


        var menuBarWidth = 120;
        let tilemap = new Tilemap(64, 50);
// Loader.shared.add('./tiles.json');
//
// const Leke = PixiComponent('Stage', {
//     create() {
//         return new PIXI.Sta();
//     },
//     applyProps(instance, oldProps, newProps) {
//         var menuBarWidth = 120;
//         let tilemap = new Tilemap(64, 50);
//         console.log(tilemap)
//         // @ts-ignore
//         tilemap.position.x = menuBarWidth;
//         // @ts-ignore
//         instance.addChild(tilemap);
//
//         // menu = new Menu();
//         // @ts-ignore
//         // instance.addChild(menu);
//
//         // zoom in on the starting tile
//         tilemap.selectTile(tilemap.startLocation.x, tilemap.startLocation.y);
//         tilemap.zoomIn();
//
//         // begin drawing
//         // @ts-ignore
//         // PIXI.requestAnimFrame(animate);
//     }
//
// });
console.log(tilemap)

function App() {
    const count = 10
    const width = 300
    const height = 300
    const stageProps = {
        height,
        width,
        options: {
            backgroundAlpha: 0,
            antialias: true,
        },
    }
    // useEffect(() => {
    //     // @ts-ignore
    //     Loader.shared.onLoad(function onTilesetLoaded() {
    //         console.log(123)
    //         const tilemap = new CompositeTilemap();
    //
    //         // Render your first tile at (0, 0)!
    //         // @ts-ignore
    //         tilemap.add('ocean.png', 0, 0);
    //     });
    // },[])

    return (
      <Stage>
          {tilemap?.children?.map((spr, i) => (
              <Sprite
                  {...spr}
              />
          ))}
      </Stage>
  );
}

export default App;
