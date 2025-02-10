export default function decorate(block) {
  const [image, heading, subheading, desc, btn] = block.children;
  image.classList.add("teaser__image");
  heading.classList.add("heading");
}
