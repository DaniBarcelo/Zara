import Search from "../assets/search.png";

const SearchComponent = ({ setSearch }) => {
    return (
        <div
            style={{
                paddingRight: "50px",
            }}
        >
            <input
                type="text"
                placeholder="SEARCH A CHARACTER..."
                onChange={(e) => { setSearch(e.target.value) }}
                style={{
                    width: "97%",
                    height: "50px",
                    padding: "0px 0px 8px 0px",
                    border: "none",
                    borderBottom: "1px solid #000000",
                    fontSize: "16px",
                    fontWeight: 400,
                    background: "url(" + Search + ") no-repeat scroll 12px 12px",
                    paddingLeft: "50px",
                    outline: "none",
                }}

            />
        </div>
    )
};

export default SearchComponent;