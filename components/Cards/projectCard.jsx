import { IoIosApps } from "react-icons/io";
import { BiBot, BiPackage } from "react-icons/bi";
import { BsWindowSidebar } from "react-icons/bs";
import { FcFolder } from "react-icons/fc";
import { motion } from "framer-motion";

export default ({
    name,
    description,
    to,
    type,
}) => {
    return (
        <a target="_blank" href={to} className="flex flex-wrap">
            <motion.div
                className="bg-blue-gray-200 dark:bg-blue-gray-800 w-full cursor-pointer shaodow-xl p-4 rounded-lg space-y-2"
                variants={{
                    hidden: {
                        y: 20,
                        opacity: 0,
                    },
                    visible: {
                        y: 0,
                        opacity: 1,
                    },
                }}
            >
                <div className="w-full flex items-center justify-start">
                    {
                        type === 'discord_server' ? <IoIosApps className="w-5 h-5" /> : type === 'discord_bot' ? <BiBot className="w-5 h-5" /> : type === 'website' ? <BsWindowSidebar className="w-5 h-5" /> : type === 'package' ? <BiPackage className="w-5 h-5" /> : type === 'repository' ? <FcFolder className="w-5 h-5" /> : null
                    }
                    <h1 className="font-semibold" style={{transform: "translateX(10px)"}}>{name}</h1>
                </div>
                <p className="w-full text-base mb-12">{description}</p>
            </motion.div>
        </a>
    );
};
