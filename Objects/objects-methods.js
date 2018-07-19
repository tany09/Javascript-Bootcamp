let restaurant = {
    name: 'BC',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsAvailable = this.guestCapacity - this.guestCount;
        return partySize <= seatsAvailable;
    },
    seatParty: function (partySize) {
        if (this.checkAvailability) {
            this.guestCount = this.guestCount + partySize;
            return 'Guests are succesfully seated';
            }
        else return 'Guests cannot be seated as there are no sufficient seats available';
    
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize;
        return 'Guests have succesfully left the restaurant';
    }
}

console.log(restaurant.seatParty(72));
console.log(restaurant.checkAvailability(5));
console.log(restaurant.removeParty(5));
console.log(restaurant.checkAvailability(4));