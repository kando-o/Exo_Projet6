class FatorieMovies {
	constructor(data, type){
		if (type === 'oldApi') {
			return new OldMovie(data)
		} else if ( type === 'newApi') {
			return new Movie(data)
		} else if ( type === 'external')
			return new Media_external(data)
		else {
			throw 'unknow format type'
		}
	}
}