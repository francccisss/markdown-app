import { auth } from "@/utils/contexts/firebaseContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UserActions = ({}) => {
	const navigate = useNavigate();
	return (
		<div
			id="logout-modal-container"
			className="overflow-hidden flex flex-col bg-vn-black  border-[#ffffff30] border rounded justify-between absolute left-12 bottom-5 text-vn-white w-[270px]"
		>
			<p className="font-semibold px-3 py-2">{auth.currentUser?.email}</p>

			<div className="flex flex-col text-[.8rem] border-t border-t-vn-outline-black">
				<button
					onClick={() => {
						signOut(auth).then(() => {
							navigate("/sign-in");
						});
					}}
					className="flex-1 text-start  hover:bg-vn-dshade-white3 transition-all duration-100 ease-in-out px-3 py-2 "
				>
					Logout
				</button>
				<button className="flex-1 text-start  hover:bg-vn-dshade-white3 px-3 py-1 text-vn-red">
					Delete Account
				</button>
			</div>
		</div>
	);
};

export default UserActions;
