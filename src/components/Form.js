import React, { useState } from "react";
import axios from "axios";

function FrontForm(props) {
  const [user, setUser] = useState("");
  function handleSearch() {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then(Response => console.log(Response.data));
  }

  return (
    <div className="div--form">
      <form className="my--form">
        <div>
          <h1>Digite o Usuário</h1>
        </div>
        <div>
          <input
            type="text"
            value={user}
            name="User"
            id="user"
            className="input"
            onChange={e => setUser(e.target.value)}
          ></input>
          <button className="input" type="button" onClick={handleSearch}>
            {" "}
            Pesquisar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FrontForm;
