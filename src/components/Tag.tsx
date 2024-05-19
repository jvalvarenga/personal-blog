import Link from 'next/link'
import {slug} from 'github-slugger'
interface Props {
  text: string
  key: any
  isLast: boolean
}

const Tag = ({text, key, isLast}: Props) => {
  return (
    <span key={key}>
      <Link
        href={`/tags/${slug(text)}`}
        className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      >
        {text}
        {!isLast && ','}
      </Link>
    </span>
  )
}

export default Tag
