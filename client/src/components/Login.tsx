import {
  Form,
  useActionData,
  useLocation,
  useNavigation,
} from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get("from") || "/";

  const navigation = useNavigation();
  const isLoggingIn = navigation.formData?.get("username") != null;

  const actionData = useActionData() as { error: string } | undefined;

  return (
    <div className="login-wrapper">
      <h1>Log In</h1>
      <Form method="post" replace>
        <input type="hidden" name="redirectTo" value={from} />
        <label>
          <p>Username</p>
          <input autoFocus name="username" type="text" />
        </label>
        <label>
          <p>Password</p>
          <input name="password" type="password" />
        </label>
        <div>
          <button type="submit">
            {isLoggingIn ? "Logging in..." : "Login"}
          </button>
        </div>
        {actionData && actionData.error ? (
          <p style={{ color: "red" }}>{actionData.error}</p>
        ) : null}
      </Form>
    </div>
  );
};

export default Login;
