import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import PasswordForm from "../components/PasswordForm";
import PasswordList from "../components/PasswordList";
import SearchBar from "../components/SearchBar";

function Home() {
  const [passwords, setPasswords] =
    useState([]);
    const user = JSON.parse(
  localStorage.getItem("loggedInUser")
);

if (!user) {
  return <Navigate to="/login" />;
}

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    const stored =
      JSON.parse(
        localStorage.getItem("passwords")
      ) || [];

    setPasswords(stored);
  }, []);

  return (
    <>
      

      <div className="container">
        <PasswordForm
          setPasswords={setPasswords}
        />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <PasswordList
          passwords={passwords}
          setPasswords={setPasswords}
          search={search}
        />
      </div>
    </>
  );
}

export default Home;


