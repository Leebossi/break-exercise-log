import { useFetcher, useRouteLoaderData } from "react-router-dom";
import logout from "../assets/logout-svgrepo-com.svg";

export const Navigation = () => {
  const fetcher = useFetcher();
  const { user } = useRouteLoaderData("root") as { user: string | null };
  const isLoggingOut = fetcher.formData != null;

  return (
    <div className="navbar">
      <p>Heya {user}!</p>
      <fetcher.Form method="post" action="/logout">
        <button type="submit" disabled={isLoggingOut}>
          {isLoggingOut ? "Signing out..." : <img src={logout} />}
        </button>
      </fetcher.Form>
    </div>
  );
};
