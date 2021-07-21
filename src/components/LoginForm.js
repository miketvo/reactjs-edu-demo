const LoginForm = () => (
  <form target="" method="post">
    <h1>Login</h1>

    <div>
      <label htmlFor="username">Username</label>
      <input id="username" name="username" type="text" />
    </div>

    <div>
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" />
    </div>

    <div>
      <label htmlFor="verify-password">Verify Password</label>
      <input id="verify-password" name="verify_password" type="password" />
    </div>

    <div>
      <input type="submit" value="Login" />
    </div>
  </form>
);

export default LoginForm;
