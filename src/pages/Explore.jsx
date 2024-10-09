import { useState, useEffect } from "react"
import { getMuseumData } from "../services/getMuseumData"
import { getArtInstData } from "../services/getArtInstituteData"
import { DisplayArtwork } from "../components/DisplayArtworks"
import { shuffleData } from "../components/utils/shuffleData"
import { FilterByMedium } from "../components/FilterArtworks"
import { useErrorBoundary } from "react-error-boundary"
import { Loader } from "../components/Loader"


export const Explore = () => {
    
    const [ artworks, setArtworks ] = useState([])

    const [ isLoading, setIsLoading ] = useState(false)

    const { showBoundary } = useErrorBoundary()

    useEffect(() => {
        let pageNo = 1

        let allArtworks = []

        const artworkData = async (pageNo) => {

           try { 
                const museumPaintingRecords = await getMuseumData('painting', pageNo)

                setIsLoading(true)

                museumPaintingRecords.forEach((painting) => {
                    allArtworks.push(painting)
                })

                if (allArtworks.length < 35) {
                    pageNo++
                    await artworkData(pageNo)
                }
                else {
                    const artInstArtworks = await getArtInstData()
                    
                    artInstArtworks.forEach((artwork) => {
                        allArtworks.push(artwork)
                    })
                    
                    const shuffledArtworks = shuffleData(allArtworks)
                    
                    setArtworks(shuffledArtworks)

                    setIsLoading(false)
                }
            }
            catch (err) {
                setIsLoading(false)
                showBoundary(err)
            }
        }
        artworkData(pageNo)
    }, [])

    return (
        <div className="explore-page-container">
            <div>
                <h2> Explore Artworks </h2>
            </div>
            <div>
                <FilterByMedium exploreArtworks={artworks} />
            </div>
            <div>
                {isLoading && <Loader />}
            </div>
            <div>
                <DisplayArtwork data={artworks} />
            </div>
        </div>
    )
}