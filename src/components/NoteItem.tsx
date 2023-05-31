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
			className="note min-w-[384px] box-border border-l-vn-dshade-white h-[80px] block px-5 py-3 mb-[2px] hover:bg-vn-dshade-white3 hover:border-l-vn-blue select-none cursor-pointer transition-all ease-in-out duration-150 text-vn-white border-l-[2px] "
		>
			<p className="block box-content max-w-[210px] overflow-hidden whitespace-nowrap overflow-ellipsis font-semibold ">
				{note.contents === ""
					? "New Note"
					: note.contents.slice(0, characterLimit)}
			</p>
			<p className="block text-vn-outline-black box-border max-w-[370px] overflow-hidden whitespace-nowrap overflow-ellipsis">
				{note.contents === ""
					? "No contents yet"
					: note.contents.slice(characterLimit)}
			</p>
		</NavLink>
	);
};

export default NoteItem;
