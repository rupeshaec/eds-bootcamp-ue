async function getArticles(link) {
    const response = await fetch(link);
    return response.json();
  }

const payload = await getArticles('/related-articles.json');
  
export default function decorate(block) {
  const [heading, container] = block.children;

  const template = `
  <div class="article-card">
    <div class="article-img">
      <img src="{img}" alt="{title}" class="article-card__image">
    </div>
    <h1 class="article-card__title">{title}</h1>
    <p class="article-card__description">{description}</p>
  </div>
  `;

  var innerHTML = '';
  payload.data.forEach(element => {
    console.warn(element);
    innerHTML += template
      .replace('{img}', element.Image)
      .replace('{title}', element.Title)
      .replace('{title}', element.Title)
      .replace('{description}', element.Description);
  });

  console.warn(heading);
  console.warn(container);
  container.innerHTML = innerHTML;
}