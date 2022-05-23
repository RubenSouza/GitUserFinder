import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Repositories(props) {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    let repositoriesNames = localStorage.getItem("repositoriesNames");
    repositoriesNames = JSON.parse(repositoriesNames);
    setRepositories(repositoriesNames);
  }, []);
  return (
    <div id="container">
      <div id="repo--container">
        <h2>Repositórios</h2>
        <ul id="list">
          {repositories.map(repository => {
            return <li key={Math.random() * 10}> Repositório: {repository}</li>;
          })}
        </ul>
        <Link to={"/"}>
          <button id="back--button">Voltar</button>
        </Link>
      </div>
    </div>
  );
}
