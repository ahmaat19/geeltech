import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import PostCard from '../../components/posts/PostCard'
import Widget from '../../components/posts/Widget'
import Meta from '../../components/Meta'

const Blog = ({ posts }) => {
  return (
    <>
      <Meta
        title='Blog'
        description='Our latest news, updates, and stories for web design, development, and more.'
        url='https://websom.dev/blog/'
        author='Ahmed Ibrahim'
      />

      <div className='text-center my-5'>
        <h1 className='text-center'>Blog</h1>
        <p>
          Our latest news, updates, and stories for web design, development, and
          more.
        </p>
      </div>

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
