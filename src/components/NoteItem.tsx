import { Link } from "react-router-dom";
interface INoteItemProps {
	note: {
		id: string;
		title: string;
		desc: string;
		path: "string";
	};
}

const NoteItem = ({ note }: INoteItemProps) => {
	return (
		<Link
			to={note.path}
			id={note.id}
			className="note hover:bg-vn-dshade-white3 hover:border-b-vn-blue select-none cursor-pointer transition-all ease-in-out duration-150 px-3 py-3 text-vn-white w-full border-vn-outline-black border-b-[1px] pb-1"
		>
			<p className="font-semibold uppercase">{note.title}</p>
			<p className="max-w-[312px] text-vn-outline-black overflow-hidden whitespace-nowrap overflow-ellipsis inline-block">
				{note.desc}
			</p>
		</Link>
	);
};

export default NoteItem;
