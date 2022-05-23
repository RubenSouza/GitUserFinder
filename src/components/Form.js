import React, { useEffect, useState } from "react";
import axios from "axios";

function Form(props) {
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
      .then(Response => console.log(Response.data));
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
      </div>
    </div>
  );
}

export default Form;
