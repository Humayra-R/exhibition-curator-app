export const checkMuseData = (data, option = null) => {

    const viableData = []

    data.forEach((artwork) => {
        if (artwork._primaryImageId 
            && !option 
            && !artwork._primaryTitle.toLowerCase().includes('nude')
            && !artwork._primaryTitle.toLowerCase().includes('life drawing')    
        ) {
            viableData.push(artwork) 
        }
        else if (artwork._primaryImageId 
                && option === artwork.object_type 
                && !artwork._primaryTitle.toLowerCase().includes('nude')
            && !artwork._primaryTitle.toLowerCase().includes('life drawing')
            ) {
                viableData.push(artwork)
        }
    })
    
    return viableData
}