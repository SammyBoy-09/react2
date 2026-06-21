import React, { useState } from 'react';

const Form = () => {
  // 1. State for inputs, errors, and password visibility
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // 2. Single handler for all input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      // Using .trim() for basic client-side sanitization
      [e.target.name]: e.target.value.trim() 
    });
  };

  // 3. Validation Logic
  const validate = () => {
    let tempErrors = {};
    
    if (!formData.name) tempErrors.name = "Name is required.";
    
    // Basic regex for email validation
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      tempErrors.email = "Valid email is required.";
    }
    
    if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters.";
    }
    
    setErrors(tempErrors);
    
    // If the errors object has 0 keys, the form is valid
    return Object.keys(tempErrors).length === 0;
  };

  // 4. Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    
    if (validate()) {
      alert("Form Submitted Successfully!\n" + JSON.stringify(formData));
      // Reset form upon success
      setFormData({ name: '', email: '', password: '' });
      setErrors({});
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '30px auto', fontFamily: 'sans-serif' }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Name Field */}
        <div style={{ marginBottom: '15px' }}>
          <label>Name: </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            // Visual cue: Red border if there is a name error
            style={{ borderColor: errors.name ? 'red' : '#ccc', display: 'block', width: '100%' }}
          />
          {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: '15px' }}>
          <label>Email: </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ borderColor: errors.email ? 'red' : '#ccc', display: 'block', width: '100%' }}
          />
          {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: '15px' }}>
          <label>Password: </label>
          <input
            name="password"
            // Toggle input type based on showPassword state
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            style={{ borderColor: errors.password ? 'red' : '#ccc', display: 'block', width: '100%' }}
          />
          {errors.password && <small style={{ color: 'red' }}>{errors.password}</small>}
        </div>

        {/* Show Password Checkbox */}
        <div style={{ marginBottom: '15px' }}>
          <label>
            <input 
              type="checkbox" 
              onChange={() => setShowPassword(!showPassword)} 
            /> Show Password
          </label>
        </div>

        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
};

export default Form;