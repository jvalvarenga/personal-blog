import {sortPosts, allCoreContent, coreContent} from 'pliny/utils/contentlayer'
import {allBlogs} from 'contentlayer/generated'
import {Authors, allAuthors} from 'contentlayer/generated'
import {MDXLayoutRenderer} from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import Main from './Main'
import Intro from './Intro'

export default async function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
      <Main posts={posts} />
    </>
  )
}
