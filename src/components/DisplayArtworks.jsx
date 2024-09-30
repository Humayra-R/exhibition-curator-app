import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { GalleryContext } from "../context/GalleryContext"
import { Link } from 'react-router-dom'
import "../assets/css/gallery.css"

export const DisplayArtwork = ({ data }) => {
    
    const [ user, setUser ] = useContext(UserContext)
    const { name, email } = user

    const [ msg, setMsg ] = useState('')

    const [ userArtworks, setUserArtworks ] = useContext(GalleryContext)

    const [ artRefs, setArtRefs ] = useState([]) 

    useEffect(() => {
        const allIds = userArtworks.map((item) => {
            if (item.systemNumber) {
                return item.systemNumber
            }
            else if (item.main_reference_number) {
                return item.main_reference_number
            }
        })
        setArtRefs(allIds)
        
    }, [userArtworks])

    const handleAdd = (data) => { 
        if (email && userArtworks.length < 31) {
            setUserArtworks((curr) => {
                    return [...curr, data]
            })
        }
        // else {
        //     if (!email) {
        //         setMsg("Sign in or register to add artworks")
        //     }
        //     else if (userArtworks.length > 30) {
        //         setMsg("You have reached the limit")
        //     } 
        // }
    }

    const handleDel = (data) => { 

        setUserArtworks((curr) => {
            
            const copyCur = [...curr]
            
            const newArr = []

            copyCur.forEach((item, index) => {
                if (item.systemNumber !== data.systemNumber) {
                    newArr.push(item)
                }
                else if (item.main_reference_number !== data.main_reference_number) {
                    newArr.push(item)
                }
            })

            return newArr
        })
    }

    return (
        <div>
            <ul className='gallery-wrapper'>
                {
                data.map((artwork, index) => {
                    const checkId = artwork.systemNumber || artwork.main_reference_number

                    let linkSrc = ''
                    let imgSource
                        
                    if (artwork.systemNumber) {
                        linkSrc = `https://collections.vam.ac.uk/item/${artwork.systemNumber}`

                        imgSource = `https://framemark.vam.ac.uk/collections/${artwork._primaryImageId}/full/full/0/default.jpg`
                    }
                    else if (artwork.main_reference_number) {
                        linkSrc = `https://www.artic.edu/artworks/${artwork.id}`

                        imgSource = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
                    }

                    return (
                        <div key={artwork.systemNumber || artwork.main_reference_number} >
                            <div className='single-img'>
                                <Link to={linkSrc} target='_blank'>
                                    <li>
                                        <img src={imgSource} />
                                    </li>
                                    <li>
                                        <p> Title: {artwork._primaryTitle || artwork.title || 'Unknown'} </p>
                                    </li>
                                    <li>
                                        <p> Artist: {artwork._primaryMaker ? artwork._primaryMaker.name : "Unknown" || artwork.artist_title || "Unknown"}</p>
                                    </li>
                                    <li>
                                        <p> Date: {artwork._primaryDate ? artwork._primaryDate : 'Unknown' || artwork.date_end} </p>
                                    </li>
                                    <li>
                                        <p> Type: {artwork.objectType || artwork.artwork_type_title || "Unknown"} </p>
                                    </li>
                                </Link>
                            </div>
                                {!artRefs.includes(checkId) && <button onClick={() => handleAdd(artwork)}> add </button>}
                                {artRefs.includes(checkId) && email && <button onClick={() => handleDel(artwork)}> delete </button>}  
                        </div>
                    )
                })
                } 
            </ul>
        </div>
    )
}