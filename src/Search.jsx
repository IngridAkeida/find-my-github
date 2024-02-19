const Search = ({searchUser, searchName, setSearchName}) => {

  return (
    <div>
      <form onSubmit={searchUser}>
          <label></label>
          <input
            className="rounded-md"
            type="text"
            id="default-input"
            placeholder="Enter GitHub username"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <button type="submit">
          </button>
        </form>
    </div>
  );
}

export default Search;