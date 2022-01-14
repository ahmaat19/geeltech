import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { FaUserAlt } from 'react-icons/fa'

const PostCard = ({ posts }) => {
  return (
    <div className='row'>
      {posts &&
        posts.map((post) => (
          <div className='col-12' key={post.slug}>
            <div className='card border-0 shadow-sm mb-2'>
              <Link href={`/blog/${post.slug}`}>
                <a>
                  <Image
                    src={post.image && post.image}
                    width='1000'
                    height='420'
                    className='card-img-top img-fluid'
                    alt={post.image && post.image}
                  />
                </a>
              </Link>
              <div className='card-body'>
                <div className='d-flex align-items-center text-muted pb-2'>
                  <FaUserAlt className='bg-secondary text-light rounded-pill p-2 fs-2' />
                  <div
                    className=' ms-1'
                    style={{ fontSize: '14px', lineHeight: '1.2' }}
                  >
                    <span className='author fw-bold'>{post.author}</span> <br />
                    <span className='author' style={{ fontSize: '12px' }}>
                      {moment(post.createdAt).format('Do MMM Y')}
                    </span>
                  </div>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <a>
                    <h2 className='card-title custom-text-primary fs-3'>
                      {post.title}
                    </h2>
                  </a>
                </Link>
                {post.tag &&
                  post.tag.map((t) => (
                    <span
                      style={{ fontSize: '14px' }}
                      className='me-2 text-muted'
                      key={t}
                    >
                      #{t}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default PostCard
