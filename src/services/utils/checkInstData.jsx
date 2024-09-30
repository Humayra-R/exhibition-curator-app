export const checkInstData = (data) => {
    
    const viableData = []
    
    data.forEach((artwork) => {
        if (!artwork.title.includes('nude') 
            && !artwork.title !== ('Beau Geste')
            && artwork.artwork_type_title !== "Photograph" 
            && artwork.artwork_type_title !== "Photography" 
            && artwork.artwork_type_title !== "photography"
            && artwork.image_id) {
            viableData.push(artwork)
        }
    })

    return viableData
}