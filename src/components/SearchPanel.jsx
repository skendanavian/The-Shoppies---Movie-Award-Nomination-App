import SearchBar from "./SearchBar";
import Button from "./Button";
import movieCamera from "./images/movieCamera.png";
import "./SearchPanel.scss";

function SearchPanel({ handleSubmit, handleSearchBar, nomineeNumber }) {
  return (
    <div className="search-panel">
      {/* <div className="site-logo-container ">
        <h2 className="desktop-heading">Find a Movie</h2>
      </div> */}

      <div className="header">
        <div className="site-logo-container">
          <img
            className="camera-icon"
            src={movieCamera}
            alt="movie-camera-icon"
          />
          <h1>The Shoppies</h1>
        </div>
        {/* <div className="search-items"> */}
        <SearchBar handleSearchBar={handleSearchBar} />
        <div className="submit-btn">
          <Button selected={nomineeNumber < 5} onClick={handleSubmit}>
            {nomineeNumber === 5 && "Submit Nominations"}
            {nomineeNumber === 0 && <h3>Please Nominate 5 Movies</h3>}
            {nomineeNumber > 0 && nomineeNumber < 5 && (
              <h3>({nomineeNumber} of 5 Nominations)</h3>
            )}
          </Button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;
