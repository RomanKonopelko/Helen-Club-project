(() => {
  const refs = {
    openMobileBtn: document.querySelector('[data-mobile-open]'),
    closeMobileBtn: document.querySelector('[data-mobile-close]'),
    mobile: document.querySelector('[data-menu]'),
  };

  refs.openMobileBtn.addEventListener('click', toggleMobile);
  refs.closeMobileBtn.addEventListener('click', toggleMobile);

  function toggleMobile() {
    document.body.classList.toggle('modal-open');
    refs.mobile.classList.toggle('is-open');
  }
})();
