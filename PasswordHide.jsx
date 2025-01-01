import { useState } from 'react';

const PasswordToggle = () => {
  // State to track whether the password is visible
  const [showPassword, setShowPassword] = useState(false);

  // Toggle the visibility of the password
  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: "auto", border: "2px solid black", borderRadius: "5px", marginTop: '16px', width: "500px", justifyContent: "center", background: "lightblue" }}>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        style={{ padding: '8px', marginRight: '8px', width: '300px', border: "2px solid purple", borderRadius: "3px" }}
      />
      {/* Eye icon that toggles between show/hide */}
      <button onClick={togglePasswordVisibility} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        {showPassword ? (
          <span role="img" aria-label="hide">🙈</span> // "Hide" icon (could be an eye with a slash)
        ) : (
          <span role="img" aria-label="show">👁️</span> // "Show" icon (eye icon)
        )}
      </button>
    </div>
  );
};

export default PasswordToggle;
