async function getArticles(link) {
  const response = await fetch(link);
  return response.json();
}

const payload = await getArticles('/articles.json');

export default function decorate(block) {
  const [container] = block.children;

  const template = `
  <div class="article-card">
    <div class="article-img">
      <img src="https://articles--eds-bootcamp-ue--rupeshaec.aem.page/media_160d8ccfe3e920b6e81fe7ffb507587e8d0b600c6.jpeg?width=2000&format=webply&optimize=medium" alt="{title}" class="article-card__image">
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
