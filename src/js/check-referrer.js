$(function() {
  'use strict';
  var REDIRECTS = {
    '//viai-editor.github.io/viai-doc-ja/hebrew.html': true,
    '//viai-editor.github.io/viai-doc-ja/todo.html': true,
    '//viai-editor.github.io/viai-doc-ja/version5.html': true,
    '//viai-editor.github.io/viai-doc-ja/version6.html': true,
    '//viai-editor.github.io/viai-doc-ja/version7.html': true,
  };
  var CLS = 'redirected-by-notranslation';
  var MSG = 'このページには日本語訳が存在しないために英語版に転送されました。';
  if (REDIRECTS[document.referrer.replace(/^https?:/, '')]) {
    $('.header').append('<div class="' + CLS + '">' + MSG + '</div>');
  }
})
