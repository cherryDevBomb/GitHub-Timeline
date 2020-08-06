import {TOKEN} from "./token";

const HOST = "https://api.github.com";

const USERS_PATH = "/users";
const REPOS_PATH = "/repos";

const PAGE_PARAM = "page";
const PER_PAGE_PARAM = "per_page";
const SORT_PARAM = "sort";

const SORT_OPTION_BY_CREATED_DATE = "author_date";
const ITEMS_PER_PAGE = "20";


export const getRepos = (user, page) => {
  console.log("getRepos called")

  const path = HOST + USERS_PATH + "/" + user + REPOS_PATH;
  const url = new URL(path);
  url.searchParams.append(SORT_PARAM, SORT_OPTION_BY_CREATED_DATE);
  url.searchParams.append(PAGE_PARAM, page);
  url.searchParams.append(PER_PAGE_PARAM, ITEMS_PER_PAGE);

  // specifying a personal access token in the headers lets you increase github API rate limit
  // see https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token
  // on how to create a personal access token
  const headers = {headers: {"Authorization": "token " + TOKEN}};

  return fetch(url.toString(), headers)
    .then(response => response.json());
}

export const getUserInfo = user => {
  console.log("getUserInfo called")

  const path = HOST + USERS_PATH + "/" + user;
  const url = new URL(path);

  // specifying a personal access token in the headers lets you increase github API rate limit
  // see https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token
  // on how to create a personal access token
  const headers = {headers: {"Authorization": "token " + TOKEN}};

  return fetch(url.toString(), headers)
    .then(response => response.json());
}