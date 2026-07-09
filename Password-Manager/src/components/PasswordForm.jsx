import { useState } from "react";
import { generatePassword } from "../utils/passwordGenerator";

function PasswordForm({ setPasswords }) {
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPassword = {
      website,
      username,
      password,
    };

    const stored =
      JSON.parse(localStorage.getItem("passwords")) || [];

    const updatedPasswords = [
      ...stored,
      newPassword,
    ];

    localStorage.setItem(
      "passwords",
      JSON.stringify(updatedPasswords)
    );

    setPasswords(updatedPasswords);

    setWebsite("");
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Website Name"
        value={website}
        onChange={(e) =>
          setWebsite(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        type="button"
        onClick={() =>
          setPassword(generatePassword())
        }
      >
        Generate Password
      </button>

      <button type="submit">
        Save Password
      </button>
    </form>
  );
}

export default PasswordForm;