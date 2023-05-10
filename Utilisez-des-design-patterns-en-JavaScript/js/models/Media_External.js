class Media_external {
	constructor(data) {
        this._title_fr = data.title_fr
        this._title_en = data.title_en
		this._synopsis = data.synopsis
        this._info = data.infos		
		this._media = data.medias
	}

	get title_fr() {
		return this._title_fr
	}

	get title_en() {
		return this._title_en
	}

	get picture() {
		return `/assets/${this._media.picture}`
	}

	get thumbnails() {
		return `/assets/${this._media.thumbnails}`
	}

	get duration() {
		return this._info.duration
	}

	get released_in() {
		return this._info.released_in
	}

	get synopsis() {
		return this._synopsis
	}

	get title() {
		return this._title_fr ? this._title_fr : this.title_en
	}

}

