import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import PasswordForm from "../components/PasswordForm";
import PasswordList from "../components/PasswordList";
import SearchBar from "../components/SearchBar";

function Home() {
  const [passwords, setPasswords] = useState([]);
  const [search, setSearch] = useState("");
  const [editData, setEditData] = useState(null);

  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  if (!user) {
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("passwords")) || [];

    setPasswords(stored);
  }, []);

  return (
    <div className="container">
      <PasswordForm
        setPasswords={setPasswords}
        editData={editData}
        setEditData={setEditData}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <PasswordList
        passwords={passwords}
        setPasswords={setPasswords}
        search={search}
        setEditData={setEditData}
      />
    </div>
  );
}

export default Home;
