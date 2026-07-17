function PasswordExpiry({
  passwords,
}) {
  return (
    <div className="expiry-card">
      <h2>
        Password Expiry Check
      </h2>

      {passwords.map(
        (item, index) => (
          <div key={index}>
            ⏰ Change password for:
            {" "}
            {item.website}
          </div>
        )
      )}
    </div>
  );
}

export default PasswordExpiry;