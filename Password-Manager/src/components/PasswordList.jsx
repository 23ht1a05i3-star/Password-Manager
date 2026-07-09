import { useEffect, useState } from "react";
function PasswordList({ passwords = [] }) {
  return (
    <div className="password-list">
      <h2>Saved Passwords</h2>

      {passwords.length === 0 ? (
        <p>No Passwords Saved</p>
      ) : (
        passwords.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.website}</h3>

            <p>
              <strong>Username:</strong>{" "}
              {item.username}
            </p>

            <p>
              <strong>Password:</strong>{" "}
              {item.password}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default PasswordList;



