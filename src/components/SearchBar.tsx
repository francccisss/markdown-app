interface ISearchBarProps {
	handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ handleInput }: ISearchBarProps) => {
	return (
		<input
			className="w-[90%] self-center px-4 py-3 block m-3 text-sm placeholder:text-start placeholder:text-vn-outline-black outline-vn-outline-black text-[#d9d9d9] outline-1 rounded outline transition-all duration-150 ease-in-out  focus-within:outline-vn-blue  focus-within:outline bg-vn-dshade-black "
			type="search"
			onChange={handleInput}
			placeholder="Search notes..."
		/>
	);
};

export default SearchBar;
