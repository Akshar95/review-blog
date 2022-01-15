import { getPostBySlug } from '../../lib/api'

export default function Post({ post }) {
  const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

  return (
    <div className="post">
      <h1>{post.title}</h1>

      <time dateTime={post.createdAt}>{prettyDate}</time>

      {/* TODO: render body */}
    </div>
  )
}

export function getStaticProps({ params }) {
  return {
    props: {
      post: getPostBySlug(params.slug),
    },
  }
}
