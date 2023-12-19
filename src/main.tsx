import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { FirebaseContext, auth, db } from "./utils/contexts/firebaseContext";
import { RouterProvider } from "react-router-dom";
import { ROUTES } from "./utils/routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="App">
      <FirebaseContext.Provider value={{ db, auth }}>
        <RouterProvider router={ROUTES} />
      </FirebaseContext.Provider>
    </div>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
