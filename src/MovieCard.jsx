import  { useState } from "react";

function MovieCard({ movie: { imdbID, Year, Poster, Title, Type } }) {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(!showVideo); 
    console.log(`Toggling video for ${Title}`);
  };

  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
        
        {showVideo ? (
          <div className="video-player">
            
            <iframe
              title={Title}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${imdbID}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ) : null}
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
        <button onClick={handlePlayClick}>
          {showVideo ? "Hide Video" : "Play"} 
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
