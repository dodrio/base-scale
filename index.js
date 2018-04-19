let BLUEPRINT_WIDTH = 750;
let GRID_NUMBER = 100;

function isNumber(value) {
  return typeof value === 'number';
}

function setup(blueprintWidth, gridNumber) {
  if (blueprintWidth && isNumber(blueprintWidth)) {
    BLUEPRINT_WIDTH = blueprintWidth;
  }
  if (gridNumber && isNumber(gridNumber)) {
    GRID_NUMBER = gridNumber;
  }

  const documentEl = document.documentElement;
  const viewportMetaEl = document.querySelector('meta[name="viewport"]');

  function checkViewportMetaEl() {
    if (!viewportMetaEl) {
      throw new Error(
        'Please add <meta name="viewport"> in head of HTML document for the usage of rem-rebase.js.'
      );
    }
  }

  function adjust() {
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

  window.addEventListener('DOMContentLoaded', adjust);
  window.addEventListener('resize', adjust);
}

function px2rem(px) {
  return `${px / BLUEPRINT_WIDTH * GRID_NUMBER}rem`;
}

module.exports = {
  setup,
  px2rem,
};
