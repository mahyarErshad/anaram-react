const batteryIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.38086 10C6.71086 11.31 6.71086 12.69 6.38086 14" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.88086 10C10.2109 11.31 10.2109 12.69 9.88086 14" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3809 10C13.7109 11.31 13.7109 12.69 13.3809 14" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19Z" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const userIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 18.8597H17.24C16.44 18.8597 15.68 19.1697 15.12 19.7297L13.41 21.4197C12.63 22.1897 11.36 22.1897 10.58 21.4197L8.87 19.7297C8.31 19.1697 7.54 18.8597 6.75 18.8597H6C4.34 18.8597 3 17.5298 3 15.8898V4.97974C3 3.33974 4.34 2.00977 6 2.00977H18C19.66 2.00977 21 3.33974 21 4.97974V15.8898C21 17.5198 19.66 18.8597 18 18.8597Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9999 9.99982C13.2868 9.99982 14.33 8.95662 14.33 7.6698C14.33 6.38298 13.2868 5.33984 11.9999 5.33984C10.7131 5.33984 9.66992 6.38298 9.66992 7.6698C9.66992 8.95662 10.7131 9.99982 11.9999 9.99982Z" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 15.6594C16 13.8594 14.21 12.3994 12 12.3994C9.79 12.3994 8 13.8594 8 15.6594" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const headerNavLinksData = [
  {
    text: "باتری بر اساس سایز ",
    hasSubMenu: true,
    icon: batteryIcon,
  },
  {
    text: "باتری بر اساس کاربرد ",
    hasSubMenu: true,
    icon: batteryIcon,
  },
  {
    text: "باتری بر اساس تکنولوژی ",
    hasSubMenu: true,
    icon: batteryIcon,
  },
  {
    text: "درباره آنارام",
    hasSubMenu: false,
    icon: userIcon,
  },
  {
    text: "تماس با آنارام",
    hasSubMenu: false,
    icon: userIcon,
  },
  {
    text: "وارتا",
    hasSubMenu: false,
    icon: batteryIcon,
  },
];
export default headerNavLinksData;
