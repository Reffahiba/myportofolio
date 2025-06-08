const Projects = () => {
    const projectsData = [
        {
            title: "Tugas 1",
            description:
                "Tokoh Perintis Grafika Komputer",
            resources: [
                {
                    type: "Word dan PPT",
                    url: "https://drive.google.com/drive/folders/1QE-FBd02pavTr8iuJ-o3_2fvKFBOhHjH?usp=sharing",
                    label: "Bahan Materi",
                },
                {
                    type: "YouTube",
                    url: "https://youtu.be/iSglB5hd3n8?si=08KLrfe6yztKnU3W",
                    label: "Video Penjelasan",
                },
            ],
        },
        {
            title: "Tugas 2",
            description:
                "Algoritma Pembentukan Garis",
            resources: [
                {
                    type: "PDF",
                    url: "https://drive.google.com/drive/folders/1wp-v9Yipgusib15OkrGtFq0_RrYoobxN?usp=sharing",
                    label: "Hasil Implementasi Javascript",
                },
            ],
        },
        {
            title: "Tugas 3",
            description:
                "Algoritma Pembentukan Lingkaran",
            resources: [
                {
                    type: "PDF",
                    url: "https://drive.google.com/drive/folders/1oRhfwa60dA61eU8TBw0xzR4IXQQNPG-K?usp=sharing",
                    label: "Hasil Implementasi Javascript",
                },
            ],
        },
        {
            title: "Tugas 4",
            description:
                "Algoritma Pembentukan Kurva",
            resources: [
                {
                    type: "PDF",
                    url: "https://drive.google.com/drive/folders/1Bykm2zfWVD8mMUegErMPNdOSXFKGjc6w?usp=sharing",
                    label: "Hasil Implementasi Javascript",
                },
            ],
        },
        {
            title: "Kuis 1",
            description:
                "Persamaan Misteri",
            resources: [
                {
                    type: "Youtube",
                    url: "https://youtu.be/xaq5_emcuds?si=xA6Yv9EzESsqf0S5",
                    label: "Bahan Materi",
                },
                {
                    type: "YouTube",
                    url: "https://youtu.be/DReIFy-BD64?si=coy1a-JxRErT7Nkw",
                    label: "Video Penjelasan",
                },
            ],
        },
        {
            title: "Kuis 2",
            description:
                "Transformasi 2D",
            resources: [
                {
                    type: "PPT",
                    url: "https://drive.google.com/drive/folders/1YRGRA87h5qaqqYNprILsa_0x7ud_5-8V?usp=sharing",
                    label: "Bahan Materi",
                },
                {
                    type: "YouTube",
                    url: "https://youtu.be/k1FYc87ioPk?si=Ccgwmk0yuTmXiWLA",
                    label: "Video Penjelasan",
                },
            ],
        },
        {
            title: "Kuis 3",
            description:
                "Line Clipping Algorithm",
            resources: [
                {
                    type: "PPT",
                    url: "https://drive.google.com/drive/folders/1R65rYan6b0ApjyXDoXRs8TTvPrQJLDaF?usp=sharing",
                    label: "Bahan Materi",
                },
                {
                    type: "YouTube",
                    url: "https://youtu.be/FArYZSSVWSA?si=_XT1cbGW7DsOK2qW",
                    label: "Video Penjelasan",
                },
            ],
        },
        {
            title: "Kuis 4",
            description:
                "Polygon Clipping Algorithm",
            resources: [
                {
                    type: "PPT",
                    url: "https://drive.google.com/drive/folders/1wN6kE8xhDABow-ryfiXnY2M7VdHwyJg0?usp=sharing",
                    label: "Bahan Materi",
                },
                {
                    type: "YouTube",
                    url: "https://youtu.be/Z4pgkQG4nVM?si=yYdlYs9tDuIYzzoh",
                    label: "Video Penjelasan",
                },
            ],
        },
    ];

    return (
        <section id="projects" className="py-2 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Daftar Tugas</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projectsData.map(({ title, description, resources }, idx) => (
            <div key={idx} className="p-6 rounded-xl shadow-lg glassmorphism-card hover-scale-effect">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="mb-4">{description}</p>
                <ul className="list-disc list-inside space-y-1">
                {resources.map(({ type, url, label }, i) => (
                    <li key={i}>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white hover:underline"
                    >
                        {label} ({type})
                    </a>
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Projects;
