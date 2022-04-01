import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

export async function getStaticProps() {
  const policyDetails = await getFileBySlug('', 'privacy')
  return { props: { policyDetails } }
}

export default function Privacy({ policyDetails }) {
  const { mdxSource, frontMatter } = policyDetails

  return (
    <MDXLayoutRenderer layout="PageFullSimple" mdxSource={mdxSource} frontMatter={frontMatter} />
  )
}
