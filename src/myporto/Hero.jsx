import React, { useState, useEffect } from 'react';
import logoReffa from "../assets/Reffa Hibatullah.jpeg"

const phrases = [
    "Computer Science Student",
    "Full Stack Developer",
    "UI/UX Desainer" // Anda bisa menambahkan lebih banyak frasa
];

const TYPING_SPEED = 90; // Kecepatan mengetik (ms per karakter)
const DELETING_SPEED = 50; // Kecepatan menghapus (ms per karakter)
const PAUSE_TIME = 600; // Waktu jeda setelah selesai mengetik/menghapus (ms)

const Hero = () => {
    const [currentText, setCurrentText] = useState("");
    const [textIndex, setTextIndex] = useState(0); // Indeks frasa dalam array phrases
    const [charIndex, setCharIndex] = useState(0); // Indeks karakter dalam frasa saat ini
    const [isDeleting, setIsDeleting] = useState(false); // Mode mengetik atau menghapus

    useEffect(() => {
        const handleTyping = () => {
            const fullText = phrases[textIndex];

            if (isDeleting) {
            // Mode menghapus
            if (charIndex > 0) {
                // Hapus karakter satu per satu
                setCurrentText(fullText.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            } else {
                // Selesai menghapus, beralih ke mode mengetik untuk frasa berikutnya
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % phrases.length); // Beralih ke frasa berikutnya (loop)
            }
            } else {
            // Mode mengetik
            if (charIndex < fullText.length) {
                // Ketik karakter satu per satu
                setCurrentText(fullText.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            } else {
                // Selesai mengetik, jeda lalu beralih ke mode menghapus
                setTimeout(() => setIsDeleting(true), PAUSE_TIME);
            }
            }
        };

        // Atur kecepatan interval berdasarkan mode (mengetik atau menghapus)
        const typingSpeed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
        const timer = setTimeout(handleTyping, typingSpeed);

        // Cleanup function untuk membersihkan timer saat komponen unmount atau update
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, textIndex]);


    return (
        <section id="hero" className="mt-20 flex flex-col justify-center items-center text-center p-4">
            <img src={logoReffa} alt="foto reffa" className="w-60 h-100 rounded-full border-2 border-white mb-2" />
            <h1 className="text-5xl md:text-3xl font-semibold my-2 text-white drop-shadow-lg">
                Hai, My Name is Reffa Hibatullah
            </h1>
            <p className="text-xl md:text-xl text-gray-200 drop-shadow mt-2">
                I am a <span className="font-bold">{currentText}</span><span className="typing-cursor"></span>
            </p>
        </section>
    );
};

export default Hero;
