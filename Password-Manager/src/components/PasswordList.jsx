import { useState } from "react";
import {
  FaTrash,
  FaCopy,
  FaEye,
  FaEyeSlash,
  FaEdit,
  FaStar,
} from "react-icons/fa";

function PasswordList({
  passwords = [],
  setPasswords,
  search = "",
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

  const toggleFavorite = (index) => {
    const updated = [...passwords];

    updated[index].favorite =
      !updated[index].favorite;

    localStorage.setItem(
      "passwords",
      JSON.stringify(updated)
    );

    setPasswords(updated);
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

      {filteredPasswords.length === 0 ? (
        <p>No Passwords Found</p>
      ) : (
        filteredPasswords.map(
          (item, index) => (
            <div
              className="card"
              key={index}
            >
              <h3>
                {item.website}

                {item.favorite && (
                  <span
                    style={{
                      color: "gold",
                      marginLeft: "10px",
                    }}
                  >
                    ⭐
                  </span>
                )}
              </h3>

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
              <p className="date">
              Updated:
              {item.updatedAt || "N/A"}
             </p>



              <div className="actions">
                <button
                  className="star-btn"
                  onClick={() =>
                    toggleFavorite(index)
                  }
                >
                  <FaStar />
                </button>

                <button
                  className="edit-btn"
                >
                  <FaEdit />
                </button>

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
        )
      )}
    </div>
  );
}

export default PasswordList;



