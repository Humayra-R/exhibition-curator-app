"use client"

import { useErrorBoundary } from "react-error-boundary"

export const Fallback = ({ error }) => {   
    
    const { resetBoundary } = useErrorBoundary()

    return (
        <div>
            <h2> Something went wrong! </h2>
            <div className="err-img">
                <img src={"error-bg.jpg"} />
            </div>
            <button aria-label="button for reloading the page" onClick={resetBoundary}>
                Reload
            </button>
        </div>
    )
}