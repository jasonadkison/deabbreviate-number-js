var deabbreviate = require('./')
  , assert = require('assert')

describe('number-deabbreviate', function () {

  it('should deabbreviate numbers', function () {

    assert.equal(deabbreviate('12'), 12)
    assert.equal(deabbreviate('0'), 0)
    assert.equal(deabbreviate('1k'), 1000)
    assert.equal(deabbreviate('34.57k'), 34570)
    assert.equal(deabbreviate('918.4k'), 918400)
    assert.equal(deabbreviate('918.4 K'), 918400)
    assert.equal(deabbreviate('2.13m'), 2130000)
    assert.equal(deabbreviate('1,234.56 K'), 1234560)
    assert.equal(deabbreviate('47.48b'), 47480000000)
    assert.equal(deabbreviate('47.48t'), 47480000000000)
  })

  it('should not deabbreviate falsey', function () {
    assert.equal(deabbreviate(false), false)
    assert.equal(deabbreviate(0), 0)
    assert.equal(deabbreviate(null), null)
    assert.equal(deabbreviate(''), '')
  })

  it('should not deabbreviate without scale', function () {
    assert.equal(deabbreviate('whatever'), 'whatever')
    assert.equal(deabbreviate('1,234'), '1,234')
  })

  it('should not deabbreviate unsupported scale', function () {
    assert.equal(deabbreviate('1.5q'), '1.5q')
    assert.equal(deabbreviate('1.5z'), '1.5z')
  })
})
