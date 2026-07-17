function DashboardStats({ passwords }) {

  const totalPasswords =
    passwords.length;

  const favoritePasswords =
    passwords.filter(
      (item) => item.favorite
    ).length;

  const bankingPasswords =
    passwords.filter(
      (item) =>
        item.category === "Banking"
    ).length;

  return (
    <div className="stats-container">

      <div className="stat-card">
        <h3>Total</h3>
        <h1>{totalPasswords}</h1>
      </div>

      <div className="stat-card">
        <h3>Favorites</h3>
        <h1>{favoritePasswords}</h1>
      </div>

      <div className="stat-card">
        <h3>Banking</h3>
        <h1>{bankingPasswords}</h1>
      </div>

    </div>
  );
}

export default DashboardStats;
