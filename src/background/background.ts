chrome.runtime.onInstalled.addListener(() => {
  console.log('Halloweenie - Halloween image collection');
})

chrome.bookmarks.onCreated.addListener(() => {
  console.log('Page bookmarked');
})