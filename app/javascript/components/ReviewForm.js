import React from 'react'

function ReviewForm(props) {
    return (
        <div className="wrapper">
            <form onSubmit={props.handleSubmit}>
                <div>Have an experience with {props.attributes.name}? Share your reviews!</div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review title"/>
                </div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review description"/>
                </div>
                <div className="field">
                    <div className="rating-container">
                        <div className="rating-title-text">Rate this airline</div>
                        [Star rating component]
                    </div>
                </div>
                <button type="submit">Submit your Review</button>
            </form>
        </div>
    )
}

export default ReviewForm
