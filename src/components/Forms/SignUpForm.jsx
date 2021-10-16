import React, { useState } from 'react';
import { FormContainer, Title, RedirectLink, SubmitButton } from './sign-in-form-styles';
import Input from './Input';

function SignUpForm() {
  const [userData, setUserData] = useState({ username: '', email: '', password: '' });

  function handleSubmit(submitEvent) {
    submitEvent.preventDefault();
  }

  function handleChange(changeEvent) {
    const userDataClone = { ...userData };
    userDataClone[changeEvent.target.name] = changeEvent.target.value;
    setUserData(userDataClone);
  }

  return (
    <FormContainer>
      <form onSubmit={(submitEvent) => handleSubmit(submitEvent)}>
        <Title> Sign Up </Title>
        <RedirectLink to="/signIn"> Have an account? </RedirectLink>
        <Input
          value={userData.username}
          onChange={(changeEvent) => handleChange(changeEvent)}
          name="username"
          type="text"
          placeholder="Username"
        />
        <Input
          value={userData.email}
          onChange={(changeEvent) => handleChange(changeEvent)}
          name="email"
          type="email"
          placeholder="Email"
        />
        <Input
          value={userData.password}
          onChange={(changeEvent) => handleChange(changeEvent)}
          name="password"
          type="password"
          placeholder="Password"
        />
        <SubmitButton type="submit"> Sign In </SubmitButton>
      </form>
    </FormContainer>
  );
}

export default SignUpForm;
