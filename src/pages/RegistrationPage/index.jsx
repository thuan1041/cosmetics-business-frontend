import React from 'react';
import RegistrationForm from '../../components/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>Register</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
