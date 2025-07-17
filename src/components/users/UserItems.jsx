import { Link } from "react-router-dom";

export default function UserItems({ user: { login, avatar_url } }) {
  return (
    <div className="bg-slate-950 shadow-2xl rounded-md p-4 w-full max-w-sm mx-auto">
      <div className="flex items-center text-white gap-3">
        <div className="avatar">
          <div className="w-14 h-14 p-2">
            <img
              src={avatar_url}
              alt={`${login}'s avatar`}
              onError={(e) => (e.target.src = "/fallback-avatar.png")}
              className="rounded-full"
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl">{login}</h2>
          <Link
            to={`/user/${login}`}
            title={`Go to ${login}'s profile`}
            className="text-sm hover:text-purple-800 transition-all duration-150"
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
