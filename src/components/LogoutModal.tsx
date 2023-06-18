import { auth } from "@/utils/contexts/firebaseContext";
import { signOut } from "firebase/auth";
import { SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

const LogoutModal = ({
	setActiveModal,
}: {
	setActiveModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
	const navigate = useNavigate();
	return (
		<div
			id="logout-modal-container"
			className=" flex flex-col bg-vn-black p-6 border-[#ffffff30] rounded border-2 gap-5 justify-between absolute left-12 bottom-5 text-vn-white w-[250px]"
		>
			<div className="flex justify-center items-center">
				<p className="font-semibold">Logout from this session?</p>
			</div>

			<div className="flex justify-evenly text-sm">
				<button
					onClick={() => {
						signOut(auth).then(() => {
							navigate("/sign-in");
						});
					}}
					className="bg-vn-dshade-white3 hover:bg-vn-outline-black transition-all duration-100 ease-in-out px-3 py-1 w-20"
				>
					Yes
				</button>
				<button
					onClick={() => setActiveModal(false)}
					className="hover:underline px-3 py-1 w-20"
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default LogoutModal;
