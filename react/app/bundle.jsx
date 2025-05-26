import React from "react";
import {createRoot} from "react-dom/client";

const {useState, useEffect} = React;

function App(props){
  const [category, setCategory] = useState("All");
  const [articles, setArticles] = useState();

  useEffect(() => {
    fetch("/a-123/articles.json")
      .then(res => {
        res.json()
          .then(articles => setArticles(articles));
      });
  }, []);

  return (
    <>
      {
        articles === undefined ? (
          <span>Loading articles</span>
        ):(
          <div id="articles">
            <div>
              <strong>Category: </strong>
              <select value={category} onChange={({target:{value}}) => setCategory(value)}>
                {
                  ["All", "Science", "Technology", "Finance"].map((category, indx) => (<option key={indx} value={category}>{category}</option>))
                }
              </select>
            </div>
            <div>
              {
                articles
                .filter(a => category === "All" || a.category === category)
                .map(({title, date, summary, category}, indx) => (
                  <div key={indx}>
                    <h3>{title}</h3>
                    <h4>Category: {category} | {date}</h4>
                    <div>{summary}</div>
                  </div>
                ))
              }
            </div>
          </div>
        )
      }
    </>
  );
}

createRoot(document.querySelector("#react-app"))
  .render(<App/>);
