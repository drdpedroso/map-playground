import React, {useEffect} from 'react';
import { Stage, Sprite, PixiComponent } from '@inlet/react-pixi'
import { Loader } from '@pixi/loaders';
import * as PIXI  from 'pixi.js'
import { Tilemap } from './tilemap'

import { CompositeTilemap } from '@pixi/tilemap';

// Loader.shared.add('./tiles.json');

const Leke = PixiComponent('Stage', {
    create() {
        return new PIXI.Container();
    },
    applyProps(instance, oldProps, newProps) {
        var menuBarWidth = 120;
        let tilemap = new Tilemap(64, 50);
        // @ts-ignore
        tilemap.position.x = menuBarWidth;
        // @ts-ignore
        instance.addChild(tilemap);

        // menu = new Menu();
        // @ts-ignore
        // instance.addChild(menu);

        // zoom in on the starting tile
        tilemap.selectTile(tilemap.startLocation.x, tilemap.startLocation.y);
        tilemap.zoomIn();

        // begin drawing
        // @ts-ignore
        // PIXI.requestAnimFrame(animate);
    }

});

function App() {

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
          <Leke />
        {/*<Sprite image="./sprites/tiles.png" x={100} y={100} />*/}
      </Stage>
  );
}

export default App;
