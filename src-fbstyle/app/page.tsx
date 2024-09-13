// "use client";

// import { loginWithEmailPassword, signupWithEmailPassword } from "@/firebase/firebaseauth";
// import { useState } from "react";


// export default function Home() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


//   return (
//     <>
//       <h1>Hello Auth</h1>
//         Email:   <input type="email"
//         value={email}
//         onChange={(e) => { setEmail(e.target.value) }}
//       /><br /> <br />

//       Password:   <input type="password"
//         value={password}
//         onChange={(e) => { setPassword(e.target.value) }}
//       />
// <br /> <br />
//       <button onClick={
//         () => { signupWithEmailPassword(email, password) }}
//       >
//         Signup
//       </button>

//       <br /> <br />

//       <button onClick={
//         () => { loginWithEmailPassword(email, password) }}
//       >
//         Login
//       </button>

//     </>
//   );
// }


"use client";

import { loginWithEmailPassword, signupWithEmailPassword } from "@/firebase/firebaseauth";
import { useState, ChangeEvent } from "react";

export default function Home() {
  // Set types for email and password (string)
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Handle input change events with explicit types
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  return (
    <div style={containerStyle}>
      {/* Left Section - Similar to Facebook */}
      <div style={leftSectionStyle}>
        <h1 style={logoStyle}>Shoaib Darabase</h1>
        <p style={taglineStyle}>
          Firebase project teacher Haider Ali Shah.
        </p>
      </div>

      {/* Right Section - Login Form */}
      <div style={rightSectionStyle}>
        <div style={formContainerStyle}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={handleEmailChange}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            style={inputStyle}
          />
          <button
            onClick={() => loginWithEmailPassword(email, password)}
            style={loginButtonStyle}
          >
            Login
          </button>
          <p style={forgotPasswordStyle}>Forgotten password?</p>
          <hr style={separatorStyle} />
          <button
            onClick={() => signupWithEmailPassword(email, password)}
            style={signupButtonStyle}
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
}

// Inline Styles
const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f2f5',
};

const leftSectionStyle: React.CSSProperties = {
  flex: 1,
  padding: '0 20px',
  textAlign: 'left',
};

const logoStyle: React.CSSProperties = {
  color: '#1877f2',
  fontSize: '48px',
  fontWeight: 'bold',
  fontFamily: "'Helvetica Neue', sans-serif",
};

const taglineStyle: React.CSSProperties = {
  fontSize: '24px',
  color: '#606770',
  fontFamily: "'Helvetica Neue', sans-serif",
};

const rightSectionStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const formContainerStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  width: '300px',
  textAlign: 'center',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px',
  margin: '10px 0',
  fontSize: '16px',
  borderRadius: '6px',
  border: '1px solid #dddfe2',
};

const loginButtonStyle: React.CSSProperties = {
  backgroundColor: '#1877f2',
  color: 'white',
  padding: '12px',
  borderRadius: '6px',
  width: '100%',
  fontSize: '16px',
  border: 'none',
  cursor: 'pointer',
};

const forgotPasswordStyle: React.CSSProperties = {
  color: '#1877f2',
  cursor: 'pointer',
  fontSize: '14px',
  marginTop: '10px',
};

const separatorStyle: React.CSSProperties = {
  margin: '20px 0',
};

const signupButtonStyle: React.CSSProperties = {
  backgroundColor: '#42b72a',
  color: 'white',
  padding: '12px',
  borderRadius: '6px',
  width: '100%',
  fontSize: '16px',
  border: 'none',
  cursor: 'pointer',
};
