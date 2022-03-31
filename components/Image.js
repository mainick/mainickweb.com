import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const prefixImage = process.env.NEXT_PUBLIC_BASE_PATH || ''
const deployPlatform = process.env.NEXT_PUBLIC_DEPLOY_PLATFORM || 'vercel'

const Image = ({ src, ...rest }) => {
  return deployPlatform === 'vercel' ? (
    <NextImage {...rest} />
  ) : (
    <img src={prefixImage + src} {...rest} />
  )
}

export default Image
