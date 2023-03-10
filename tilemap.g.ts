// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000280003020202020202020202020202020205010909090909090909090909090909080109090909090909090909090909090801090909090909090909090909090908010909090909090909090909090909080109090909090909090909090909090801090909090909090909090909090908010909090909090909090909090909080109090909090909090909090909090801090909090909090909090909090908010909090909090909090909090909080109090909090909090909090909090801090909090909090909090909090908010909090909090909090909090909080109090909090909090909090909090801090909090909090909090909090908010909090909090909090909090909080109090909090909090909090909090801090909090909090909090909090908010909090909090909090909090909080109090909090909090909090909090801090909090909090909090909090908010909090909090909090909090909080109090909090909090909090909090801090909090909090909090909090908010909090909090909090909090909080109090909090909090909090909090801090909090909090909090909090908010909090909090909090909090909080109090909090909090909090909090801090909090909090909090909090908010909090909090909090909090909080109090909090909090909090909090801090909090909090909090909090908010909090909090909090909090909080109090909090909090909090909090801090909090909090909090909090908010909090909090909090909090909080109090909090909090909090909090806070707070707070707070707070704`, img`
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
`, [myTiles.transparency16,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
