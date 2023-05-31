import { NavLink } from "react-router-dom";
interface INoteItemProps {
	note: {
		id: string;
		contents: string;
	};
}

const NoteItem = ({ note }: INoteItemProps) => {
	const characterLimit = 32;

	return (
		<NavLink
			to={`/app/${note.id}`}
			id={note.id}
			className="note min-h-[50px] block pl-5 py-3 mb-3 box-content hover:bg-vn-dshade-white3 hover:border-l-vn-blue hover:border-l-4 select-none cursor-pointer transition-all ease-in-out duration-100  text-vn-white max-w-full border-vn-outline-black border-l-[2px] "
		>
			<p className="inline-block box-content max-w-[210px] overflow-hidden whitespace-nowrap overflow-ellipsis font-semibold ">
				{note.contents === ""
					? "Blank"
					: note.contents.slice(0, characterLimit)}
			</p>
			<p className="text-vn-outline-black box-border max-w-[380px] overflow-hidden whitespace-nowrap overflow-ellipsis block">
				{note.contents === ""
					? "no contents..."
					: note.contents.slice(characterLimit)}
			</p>
		</NavLink>
	);
};

export default NoteItem;
