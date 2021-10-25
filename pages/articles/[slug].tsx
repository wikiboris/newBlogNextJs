import Layout from "../../components/Layout";
import { API_URL } from "../../config";
import { GetServerSideProps } from "next";
import axios from "axios";
import DOMPurify from "isomorphic-dompurify";

export default function PostPage({ data }) {
  const content = DOMPurify.sanitize(data.content);

  console.log(data);
  return (
    <Layout>
      <div className="max-w-screen-md px-4 md:px-4 mx-auto mb-24">
        <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-9">
          {data.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params: { slug },
}) => {
  const { data } = await axios.get(`${API_URL}/articles?slug=${slug}`);

  return {
    props: { data: data[0] },
  };
};
