import React from 'react'

const Rect = ({ rect }) => {
    return (
        <div>
            <center><h1>Rect</h1></center>

            <div className="rect-body" >
                <h5 className="height">{rect.hight}</h5>
                <h6 className="Count">{rect.width}</h6>
            </div>

        </div>
    )
};

export default Rect
