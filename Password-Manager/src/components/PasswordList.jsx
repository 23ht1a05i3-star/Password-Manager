import { useEffect, useState } from "react";

function PasswordList() {
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("passwords")) || [];

    setPasswords(stored);
  }, []);

  return (
    <div className="list">
      <h2>Saved Passwords</h2>

      {passwords.map((item, index) => (
        <div key={index} className="card">
          <p>
            <strong>Website:</strong> {item.website}
          </p>

          <p>
            <strong>Username:</strong> {item.username}
          </p>

          <p>
            <strong>Password:</strong> {item.password}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PasswordList;