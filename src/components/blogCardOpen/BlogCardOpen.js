import React from 'react'
import { useParams } from 'react-router-dom'
import { Like, Watch } from '../../asset/Icon'
import { BlogData } from '../../data/blogData'

const BlogCardOpen = () => {

    let params = useParams();
    let Blog = BlogData[params?.id];

    return (
        <div className='blog-open-container'>
            <div className="blog-open-section-heading">{ Blog?.blog_heading }</div>
            <div className="card-wide-image" style={ { backgroundImage: `url(${Blog?.img} )` } }></div>
            <div className="card-wide-detail">
                <div className="card-stat">
                    <div className="card-views">
                        <div className="card-icon"><Like /></div>
                        <div className="card-number">{ Blog?.like }</div>
                    </div>
                    <div className="card-views">
                        <div className="card-icon"><Watch /></div>
                        <div className="card-number">{ Blog?.view }</div>
                    </div>
                </div>
                <div className="blog-type">
                    <div className="blog-quiz1">
                        <div className="blog-circle"></div>
                        <div className="blog-type-text">Article</div>
                    </div>
                    <div className="blog-quiz1">
                        <div className="blog-circle"></div>
                        <div className="blog-type-text">Quiz</div>
                    </div>
                </div>
            </div>
            <div className="blog-intro">
                { Blog?.intro }
                <div className="intro-division">
                    Here are some of our favorite places to start:
                </div>
            </div>
            <div className="blog-description">
                <div className="blog-description-heading">Keep a Gratitude Journal</div>
                <div className="blog-description">{ Blog?.desc }</div>
            </div>
            <div className="quiz-button">
                <button className="take-a-quiz">+ Take a Quiz</button>
            </div>

        </div>
    )

}

export default BlogCardOpen
