// Compound Component Pattern

const Header = ({ children }) => {
    return <section>{children}</section>;
};

const Body = ({ children }) => {
    return <section>{children}</section>;
};

const Footer = ({ children }) => {
    return <section>{children}</section>;
};

const AppCard = ({ children }) => {
    return <article>{children}</article>;
};

AppCard.Header = Header;
AppCard.Body = Body;
AppCard.Footer = Footer;

export default AppCard;
