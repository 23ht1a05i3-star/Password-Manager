function SecurityScore({ passwords }) {

  const total = passwords.length;

  const strongPasswords =
    passwords.filter(
      (item) =>
        item.password.length >= 10
    ).length;

  const score =
    total === 0
      ? 0
      : Math.round(
          (strongPasswords / total) * 100
        );

  return (
    <div className="security-card">
      <h2>Security Score</h2>

      <h1>{score}%</h1>

      <progress
        value={score}
        max="100"
      ></progress>
    </div>
  );
}

export default SecurityScore;