// ==UserScript==
// @name         simple-extension
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  i did required it from web.archive.org.
// @author       You
// @match        http://3rb.be
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// ==/UserScript==

(function() {
    'use strict';
    window.stop();
    GM_xmlhttpRequest({
        method: 'GET',
        url: 'https://web.archive.org/web/20190723030452/http://hice.cf/multibox/',
        onload: function(e) {
            document.open();
            document.write(e.responseText);
            document.close();
        }
    });
})();
