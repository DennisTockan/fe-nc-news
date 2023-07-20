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

export const getSingleArticleComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`).then(({data}) => {
        return data.comments;
    })
} 

export const patchArticleVote = (article_id) => {
    const patchRequestedArticleVote = {
        inc_votes: 'hello'
    }
    return newsApi.patch(`/articles/${article_id}`, patchRequestedArticleVote).then(({data}) => {
        return data.article
    })
}

