import React from 'react'

const ArticleContainer = ({children}) => {
    return (
        <article className="prose lg:prose-lg min-w-full">
            {children}
        </article>
    )
}

export default ArticleContainer;