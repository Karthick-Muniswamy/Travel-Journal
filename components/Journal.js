import React from 'react'

function Journal(props){
    return (
        <div className="journal">
            <img className="location-img" src={props.item.imageUrl} />
            <div className="journal-details">
                <div className="location">
                    <img className="location-icon" src="./images/location-icon.png" />
                    <span className="place">{props.item.location}</span>
                    <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <span className="date">{props.item.startDate}</span>
                <span> - </span>
                <span className="date">{props.item.endDate}</span>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    )
}

export default Journal