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
			className="note block px-5 mb-3 box-border hover:bg-vn-dshade-white3 hover:border-l-vn-blue hover:border-l-4 select-none cursor-pointer transition-all ease-in-out duration-100 py-3 text-vn-white max-w-full border-vn-outline-black border-l-[2px] pb-1"
		>
			<p className="block box-content max-w-[384px] overflow-hidden whitespace-nowrap overflow-ellipsis font-semibold uppercase">
				{note.contents.slice(0, characterLimit)}
			</p>
			<p className="text-vn-outline-black box-border max-w-[384px] overflow-hidden whitespace-nowrap overflow-ellipsis inline-block">
				{note.contents.slice(characterLimit)}
			</p>
		</NavLink>
	);
};

export default NoteItem;
