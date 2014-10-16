var texcoord = require('./')
var test = require('tape').test

test('uv texture coordinates from a region', function(t) {
    t.deepEqual( texcoord([0, 0], [64, 64]), [0, 0, 1, 1], 'defaults to full atlas' )
    t.deepEqual( texcoord([0, 0], [64, 64], [128, 128]), [0, 0, 0.5, 0.5] )
    t.deepEqual( texcoord([32, 32], [64, 64], [128, 128]), [0.25, 0.25, 0.75, 0.75] )
    t.deepEqual( texcoord([32, 32], [64, 64], [128, 128]), [0.25, 0.25, 0.75, 0.75] )
    t.deepEqual( texcoord(), [0, 0, 1, 1], 'default texcoord' )

    var position = [0, 0]
    var size = [64, 64]
    var atlasSize = [1024, 1024]
    t.deepEqual( texcoord(position, size, atlasSize), [ 0, 0, 0.0625, 0.0625 ] )

    var out = [0, 0, 0, 0]
    var ret = texcoord([32, 32], [64, 64], [128, 128], out)
    t.deepEqual(out, [0.25, 0.25, 0.75, 0.75], 'works with out param' )
    t.equal(out, ret, 'stores in out param' )

    t.end()
})