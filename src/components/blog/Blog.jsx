import React from 'react';
import './Blog.css';
import { blogData } from '../../constants/data';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                {blogData.map(({ id, image, title, category, url }) => {
                    return (
                        <div className="blog__card" key={id}>
                            <div className="blog__thumb">
                                <a href={url} target="_blank" rel="noreferrer"><span className="blog__category">{category}</span></a>
                                <a href={url} target="_blank" rel="noreferrer">
                                    <img src={image} alt={title} className='blog__img' />
                                </a>
                            </div>
                            <div className="blog__details">
                                <h3 className="blog__title">{title}</h3>
                                <div className="blog__meta">
                                    <a href={url} target="_blank" rel="noreferrer" className="blog__read-more">Read More →</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Blog;
