import { createContext } from "react";
export const NavbarActionsContext = createContext<{
  [k: string]: (e: React.MouseEvent | any) => Promise<void> | void;
}>(
  null as unknown as {
    [k: string]: (e: React.MouseEvent | any) => Promise<void> | void;
  }
);
