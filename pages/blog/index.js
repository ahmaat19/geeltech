import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import PostCard from '../../components/posts/PostCard'
import Widget from '../../components/posts/Widget'

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Websom - Blog</title>
        <meta content='Websom - Web Desing and Web DevelopmentBlog' />

        <meta
          name='description'
          content='Web Design and Web Development Blog by Websom'
        />
      </Head>

      <div className='row'>
        <div className='col-md-8 col-12'>
          <PostCard posts={posts} />
        </div>
        <div className='col-md-4 col-12'>
          <Widget />
        </div>
      </div>
    </>
  )
}

export default Blog

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map((filename) => {
    const post = matter(fs.readFileSync(path.join('posts', filename), 'utf-8'))
    return {
      ...post.data,
      slug: filename.replace('.md', ''),
    }
  })

  return {
    props: {
      posts,
    },
  }
}
