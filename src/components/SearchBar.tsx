interface ISearchBarProps {
	handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ handleInput }: ISearchBarProps) => {
	return (
		<div id="search-bar" className="">
			<input type="search" onChange={handleInput} />
		</div>
	);
};

export default SearchBar;
