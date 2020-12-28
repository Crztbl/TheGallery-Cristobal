import React from 'react'
import Upload from './Upload'
import ListImage from './ListImage'

const UploadContainer = () => {
    return(
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-nd-3">
                    <Upload />
                </div>
                <div className="col-nd-9">
                    <ListImage />
                </div>
            </div>
        </div>
        </>
    )
}

export default UploadContainer