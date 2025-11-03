import React, { useState } from 'react';

// Inline CSS styles using JavaScript objects to replace the external CSS file.
// This allows the component to be runnable in a single file while using your class names.
const styles = {
  loginsignup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#fce3fe', // A light background color
    padding: '20px',
  },
  loginsignupContainer: {
    width: '100%',
    maxWidth: '450px',
    background: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  loginsignupFields: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '25px',
    marginBottom: '30px',
  },
  input: {
    height: '60px',
    width: '100%',
    paddingLeft: '20px',
    border: '1px solid #c9c9c9',
    outline: 'none',
    color: '#5c5c5c',
    fontSize: '18px',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    height: '60px',
    color: 'white',
    backgroundColor: '#ff4141',
    border: 'none',
    fontSize: '20px',
    fontWeight: '500',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  toggleLink: {
    color: '#ff4141',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  agreement: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '25px',
    fontSize: '14px',
    color: '#5c5c5c',
  }
};

// The main component MUST be named App
const App = () => {
  // State to manage whether the user is viewing 'Login' or 'Sign Up'
  const [currentState, setCurrentState] = useState('Sign Up'); // Initial state set to Sign Up

  const isSignup = currentState === 'Sign Up';
  const isLogin = currentState === 'Login';

  // Function to handle the toggle: This is what makes the span active
  const handleToggle = () => {
    setCurrentState(isLogin ? 'Sign Up' : 'Login');
  };

  return (
    <div style={styles.loginsignup}>
      <div style={styles.loginsignupContainer}>
        <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
        
        <div style={styles.loginsignupFields}>
          {/* Your Name Field (Only for Sign Up) */}
          {isSignup && (
            <input type='text' placeholder='Your Name' style={styles.input}/>
          )}
          
          <input type='email' placeholder='Email Address' style={styles.input}/>
          <input type='password' placeholder='Password' style={styles.input}/>
          
          <button style={styles.button}>
            {isSignup ? 'Continue' : 'Login'}
          </button>
        </div>
        
        {/* Toggle Logic */}
        <p className="loginsignup-login">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          {' '}
          <span 
            style={styles.toggleLink} 
            // <--- This line makes the span clickable and switches the form state.
            onClick={handleToggle}
          >
            {isLogin ? 'Sign Up here' : 'Login here'}
          </span>
        </p>
        
        {/* Agreement Checkbox (Only for Sign Up) */}
        {isSignup && (
          <div style={styles.agreement}>
            <input type='checkbox' name='agree' id='agree' />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
