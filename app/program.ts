export type Program = {
    program: string;
    short_description: string;
    instructor: string;
    time: string;
    date_time: string;
    location: string;
    application_link: string;
};

export const programs = [
    {
        program: "Mission-Driven Money",
        short_description: "Practical skills to fund your social cause, advocacy organization, or policy project.",
        instructor: "Regan Ferrell",
        time: "Tuesdays 6:30 pm - 8:30 pm",
        date_time: "9/2 to 9/23",
        location: "East Williamsburg",
        application_link: "https://forms.gle/dJgmg5HwaNwhT6qQ8"
    },
    {
        program: "Systems Programming",
        short_description: "Whirlwind tour of systems software on Linux: filesystems, networking, OS interfaces, low-level programming.",
        instructor: "Ian Fisher",
        time: "Tuesdays 7pm – 9pm",
        date_time: "Sep. 2 to Nov. 4",
        location: "Chinatown, Manhattan",
        application_link: "https://docs.google.com/forms/d/e/1FAIpQLSdjsv-ulO383yL8OQ1rDYLHQKHQbSE7NtFPU0ny0kdxAyMDiA/viewform?usp=header"
    },
    {
        program: "Making a Lamp: 3D Modeling, 3D Printing & Design",
        short_description: "Introductory 9-week course in 3D modeling, 3D printing, sewing, and soldering by making a lamp.",
        instructor: "Jules and Mel",
        time: "Mondays 6:30pm - 8:30pm",
        date_time: "Sep. 8 to Nov. 3",
        location: "Bushwick, Jefferson L Stop",
        application_link: "https://docs.google.com/forms/d/e/1FAIpQLSeTmaYyJlrkcxgmjneI8GrjPEEAeBQ7UOOlMUdFtjtulqDZIw/viewform?usp=dialog"
    },
    {
        program: "Buddhist Theory and Practice",
        short_description: "Explore Buddhism’s approach to suffering, meaning, and the path to cessation.",
        instructor: "Sasha Manu",
        time: "Mondays 7pm - 9pm",
        date_time: "09/08 to 10/13",
        location: "Fort Greene",
        application_link: "https://docs.google.com/forms/d/e/1FAIpQLSd-CG2MF91CzcOZtLpu3HDk8a9jZ2FXk-f4kE8fZEDuscd2BA/viewform"
    },
    {
        program: "Exploring Bodywork",
        short_description: "Learn massage and bodywork through direct practice — giving and receiving.",
        instructor: "Ulysses Chuang and Samson Zhilyaev",
        time: "Wednesdays 7-9 pm",
        date_time: "Sep. 10 to Nov. 12 (no class Oct. 29)",
        location: "Merlins Place, 248 Mckibbin Street",
        application_link: "https://forms.gle/1Bahb4qfYjSH4Dzq7"
    },
    {
        program: "Tarotizans — Make your own Tarot Deck",
        short_description: "Use AI image-generation to create a Tarot deck; mix visual art, tech, storytelling, and depth psychology.",
        instructor: "Ulysses Chuang",
        time: "Thursdays 7-9 pm",
        date_time: "Sep. 11 to Oct. 23",
        location: "Merlins Place, 248 Mckibbin Street",
        application_link: "https://docs.google.com/forms/d/e/1FAIpQLSclyhVr-fs_TsjEwrMFxCRbACBVxGpThZ0gn8T3uKWRwMFssw/viewform?usp=preview"
    },
    {
        program: "Intuitive Movement",
        short_description: "Explore somatic practices, experimental theater, Feldenkrais, Qi Gong, and writing to connect with your body.",
        instructor: "Clara Wiest",
        time: "Tuesdays 6pm-7:15pm",
        date_time: "Sep. 16 to Nov. 4",
        location: "Ridgewood, Queens",
        application_link: "https://forms.gle/KTzKyhzwruJYQVqx8"
    },
    {
        program: "Intro to Filmmaking",
        short_description: "Learn to write, shoot, direct, and edit an original film.",
        instructor: "Jina Zhao",
        time: "Wednesdays 6:30pm-9pm",
        date_time: "Sep. 24 to Nov. 12 (skip 11/5)",
        location: "Bed Stuy",
        application_link: "https://docs.google.com/forms/d/e/1FAIpQLSevNHAx7qrQKwbaJP1VsLURKZCUGXb_5cO_S7FqgKevkRL3_w/viewform?usp=header"
    },
    {
        program: "The Brothers Karamazov Close Reading",
        short_description: "Eight-week deep dive into Dostoevsky’s novel; faith, morality, family, and meaning.",
        instructor: "Elena N",
        time: "Tuesdays 7pm-9pm",
        date_time: "Oct. 7 to Dec. 2 (skip Thanksgiving)",
        location: "Neighbor NYC, 176 9th Ave, NY",
        application_link: "https://docs.google.com/forms/d/e/1FAIpQLSf3lW4UM9E3FfwGwa_XvuDP7eBtBChGsnPv0KmAcu7mYB6pCg/viewform?usp=header"
    },
    {
        program: "Intro to Montessori Education",
        short_description: "3-week intensive on Montessori pedagogy: ideas, practice, landscape, and future.",
        instructor: "Bea F",
        time: "Tuesdays & Thursdays 6pm-8pm",
        date_time: "Oct. 13 to 31 (6 sessions)",
        location: "Williamsburg",
        application_link: "https://docs.google.com/forms/d/e/1FAIpQLSdjuNWqR9cKl3I21J3LSlSGwvGtG5exbdeQUg0H4JXyhaIYrQ/viewform?usp=sharing"
    },
    {
        program: "Freestyle Cooking 101",
        short_description: "Build a lifelong cooking practice while connecting with new friends.",
        instructor: "Eric L",
        time: "Wednesdays 6:30pm-9pm",
        date_time: "Oct. 15 to Nov. 5 + Sunday field trip",
        location: "McKibben Lofts",
        application_link: "https://docs.google.com/forms/d/e/1FAIpQLSfg69XuhGg-XfasEL71kmdg-NAm8HdqyFB4d318E36JCup36A/viewform"
    },
    {
        program: "Computational Biology",
        short_description: "Basic intro to computational biology for programmers. No prior bio knowledge needed.",
        instructor: "Mike Saint-Antoine",
        time: "Sat & Sun 10am-5pm (intensive)",
        date_time: "Oct. 18 to Oct. 19",
        location: "Chinatown",
        application_link: "https://docs.google.com/forms/d/1e-DKp5EkigG7_w9LHJeAMwouSliNrk8oZc0_ewHt6lw"
    },
    {
        program: "Butoh: Into the Depth",
        short_description: "Five-week Butoh dance course with performance; movement meditation and transformation.",
        instructor: "Vangeline",
        time: "Wednesdays 6pm-9pm",
        date_time: "Oct. 22 to Nov. 19",
        location: "Vangeline Theater Studios, Gowanus",
        application_link: "https://www.vangeline.com/calendar/2025/3/12/butoh-into-the-depth-5-week-course-with-vangeline-with-performance-march-12-399gk-4t88b-cbm9d-bnm8n-39h4m-wgl3f-k9n2c"
    },
    {
        program: "EDM Production 101",
        short_description: "Learn EDM production from scratch in Ableton. No music experience required.",
        instructor: "David Shimel",
        time: "Mon & Wed 6:30pm-8:30pm (+ Thu Zoom optional)",
        date_time: "Oct. 27 to Nov. 19",
        location: "Bushwick (in-person) + Remote",
        application_link: "https://forms.gle/w5HkT5SwZ3FRxdKYA"
    },
    {
        program: "How to Make a Planter: 3D Modeling for 3D Printing",
        short_description: "One-day 3D modeling & printing workshop; design and take home a planter.",
        instructor: "Jules and Mel",
        time: "Saturday 10:30am-5:30pm",
        date_time: "Nov. 8",
        location: "Bushwick, Jefferson L Stop",
        application_link: "https://forms.gle/bMsRdyCuKyzrjAGGA"
    },
    {
        program: "Relational Mindfulness Practices for Authentic Connection",
        short_description: "Explore present-moment connection through awareness, embodiment, and communication.",
        instructor: "Mercer Shavelson",
        time: "Tuesdays 6:30pm-9pm",
        date_time: "Nov. 11 to Jan. 13",
        location: "East Williamsburg",
        application_link: "https://docs.google.com/forms/d/e/1FAIpQLSf8QqnhZk42sSi6L0SgQmKbTamMm3EmXHYgvY4hgYwIVdzz1g/viewform"
    },
    {
        program: "Fractal Dev Bootcamp",
        short_description: "3-month immersive coding bootcamp for startup engineers.",
        instructor: "Andrew Rose & Jake Zegil",
        time: "Weekdays 9am-7pm + Sat 10am-4pm",
        date_time: "Sep. 22 to Dec. 20",
        location: "Fractal Tech Hub, 111 Conselyea St, Brooklyn",
        application_link: "https://fractalbootcamp.com/"
    },
    {
        program: "Buildathon: Weekly Tech Building Community",
        short_description: "Weekly build night & community for momentum, accountability, and peer help.",
        instructor: "Madeline Griswold",
        time: "Mondays 7pm-9:30pm",
        date_time: "Sep. 15 to Oct. 20",
        location: "Williamsburg",
        application_link: "https://forms.gle/iYXaaiMy1ePLsaGw8"
    }
];
