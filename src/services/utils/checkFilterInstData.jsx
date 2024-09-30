export const checkFilterInstData = (data, option) => {;
    const capOption = option[0].toUpperCase() + option.slice(1, option.length)
    
    const viableData = []
    
    data.forEach((artwork) => {
        
        if (!artwork.title.includes('nude') 
            && artwork.artwork_type_title.includes(capOption) 
            && artwork.image_id) {
                
            viableData.push(artwork)
        }
    })

    return viableData
}