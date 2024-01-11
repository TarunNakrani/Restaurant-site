import { Icon } from '~@core/general'

function SocialMedia({ className = '', ...rest }) {
    return (
        <ul className={`social-list ${className}`} {...rest}>
            <li>
                <a
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                    href="https://github.com/TarunNakrani/Restaurant-site"
                    aria-label="See source code"
                    title="See source code"
                >
                    <Icon name="github" />
                </a>
            </li>
            <li>
                <a href="# " aria-label="See our tweets" title="See our tweets">
                    <Icon name="twitter" />
                </a>
            </li>
            <li>
                <a href="# " aria-label="See instagram gallery" title="See instagram gallery">
                    <Icon name="instagram" />
                </a>
            </li>
        </ul>
    )
}

export default SocialMedia
