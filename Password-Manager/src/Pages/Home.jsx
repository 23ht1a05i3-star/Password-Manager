import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import PasswordForm from "../components/PasswordForm";
import PasswordList from "../components/PasswordList";
import SearchBar from "../components/SearchBar";

function Home() {
  const [passwords, setPasswords] =
    useState([]);

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
      <Navbar />

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


