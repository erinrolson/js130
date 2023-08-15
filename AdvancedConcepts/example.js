function xyzzy(msg, foo, bar, qux) {
  return {
    foo: foo,
    bar: bar,
    qux: qux,
    log: function() {
      console.log(msg);
    },
  };
}