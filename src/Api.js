import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-gmb6.onrender.com/api",
  });

export const getAllArticles = () => {
    return newsApi.get(`/articles`).then(({data}) => {
        return data.articles;
    })
}

export const getSingleArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}`).then(({data}) => {
        return data.article;
    })
} 

