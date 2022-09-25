import Link from 'next/link';
import cx from 'classnames';

interface MenuProps{
    title: string;
    href: string;
    active?: boolean
}
export default function Menu(props : MenuProps) {
    const {title, href, active} = props;

    const className = cx({
        'nav-link' : true,
        active
    })
    
    return (
        <>
            <li className="nav-item my-auto">
                <Link href={href}>
                    <a className={className} aria-current="page" href="#">{title}</a>
                </Link>
            </li>
        </>
    )
}
