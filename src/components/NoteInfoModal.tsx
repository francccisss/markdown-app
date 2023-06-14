import { INote } from "@/utils/types/Note";
import SplashScreenLayout from "./SplashScreenLayout";
import { auth } from "@/utils/contexts/firebaseContext";
import { format } from "date-fns";

const NoteInfoModal = ({ note }: { note: INote }) => {
	const infoClass = `col-start-2 ml-auto text-vn-dshade-white`;
	return (
		<SplashScreenLayout>
			<div
				id="note-modal"
				className="overflow-auto shadow-xl w-fit text-[1rem] h-fit px-4 py-6 rounded-sm bg-vn-black grid grid-col-2 border-vn-dshade-white border-2 "
			>
				<p>Note ID: </p> <span className={infoClass}>{note.id}</span>
				<p>Date Added: </p>{" "}
				<span className={infoClass}>
					{format(note.dateAdded as Date, "PPP").toString()}
				</span>
				<p>Last Updated: </p>{" "}
				<span className={infoClass}>
					{note.lastUpdated
						? format(note.lastUpdated as Date, "PPP").toString()
						: ""}
				</span>
				<p>Note Author: </p>
				<span className={infoClass}>{auth.currentUser?.email}</span>
			</div>
		</SplashScreenLayout>
	);
};

export default NoteInfoModal;
