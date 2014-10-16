# texcoord

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Get a `[u1, v1, u2, v2]` texture coordinate region from the given bounds. Best suited for rendering with top left texture coordinates.

```js
//sprite bounds
var position = [0, 0]
var size = [64, 64]

//atlas dimensions
var atlasSize = [1024, 1024]

var t = texcoord(position, size, atlasSize)
// [ 0, 0, 0.0625, 0.0625 ] 

var def = texcoord()
// [0, 0, 1, 1]
```

## Usage

[![NPM](https://nodei.co/npm/texcoord.png)](https://nodei.co/npm/texcoord/)

#### `texcoord([position, shape, texShape, out])`

Returns a `[u1, v1, u2, v2]` array with texture coordinates (typically 0.0 to 1.0) based on the given regions. All arguments are optional.

- `positions` the [x,y] position for our sprite
- `shape` the [width,height] sprite size
- `texShape` the [width,height] for our atlas (defaults to sprite size)
- `out` if specified, the result will be stored in this array rather than creating a new one

If no arguments are specified, the return will be `[0, 0, 1, 1]` (i.e. "use full atlas").

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/texcoord/blob/master/LICENSE.md) for details.
