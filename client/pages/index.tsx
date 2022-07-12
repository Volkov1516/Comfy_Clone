import type { NextPage } from 'next';
import Head from 'next/head';

import Slider from '../components/Slider';
import PromoCategories from '../components/PromoCategories';
import Carousel from '../components/common/Carousel';

import { hits, special, blog } from '../mocks/mockCarouselData';
import { sale, refrigerators, smaptphones, laptops, washes, robots } from '../mocks/products';

const Home: NextPage = ({ products }: any) => {
  let sliced = products.slice(5, 10);
  
  return (
    <>
      <Head>
        <title>Comfy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <Slider />

      <PromoCategories header="Скидки до -40%" products={sale}/>
      <PromoCategories header="Холодильники" products={refrigerators}/>
      <PromoCategories header="Смартфоны" products={smaptphones}/>
      <PromoCategories header="Ноутбуки" products={laptops}/>
      <PromoCategories header="Стиральны машины" products={washes}/>
      <PromoCategories header="Роботы-пылесосы" products={robots}/>
      <PromoCategories header="Просмотренные товары" products={sliced}/>

      <Carousel display="normal" header="Хиты продаж" items={hits.items} />
      <Carousel display="normal" header="Специально для вас" items={special.items} />
      <Carousel display="blog" header="Новости из блога" items={blog.items} />
    </>
  );
}; 

export default Home;

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:5000/api/v1/product');
  const data = await response.json();

  return {
      props: {
          products: data,
      },
  };
};
