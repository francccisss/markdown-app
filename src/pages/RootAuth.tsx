import AuthContents from "@/components/AuthContents";
import { useState, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const RootAuth = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/sign-in");
	}, []);

	return (
		<main id="auth" className="page flex bg-[#ffffff] h-screen min-w-fit">
			<section id="left-auth-contents" className="flex-1 flex w-full ">
				<AuthContents />
			</section>
			<section
				style={{
					boxShadow: "-2px 0px 10px 2px rgba(0,0,0,.5)",
				}}
				id="auth-form"
				className="z-10 max-md:w-1/2 md:w-4/12 lg:w-5/12 2xl:w-4/12 bg-vn-black flex items-center justify-center "
			>
				<Outlet />
			</section>
		</main>
	);
};

export default RootAuth;
