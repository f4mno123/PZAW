
function ComponentToDisplay (props) {
    return (
        <div className="tile">
            <h1 className="title">{props.title}</h1>
            <img className="image" src={props.image} alt="slay"/>
            <p className="description">{props.description}</p>
        </  div>

    )
}

export default ComponentToDisplay;