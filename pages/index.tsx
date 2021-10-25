import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Price from "../components/Price";
import axios from "axios";
import { API_URL } from "../config";
import Post from "../components/Post";
import { GetServerSideProps } from "next";

type ServerSideProps = {
  data: {}[];
};

type PostData = {
  title: string;
  slug: string;
  description: string;
  content: string;
};

const IndexPage = ({ data }: ServerSideProps) => {
  const { inView, entry, ref } = useInView();
  const animationControl = useAnimation();

  if (inView) {
    animationControl.start({
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: 0.5,
      },
    });
  }

  return (
    <Layout>
      <Hero />
      <Price />
      <div ref={ref} className="pb-10 sm:pb-8 lg:pb-12 sm:mb-8 lg:mb-12">
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          animate={animationControl}
          className="mb-10 md:mb-16"
        >
          <h2 className="text-black text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-6">
            Blog
          </h2>

          <p className="max-w-screen-md text-gray-800 md:text-lg text-center mx-auto">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </motion.div>
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {data.map((post: PostData) => (
            <Post
              title={post.title}
              link={"articles/" + post.slug}
              description={post.description}
              content={post.content}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get(`${API_URL}/articles?_limit=3`);

  return {
    props: { data },
  };
};
