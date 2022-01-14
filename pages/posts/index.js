import Link from 'next/link'

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
      posts: [
        {
          title: "My first post",
          createdAt: "2021-05-01",
          excerpt: "A short excerpt summarizing the post.",
          permalink: "/posts/my-first-post",
          slug: "my-first-post",
        },
        {
          title: "My second post",
          createdAt: "2021-05-04",
          excerpt: "Another summary that is short.",
          permalink: "/posts/my-second-post",
          slug: "my-second-post",
        },
      ],
    },
  };
}
