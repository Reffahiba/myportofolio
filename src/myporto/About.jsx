const About = () => {
    return (
        <section id="about" className="py-24 px-4 max-w-3xl mx-auto text-center my-4 glassmorphism-card">
            <h2 className="text-3xl font-bold">Tentang Saya</h2>
            <p className="text-xl text-white leading-relaxed mt-5 mb-20">
                Saya adalah mahasiswa aktif di Universitas Lampung jurusan Informatika.
                Saya sangat tertarik dalam pengembangan web, pembelajaran mesin, serta desain UI/UX.
                Saya senang menggabungkan kreativitas dan teknologi untuk menciptakan solusi yang bermanfaat.
            </p>

            <p className="text-xl text-white my-4 font-bold">Connect with me in:</p>
            <div className="flex justify-center space-x-9 text-3xl">
                <a href="https://github.com/Reffahiba" target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
                    <i className="fab fa-github text-white hover:text-black"></i>
                </a>

                <a href="www.linkedin.com/in/reffa-hibatullah" target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
                    <i className="fab fa-linkedin text-white hover:text-blue-600"></i>
                </a>

                <a href="mailto:raffahibatullah888@gmail.com" className="transition hover:scale-110">
                    <i className="fas fa-envelope text-white hover:text-red-600"></i>
                </a>
            </div>
        </section>
    );
};

export default About;
