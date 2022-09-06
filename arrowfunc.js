const scopeDebugging = {
  whatThis : function() {
    console.log(this);
  },
  arrowThis : () => {
    console.log(this);
  }
}
console.log(scopeDebugging.whatThis());
console.log(scopeDebugging.arrowThis());
    