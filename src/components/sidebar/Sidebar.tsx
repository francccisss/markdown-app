import "./sidebar.scss";
import { INote } from "@/utils/types/Note";
import NoteItem from "../NoteItem";
import SidebarActions from "../SidebarActions";
import { useCallback, useEffect, useState } from "react";
interface ISidebarProps {
  sideBarRef: any;
  notes: INote[];
  addNote: () => Promise<void>;
}

// isolate searching (rerendering) within the sidebar component

const Sidebar = ({ notes, sideBarRef, addNote }: ISidebarProps) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchedNotes, setSearchedNotes] = useState(notes);
  const searchQuery = useCallback(
    (input: string, notesArr: Array<INote>) => {
      if (input !== "") {
        const filterNotes = notesArr.filter((note) =>
          note.contents.includes(input)
        );
        return setSearchedNotes(filterNotes);
      }
      // returns its previous state because if users empty the search bar input
      // the previous state of the searched notes will be restored, instead of magically disappearing.
      return setSearchedNotes(searchedNotes);
    },
    [notes]
  );
  function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchInput(e.target.value);
  }

  // runs searchQuery for every input update
  useEffect(() => {
    searchQuery(searchInput, notes);
  }, [searchInput]);

  // updates the searchedNotes if there is an update with the notes prop
  useEffect(() => {
    setSearchedNotes(notes);
  }, [notes]);
  return (
    <div
      id="sidebar"
      ref={sideBarRef}
      className="sidebar-inactive z-10 bg-vn-black flex flex-col max-[720px]:left-10 h-full max-[720px]:h-[97vh] max-[720px]:absolute"
    >
      <SidebarActions
        searchInput={searchInput}
        handleInput={handleSearchInput}
        handleOnAdd={addNote}
      />
      <ul id="notes-list" className="h-full w-full ">
        {notes.length !== 0 ? (
          searchedNotes.map((note) => <NoteItem key={note.id} note={note} />)
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
