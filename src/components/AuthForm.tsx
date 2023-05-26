import { useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";

interface IAuthFormProps {
	children: React.ReactNode;
}

const AuthForm = ({ children }: IAuthFormProps) => {
	return <div className="flex flex-col">{children}</div>;
};

export default AuthForm;
