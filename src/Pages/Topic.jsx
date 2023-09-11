import React from 'react'
import { useState, useEffect } from 'react';
import { getAllArticles } from '../Utils/Api';
import { useParams } from "react-router-dom";
import Articles from "./Articles";

const  Topic = () => {
    const { topic } = useParams()
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = () => {
          getAllArticles(topic, sort_by, order).then((articles) => {
            setArticles(articles);
            setLoading(false);
          });
        };
        fetchArticles();
      }, [topic, sort_by, order]);


}
 
export default Topic;
