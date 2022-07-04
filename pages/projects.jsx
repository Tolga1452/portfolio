import { useRef } from "react";
import { motion } from "framer-motion";

import ProjectCard from "../components/Cards/projectCard";
import MainLayout from "../layouts/mainLayout";
import config from "../config";

export default function Repositories() {
    const searchInput = useRef(null);
    const data = config.projects;

    return (
        <MainLayout>
            <div className="space-y-0.5">
                <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-alignment">
                    Projects
                </h1>
                <p className="text-md sm:text-lg md:text-xl text-alignment">
                    On this page you can search and reach the projects I have developed.
                </p>
            </div>
            <div className="flex space-x-1 justify-center">
                <input
                    className={`${""
                        } px-3 py-2 w-full rounded-md bg-light-900 shadow-xl border-3 border-light-500 text-neutral-700 dark:(border-dark-100 bg-dark-700 text-neutral-100) focus:(outline-none border-light-600 dark:border-dark-200)`}
                    ref={searchInput}
                />
                <button
                    className={`${""
                        } shadow-xl rounded-md px-3 py-2 bg-green-500 text-green-100`}
                >
                    Search
                </button>
            </div>
            <>
                <motion.div
                    className="grid gap-4 md:grid-cols-3"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                        hidden: {
                            opacity: 1,
                            scale: 0,
                        },
                        visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                delayChildren: 0.3,
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                >
                    {
                        data
                            .map((repo, i) => <ProjectCard key={i} {...repo} />)}
                </motion.div>
            </>
        </MainLayout>
    );
}