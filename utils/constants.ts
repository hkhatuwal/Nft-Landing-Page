interface FooterLink {
    title: string;
    url: string;
}

interface BlogItem {
    imageSrc: string;
    altText: string;
    date: string;
    description: string;
    title:string,
    link: string;
    playIconSrc: string;
}


const footerLinks: FooterLink[] = [
    {title: "Documentation", url: "#docs"},
    {title: "FAQ", url: "#faq"},
    {title: "Security", url: "#security"},
    {title: "Blog", url: "#blogs"},
    {title: "Contact", url: "#contacts"},
];
const blogsList: BlogItem[] = [
    {
        imageSrc: '/assets/images/money.jpg',
        altText: 'money',
        date:"May 9, 2023",
        playIconSrc: '/assets/images/play.png',
        title: 'Introducing Money Markets on Prime Protocol',
        description: "The Money Markets integration will allow Prime users to borrow from other user deposits, thereby generating real yield for depositors and a wider selection of options for borrowers.",
        link: 'https://medium.com/prime-protocol/introducing-money-markets-on-prime-protocol-dcabf6472b93'
    },
    {
        imageSrc: '/assets/images/polkadot.jpg',
        altText: 'polkadot',
        date:"May 9, 2023",
        playIconSrc: '/assets/images/play.png',
        title: 'Prime Protocol at Polkadot Decoded 2022',
        description: "Prime's founder Colton Conley discusses the current state of the decentralized finance and how Prime will push the boundary forward for DeFi.",
        link: 'https://www.youtube.com/watch?v=JV3Ukd_fo5s'
    },
    {
        imageSrc: '/assets/images/universal.jpg',
        altText: 'universal',
        date:"May 9, 2023",
        playIconSrc: '/assets/images/play.png',
        title: 'Introducing Universal Access on Prime Protocol: Originate a transaction on any chain!',
        description: "Universal Access is our way of solidifying Prime as the fastest solution for borrowing cross-chain!",
        link: 'https://medium.com/prime-protocol/introducing-universal-access-on-prime-protocol-originate-a-transaction-on-any-chain-f73137d3ab7c'
    }
];
export {footerLinks,blogsList}