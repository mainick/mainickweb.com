// eslint-disable-next-line jsx-a11y/alt-text
const prefixImage = process.env.NEXT_PUBLIC_BASE_PATH || ''

const Image = ({ src, ...rest }) => <img src={prefixImage + src} {...rest} />

export default Image
