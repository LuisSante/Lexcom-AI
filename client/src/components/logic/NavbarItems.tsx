import '../../css/navbar.css'

interface NavbarItem {
    key: string;
    title: string;
    url: string;
    id_ : string;
}

export const NavbarItems: NavbarItem[] = [
    {
        key: '1',
        id_ : '1',
        title: 'Home',
        url: '/',
    },
    {
        key: '2',
        id_ : 'howork',
        title: '¿Cómo funciona?',
        url: '/howork',
    },
    {
        key: '3',
        id_ : 'services',
        title: 'Services',
        url: '/services',
    },
    {
        key: '4',
        id_ : 'faq',
        title: 'FAQ',
        url: '/faq',
        // url: '/FAQ',
    },
    {
        key: '5',
        id_ : 'about',
        title: 'About',
        url: '/about',
    },
];