import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import Spinner from "../components/layout/Spinner";
import CountUp from "react-countup";
import { FaUsers, FaUserFriends, FaCodepen, FaStore } from "react-icons/fa";
import { motion } from "framer-motion";

const User = () => {
  const { login } = useParams();
  const { getUser, loading, user } = useContext(GithubContext);

  useEffect(() => {
    getUser(login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login]);

  if (loading) return <Spinner />;
  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start bg-slate-900 rounded-lg shadow-lg p-6 gap-6">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-32 h-32 border-purple-500 rounded-full shadow-md"
          />
          <div className=" flex-1 ">
            <h1 className="text-2xl font-bold text-purple-900 text-center">
              {user.name || user.login}
            </h1>
            <p className="text-green-600">{user.type}</p>
            {user.bio && (
              <p className="mt-2 text-gray-700 italic">{user.bio}</p>
            )}

            <div className="mt-4 space-y-2 text-purple-900">
              {user.location && (
                <p>
                  <span className="font-semibold mr-1">Location :</span>
                  <span className="text-green-600">{user.location}</span>
                </p>
              )}
              {user.blog && (
                <p>
                  <span className="font-semibold">Website:</span>{" "}
                  <a
                    href={
                      user.blog.startsWith("http")
                        ? user.blog
                        : `https://${user.blog}`
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {user.blog}
                  </a>
                </p>
              )}
              {user.twitter_username && (
                <p>
                  <span className="font-semibold">Twitter:</span>{" "}
                  <a
                    href={`https://twitter.com/${user.twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    @{user.twitter_username}
                  </a>
                </p>
              )}
              <p className="text-center">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-purple-600 px-6 py-2 text-white rounded cursor-pointer hover:bg-purple-700 transition-all duration-150"
                >
                  GitHub Profile
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-center text-xl">
        <div className="bg-gray-100 p-4 rounded">
          <div className="flex  justify-between">
            <p className="text-sm text-pink-500">Followers</p>
            <FaUsers className="text-pink-500" />
          </div>
          <p className="text-xl text-purple-900 font-bold">
            <CountUp end={user.followers} duration={1.5} separator="," />
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <div className="flex justify-between">
            <p className="text-sm text-pink-500">Following</p>
            <FaUserFriends className="text-pink-500" />
          </div>
          <p className="text-xl text-purple-900 font-bold">
            <CountUp end={user.following} duration={1.5} separator="," />
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <div className="flex justify-between">
            <p className="text-sm text-pink-500">Public Repos</p>
            <FaCodepen className="text-pink-500" />
          </div>
          <p className="text-xl text-purple-900 font-bold">
            <CountUp end={user.public_repos} duration={1.5} separator="," />
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <div className="flex justify-between">
            <p className="text-sm text-pink-500">Public Gists</p>
            <FaStore className="text-pink-500" />
          </div>
          <p className="text-xl text-purple-900 font-bold">
            <CountUp end={user.public_gists} duration={1.5} separator="," />
          </p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link
          to="/"
          className="inline-block bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition duration-150"
        >
          Back to Search
        </Link>
      </div>
    </div>
  );
};

export default User;
