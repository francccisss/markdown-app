interface ISearchBarProps {
	handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	searchInput: string;
	addNote: () => void;
}

const SidebarActions = ({
	handleInput,
	searchInput,
	addNote,
}: ISearchBarProps) => {
	return (
		<div
			id="sidebar-actions"
			className="p-3 shadow gap-2 flex items-center mb border-y-[3px] border-y-separator-grey-line"
		>
			<input
				className="w-[100%] shadow-inner hover:outline-vn-blue px-4 py-2 block text-sm placeholder:text-center placeholder:text-vn-outline-black outline-none border-none text-[#d9d9d9] outline-1 rounded outline transition-all duration-150 ease-in-out  focus-within:outline-vn-blue bg-vn-dshade-black"
				type="search"
				onChange={handleInput}
				placeholder="Search notes..."
				value={searchInput}
			/>
			<button
				onClick={addNote}
				id="add-note"
				className="btn-actions ml-auto w-[35px] h-[35px] flex justify-center items-center"
			>
				<svg
					viewBox="0 0 17 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11.3527 8.97409H8.97506V11.3517C8.97506 11.4778 8.92496 11.5988 8.83579 11.688C8.74661 11.7771 8.62566 11.8272 8.49954 11.8272C8.37342 11.8272 8.25247 11.7771 8.16329 11.688C8.07411 11.5988 8.02401 11.4778 8.02401 11.3517V8.97409H5.64639C5.52028 8.97409 5.39932 8.92399 5.31015 8.83481C5.22097 8.74563 5.17087 8.62468 5.17087 8.49856C5.17087 8.37245 5.22097 8.25149 5.31015 8.16232C5.39932 8.07314 5.52028 8.02304 5.64639 8.02304H8.02401V5.64542C8.02401 5.5193 8.07411 5.39835 8.16329 5.30917C8.25247 5.21999 8.37342 5.16989 8.49954 5.16989C8.62566 5.16989 8.74661 5.21999 8.83579 5.30917C8.92496 5.39835 8.97506 5.5193 8.97506 5.64542V8.02304H11.3527C11.4788 8.02304 11.5998 8.07314 11.6889 8.16232C11.7781 8.25149 11.8282 8.37245 11.8282 8.49856C11.8282 8.62468 11.7781 8.74563 11.6889 8.83481C11.5998 8.92399 11.4788 8.97409 11.3527 8.97409Z"
						fill="#878A8C"
					/>
				</svg>
			</button>
			<button
				id="sort-note"
				className="btn-actions ml-auto w-[25px] h-[25px] flex justify-center items-center"
			>
				<svg
					viewBox="0 0 17 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2.125 4.07294H10.2708"
						stroke="#878A8C"
						strokeWidth="0.882289"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M2.125 8.67709H10.2708"
						stroke="#878A8C"
						strokeWidth="0.882289"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M12.75 4.07294V13.2813L14.875 10.8021"
						stroke="#878A8C"
						strokeWidth="0.882289"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M2.125 13.2812H10.2708"
						stroke="#878A8C"
						strokeWidth="0.882289"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</div>
	);
};

export default SidebarActions;
