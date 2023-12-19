import { EmptyNotes } from "@/components/EmptyNotes";
import VimnoteCheatSheet from "@/components/VimnoteCheatSheet";
import Note from "@/components/note/Note";
import App from "@/pages/App";
import RootAuth from "@/pages/RootAuth";
import { createBrowserRouter, createHashRouter } from "react-router-dom";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import PasswordRecovery from "@/components/auth/PasswordRecovery";
import ErrorPage from "@/pages/ErrorPage";

export const ROUTES = createHashRouter([
  {
    path: "/",
    element: <RootAuth />,
    children: [
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "forgot-password",
        element: <PasswordRecovery />,
      },
    ],
  },
  {
    path: "/app",
    element: <App />,
    shouldRevalidate: () => false,
    errorElement: <ErrorPage code="404" redirect={true} path="/app" />,
    children: [
      {
        path: ":noteID",
        element: <Note />,
        errorElement: (
          <ErrorPage
            code="Note Doesn't Exist"
            text="Oops! the note your trying to read doesn't exist."
          />
        ),
        loader: ({ request, params }) => {
          let trimUrl = request.url.slice(-16);
          if (trimUrl !== params.noteID) {
            console.log("redirect");
            throw new Response("Not Found", { status: 404 });
          }
          return null;
        },
      },

      {
        path: "empty-notes",
        element: <EmptyNotes />,
      },
      {
        path: "vim-cheatsheet",
        element: <VimnoteCheatSheet />,
      },
      {
        index: true,
        element: <EmptyNotes />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage code="404" redirect={true} />,
  },
]);
