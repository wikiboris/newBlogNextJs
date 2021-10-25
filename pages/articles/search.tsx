import Layout from "../../components/Layout";
import { GetServerSideProps } from "next";
import axios from "axios";
import { API_URL } from "../../config";
import Post from "../../components/Post";
import qs from "qs";
import { useRouter } from "next/router";
import Search from "../../components/Search";

type SearchProps = {
  articles: {
    title: string;
    description: string;
    content: string;
    slug: string;
  }[];
};

export default function SearchPage({ articles }: SearchProps) {
  const router = useRouter();
  return (
    <Layout>
      <Search />
      <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold mb-4 md:mb-9">
        Search Results for {router.query.term}
      </h1>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {articles.map((article) => (
          <Post
            title={article.title}
            description={article.description}
            content={article.content}
            link={article.slug}
          />
        ))}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { term },
}) => {
  const query = qs.stringify({
    _where: {
      _or: [
        { title_contains: term },
        { description_contains: term },
        { content_contains: term },
      ],
    },
  });

  const { data: articles } = await axios.get(`${API_URL}/articles?${query}`);

  return {
    props: { articles },
  };
};
