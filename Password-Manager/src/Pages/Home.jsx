import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import PasswordForm from "../components/PasswordForm";
import PasswordList from "../components/PasswordList";

function Home() {
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("passwords")) || [];

    setPasswords(stored);
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <PasswordForm
          setPasswords={setPasswords}
        />

        <PasswordList
          passwords={passwords}
        />
      </div>
    </>
  );
}

export default Home;
