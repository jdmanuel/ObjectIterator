Object.defineProperty( Object.prototype, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function() {
    var i = 0,
    keys = Object.keys(this)
    return {
      next: function() {
        return {
          value: this[keys[i++]],
          done: (i > keys.length)
        }
      }.bind(this)
    }
  }
})
