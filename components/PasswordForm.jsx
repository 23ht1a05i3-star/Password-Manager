
import { useState } from "react";
import { generatePassword } from "../utils/passwordGenerator";
import StrengthMeter from "./StrengthMeter";

function PasswordForm({
  setPasswords,
  editData,
  editIndex,
  setEditData,
  setEditIndex,
}) {
  const [website, setWebsite] = useState(
    editData?.website || ""
  );

  const [username, setUsername] = useState(
    editData?.username || ""
  );

  const [password, setPassword] = useState(
    editData?.password || ""
  );

  const [category, setCategory] =
    useState(
      editData?.category || "Social"
    );

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPassword = {
      website,
      username,
      password,
      category,
      favorite: false,
      updatedAt:
        new Date().toLocaleString(),
    };

    const stored =
      JSON.parse(
        localStorage.getItem("passwords")
      ) || [];

    let updatedPasswords;

    if (editIndex !== null) {
      stored[editIndex] = {
        ...stored[editIndex],
        ...newPassword,
      };

      updatedPasswords = stored;
    } else {
      updatedPasswords = [
        ...stored,
        newPassword,
      ];
    }

    localStorage.setItem(
      "passwords",
      JSON.stringify(updatedPasswords)
    );

    setPasswords(updatedPasswords);

    setWebsite("");
    setUsername("");
    setPassword("");
    setCategory("Social");

    setEditData(null);
    setEditIndex(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        {editIndex !== null
          ? "Edit Password"
          : "Add Password"}
      </h2>

      <input
        type="text"
        placeholder="Website"
        value={website}
        onChange={(e) =>
          setWebsite(e.target.value)
        }
        required
      />

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
        required
      />

      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        required
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option>Social</option>
        <option>Banking</option>
        <option>Work</option>
        <option>Email</option>
        <option>Shopping</option>
      </select>

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
        {editIndex !== null
          ? "Update Password"
          : "Save Password"}
      </button>
    </form>
  );
}

export default PasswordForm;