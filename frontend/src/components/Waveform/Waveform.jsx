import React from "react";
import { motion } from "framer-motion";

const waveBars = [4, 7, 12, 18, 12, 22, 15, 9, 19, 12, 7, 17, 9, 14, 7, 12, 17, 9, 7, 11];

const Waveform = React.memo(function Waveform() {
    return (
        <div className="flex items-center gap-[3px] mt-3" style={{ height: 22 }}>
            {waveBars.map((h, i) => (
                <motion.span
                    key={i}
                    className="block rounded-full bg-[#6BA539]"
                    style={{ width: 3, height: h, transformOrigin: "center" }}
                    animate={{ scaleY: [1, 1.9, 0.55, 1.5, 1] }}
                    transition={{
                        duration: 1.3,
                        repeat: Infinity,
                        delay: i * 0.065,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
});

export default Waveform;
