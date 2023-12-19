import { Dispatch, SetStateAction, useEffect, useState } from "react";
import NavbarActions from "./navbar-actions/NavbarActions";
import logo from "../assets/img/logo.png";
import { useLocation } from "react-router-dom";

interface INavbarProps {
  navActionSetter: Dispatch<SetStateAction<boolean>>;
  navActionState: boolean;
}
const Navbar = ({ navActionSetter, navActionState }: INavbarProps) => {
  const location = useLocation();
  return (
    <nav
      id="navbar"
      className="h-[40px] bg-no-repeat flex relative bg-vn-black px-2 py-2 items-center border-separator-grey-line border-b-[2px] z-10 shadow "
    >
      <div
        id="left"
        className="text-vn-blue font-semibold text-sm w-[20px] h-[20px]"
      >
        <img src={logo} />
      </div>
      <>
        {location.pathname !== "/app/empty-notes" &&
          location.pathname !== "/app/vim-cheatsheet" && (
            <div id="right" className="ml-auto flex items-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navActionSetter((prev) => (prev ? false : true));
                }}
                id="note-actions-btn"
                className="btn-actions w-[25px] h-[25px] inline-block"
              >
                <svg
                  className="btn-actions w-[25px] h-[25px] inline-block"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9509 10.5943C18.1211 10.5943 19.0698 9.64568 19.0698 8.47546C19.0698 7.30525 18.1211 6.3566 16.9509 6.3566C15.7807 6.3566 14.8321 7.30525 14.8321 8.47546C14.8321 9.64568 15.7807 10.5943 16.9509 10.5943Z"
                    fill="#878A8C"
                  />
                  <path
                    d="M16.9509 19.0698C18.1211 19.0698 19.0698 18.1211 19.0698 16.9509C19.0698 15.7807 18.1211 14.8321 16.9509 14.8321C15.7807 14.8321 14.8321 15.7807 14.8321 16.9509C14.8321 18.1211 15.7807 19.0698 16.9509 19.0698Z"
                    fill="#878A8C"
                  />
                  <path
                    d="M16.9509 26.839C18.1211 26.839 19.0698 25.8903 19.0698 24.7201C19.0698 23.5499 18.1211 22.6013 16.9509 22.6013C15.7807 22.6013 14.8321 23.5499 14.8321 24.7201C14.8321 25.8903 15.7807 26.839 16.9509 26.839Z"
                    fill="#878A8C"
                  />
                </svg>
              </button>
            </div>
          )}
      </>
      {navActionState && <NavbarActions />}
    </nav>
  );
};

export default Navbar;
