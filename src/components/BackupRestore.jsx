function BackupRestore({ setPasswords }) {

  const exportPasswords = () => {
    const passwords =
      JSON.parse(
        localStorage.getItem("passwords")
      ) || [];

    const blob = new Blob(
      [JSON.stringify(passwords, null, 2)],
      { type: "application/json" }
    );

    const url =
      window.URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;
    link.download = "passwords-backup.json";

    link.click();
  };

  const importPasswords = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const importedPasswords =
        JSON.parse(event.target.result);

      localStorage.setItem(
        "passwords",
        JSON.stringify(importedPasswords)
      );

      setPasswords(importedPasswords);

      alert(
        "Passwords Imported Successfully"
      );
    };

    reader.readAsText(file);
  };

  return (
    <div className="backup-section">

      <button
        className="export-btn"
        onClick={exportPasswords}
      >
        Export Backup
      </button>

      <input
        type="file"
        accept=".json"
        onChange={importPasswords}
      />

    </div>
  );
}

export default BackupRestore;