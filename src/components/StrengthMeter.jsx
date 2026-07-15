function StrengthMeter({ password }) {
  const getStrength = () => {
    if (password.length < 6)
      return "Weak";

    if (password.length < 10)
      return "Medium";

    return "Strong";
  };

  return (
    <div className="strength-meter">
      Strength: {getStrength()}
    </div>
  );
}

export default StrengthMeter;