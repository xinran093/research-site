// Simple image preview modal for travels gallery

document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.travels-gallery');
  if (!gallery) return;

  // Create modal elements
  const modal = document.createElement('div');
  modal.className = 'travels-modal';
  modal.style.display = 'none';
  modal.innerHTML = `
    <div class="travels-modal-backdrop"></div>
    <div class="travels-modal-content">
      <img src="" alt="Travel preview" />
      <button class="travels-modal-close" aria-label="Close preview">&times;</button>
    </div>
  `;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector('img');
  const closeBtn = modal.querySelector('.travels-modal-close');
  const backdrop = modal.querySelector('.travels-modal-backdrop');

  function openModal(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.style.display = 'none';
    modalImg.src = '';
    document.body.style.overflow = '';
  }

  gallery.addEventListener('click', function (e) {
    const a = e.target.closest('a');
    if (a && a.querySelector('img')) {
      e.preventDefault();
      openModal(a.href, a.querySelector('img').alt);
    }
  });

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (modal.style.display !== 'none' && (e.key === 'Escape' || e.key === 'Esc')) closeModal();
  });
});
