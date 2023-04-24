import "../styles/tag.css"

function Tag({tags}) {
    return (
        <ul className="tagContStyle">
            {tags.map((tag) => (
                <li className="tagStyle" key={tag}>{tag}</li>
            ))}
        </ul>
    )
}

export default Tag