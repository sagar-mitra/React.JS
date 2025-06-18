import "../CSS/userCard.css"

const UserCard = ({name, type}) => {
    return (
        <div className="userCard-container">
            <h1>{name}</h1>
            <h2>Frontend Developer</h2>
            Qualification: B.Tech in EE
            <p>Age: 23 yrs</p>
            <p>Component type: {type}</p>
            <p>@dev.sagarr</p>
        </div>
    )
}

export default UserCard;