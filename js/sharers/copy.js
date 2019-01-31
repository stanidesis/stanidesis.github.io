!(function(e, c) {
  "object" == typeof exports && "undefined" != typeof module
    ? c(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], c)
    : c((e.HighlightShareViaCopy = e.HighlightShareViaCopy || {}));
})(this, function(e) {
  "use strict";
  function c(e, c, n) {
    return (
      '<a title="Copy" data-quote="' +
      c +
      '" href="' +
      n +
      '" target="_blank" rel="noopener nofollow noreferrer">\n              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">\n                <path d="M8.1,15.1c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5h8.2c0.3,0,0.5-0.2,0.5-0.5\n                  c0-0.3-0.2-0.5-0.5-0.5h0H8.1C8.2,15.1,8.2,15.1,8.1,15.1L8.1,15.1z M8.1,11.7c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5h8.2\n                  c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c0,0,0,0,0,0H8.1C8.2,11.7,8.2,11.7,8.1,11.7L8.1,11.7z M8.1,8.3\n                  c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5h8.2c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c0,0,0,0,0,0H8.1\n                  C8.2,8.3,8.2,8.3,8.1,8.3L8.1,8.3z M6,5.4h12.5c0.3,0,0.5,0.2,0.5,0.5v12.7c0,0.3-0.2,0.5-0.5,0.5H6c-0.3,0-0.5-0.2-0.5-0.5V5.9\n                  C5.5,5.6,5.7,5.4,6,5.4L6,5.4z M1.7,1h12.5c0.3,0,0.5,0.2,0.5,0.5v2.9H6c-0.8,0-1.4,0.7-1.4,1.5v8.8H1.7c-0.3,0-0.5-0.2-0.5-0.5\n                  V1.5C1.2,1.2,1.4,1,1.7,1L1.7,1z M1.7,0C0.9,0,0.2,0.7,0.2,1.5v12.7c0,0.8,0.7,1.5,1.4,1.5h2.9v2.9C4.6,19.3,5.2,20,6,20h12.5\n                  c0.8,0,1.4-0.7,1.4-1.5V5.9c0-0.8-0.7-1.5-1.4-1.5h-2.9V1.5C15.7,0.7,15,0,14.2,0H1.7z" fill="currentcolor" />\n                <path d="M8.1,15.1c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5h8.2c0.3,0,0.5-0.2,0.5-0.5\n                  c0-0.3-0.2-0.5-0.5-0.5h0H8.1C8.2,15.1,8.2,15.1,8.1,15.1z M8.1,11.7c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5h8.2\n                  c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c0,0,0,0,0,0H8.1C8.2,11.7,8.2,11.7,8.1,11.7z M8.1,8.3c-0.3,0-0.5,0.2-0.5,0.5\n                  c0,0.3,0.2,0.5,0.5,0.5h8.2c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c0,0,0,0,0,0H8.1C8.2,8.3,8.2,8.3,8.1,8.3z M6,5.4h12.5\n                  c0.3,0,0.5,0.2,0.5,0.5v12.7c0,0.3-0.2,0.5-0.5,0.5H6c-0.3,0-0.5-0.2-0.5-0.5V5.9C5.5,5.6,5.7,5.4,6,5.4z M1.7,1h12.5\n                  c0.3,0,0.5,0.2,0.5,0.5v2.9H6c-0.8,0-1.4,0.7-1.4,1.5v8.8H1.7c-0.3,0-0.5-0.2-0.5-0.5V1.5C1.2,1.2,1.4,1,1.7,1z M1.7,0\n                  C0.9,0,0.2,0.7,0.2,1.5v12.7c0,0.8,0.7,1.5,1.4,1.5h2.9v2.9C4.6,19.3,5.2,20,6,20h12.5c0.8,0,1.4-0.7,1.4-1.5V5.9\n                  c0-0.8-0.7-1.5-1.4-1.5h-2.9V1.5C15.7,0.7,15,0,14.2,0H1.7z" fill="currentcolor" />\n          </svg></a>'
    );
  }
  function n(e, c) {
    e.preventDefault();
    var n = c.firstChild,
      t = n.href,
      o = n.getAttribute("data-quote"),
      r = document.createElement("input");
    document.body.appendChild(r),
      (r.value = '"' + o.replace(/^\s+|\s+$/g, "") + '" ' + t),
      r.select();
    var l = void 0;
    try {
      l = document.execCommand("copy");
    } catch (e) {
      l = !1;
    } finally {
      (n.innerHTML =
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><polyline class="check" fill="none" stroke="currentcolor" stroke-width="10" stroke-miterlimit="20" points="15,60 40,80 85,20" /></svg>'),
        document.body.removeChild(r);
    }
    return l;
  }
  (e.render = c),
    (e.action = n),
    (e.name = "copy"),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
