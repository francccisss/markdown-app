import { NavLink } from "react-router-dom";
import { UserInfo } from "firebase/auth";
import { INote } from "@/utils/types/Note";
interface INoteItemProps {
  note: INote;
}

const NoteItem = ({ note }: INoteItemProps) => {
  const characterLimit = 50;

  return (
    <NavLink
      to={`/app/${note.id}`}
      id={note.id}
      className="flex flex-col justify-center note  min-w-full box-border border-l-vn-dshade-white h-[80px] px-5 py-3 mb-[2px] hover:bg-vn-dshade-white3 hover:border-l-vn-blue select-none cursor-pointer transition-all ease-in-out duration-150 text-vn-white border-l-[2px] "
    >
      <p className="block box-content max-w-full overflow-hidden whitespace-nowrap overflow-ellipsis font-semibold text-[.9rem] ">
        {note.contents === ""
          ? "New Note"
          : note.contents.slice(0, characterLimit)}
      </p>
      <p className="block text-vn-outline-black text-sm box-border max-w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
        {note.contents === ""
          ? "No contents yet"
          : note.contents.slice(characterLimit)}
      </p>
    </NavLink>
  );
};

export default NoteItem;
