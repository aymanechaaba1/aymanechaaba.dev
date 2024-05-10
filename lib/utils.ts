import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Endpoints } from '@octokit/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const GITHUB_BASE_URL = 'https://api.github.com';
export const OWNER = 'aymanechaaba1';

type listUserReposParams =
  Endpoints['GET /users/{username}/repos']['parameters'];
type listUserReposResponse =
  Endpoints['GET /users/{username}/repos']['response'];

type RepoParameters = Endpoints['GET /repos/{owner}/{repo}']['parameters'];
export type RepoResponse = Endpoints['GET /repos/{owner}/{repo}']['response'];

type listRepoReleases =
  Endpoints['GET /repos/{owner}/{repo}/releases']['response'];

type latestReleaseResponse =
  Endpoints['GET /repos/{owner}/{repo}/releases/latest']['response'];

type RepoLanguagesParams =
  Endpoints['GET /repos/{owner}/{repo}/languages']['parameters'];
type RepoLanguagesResponse =
  Endpoints['GET /repos/{owner}/{repo}/languages']['response'];

type RepoTagsResponse = Endpoints['GET /repos/{owner}/{repo}/tags']['response'];

type repoPullsParams =
  Endpoints['GET /repos/{owner}/{repo}/pulls']['parameters'];
type repoPullsResponse =
  Endpoints['GET /repos/{owner}/{repo}/pulls']['response'];

type RepoContributorsResponse =
  Endpoints['GET /repos/{owner}/{repo}/contributors']['response'];

const FETCH_PARAMS = {
  method: 'GET',
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
};

export const fetchRepos = async (options: listUserReposParams) => {
  const res = await fetch(
    `${GITHUB_BASE_URL}/users/${options.username}/repos?sort=${options.sort}&per_page=${options.per_page}&page=${options.page}`,
    FETCH_PARAMS
  );
  const data: listUserReposResponse['data'] = await res.json();
  return data;
};

export const fetchLatestRelease = async (
  owner: string = OWNER,
  repo: string
) => {
  const res = await fetch(
    `${GITHUB_BASE_URL}/repos/${owner}/${repo}/releases/latest`,
    FETCH_PARAMS
  );
  const data: latestReleaseResponse['data'] = await res.json();
  return data;
};

export const fetchReleases = async (owner: string = OWNER, repo: string) => {
  const res = await fetch(
    `${GITHUB_BASE_URL}/repos/${owner}/${repo}/releases`,
    FETCH_PARAMS
  );
  const data: listRepoReleases['data'] = await res.json();
  return data;
};

export const fetchRepoLanguages = async ({
  owner,
  repo,
}: RepoLanguagesParams) => {
  const res = await fetch(
    `${GITHUB_BASE_URL}/repos/${owner}/${repo}/languages`,
    FETCH_PARAMS
  );
  const data: RepoLanguagesResponse['data'] = await res.json();
  return data;
};

export const fetchRepoTags = async (owner: string = OWNER, repo: string) => {
  const res = await fetch(
    `${GITHUB_BASE_URL}/repos/${owner}/${repo}/tags`,
    FETCH_PARAMS
  );
  const data: RepoTagsResponse['data'] = await res.json();
  return data;
};

export const fetchRepoPulls = async ({ owner, repo }: repoPullsParams) => {
  const res = await fetch(
    `${GITHUB_BASE_URL}/repos/${owner}/${repo}/pulls`,
    FETCH_PARAMS
  );
  const data: repoPullsResponse['data'] = await res.json();
  return data;
};

export const fetchRepoContributors = async (
  owner: string = OWNER,
  repo: string
) => {
  const res = await fetch(
    `${GITHUB_BASE_URL}/repos/${owner}/${repo}/contributors`,
    FETCH_PARAMS
  );
  const data: RepoContributorsResponse['data'] = await res.json();
  return data;
};

export const fetchRepo = async (options: RepoParameters) => {
  const res = await fetch(
    `${GITHUB_BASE_URL}/repos/${options.owner}/${options.repo}`,
    FETCH_PARAMS
  );
  const data: RepoResponse['data'] = await res.json();
};

export const formatAmount = ({
  amount,
  options,
}: {
  amount: number;
  options?: Intl.NumberFormatOptions;
}) => new Intl.NumberFormat('en-US', options).format(amount);

export const formatBudget = (budget: string) =>
  budget
    .split('-')
    .map((amount) =>
      formatAmount({
        amount: +amount,
        options: {
          currency: 'USD',
          style: 'currency',
        },
      })
    )
    .join('-');

export const formatLastBudget = (lastBudget: string) =>
  formatAmount({
    amount: +lastBudget.slice(0, -1),
    options: {
      currency: 'USD',
      style: 'currency',
    },
  }) + '+';

export const getFetchUrl = () =>
  process.env.VERCEL_ENV === 'production' || 'preview'
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

export const getAge = (birthYear: number) => {
  let today = new Date();
  let age = today.getFullYear() - birthYear;
  return age;
};

export const removeHttps = (url: string) => url.split('//').slice(1).join('');
