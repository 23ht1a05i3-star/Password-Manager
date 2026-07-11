import { FaTrash, FaCopy } from "react-icons/fa";

function PasswordList({ passwords = [], setPasswords }) {
  const deletePassword = (index) => {
    const updatedPasswords = passwords.filter(
      (_, i) => i !== index
    );

    localStorage.setItem(
      "passwords",
      JSON.stringify(updatedPasswords)
    );

    setPasswords(updatedPasswords);
  };

  const copyPassword = (password) => {
    navigator.clipboard.writeText(password);
    alert("Password Copied!");
  };

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
              <strong>Username:</strong>
              {item.username}
            </p>

            <p>
              <strong>Password:</strong>
              {item.password}
            </p>

            <div className="actions">
              <button
                className="copy-btn"
                onClick={() =>
                  copyPassword(item.password)
                }
              >
                <FaCopy />
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
        ))
      )}
    </div>
  );
}

export default PasswordList;






