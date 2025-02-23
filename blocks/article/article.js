async function getArticles(link) {
  const response = await fetch(link);
  return response.json();
}

const payload = await getArticles('/related-articles.json');

export default function decorate(block) {
  const [, container] = block.children;

  const template = `
  <div class="article-card">
    <div class="article-img">
      <img src="https://articles--eds-bootcamp-ue--rupeshaec.aem.page/media_117fe35dbf013f56649517555c10a4e809c585d79.png?width=2000&format=webply&optimize=medium" alt="{title}" class="article-card__image">
    </div>
    <h1 class="article-card-title">{title}</h1>
    <p class="article-card-description">{description}</p>
  </div>
  `;

  let innerHTML = '';
  payload.data.forEach((element) => {
    innerHTML += template
      .replace('{img}', element.Image)
      .replace('{title}', element.Title)
      .replace('{title}', element.Title)
      .replace('{description}', element.Description);
  });
  container.innerHTML = innerHTML;
}
