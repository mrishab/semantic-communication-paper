import 'reveal.js/reset.css';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown';
import RevealHighlight from 'reveal.js/plugin/highlight';
import RevealNotes from 'reveal.js/plugin/notes';
import RevealMath from 'reveal.js/plugin/math'

Reveal.initialize({
  hash: true,
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX],
}).then(() => {
  const authorFooter = document.getElementById('author-footer');

  function updateAuthor() {
    const currentSlide = Reveal.getCurrentSlide();
    if (!currentSlide) return;

    const authorEl = currentSlide.querySelector('.slide-author');
    authorFooter.textContent = authorEl?.dataset.name || '';
  }

  Reveal.on('slidechanged', updateAuthor);
  updateAuthor();
});
