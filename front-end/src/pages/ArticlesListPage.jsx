import ArticlesList from "../components/AtrticlesList";
import articles from "../assets/article-content";

const ArticleListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={articles} />
    </>
  );
};

export default ArticleListPage;
