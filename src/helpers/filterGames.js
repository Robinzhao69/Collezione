export const filterGamesByTitle = (nameToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(game => {
        if(game.title.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1) {
            return game
        }
    })
}

export const filterGamesByPlatform = (platformToBeSearched, toBeSearchedArray) => {
    return toBeSearchedArray.filter(game => {
        // zet found van false naar true als de platform hetzelfde is als de input
        let found = false
        game.platforms.forEach(platform => {
            if(platform.toUpperCase() === platformToBeSearched.toUpperCase()){
                found = true
            }
        })
        // geeft game terug als found true is
        if(found === true){
            return game
        }
    })
}