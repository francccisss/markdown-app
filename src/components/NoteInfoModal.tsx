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
				className="overflow-auto shadow-xl w-fit h-fit text-[1rem] px-4 pb-4 rounded bg-vn-black border-vn-outline-black border-2 "
			>
				<div className="font-semibold text-xl py-4 ">Note Information:</div>
				<div className="grid grid-col-2 gap-x-10 gap-y-2 py-4 border-t-2 border-vn-outline-black">
					<p>Note ID: </p> <span className={infoClass}>{note.id}</span>
					<p>Date Added: </p>{" "}
					<span className={infoClass}>
						{format(note.dateAdded as Date, "PP")}
					</span>
					<p>Last Updated: </p>{" "}
					<span className={infoClass}>
						{format(note.lastUpdated as Date, "PP")}
					</span>
					<p>Note Author: </p>
					<span className={infoClass}>{auth.currentUser?.email}</span>
				</div>
			</div>
		</SplashScreenLayout>
	);
};

export default NoteInfoModal;
