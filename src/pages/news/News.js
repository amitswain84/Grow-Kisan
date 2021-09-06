import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";
import "./news.css"


function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div className="newspages">
    <div className="newspage">
    <div className="labelbox">
      <span className="head__text labelone">Latest News</span>
      <span className="head__text labeltwo">Agriculture</span>
      <span className="head__text labelthree" >Indian Farming</span>
      </div>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
      
      </div>
    </div>
  );
}

export default News;