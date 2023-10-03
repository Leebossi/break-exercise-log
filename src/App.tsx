import { useFetcher, useRouteLoaderData } from "react-router-dom";
import "./App.css";

function App() {
  const { user } = useRouteLoaderData("root") as { user: string | null };
  const fetcher = useFetcher();
  const isLoggingOut = fetcher.formData != null;

  return (
    <>
      <p>Welcome {user}!</p>
      <fetcher.Form method="post" action="/logout">
        <button type="submit" disabled={isLoggingOut}>
          {isLoggingOut ? "Signing out..." : "Sign out"}
        </button>
      </fetcher.Form>
    </>
  );
}

export default App;
