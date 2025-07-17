function RepoList({ repos }) {
  if (!repos || repos.length === 0) {
    return (
      <div className="bg-gray-100 rounded p-4 text-center text-gray-500">
        No repositories found.
      </div>
    );
  }

  return (
    <div className="bg-gray-100 rounded p-4">
      <h1 className="text-purple-700 font-bold text-xl text-center mb-4">
        Latest Repositories
      </h1>
      <ul className="list-decimal list-inside text-gray-800 space-y-2">
        {repos.map((repo, index) => (
          <li key={repo.id || index} className="ml-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-pink-500 transition-all duration-75"
            >
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepoList;
