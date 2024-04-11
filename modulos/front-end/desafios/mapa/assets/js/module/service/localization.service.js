export class Localization {
    constructor(map) {
        this.map = map
    }

    startTracking() {
        if (navigator.geolocation) {
            this.map.watchID = navigator.geolocation.watchPosition(
                position => this.map.updatePosition(position),
                error => this.map.container.addError(), 
                {
                    enableHighAccuracy: true,
                    timeout: 1000
                }
            )
        }
    }

    stopTracking() {
        if (this.getWatchId() !== null)
            navigator.geolocation.clearWatch(this.getWatchId())
    }

    getWatchId() {
        return this.map.watchID
    }
}