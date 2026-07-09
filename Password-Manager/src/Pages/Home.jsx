import Navbar from "../components/Navbar";
import PasswordForm from "../components/PasswordForm";
import PasswordList from "../components/PasswordList";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <PasswordForm />
        <PasswordList />
      </div>
    </>
  );
}

export default Home;