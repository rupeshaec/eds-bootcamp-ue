export default function decorate(block) {
  const [image, heading] = block.children;
  image.classList.add('teaser__image');
  heading.classList.add('heading');
}
