interface INoteItemProps {
	note: {
		id: string;
		title: string;
		desc: string;
	};
}

const NoteItem = ({ note }: INoteItemProps) => {
	return (
		<li
			id={note.id}
			className="note text-vn-white min-w-full border-vn-outline-black border-b-[1px] pb-2"
		>
			<p className="font-semibold uppercase">{note.title}</p>
			<p className="max-w-[320px] text-vn-outline-black overflow-hidden whitespace-nowrap overflow-ellipsis inline-block">
				{note.desc}
			</p>
		</li>
	);
};

export default NoteItem;
