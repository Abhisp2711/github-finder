import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// Get users on serach
export const searchUser = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

// Get single user
export const getUser = async (login) => {
  try {
    const response = await github.get(`/users/${login}`);
    return response.data;
  } catch (err) {
    if (err.response && err.response.this.status === 404) {
      window.location = "/notfound";
    } else {
      throw err;
    }
  }
};

// Get user respos
export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "updated",
    per_page: "10",
  });

  const response = await github.get(`/users/${login}/repos?${params}`);
  return response.data;
};
