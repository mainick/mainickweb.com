import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'

export const POSTS_PER_PAGE = 15

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter('blog')
  const publicPosts = allPosts.filter((post) => post.status === 'publish')
  const initialDisplayPosts = publicPosts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(publicPosts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts: publicPosts, pagination } }
}

export default function Blog({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO
        title={`Blog - ${siteMetadata.description}`}
        description={siteMetadata.description}
      />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Tutti gli articoli"
      />
    </>
  )
}
