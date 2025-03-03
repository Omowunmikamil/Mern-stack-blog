import { useParams } from "react-router-dom";
import articles from "../assets/article-content";

const ArticlePage = () => {
  const { name } = useParams();

  const article = articles.find((article) => article.name === name);
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
    </>
  );
};

export default ArticlePage;
