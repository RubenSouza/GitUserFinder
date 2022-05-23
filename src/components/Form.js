import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Form(props) {
  const [error, setError] = useState(false);
  const history = useNavigate();
  const [user, setUser] = useState("");
  useEffect(() => {
    function handleEnter() {
      window.addEventListener("keypress", event => {
        if (event.key === "Enter") {
          let btn = document.getElementById("button");
          btn.click();
        }
      });
    }
    handleEnter();
  }, []);

  function handleSearch() {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map(repository => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem(
          "repositoriesNames",
          JSON.stringify(repositoriesName)
        );
        setError(false);
        history("/repositories");
      })
      .catch(error => {
        setError(true);
      });
  }

  return (
    <div className="div--form">
      <div className="my--form">
        <div>
          <h1>Digite o Usuário</h1>
        </div>
        <div>
          <input
            type="search"
            value={user}
            name="User"
            id="user--form"
            className="input"
            onChange={e => setUser(e.target.value)}
          ></input>
          <button
            className="input"
            type="button"
            id="button"
            onClick={handleSearch}
          >
            {" "}
            Pesquisar
          </button>
        </div>
        {error ? <p id="error-message">Ocorreu um erro!</p> : ""}
      </div>
    </div>
  );
}

export default Form;
