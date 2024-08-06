// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE
!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../../mode/css/css")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../mode/css/css"],e):e(CodeMirror)}(function(f){"use strict";var p={active:1,after:1,before:1,checked:1,default:1,disabled:1,empty:1,enabled:1,"first-child":1,"first-letter":1,"first-line":1,"first-of-type":1,focus:1,hover:1,"in-range":1,indeterminate:1,invalid:1,lang:1,"last-child":1,"last-of-type":1,link:1,not:1,"nth-child":1,"nth-last-child":1,"nth-last-of-type":1,"nth-of-type":1,"only-of-type":1,"only-child":1,optional:1,"out-of-range":1,placeholder:1,"read-only":1,"read-write":1,required:1,root:1,selection:1,target:1,valid:1,visited:1};f.registerHelper("hint","css",function(e){var t=e.getCursor(),r=e.getTokenAt(t),o=f.innerMode(e.getMode(),r.state);if("css"==o.mode.name){if("keyword"==r.type&&0=="!important".indexOf(r.string))return{list:["!important"],from:f.Pos(t.line,r.start),to:f.Pos(t.line,r.end)};var i=r.start,s=t.ch,n=r.string.slice(0,s-i);/[^\w$_-]/.test(n)&&(n="",i=s=t.ch);var a=f.resolveMode("text/css"),d=[],l=o.state.state;return"pseudo"==l||"variable-3"==r.type?c(p):"block"==l||"maybeprop"==l?c(a.propertyKeywords):"prop"==l||"parens"==l||"at"==l||"params"==l?(c(a.valueKeywords),c(a.colorKeywords)):"media"!=l&&"media_parens"!=l||(c(a.mediaTypes),c(a.mediaFeatures)),d.length?{list:d,from:f.Pos(t.line,i),to:f.Pos(t.line,s)}:void 0}function c(e){for(var t in e)n&&0!=t.lastIndexOf(n,0)||d.push(t)}})});