async function getArticles(link) {
    const response = await fetch(link);
    return response.json();
  }

const payload = await getArticles('/related-articles.json');
  
export default function decorate(block) {
    console.warn(payload);
}