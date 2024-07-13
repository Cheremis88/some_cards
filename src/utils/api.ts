import { TPost } from "./types";

async function sendRequest<T>(url: string): Promise<T[]> {
  return fetch(url)
    .then(res => res.ok ?
      res.json() :
      Promise.reject(res.status));
}

export async function getPosts() {
  return sendRequest<TPost>('https://jsonplaceholder.typicode.com/posts');
}