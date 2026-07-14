function StrengthMeter({ password }) {
  const getStrength = () => {
    if (password.length < 6) {
      return "Weak";
    }

    if (password.length < 10) {
      return "Medium";
    }

    return "Strong";
  };

  return (
    <p className="strength">
      Strength: {getStrength()}
    </p>
  );
}

export default StrengthMeter;