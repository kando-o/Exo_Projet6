class App {
    constructor() {

        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.newMoviesApi = new MovieApi('/data/new-movie-data.json')
        this.media_externalApi = new MovieApi('/data/external-movie-data.json')
    }

    async main() {
		// Ici je recupère mes fimls de mes fichiers old et new -movie-data.json
        const newMoviesData = await this.newMoviesApi.getMovies()
        const media_externalData = await this.media_externalApi.getMovies()

		const NewMovies = newMoviesData.map(movie => new FatorieMovies(movie, 'newApi'))
		const ExternalMovie = media_externalData.map(movie => new FatorieMovies(movie, 'external'))

		const FullMovies = NewMovies.concat(ExternalMovie)

		FullMovies
			.forEach(movie =>  {
				const Template = new MovieCard(movie)
				this.$moviesWrapper.appendChild(
					Template.createMovieCard()
				)	
			})	
    }
}

const app = new App()
app.main()
