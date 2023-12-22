function UserRepository({ userRepository }) {
  return (
    <div className="row">
      <h3>User Repositories</h3>
      <ul className="list-group">
        {userRepository.map((repoDetail) => (
          <li className="list-group-item" key={repoDetail.id}>
            <a href={repoDetail.svn_url} target="_blank">
              {repoDetail.name}
            </a>
            : {repoDetail.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserRepository;
