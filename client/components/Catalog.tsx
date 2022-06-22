import Link from 'next/link';

import css from '../styles/Catalog.module.scss';

const Catalog = () => {
    return (
        <div className={css.container}>
            <div>Breadcrumbs</div>
            <div className={css.category}>
                <div className={css.categoryItem}>
                    <Link href="/category">
                        <a>
                            <img src="/img/file.webp" alt="Logo" width="80px" height="80px" />
                            <h2>Смартфоны</h2>
                        </a>
                    </Link>
                </div>
                <div className={css.categoryItem}>
                    <img src="/img/apple4.webp" alt="Logo" width="80px" height="80px" />
                    <h2>Смартфоны Apple</h2>
                    <ul>
                        <li>Apple 13 Pro Max</li>
                        <li>Apple 13 Pro</li>
                        <li>Apple 13</li>
                        <li>Apple 13 Mini</li>
                        <li>Apple 12</li>
                        <li>Apple 12 Mini</li>
                        <li>Apple 11</li>
                    </ul>
                </div>
                <div className={css.categoryItem}>
                    <img src="/img/apple4.webp" alt="Logo" width="80px" height="80px" />
                    <h2>Смартфоны Apple</h2>
                    <ul>
                        <li>Apple 13 Pro Max</li>
                        <li>Apple 13 Pro</li>
                        <li>Apple 13</li>
                        <li>Apple 13 Mini</li>
                        <li>Apple 12</li>
                        <li>Apple 12 Mini</li>
                        <li>Apple 11</li>
                    </ul>
                </div>
                <div className={css.categoryItem}>
                    <img src="/img/apple4.webp" alt="Logo" width="80px" height="80px" />
                    <h2>Смартфоны Apple</h2>
                    <ul>
                        <li>Apple 13 Pro Max</li>
                        <li>Apple 13 Pro</li>
                        <li>Apple 13</li>
                        <li>Apple 13 Mini</li>
                        <li>Apple 12</li>
                        <li>Apple 12 Mini</li>
                        <li>Apple 11</li>
                    </ul>
                </div>
                <div className={css.categoryItem}>
                    <img src="/img/apple4.webp" alt="Logo" width="80px" height="80px" />
                    <h2>Смартфоны Apple</h2>
                    <ul>
                        <li>Apple 13 Pro Max</li>
                        <li>Apple 13 Pro</li>
                        <li>Apple 13</li>
                        <li>Apple 13 Mini</li>
                        <li>Apple 12</li>
                        <li>Apple 12 Mini</li>
                        <li>Apple 11</li>
                    </ul>
                </div>
                <div className={css.categoryItem}>
                    <img src="/img/apple4.webp" alt="Logo" width="80px" height="80px" />
                    <h2>Смартфоны Apple</h2>
                    <ul>
                        <li>Apple 13 Pro Max</li>
                        <li>Apple 13 Pro</li>
                        <li>Apple 13</li>
                        <li>Apple 13 Mini</li>
                        <li>Apple 12</li>
                        <li>Apple 12 Mini</li>
                        <li>Apple 11</li>
                    </ul>
                </div>
                <div className={css.categoryItem}>
                    <img src="/img/apple4.webp" alt="Logo" width="80px" height="80px" />
                    <h2>Смартфоны Apple</h2>
                    <ul>
                        <li>Apple 13 Pro Max</li>
                        <li>Apple 13 Pro</li>
                        <li>Apple 13</li>
                        <li>Apple 13 Mini</li>
                        <li>Apple 12</li>
                        <li>Apple 12 Mini</li>
                        <li>Apple 11</li>
                    </ul>
                </div>
                <div className={css.categoryItem}>
                    <img src="/img/apple4.webp" alt="Logo" width="80px" height="80px" />
                    <h2>Смартфоны Apple</h2>
                    <ul>
                        <li>Apple 13 Pro Max</li>
                        <li>Apple 13 Pro</li>
                        <li>Apple 13</li>
                        <li>Apple 13 Mini</li>
                        <li>Apple 12</li>
                        <li>Apple 12 Mini</li>
                        <li>Apple 11</li>
                    </ul>
                </div>
                <div className={css.categoryItem}>
                    <img src="/img/apple4.webp" alt="Logo" width="80px" height="80px" />
                    <h2>Смартфоны Apple</h2>
                    <ul>
                        <li>Apple 13 Pro Max</li>
                        <li>Apple 13 Pro</li>
                        <li>Apple 13</li>
                        <li>Apple 13 Mini</li>
                        <li>Apple 12</li>
                        <li>Apple 12 Mini</li>
                        <li>Apple 11</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Catalog;