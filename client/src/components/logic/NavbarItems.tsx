import '../../css/navbar.css'

interface NavbarItem {
    key: string;
    title: string;
    url: string;
}

export const NavbarItems: NavbarItem[] = [
    {
        key: '1',
        title: 'Home',
        url: '/',
    },
    {
        key: '2',
        title: '¿Cómo funciona?',
        url: '#'
    },
    {
        key: '3',
        title: 'Services',
        url: '/Services',
    },
    {
        key: '4',
        title: 'FAQ',
        url: '#',
        // url: '/FAQ',
    },
    {
        key: '5',
        title: 'About',
        url: '#',
    },
];