
import React from 'react'
import { getArticles } from './lib/data'

export default async function Page() {
    const articles = await getArticles()

    return (
        <div>
            <ul>
                {articles.map(({ title, content }) => <li><div>
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div></li>)}
            </ul>
        </div>
    )
}

