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
      className="shadow container py-lg-5 mb-5 w-50"
    >
      <h1 className="mb-5">Login</h1>

      <div className="form-group row mb-3 justify-content-center">
        <label htmlFor="username" className="col-2 col-form-label text-end">
          Username
        </label>
        <div className="col-8 pe-4">
          <input
            id="username"
            name="username"
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="form-control"
          />
        </div>
      </div>

      <div className="form-group row mb-3 justify-content-center">
        <label htmlFor="password" className="col-2 col-form-label text-end">
          Password
        </label>
        <div className="col-8 pe-4">
          <input
            id="password"
            name="password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
          />
        </div>
      </div>

      <div className="form-group row mb-3 justify-content-center">
        <label
          htmlFor="verify-password"
          className="col-2 col-form-label text-end"
        >
          Verify Password
        </label>
        <div className="col-8 pe-4">
          <input
            id="verify-password"
            name="verify_password"
            type="password"
            onChange={(e) => {
              setVerifyPassword(e.target.value);
            }}
            className="form-control"
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
