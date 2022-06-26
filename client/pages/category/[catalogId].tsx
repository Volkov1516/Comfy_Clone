import type { NextPage } from 'next';

import Category from '../../components/Category';

const CategoryPage: NextPage = ({ category }: any) => {
    return (
        <>
            <Category category={category} />

        </>
    )
}

export default CategoryPage;

export const getStaticProps = async (context: any) => {
    const { params } = context;
    const response = await fetch(`http://localhost:5000/api/v1/category?catalogId=${params.catalogId}`);
    const data = await response.json();

    return {
        props: {
            category: data
        }
    }
}

export const getStaticPaths = async () => {
    const response = await fetch(`http://localhost:5000/api/v1/category`);
    const data = await response.json();

    const paths = data.data.map((slug: any) => {
        return {
            params: { catalogId: slug.catalogId },
        }
    })

    return { paths, fallback: false };
}
