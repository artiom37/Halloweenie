/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.runtime.onInstalled.addListener(() => {
  console.log('Halloweenie - Halloween image collection');
})

chrome.bookmarks.onCreated.addListener(() => {
  console.log('Page bookmarked');
})
/******/ })()
;
//# sourceMappingURL=background.js.map