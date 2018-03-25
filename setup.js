const documentEl = document.documentElement;
let viewportMetaEl = document.querySelector('meta[name="viewport"]');

function checkViewportMetaEl() {
  if (!viewportMetaEl) {
    throw new Error(
      'Please add <meta name="viewport"> in head of HTML document for the usage of rem-rebase.js.'
    );
  }
}

function setup() {
  const dpr = window.devicePixelRatio || 1;
  const scale = 1 / dpr;

  // set viewport scale
  checkViewportMetaEl();
  viewportMetaEl.setAttribute(
    'content',
    `width=device-width, initial-scale=${scale}, minimum-scale=${scale}, maximum-scale=${scale}, user-scalable=no`
  );

  // set font-size of <html>
  const unit = documentEl.clientWidth / 100;
  documentEl.style.fontSize = `${unit}px`;

  // create indentifier for CSS
  documentEl.setAttribute('data-dpr', dpr);
}

window.addEventListener('DOMContentLoaded', setup);
window.addEventListener('resize', setup);
