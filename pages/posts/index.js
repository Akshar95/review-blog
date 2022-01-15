import Link from 'next/link'
import { getAllPosts } from '../../lib/api'

export default function Posts({ posts }) {
  return (
    <div className="posts">
      <h1>Posts</h1>
      {posts.map((post) => {
        const prettyDate = new Date(post.createdAt).toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        });

        return (
          <article key={post.slug}>
            <h2>
              <Link href={post.permalink}>
                <a>{post.title}</a>
              </Link>
            </h2>

            <time dateTime={post.createdAt}>{prettyDate}</time>

            <p>{post.excerpt}</p>

            <Link href={post.permalink}>
              <a>Read more →</a>
            </Link>
          </article>
        );
      })}

      {/* ToDO: render posts */}
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
