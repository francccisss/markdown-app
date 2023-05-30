import { NavLink } from "react-router-dom";
interface INoteItemProps {
	note: {
		id: string;
		title: string;
		contents: string;
		md: string;
	};
}

const NoteItem = ({ note }: INoteItemProps) => {
	return (
		<NavLink
			to={`/app/${note.id}`}
			id={note.id}
			className="note block px-5 mb-3 box-border hover:bg-vn-dshade-white3 hover:border-l-vn-blue hover:border-l-4 select-none cursor-pointer transition-all ease-in-out duration-100 py-3 text-vn-white max-w-full border-vn-outline-black border-l-[2px] pb-1"
		>
			<p className="block box-border font-semibold uppercase">
				{note.title}
			</p>
			<p className="text-vn-outline-black box-border max-w-[340px] overflow-hidden whitespace-nowrap overflow-ellipsis inline-block">
				{note.contents}
			</p>
		</NavLink>
	);
};

export default NoteItem;
