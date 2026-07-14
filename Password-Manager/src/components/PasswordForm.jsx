import { useState, useEffect } from "react";
import { generatePassword } from "../utils/passwordGenerator";
import StrengthMeter from "./StrengthMeter";

function PasswordForm({
  setPasswords,
  editData,
  setEditData,
}) {
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (editData) {
      setWebsite(editData.website);
      setUsername(editData.username);
      setPassword(editData.password);
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!website || !username || !password) {
      alert("All fields are required!");
      return;
    }

    const stored =
      JSON.parse(localStorage.getItem("passwords")) || [];

    if (editData) {
      stored[editData.index] = {
        website,
        username,
        password,
        favorite: editData.favorite,
        updatedAt: new Date().toLocaleString(),
      };

      alert("Password Updated Successfully");
      setEditData(null);
    } else {
      stored.push({
        website,
        username,
        password,
        favorite: false,
        updatedAt: new Date().toLocaleString(),
      });

      alert("Password Saved Successfully");
    }

    localStorage.setItem(
      "passwords",
      JSON.stringify(stored)
    );

    setPasswords(stored);

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

      <StrengthMeter password={password} />

      <button
        type="button"
        onClick={() =>
          setPassword(generatePassword())
        }
      >
        Generate Password
      </button>

      <button type="submit">
        {editData
          ? "Update Password"
          : "Save Password"}
      </button>
    </form>
  );
}

export default PasswordForm;

