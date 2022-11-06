import png from "../png.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function SignUp() {
    const router = useNavigate();
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [neighborhoodAssociation, setNeighbourhoodAssociation] = useState("");
    const [username, setUserName] = useState("");
    const [county, setCounty] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const clickSubmit = (e) => {
        e.preventDefault();
        if (
            !firstname ||
            !lastname ||
            !neighborhoodAssociation ||
            !username ||
            !county ||
            !password
        ) {
            toast("Fill all the fields", {
                position: "bottom-left",
                type: "warning",
                closeOnClick: true,
                progress: null,
            });
            return;
        } else if (password !== confirmPassword) {
            toast("Passwords dont match", {
                position: "bottom-left",
                type: "warning",
                closeOnClick: true,
                progress: null,
            });
            return;
        } else {
            axios.post('https://vast-wildwood-07594.herokuapp.com/api/resident/', {
                first_name: firstname,
                last_name: lastname,
                neighborhood_association: neighborhoodAssociation,
                county: county,
                password: password,
                username: username,  
              })
              .then(function (response) {
                console.log(response);
                toast("We've successfully created your account", {
                    position: "bottom-left",
                    type: "success",
                    closeOnClick: true,
                    progress: null,
                });
                router("/dashboard")
              })
              .catch(function (error) {
                console.log(error);
                toast("Something went wrong", {
                    position: "bottom-left",
                    type: "error",
                    closeOnClick: true,
                    progress: null,
                });
              });
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="flex justify-center min-h-screen">
                <div
                    className="hidden bg-cover lg:block lg:w-2/5"
                    style={{ backgroundImage: `url(${png})` }}
                ></div>

                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full">
                        <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                            Get your free account now.
                        </h1>

                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                            Let's get you all set up so you can verify your
                            personal account and begin setting up your profile.
                        </p>

                        <form
                            className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
                            onSubmit={clickSubmit}
                        >
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={firstname}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Snow"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={lastname}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    Neighborhood Association
                                </label>
                                <input
                                    type="text"
                                    placeholder="Neighborhood Association"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={neighborhoodAssociation}
                                    onChange={(e) =>
                                        setNeighbourhoodAssociation(
                                            e.target.value
                                        )
                                    }
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    Username
                                </label>
                                <input
                                    placeholder="JohnSnow"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={username}
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    County
                                </label>
                                <input
                                    placeholder="Enter county name"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={county}
                                    onChange={(e) =>
                                        setCounty(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    Confirm password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                            </div>

                            <button
                                className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                type="submit"
                            >
                                <span>Sign Up </span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 rtl:-scale-x-100"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
