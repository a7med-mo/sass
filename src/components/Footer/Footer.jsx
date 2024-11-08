
export default function Footer() {
    return (
        <>
            <footer className="footer px">
                <div className="footer__parralax">
                    <div className="footer__parralax-trees"></div>
                    <div className="footer__parralax-secondplan"></div>
                    <div className="footer__parralax-premierplan"></div>

                </div>
                <div className="container">
                    <div className="footer__columns">
                        <div className="footer__col">
                            <h3 className="footer__col-title">
                                <i data-feather="shopping-bag"></i> <span>La boutique</span></h3>
                            <nav className="footer__nav">
                                <ul className="footer__nav-list">
                                    <li className="footer__nav-item">
                                        <a href="" className="footer__nav-link">
                                            Mentions légales
                                        </a>
                                    </li>
                                    <li className="footer__nav-item">
                                        <a href="" className="footer__nav-link">
                                            Politique de confidentialité
                                        </a>
                                    </li>
                                    <li className="footer__nav-item">
                                        <a href="" className="footer__nav-link">
                                            CGV
                                        </a>
                                    </li>
                                    <li className="footer__nav-item">
                                        <a href="" className="footer__nav-link">
                                            Livraisons et retours
                                        </a>
                                    </li>
                                    <li className="footer__nav-item">
                                        <a href="" className="footer__nav-link">
                                            Règlement concours
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer__col">
                            <h3 className="footer__col-title">
                                <i data-feather="share-2"></i> <span>Nos réseaux</span></h3>
                            <nav className="footer__nav">
                                <ul className="footer__nav-list">
                                    <li className="footer__nav-item">
                                        <a href="" className="footer__nav-link">
                                            <i data-feather="youtube"></i><span>Youtube</span>
                                        </a>
                                    </li>
                                    <li className="footer__nav-item">
                                        <a href="" className="footer__nav-link">
                                            <i data-feather="facebook"></i><span>Facebook</span>

                                        </a>
                                    </li>
                                    <li className="footer__nav-item">
                                        <a href="" className="footer__nav-link">
                                            <i data-feather="instagram"></i><span>Instagram</span>

                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer__col">
                            <h3 className="footer__col-title">
                                <i data-feather="send"></i> <span>Contact</span></h3>
                            <nav className="footer__nav">
                                <ul className="footer__nav-list">
                                    <li className="footer__nav-item">
                                        <a href="mailto:contact.laboiserie@gmail.com" className="footer__nav-link">
                                            contact.laboiserie@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="footer__copyrights">
                        <p>Réalisé par <a href="https://twitter.com/silvereledev" target="_blank">@SilvereLeDev</a></p>
                    </div>
                </div>
            </footer>
        </>
    )
}
