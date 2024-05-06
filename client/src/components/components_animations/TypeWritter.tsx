import { motion } from "framer-motion";

interface TypewriterProps {
    text: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, ...rest }) => {
    const sentenceVariants = {
        hidden: {},
        // change staggerChildren variable to speed up or slow down typing.
        visible: { opacity: 1, transition: { staggerChildren: 0.01 } },
    };

    const letterVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
    };

    return (

        <motion.p
            key={text}
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            {...rest}
        >
            {text.split("").map((char, i) => (
                <motion.span key={`${char}-${i}`} variants={letterVariants}>
                    {char}
                </motion.span>
            ))}
        </motion.p>
    );
};

