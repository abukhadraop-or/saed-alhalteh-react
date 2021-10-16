import React, { useState } from 'react';
import { FormContainer, Title, RedirectLink, SubmitButton } from './sign-in-form-styles';
import Input from './Input';

function SignInForm() {
  const [userData, setUserData] = useState({ email: '', password: '' });
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
        <Title> Sign In </Title>
        <RedirectLink to="/signUp"> Need an Account? </RedirectLink>
        <Input
          value={userData.email}
          onChange={(changeEvent) => handleChange(changeEvent)}
          name="email"
          type="text"
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
export default SignInForm;
