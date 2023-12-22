function UserProfile({ userData }) {
  const { login, avatar_url, name, location, email } = userData;
  return (
    <div className="row">
      <div className="col-md-4">
        <img src={avatar_url} alt="User" className="img-thumbnail" />
      </div>
      <div className="col-md-8">
        <ul className="list-group">
          <li className="list-group-item">
            <b>Fullname:</b> {name}
          </li>
          <li className="list-group-item">
            <b>Username:</b> {login}
          </li>
          <li className="list-group-item">
            <b>Location:</b> {location}
          </li>
          <li className="list-group-item">
            <b>Email Address:</b> {email}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
