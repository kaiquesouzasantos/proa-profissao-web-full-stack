export class Map {
    constructor(container) {
        this.map = null
        this.marker = null
        this.watchID = null
        this.container = container
    }

    render() {
        this.initialize()
        this.setTitle()

        return this
    }

    initialize() {
        this.map = L
            .map('mapid')
            .setView([0, 0], 13)
    }

    setTitle() {
        L
            .tileLayer(
                'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }
            ).addTo(this.map)
    }

    setIconMask() {
        this.marker.setIcon(
            L.icon({
                iconUrl: 'assets/img/icon-position.png'
            })
        )
    }

    updatePosition(position) {
        this.updateMap(position.coords.latitude, position.coords.longitude)
        this.updateMaskPostion(position.coords.latitude, position.coords.longitude)
    }

    updateMap(latitude, longitude) {
        this.removeMaker()
        this.map.setView([latitude, longitude], 13)
    }

    updateMaskPostion(latitude, longitude) {
        this.marker = L
            .marker([latitude, longitude])
            .addTo(this.map)
            .openPopup()

        this.setIconMask()
    }

    removeMaker() {
        if (this.marker)
            this.map.removeLayer(this.marker)
    }
}