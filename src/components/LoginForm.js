import { useState } from "react";

const LoginForm = () => {
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();
  let [verifyPassword, setVerifyPassword] = useState();

  return (
    <form
      target=""
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        if (
          username &&
          password &&
          verifyPassword &&
          password === verifyPassword
        ) {
          alert(`Success!\nUsername: ${username}\nPassword: ${password}`);
        } else {
          alert("Authentication failed");
        }
      }}
    >
      <h1>Login</h1>

      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="verify-password">Verify Password</label>
        <input
          id="verify-password"
          name="verify_password"
          type="password"
          onChange={(e) => {
            setVerifyPassword(e.target.value);
          }}
        />
      </div>

      <div>
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};

export default LoginForm;
