import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

type PostPage = {
  title: string;
  description: string;
  content: string;
  link: string;
};

export default function Post({ title, description, content, link }: PostPage) {
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
    <div ref={ref}>
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={animationControl}
        className="overflow-hidden transition-shadow duration-300 bg-white rounded"
      >
        <Link href={link}>
          <a>
            <img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
        </Link>
        <div className="py-5">
          <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
            13 Jul 2020
          </p>
          <Link href={link}>
            <a
              aria-label="Article"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-teal-700"
            >
              <p className="text-2xl font-bold leading-5">{title}</p>
            </a>
          </Link>
          <p className="mb-4 max-w-prose truncate text-gray-700">
            {description}
          </p>
          <div className="flex space-x-4">
            <Link href={link}>
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-teal-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-teal-700"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">7.4K</p>
              </a>
            </Link>
            <Link href={link}>
              <a
                href="/"
                aria-label="Comments"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-teal-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-teal-700"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">81</p>
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
