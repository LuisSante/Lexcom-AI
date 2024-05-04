import { motion } from "framer-motion";

export const CircleLoader = () => {
    return (
        <div
            style={{
                position: "relative",
                width: "3rem",
                height: "3rem",
                boxSizing: "border-box"
            }}
        >
            <motion.span
                style={{
                    display: "block",
                    width: "2rem",
                    height: "2rem",
                    border: "0.2rem solid #e9e9e9",
                    borderTop: "0.2rem solid #000000",
                    borderRadius: "50%",
                    position: "absolute",
                    boxSizing: "border-box",
                }}
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 2
                }}
            />
        </div>
    )
}