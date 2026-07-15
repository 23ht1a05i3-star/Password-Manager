function PasswordHealth({
  passwords,
}) {
  const weakPasswords =
    passwords.filter(
      (item) =>
        item.password.length < 8
    );

  return (
    <div className="health-card">
      <h2>
        Weak Password Alerts
      </h2>

      {weakPasswords.length === 0 ? (
        <p>
          ✅ No Weak Passwords
        </p>
      ) : (
        weakPasswords.map(
          (item, index) => (
            <div key={index}>
              ⚠️ {item.website}
            </div>
          )
        )
      )}
    </div>
  );
}

export default PasswordHealth;