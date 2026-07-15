import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import PasswordForm from "../components/PasswordForm";
import PasswordList from "../components/PasswordList";
import SearchBar from "../components/SearchBar";
import DashboardStats from "../components/DashboardStats";
import CategoryFilter from "../components/CategoryFilter";
import BackupRestore from "../components/BackupRestore";
import RecentActivity from "../components/RecentActivity";
import SecurityScore from "../components/SecurityScore";
import PasswordHealth from "../components/PasswordHealth";
import PasswordExpiry from "../components/PasswordExpiry";

function Home() {
  const [passwords, setPasswords] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("passwords")) || [];

    setPasswords(stored);
  }, []);

  return (
    <div className="home-page">
      

      <div className="container">
        <DashboardStats passwords={passwords} />

        <SecurityScore passwords={passwords} />

        <PasswordHealth passwords={passwords} />

        <PasswordExpiry passwords={passwords} />

        <BackupRestore setPasswords={setPasswords} />

        <PasswordForm setPasswords={setPasswords} />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />

        <PasswordList
          passwords={passwords}
          setPasswords={setPasswords}
          search={search}
          category={category}
        />

        <RecentActivity passwords={passwords} />
      </div>
    </div>
  );
}

export default Home;

