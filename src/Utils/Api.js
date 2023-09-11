import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-gmb6.onrender.com/api",
});

export const getAllArticles = (topic, sort_by, order) => {
  return newsApi.get(`/articles`, {params: { topic, sort_by, order }}).then(({ data }) => {
    return data.articles;
  });
};

export const getSingleArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getSingleArticleComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchArticleVote = (article_id) => {
  const patchRequestedArticleVote = {
    inc_votes: 1,
  };
  return newsApi
    .patch(`/articles/${article_id}`, patchRequestedArticleVote)
    .then(({ data }) => {
      return data.article;
    });
};

export const addComment = (article_id, username, body) => {
  const postReqBody = {
    username: username,
    body: body
  };
  
  return newsApi
    .post(`/articles/${article_id}/comments`, postReqBody)
    .then(({data}) => {
       return data.comment;
    });
};

export const getTopics =  () => {
  return newsApi.get('/topics').then(({data}) => {
    return data.topics
  });
}