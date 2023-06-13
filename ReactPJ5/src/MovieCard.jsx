import React from 'react'
function MovieCard({item}) {

  return (
  <div className="movie-card" style={{backgroundImage: (`url(${item.img})`)}}> 
    {/* <img src={item.img} alt="" /> */}
    <div className="movie-card__overlay"></div>
    <div className="movie-card__share">
      <button className="movie-card__icon">{`Rating ${item.rating}`}</button>
    </div>
    <div className="movie-card__content">
      <div className="movie-card__header">
        <h1 className="movie-card__title">{item.title}</h1>
        <h4 className="movie-card__info">{item.info}</h4>
      </div>
      <p className="movie-card__desc"> {item.description}</p>
      <button className="btn btn-outline movie-card__button" type="button">Watch Trailer</button>
    </div>
  </div>

  )
}

export default MovieCard