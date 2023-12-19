import "./sidebar.scss";
import { INote } from "@/utils/types/Note";
import NoteItem from "../NoteItem";
interface ISidebarProps {
  children: React.ReactNode;
  sideBarRef: any;
  notes: INote[];
  searchedNotes: INote[];
}

const Sidebar = ({
  children,
  notes,
  sideBarRef,
  searchedNotes,
}: ISidebarProps) => {
  return (
    <div
      id="sidebar"
      ref={sideBarRef}
      className="sidebar-inactive z-10 bg-vn-black flex flex-col max-[720px]:absolute max-[720px]:left-10 h-full "
    >
      {children}
      <ul id="notes-list" className="h-full w-full ">
        {notes.length !== 0 ? (
          searchedNotes.map((note) => {
            return <NoteItem key={note.id} note={note} />;
          })
        ) : (
          <p className="text-center mt-6 text-sm text-vn-dshade-white">
            You don't have any notes, click on the '+' icon.{" "}
          </p>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
