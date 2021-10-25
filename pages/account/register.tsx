import Layout from "../../components/Layout";
import Link from "next/link";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

export default function RegisterPage() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const { register, error } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("password didnt match");
    } else {
      register({ email, username: name, password, confirmPassword });
    }
  };
  return (
    <Layout>
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
          Sign up
        </h2>

        <form
          className="max-w-lg border rounded-lg mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label
                htmlFor="email"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Email
              </label>
              <input
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-teal-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="text"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Name
              </label>
              <input
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-teal-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-teal-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Password again
              </label>
              <input
                name="confirmPassword"
                required
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-teal-300 rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <button className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
              Sign up
            </button>
          </div>

          <div className="flex justify-center items-center bg-gray-100 p-4">
            <p className="text-gray-500 text-sm text-center">
              Have an account?{" "}
              <Link href="/account/login">
                <a className="text-teal-500 hover:text-teal-600 active:text-teal-700 transition duration-100">
                  Login
                </a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
}
