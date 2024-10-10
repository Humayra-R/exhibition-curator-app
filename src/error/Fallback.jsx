"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useErrorBoundary } from "react-error-boundary"
import { faRotate } from "@fortawesome/free-solid-svg-icons"

export const Fallback = ({ error }) => {   
    
    const { resetBoundary } = useErrorBoundary()

    return (
        <div className="err-container">
            <h2> Something went wrong! </h2>
            <button aria-label="button for reloading the page" onClick={resetBoundary}>
                Reload <FontAwesomeIcon icon={faRotate} />
            </button>
            <div>
                <img src={"error-bg.jpg"} />
            </div>
        </div>
    )
}