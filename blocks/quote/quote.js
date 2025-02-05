import fetchPlaceholders from '../../scripts/aem.js';

export default function decorate(block) {
    const [quoteWrapper] = block.children;
  
    const blockquote = document.createElement('blockquote');
    blockquote.textContent = quoteWrapper.textContent.trim();
    quoteWrapper.replaceChildren(blockquote);

    // Fetch placeholders
    const placeholders = fetchPlaceholders('quote-key');
    const { key } = placeholders;
    console.error(key);
  }
  