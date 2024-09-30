export const checkMuseData = (data, option = null) => {

    const viableData = []

    data.forEach((artwork) => {
        if (artwork._primaryImageId 
            && !option 
            && !artwork._primaryTitle.includes('nude')) {
            viableData.push(artwork) 
        }
        else if (artwork._primaryImageId 
                && option === artwork.object_type 
                && !artwork._primaryTitle.includes('nude')) {
                viableData.push(artwork)
        }
    })
    
    return viableData
}