import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BlogData } from '../../data/blogData';

const Blog = () => {
    const navigate = useNavigate();
    const [blogOpen, setBlogOpen] = useState(BlogData.map(val => { return ({ isOpen: false }) }));
    return (
        <div className="main-outer-blog-container">
            <div className="blog-section-heading">Recommended Blogs</div>
            <div className='main-blog-container'>

                {
                    BlogData?.map((val, index) => {
                        return <BlogCard heading={ val?.blog_heading } img={ val?.img } id={ index } intro={ val?.intro } desc={ val?.desc } blogOpen={ blogOpen } setBlogOpen={ setBlogOpen } navigate={ navigate } />

                    }) }
            </div>
        </div>
    )
};

export default Blog;

const BlogCard = ({ img, id, heading, blogOpen, setBlogOpen, navigate }) => {

    const handleArticle = (index) => {
        let temp = blogOpen;
        temp[index].isOpen = true;
        setBlogOpen(temp);
        navigate(`/blog/${index}`);
    }
    return (
        <>

            <div className="blog-card-container" key={ `card-${id}` }>
                <div className="card-image-section" style={ { backgroundImage: `url(${img} )` } }>
                </div>
                <button className='read-article' onClick={ () => handleArticle(id) }>Read Article</button>
                <div className="card-detail-container">
                    <div className="blog-name">{ heading }</div>
                    <div className="blog-type">
                        <div className="blog-quiz">
                            <div className="blog-circle"></div>
                            <div className="blog-type-text">Article</div>
                        </div>
                        <div className="blog-quiz">
                            <div className="blog-circle"></div>
                            <div className="blog-type-text">Quiz</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};


