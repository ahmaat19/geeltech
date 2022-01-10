import Link from 'next/link'

const Blog = () => {
  return (
    <div className='container text-center d-flex flex-column vh-100 justify-content-center align-items-center'>
      <button className='btn btn-light btn-sm'>
        This page is under construction
      </button>

      <Link href='/'>
        <a className='btn btn-primary btn-sm mt-3'>GO BACK</a>
      </Link>
    </div>
  )
}

export default Blog
