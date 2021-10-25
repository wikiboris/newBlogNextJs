import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Price() {
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
    <div ref={ref} className="pb-10 sm:pb-8 lg:pb-16 mb-12 sm:mb-8 lg:mb-28">
      <motion.div initial={{ y: -300, opacity: 0 }} animate={animationControl}>
        <h2 className="text-black text-3xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">
          Our plans for you
        </h2>
      </motion.div>
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={animationControl}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 md:mb-8"
      >
        <div className="flex flex-col border rounded-lg p-4 pt-6">
          <div className="mb-12">
            <div className="text-gray-800 text-2xl font-bold text-center mb-2">
              Free
            </div>

            <p className="text-gray-500 text-center mx-auto px-8 mb-8">
              For individuals and organizations who want to try our system
            </p>

            <div className="space-y-2">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 flex-shrink-0 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">1.000 MB file storage</span>
              </div>

              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 flex-shrink-0 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">
                  2.000 MB bandwidth per month
                </span>
              </div>

              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 flex-shrink-0 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">200 tasks per month</span>
              </div>

              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 flex-shrink-0 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">Comunity support</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-auto">
            <div className="flex justify-center items-end gap-1">
              <span className="self-start text-gray-600">$</span>
              <span className="text-4xl text-gray-800 font-bold">0</span>
              <span className="text-gray-500">per user/month</span>
            </div>

            <a
              href="#"
              className="block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-teal-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Join for free
            </a>
          </div>
        </div>

        <div className="flex flex-col border-2 border-teal-500 rounded-lg relative p-4 pt-6">
          <div className="mb-12">
            <div className="flex justify-center absolute -top-3 inset-x-0">
              <span className="h-6 flex justify-center items-center bg-teal-500 text-white text-xs font-semibold tracking-widest uppercase rounded-full px-3 py-1">
                most popular
              </span>
            </div>

            <div className="text-gray-800 text-2xl font-bold text-center mb-2">
              Team
            </div>

            <p className="text-gray-500 text-center mx-auto px-8 mb-8">
              Avanced feaures for Individuals and organizations
            </p>

            <div className="space-y-2">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 flex-shrink-0 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">Unlimited file storage</span>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 flex-shrink-0 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">10 GB bandwidth per month</span>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 flex-shrink-0 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">10.000 tasks per month</span>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 flex-shrink-0 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">Email support</span>
              </div>

              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 flex-shrink-0 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">100 Webhooks</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-auto">
            <div className="flex justify-center items-end gap-1">
              <span className="self-start text-gray-600">$</span>
              <span className="text-4xl text-gray-800 font-bold">19</span>
              <span className="text-gray-500">per user/month</span>
            </div>

            <a
              href="#"
              className="block bg-teal-500 hover:bg-teal-600 active:bg-teal-700 focus-visible:ring ring-teal-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Continue with Team
            </a>
          </div>
        </div>
        <div className="flex flex-col border rounded-lg p-4 pt-6">
          <div className="mb-12">
            <div className="text-gray-800 text-2xl font-bold text-center mb-2">
              Enterprise
            </div>

            <p className="text-gray-500 text-center mx-auto px-8 mb-8">
              Maximum performace for organisations
            </p>

            <div className="space-y-2">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 flex-shrink-0 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">Unlimited file storage</span>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 flex-shrink-0 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">
                  Unlimited bandwidth per month
                </span>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 flex-shrink-0 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">1.000.000 tasks per month</span>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 flex-shrink-0 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">Email and phone support</span>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 flex-shrink-0 text-teal-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">Unlimited Webhooks</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-auto">
            <div className="flex justify-center items-end gap-1">
              <span className="self-start text-gray-600">$</span>
              <span className="text-4xl text-gray-800 font-bold">49</span>
              <span className="text-gray-500">per user/month</span>
            </div>

            <a
              href="#"
              className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-teal-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </motion.div>

      <div className="text-gray-500 text-sm sm:text-base text-center">
        Need help deciding?{" "}
        <a
          href="#"
          className="text-gray-500 hover:text-teal-500 active:text-teal-600 underline transition duration-100"
        >
          Get in touch
        </a>
        .
      </div>
    </div>
  );
}
