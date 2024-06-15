import { Article, ArticleLite } from "~/data/articles";
import { Profile } from "~/data/profile";
import { baseUrl } from "~/constants";

export const getProfile = async (): Promise<Profile> => {
  const res = await fetch(`${baseUrl}/api/profile`);
  const { profile } = await res.json();
  return profile;
};

export const getArticles = async (): Promise<Array<ArticleLite>> => {
  const res = await fetch(`${baseUrl}/api/articles`);
  const { articles } = await res.json();
  return articles;
};

export const getArticle = async (slug: string): Promise<Article> => {
  const res = await fetch(`${baseUrl}/api/articles/${slug}`);
  const { article } = await res.json();
  return article;
};
