import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import axios from 'axios';

import css from '../styles/Product.module.scss';

import Carousel from './common/Carousel';
import Popup from './common/Popup';

import { satndart } from '../mocks/carousel';

type ProductType = {
    _id: string,
    name: string,
    brand: string,
    model: string,
    color: string,
    battery: number,
    colorAvailable: string[],
    displayFrashrate: number,
    displayResolution: string,
    displaySize: number,
    displayType: string,
    images: string[],
    labels: string[],
    os: string,
    price: number,
    processor: string,
    ram: number,
    rom: number,
    rate: number,
    romAvailable: number[],
};

const Product = () => {
    const router = useRouter();

    const [product, setProduct] = useState<ProductType | {}>({});
    const [comments, setComments] = useState<{}[]>([]);
    const [commentMessage, setCommentMessage] = useState('');
    const [npDisplay, setNpDisplay] = useState(false);
    const [upDisplay, setUpDisplay] = useState(false);
    const [auth, setAuth] = useState(false);
    const [activeTab, setActiveTab] = useState('ВСЁ О ТОВАРЕ');

    const { _id, name, brand, model, color, battery, colorAvailable, displayFrashrate, displayResolution, displaySize, displayType, images, labels, os, price, processor, ram, rom, rate, romAvailable }: any = product;
    let npDisplayTimeout: ReturnType<typeof setTimeout>;
    let upDisplayTimeout: ReturnType<typeof setTimeout>;

    const newColor = color?.split('_').map((i: any) => i[0].toUpperCase() + i.substring(1)).join(' ');
    let newRom;

    if (rom > 16) {
        newRom = rom + 'Gb'
    } else {
        newRom = rom + 'Tb'
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/product/${router.query.productId}`).then((resp) => setProduct(resp.data.data));
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/comment/${_id}`).then((resp) => setComments(resp.data.data));
    }, []);

    useEffect(() => {
        if (!localStorage.getItem('userId')) {
            return;
        } else {
            //@ts-ignore
            setAuth(true);
        }
    }, []);

    const handleNpDisplayMouseLeave = () => npDisplayTimeout = setTimeout(() => { setNpDisplay(false) }, 200);

    const handleNpDisplayMouseEnter = () => {
        setNpDisplay(true);
        clearTimeout(npDisplayTimeout);
    };

    const handleUpDisplayMouseLeave = () => upDisplayTimeout = setTimeout(() => { setUpDisplay(false) }, 200);

    const handleUpDisplayMouseEnter = () => {
        setUpDisplay(true);
        clearTimeout(upDisplayTimeout);
    };

    const handleTab = (e: any) => setActiveTab(e.target.childNodes[0].data);

    const handleComment = () => {
        axios.post(`http://localhost:5000/api/v1/comment`, {
            productId: _id,
            userId: localStorage.getItem('userId'),
            userEmail: localStorage.getItem('userEmail'),
            text: commentMessage,
            rete: 4
        }).then((resp) => setComments([resp.data.data, ...comments]));
    };

    return (
        <div className={css.container}>
            <div className={css.tabs}>
                <a className={css.tabItem} onClick={handleTab}>ВСЁ О ТОВАРЕ</a>
                <a className={css.tabItem}>ХАРАКТЕРИСТИКИ</a>
                <a className={css.tabItem} onClick={handleTab}>ОТЗЫВЫ</a>
                <a className={css.tabItem}>ВОПРОСЫ</a>
                <a className={css.tabItem}>ВИДЕО</a>
                <a className={css.tabItem}>АКСЕССУАРЫ</a>
                <a className={css.tabItem}>СЕРВИСЫ</a>
            </div>
            {activeTab === 'ВСЁ О ТОВАРЕ' && <>
                <div className={css.general}>

                    <div className={css.gallery}>
                        <div className={css.list}>
                            {images?.map((img: string) => (
                                <div className={css.itemWrapper}>
                                    <img src={img} alt="product images" />
                                </div>
                            ))}
                        </div>
                        <div className={css.mainImage}>
                            {images && <img className={css.listItem} src={images[0]} alt="main image" />}
                        </div>
                    </div>
                    <div className={css.info}>
                        <div className={css.infoMain}>
                            <h1 className={css.name}>Смартфон {name} {newRom} {newColor}</h1>
                            <div className={css.block}>
                                <div className={css.labels}>
                                    <div className={css.label} onMouseEnter={handleNpDisplayMouseEnter} onMouseLeave={handleNpDisplayMouseLeave}>
                                        <img className={css.labelImg} src="https://cdn.comfy.ua/media/label/Group%20965%20(19)_1.svg" alt="Arrow" width="24px" height="24px" />
                                        <span>Доставка Новой Почтой</span>
                                        <Popup type="normal" display={npDisplay} title="Доставка Новой Почтой" text="От 99$ к отделению" button="Подробнее" />
                                    </div>
                                    <div className={css.label} onMouseEnter={handleUpDisplayMouseEnter} onMouseLeave={handleUpDisplayMouseLeave}>
                                        <img className={css.labelImg} src="https://cdn.comfy.ua/media/label/Group%20967_1.svg" alt="Arrow" width="24px" height="24px" />
                                        <span>Доставка Укрпочтой</span>
                                        <Popup type="normal" display={upDisplay} title="Доставка Укрпочтой" text="От 50$ к отделению" button="Подробнее" />
                                    </div>
                                </div>
                                <div className={css.reviews}>
                                    {rate}
                                </div>
                            </div>
                        </div>
                        <div className={css.infoBuy}>
                            <div className={css.block}>
                                <div className={css.price}>
                                    <b>{price}</b>
                                </div>
                                <div className={css.buttons}>
                                    <button className={css.buy}>Купить</button>
                                    <button className={css.order}>Быстрый заказ</button>
                                </div>
                                <div className={css.controlls}>
                                    <div className={css.img}>
                                        <img src="/img/compare.svg" alt="Arrow" width="20px" height="20px" />
                                    </div>
                                    <div className={css.img}>
                                        <img src="/img/heart.svg" alt="Arrow" width="20px" height="20px" />
                                    </div>
                                </div>
                            </div>
                            <div className={css.bonus}>
                                <img src="/img/coin.svg" alt="Cion image" width="14px" height="14px" />
                                <span><b className={css.pinted}>+200$</b> на бонусный счет</span>
                            </div>
                        </div>
                        <div className={css.infoCredit}>
                            <div className={css.content}>
                                <div className={css.item}>
                                    <img src="https://cdn.comfy.ua/media/label/Group%20473_3.svg" alt="Arrow" />
                                </div>
                                <div className={css.item}>
                                    <img src="https://cdn.comfy.ua/media/label/Group%20496_2.svg" alt="Arrow" />
                                </div>
                                <div className={css.item}>
                                    <img src="https://cdn.comfy.ua/media/label/Group%20378_2.svg" alt="Arrow" />
                                </div>
                            </div>
                            <button className={css.btn}>Купить в кредит</button>
                        </div>
                        <div className={css.infoAlternatives}>
                            <p className={css.title}>Другие модели</p>
                            <div className={css.actions}>
                                <div className={css.colors}>
                                    {colorAvailable?.map((item: any) => (
                                        <div className={css.color} style={{ backgroundColor: `${item.simple}` }}></div>
                                    ))}
                                </div>
                                <div className={css.memory}>
                                    {romAvailable?.map((item: any) => (
                                        <div className={css.item}>
                                            {item} ГБ
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={css.infoService}>
                            <Carousel display="small" header="Выберите сервис" items={satndart.items} />
                        </div>
                        <div className={css.infoAccessories}>
                            <Carousel display="small" header="Выберите аксесуар" items={satndart.items} />
                        </div>
                    </div>
                </div>
                <div className={css.features}>
                    <>
                        <h2 className={css.title}>Характеристики {name}</h2>
                        <ul className={css.featureList}>
                            <li className={cx(css.featureItem, css.withBg)}>
                                <span className={css.featureName}>Диагональ дисплея</span>
                                <b>{displaySize}</b>
                                <img src="https://www.svgrepo.com/show/195812/question.svg" alt="Question icon" width="20px" height="20px" />
                            </li>
                            <li className={css.featureItem}>
                                <span className={css.featureName}>Разрешение экрана</span>
                                <b>{displayResolution}</b>
                                <img src="https://www.svgrepo.com/show/195812/question.svg" alt="Question icon" width="20px" height="20px" />
                            </li>
                            <li className={cx(css.featureItem, css.withBg)}>
                                <span className={css.featureName}>Тип экрана</span>
                                <b>{displayType}</b>
                                <img src="https://www.svgrepo.com/show/195812/question.svg" alt="Question icon" width="20px" height="20px" />
                            </li>
                            <li className={css.featureItem}>
                                <span className={css.featureName}>Частота обновления экрана</span>
                                <b>{displayFrashrate} Гц</b>
                                <img src="https://www.svgrepo.com/show/195812/question.svg" alt="Question icon" width="20px" height="20px" />
                            </li>
                        </ul>
                        <button className={css.showMoreBtn}>
                            <span>Показать больше</span>
                            <img src="https://www.svgrepo.com/show/17594/plus.svg" alt="Question icon" width="16px" height="16px" />
                        </button>
                    </>
                </div>
            </>}
            {activeTab === "ОТЗЫВЫ" && (
                <div className={css.reviewsContainer}>
                    <h3>{brand} {name} {newRom} {newColor} - отзывы</h3>
                    <div className={css.reviews}>
                        {auth ? (
                            <div className={css.controlls}>
                                <input className={css.input} type="text" value={commentMessage} onChange={e => setCommentMessage(e.target.value)} />
                                <button className={css.button} onClick={handleComment}>Отправить</button>
                            </div>
                        ) : (
                            <div className={css.attention}>
                                <span>Оставтье свой отзыв об этом товаре</span>
                                <button>Оставить отзыв</button>
                            </div>
                        )}
                        {comments?.map((i: any) => (
                            <div className={css.review}>
                                <div className={css.reviewHeader}>
                                    <div className={css.name}>{i.userEmail}</div>
                                    <div className={css.rete}>{i.rate}</div>
                                </div>
                                <p className={css.reviewText}>
                                    {i.text}
                                </p>
                                <div className={css.reviewActions}>
                                    <div className={css.answer}>Ответить</div>
                                    <div className={css.likes}>Likes</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Product;
