import { useState } from "react";
import {
  FaTrash,
  FaCopy,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function PasswordList({
  passwords = [],
  setPasswords,
  search,
}) {
  const [showPassword, setShowPassword] =
    useState({});

  const deletePassword = (index) => {
    const updatedPasswords =
      passwords.filter((_, i) => i !== index);

    localStorage.setItem(
      "passwords",
      JSON.stringify(updatedPasswords)
    );

    setPasswords(updatedPasswords);
  };

  const filteredPasswords =
    passwords.filter((item) =>
      item.website
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="password-list">
      <h2>Saved Passwords</h2>

      {filteredPasswords.map(
        (item, index) => (
          <div className="card" key={index}>
            <h3>{item.website}</h3>

            <p>
              <strong>Username:</strong>{" "}
              {item.username}
            </p>

            <p>
              <strong>Password:</strong>{" "}
              {showPassword[index]
                ? item.password
                : "********"}
            </p>

            <div className="actions">
              <button
                className="copy-btn"
                onClick={() =>
                  navigator.clipboard.writeText(
                    item.password
                  )
                }
              >
                <FaCopy />
              </button>

              <button
                className="show-btn"
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    [index]:
                      !showPassword[index],
                  })
                }
              >
                {showPassword[index] ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deletePassword(index)
                }
              >
                <FaTrash />
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default PasswordList;







