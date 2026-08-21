import PhotoSwipeLightbox from '/vendor/photoswipe/photoswipe-lightbox.esm.min.js';

const gallery = document.querySelector('#bio-photo-archive');

if (gallery) {
  const masonryGrids = [...gallery.querySelectorAll('.bio-archive-images')];
  const observedWidths = new WeakMap();
  const layoutFrames = new WeakMap();

  const layoutGrid = (grid) => {
    cancelAnimationFrame(layoutFrames.get(grid));
    layoutFrames.set(grid, requestAnimationFrame(() => {
      const styles = getComputedStyle(grid);
      const rowHeight = Number.parseFloat(styles.gridAutoRows);
      const rowGap = Number.parseFloat(styles.rowGap);

      if (!rowHeight || Number.isNaN(rowGap)) return;

      grid.querySelectorAll('.bio-archive-item').forEach((item) => {
        const image = item.querySelector('img');
        if (!image) return;
        const imageHeight = image.getBoundingClientRect().height;
        if (!imageHeight) return;
        item.style.gridRowEnd = `span ${Math.ceil((imageHeight + rowGap) / (rowHeight + rowGap))}`;
      });
    }));
  };

  masonryGrids.forEach((grid) => {
    grid.classList.add('is-masonry');
    grid.querySelectorAll('img').forEach((image) => {
      if (!image.complete) {
        image.addEventListener('load', () => layoutGrid(grid), { once: true });
      }
    });
    layoutGrid(grid);
  });

  const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const nextWidth = Math.round(entry.contentRect.width);
      const previousWidth = observedWidths.get(entry.target);
      observedWidths.set(entry.target, nextWidth);
      if (previousWidth !== nextWidth) layoutGrid(entry.target);
    });
  });
  masonryGrids.forEach((grid) => resizeObserver.observe(grid));

  const lightbox = new PhotoSwipeLightbox({
    gallery: '#bio-photo-archive',
    children: '.bio-archive-item a',
    pswpModule: () => import('/vendor/photoswipe/photoswipe.esm.min.js'),
    bgOpacity: 0.96,
    wheelToZoom: true,
    trapFocus: true,
    returnFocus: true,
    paddingFn: (viewport) => ({
      top: viewport.x < 700 ? 48 : 64,
      bottom: viewport.x < 700 ? 88 : 96,
      left: viewport.x < 700 ? 12 : 48,
      right: viewport.x < 700 ? 12 : 48
    })
  });

  lightbox.on('uiRegister', () => {
    lightbox.pswp.ui.registerElement({
      name: 'custom-caption',
      order: 9,
      isButton: false,
      appendTo: 'root',
      html: '',
      onInit: (captionElement, pswp) => {
        const updateCaption = () => {
          const slideLink = pswp.currSlide?.data?.element;
          const image = slideLink?.querySelector('img');
          captionElement.textContent = image?.alt || '';
        };
        pswp.on('change', updateCaption);
        updateCaption();
      }
    });
  });

  let openedViaPush = false;
  let handlingPopstate = false;

  const photoUrl = (index) => {
    const url = new URL(window.location.href);
    url.searchParams.set('photo', String(index + 1));
    url.hash = 'photographs';
    return url;
  };

  const clearPhotoUrl = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('photo');
    url.hash = 'photographs';
    const state = { ...(history.state || {}) };
    delete state.bioPhoto;
    delete state.photoIndex;
    history.replaceState(state, '', url);
  };

  lightbox.on('afterInit', () => {
    const index = lightbox.pswp.currIndex;
    if (history.state?.bioPhoto) {
      history.replaceState({ ...history.state, photoIndex: index }, '', photoUrl(index));
      return;
    }
    openedViaPush = true;
    history.pushState({ ...(history.state || {}), bioPhoto: true, photoIndex: index }, '', photoUrl(index));
  });

  lightbox.on('change', () => {
    const index = lightbox.pswp.currIndex;
    if (!history.state?.bioPhoto) return;
    history.replaceState({ ...history.state, photoIndex: index }, '', photoUrl(index));
  });

  lightbox.on('close', () => {
    const shouldGoBack = openedViaPush && history.state?.bioPhoto && !handlingPopstate;
    openedViaPush = false;
    if (shouldGoBack) {
      history.back();
      return;
    }
    if (!handlingPopstate && history.state?.bioPhoto) clearPhotoUrl();
  });

  window.addEventListener('popstate', (event) => {
    handlingPopstate = true;
    openedViaPush = false;

    if (lightbox.pswp && !event.state?.bioPhoto) {
      lightbox.pswp.close();
    } else if (!lightbox.pswp && event.state?.bioPhoto) {
      lightbox.loadAndOpen(Number(event.state.photoIndex) || 0);
    } else if (lightbox.pswp && event.state?.bioPhoto) {
      lightbox.pswp.goTo(Number(event.state.photoIndex) || 0);
    }

    queueMicrotask(() => { handlingPopstate = false; });
  });

  lightbox.init();

  const initialPhoto = Number.parseInt(new URL(window.location.href).searchParams.get('photo'), 10);
  if (initialPhoto >= 1 && initialPhoto <= gallery.querySelectorAll('.bio-archive-item a').length) {
    const initialIndex = initialPhoto - 1;
    history.replaceState({ ...(history.state || {}), bioPhoto: true, photoIndex: initialIndex }, '', photoUrl(initialIndex));
    requestAnimationFrame(() => lightbox.loadAndOpen(initialIndex));
  }
}
