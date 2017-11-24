class Movies extends React.Component{
	constructor(props){
		super();
		this.state = {
			moviesToShow: []
		}

	};

	componentDidMount(){
		console.log('movies were put into DOM')
		var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
		$.getJSON(url, (movieData)=>{
			console.log(movieData);
			var nowPlayingArray = [];
			movieData.results.map((movie)=>{
				nowPLayingArray.push(movie);
			});
			this.setState({
				moviesToShow: nowPlayingArray
			})
		})
	}
	render(){
		var imagePath = "http://image.tmdb.org/t/p/w300"
        {this.state.moviesToShow.map((movie)=>{
    	var fullImagePath = imagePath + movie.poster_path;
    	return
                            })}		
		return(
			<div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <div className="th-wrapper">
                            <button className="btn btn-primary">Reset Search</button>
                        </div>
                        <div className="movie-rows">
                            {/* Movies go here! */}

                        </div>
                    </div>
                </div>
            </div>
			)
	}
};























ReactDOM.render(
	<Movies />,
	document.getElementById('root')
)