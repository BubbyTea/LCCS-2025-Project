// Array of sections for dynamic tab creation
const sections = [
{
    title: "General Use",
    content: `
        <h2>Introduction to General Use Laptops</h2>
        <p>General use laptops are perfect for everyday tasks such as browsing the internet, watching videos, streaming music, handling light productivity tasks, and staying connected with friends and family. These laptops are not meant for heavy gaming or high-end professional applications but should be reliable, affordable, and capable of handling day-to-day activities smoothly.</p>

        <h2>1. Storage</h2>
        <p>For general use, the storage needs are less demanding compared to other use cases. A solid-state drive (SSD) is highly recommended for fast boot times and quicker file access, ensuring your laptop performs well over time.</p>
        <ul>
            <li><strong>Recommended Storage:</strong> 256GB to 512GB SSD – This provides ample space for storing documents, photos, music, videos, and basic applications while maintaining speed and performance.</li>
        </ul>

        <h2>2. CPU Brand</h2>
        <p>For general use, you don’t need the most powerful processor available, but you do need one that can handle multiple browser tabs, streaming, and basic office tasks without lag.</p>
        <ul>
            <li><strong>Intel:</strong> Intel Core i3 or i5 – These processors are ideal for general use, offering a solid balance of performance for everyday tasks.</li>
            <li><strong>AMD:</strong> AMD Ryzen 3 or Ryzen 5 – These CPUs also provide great value and are good options for general use laptops, delivering fast performance without draining your budget.</li>
        </ul>

        <h2>3. Weight</h2>
        <p>General use laptops should be lightweight and portable. Whether you're using it at home, in a café, or on the go, a laptop that is easy to carry around is a major plus.</p>
        <ul>
            <li><strong>Recommended Weight:</strong> Between 1.2kg and 1.5kg – This weight range offers the best combination of portability and performance for general use laptops.</li>
        </ul>

        <h2>4. Price</h2>
        <p>Since general use laptops don’t require top-tier performance or features, they tend to be more affordable than other types of laptops. However, it’s still important to find one that provides good value without compromising essential features like speed and durability.</p>
        <ul>
            <li><strong>Recommended Price:</strong> $400 – $800 – This price range covers a wide range of options, offering good value without going over budget.</li>
        </ul>

        <h2>5. RAM</h2>
        <p>8GB of RAM is typically enough for general use, allowing smooth multitasking between web browsing, streaming, and productivity apps. If you plan to keep many tabs open or run more applications simultaneously, consider upgrading to 16GB.</p>
        <ul>
            <li><strong>Recommended RAM:</strong> 8GB – This is ideal for multitasking and general tasks like browsing, document editing, and media consumption.</li>
        </ul>

        <h2>6. GPU (Graphics Card)</h2>
        <p>General use laptops don’t need a dedicated GPU unless you're doing more graphically intensive tasks. Integrated graphics are sufficient for everyday activities like watching videos and light photo editing.</p>
        <ul>
            <li><strong>Recommended GPU:</strong> Integrated graphics – Intel Iris Xe or AMD Vega integrated GPUs are more than enough for general use like streaming, browsing, and basic media tasks.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>When selecting a general use laptop, it’s essential to focus on a balance of storage, CPU performance, weight, price, RAM, and GPU. A laptop that can easily handle web browsing, media consumption, and light productivity tasks will provide a smooth and enjoyable experience for everyday use.</p>
    `
},

{
    title: "School & Work",
    content: `
        <h2>Introduction to School and Work Laptops</h2>
        <p>Whether you're a student heading to class or a professional working remotely or in an office, having the right laptop can make a big difference. Both school and work laptops need to strike a balance between performance, portability, and price. Let’s dive into the essential features for laptops that are perfect for both educational and professional purposes.</p>

        <h2>1. Storage</h2>
        <p>Both school and work laptops require sufficient storage to handle files, software, and documents. An SSD is preferred over a traditional hard drive for speed and reliability, ensuring quicker file access and boot times. Depending on your needs, you can opt for more or less storage.</p>
        <ul>
            <li><strong>Recommended Storage:</strong> 256GB to 512GB SSD – This offers enough space for school assignments, work files, software, and media while providing excellent speed and reliability.</li>
        </ul>

        <h2>2. CPU Brand</h2>
        <p>The CPU is the heart of your laptop. For both school and work, you need a processor that can handle multitasking, running office applications, browsing, and more. Both Intel and AMD offer solid options for school and work laptops.</p>
        <ul>
            <li><strong>Intel</strong>: Intel Core i5 and i7 processors are perfect for handling educational software, office suites, and multitasking without slowdown.</li>
            <li><strong>AMD</strong>: AMD Ryzen 5 and Ryzen 7 processors offer excellent performance and are often more affordable, making them great for budget-conscious students and professionals.</li>
        </ul>

        <h2>3. Weight</h2>
        <p>Portability is a key factor for both school and work laptops. A lightweight laptop is easier to carry around, whether it’s to school, meetings, or on business trips. Look for a laptop under 1.5kg to make carrying it around more convenient.</p>
        <ul>
            <li><strong>Recommended Weight:</strong> Between 1.2kg and 1.5kg – This provides the best balance between portability and usability.</li>
        </ul>

        <h2>4. Price</h2>
        <p>While both school and work laptops need to offer solid performance, you don’t have to break the bank. There are affordable laptops that perform well for both tasks, especially if you don’t need specialized hardware for heavy applications.</p>
        <ul>
            <li><strong>Recommended Price:</strong> $600 – $1,200 – This range offers a good balance between affordability and high-end features for day-to-day tasks.</li>
        </ul>

        <h2>5. RAM</h2>
        <p>Having enough RAM ensures smooth performance, especially when multitasking between different apps, documents, and browser tabs. A laptop with at least 8GB of RAM is the minimum for both school and work tasks.</p>
        <ul>
            <li><strong>Recommended RAM:</strong> 8GB to 16GB – 8GB is perfect for standard school and work tasks, while 16GB is ideal if you're running more demanding applications or have many tabs open simultaneously.</li>
        </ul>

        <h2>6. GPU (Graphics Card)</h2>
        <p>For general school and work use, integrated graphics (such as Intel Iris Xe or AMD Vega) are usually sufficient unless you’re working with graphic design software, video editing, or gaming. A dedicated GPU is not necessary unless you're working with heavy visual media.</p>
        <ul>
            <li><strong>Recommended GPU:</strong> Integrated graphics – For school and typical office work, integrated GPUs are sufficient for document editing, video conferencing, and casual media viewing.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>When choosing a laptop for school or work, focusing on storage, CPU, weight, price, RAM, and GPU will help you find the right balance between performance, portability, and value. Whether you're taking notes in class or running professional applications, these features will ensure you have a smooth experience.</p>
    `
},

{
    title: "Gaming",
    content: `
        <h2>Introduction to Gaming Laptops</h2>
        <p>Gaming laptops are built to handle high-performance tasks, providing the power needed for immersive gaming experiences. These laptops are equipped with powerful CPUs, GPUs, and large amounts of RAM to handle demanding games and multitasking, ensuring smooth gameplay even with high settings.</p>

        <h2>1. Storage</h2>
        <p>When it comes to gaming, storage is crucial for installing games, keeping save files, and ensuring fast loading times. SSDs are essential for quick game load times, but a combination of SSD and HDD is often used for a balance between speed and capacity.</p>
        <ul>
            <li><strong>Recommended Storage:</strong> 512GB SSD or 1TB HDD + 512GB SSD – An SSD ensures fast load times and quick booting, while an additional HDD provides large storage for games and other files.</li>
        </ul>

        <h2>2. CPU Brand</h2>
        <p>For gaming, a powerful CPU is necessary to handle the complex calculations involved in gaming. The latest-generation processors from Intel and AMD ensure high frame rates and smooth performance in demanding games.</p>
        <ul>
            <li><strong>Intel:</strong> Intel Core i7 or i9 – These processors are ideal for gaming laptops, offering high performance for multitasking and smooth gaming experiences.</li>
            <li><strong>AMD:</strong> AMD Ryzen 7 or Ryzen 9 – These CPUs are excellent for gaming, with multiple cores and threads that boost performance in games and other tasks.</li>
        </ul>

        <h2>3. Weight</h2>
        <p>Gaming laptops tend to be heavier due to their powerful components and cooling systems. While portability is important, gaming laptops prioritize performance, which often results in a heavier form factor.</p>
        <ul>
            <li><strong>Recommended Weight:</strong> Between 2.2kg and 3.5kg – Heavier than standard laptops, but necessary to accommodate the powerful hardware and cooling systems required for gaming.</li>
        </ul>

        <h2>4. Price</h2>
        <p>Gaming laptops are generally more expensive due to their high-performance components. However, there are plenty of options across different price ranges, depending on the level of gaming performance you're looking for.</p>
        <ul>
            <li><strong>Recommended Price:</strong> $1,000 – $2,500 – This price range offers laptops with the latest GPUs, high refresh rate screens, and top-tier processors that can handle AAA gaming titles smoothly.</li>
        </ul>

        <h2>5. RAM</h2>
        <p>Having enough RAM is essential for gaming, allowing the system to handle large game files and multitasking. 16GB of RAM is the sweet spot for most gamers, while 32GB is recommended for heavy multitaskers and more demanding games.</p>
        <ul>
            <li><strong>Recommended RAM:</strong> 16GB – This provides optimal performance for gaming and multitasking, ensuring smooth gameplay and fast loading times.</li>
        </ul>

        <h2>6. GPU (Graphics Card)</h2>
        <p>The GPU is the most crucial component for a gaming laptop. A powerful graphics card is necessary for running modern games at high settings, ensuring fluid frame rates and beautiful graphics.</p>
        <ul>
            <li><strong>Recommended GPU:</strong> NVIDIA GeForce RTX 3060, 3070, or 3080 – These GPUs are designed for high-end gaming, providing smooth frame rates and great graphics quality in the latest titles.</li>
            <li><strong>Alternative:</strong> AMD Radeon RX 6600M or RX 6700M – These are excellent alternatives to NVIDIA’s GPUs, offering great gaming performance and value for money.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Gaming laptops are powerful machines built to handle the most demanding tasks, offering high performance in terms of CPU, GPU, RAM, and storage. When choosing a gaming laptop, look for one with a powerful CPU and GPU, sufficient RAM, and fast storage options to ensure the best gaming experience. With the right specs, you’ll enjoy smooth, immersive gaming across a wide range of titles.</p>
    `
},

{
    title: "Programming",
    content: `
        <h2>Introduction to Programming Laptops</h2>
        <p>Programming laptops are designed to provide a smooth and efficient development environment. They should be capable of running development tools, code editors, compilers, and virtual environments while handling multitasking effectively. The right laptop for programming balances performance, portability, and comfort.</p>

        <h2>1. Storage</h2>
        <p>Storage is essential for programming laptops. While large codebases and files are not typically very large, you will want fast storage for quick access to your files and applications. SSDs (Solid State Drives) are preferred due to their fast read and write speeds.</p>
        <ul>
            <li><strong>Recommended Storage:</strong> 256GB SSD or 512GB SSD – An SSD will speed up your workflow by reducing boot times, loading times for code editors, and project files. Larger storage is beneficial if you're working with bigger datasets or virtual environments.</li>
        </ul>

        <h2>2. CPU Brand</h2>
        <p>The CPU is crucial for running development tools, compilers, and running multiple processes. Look for a processor with multiple cores to support multitasking and efficient performance when running code or compiling projects.</p>
        <ul>
            <li><strong>Intel:</strong> Intel Core i5 or i7 – These processors offer strong performance for programming tasks, providing multi-core processing that’s important for running development environments or virtual machines.</li>
            <li><strong>AMD:</strong> AMD Ryzen 5 or Ryzen 7 – AMD’s Ryzen processors are well-suited for programming as they offer high core counts, providing great performance for multitasking and resource-heavy tasks like compiling large codebases.</li>
        </ul>

        <h2>3. Weight</h2>
        <p>Portability is important for a programming laptop, especially for developers on the go. Lighter laptops make it easier to carry your machine to work, meetups, or co-working spaces without sacrificing performance.</p>
        <ul>
            <li><strong>Recommended Weight:</strong> 1.2kg to 2kg – A mid-range weight makes the laptop portable, but still capable of housing powerful components for programming tasks. A lighter laptop may sacrifice cooling, so make sure to balance weight with performance.</li>
        </ul>

        <h2>4. Price</h2>
        <p>Programming laptops should strike a balance between price and performance. While high-end gaming laptops are more expensive, a solid programming laptop can still be budget-friendly while offering excellent performance for development tasks.</p>
        <ul>
            <li><strong>Recommended Price:</strong> $700 – $1,500 – This price range allows you to get a powerful CPU, sufficient RAM, and fast SSD storage without breaking the bank.</li>
        </ul>

        <h2>5. RAM</h2>
        <p>Programming requires enough RAM to handle multiple applications, including IDEs (Integrated Development Environments), web browsers, terminal windows, and virtual machines. Having at least 8GB of RAM ensures a smooth workflow, but 16GB or more can provide additional comfort for larger projects or running resource-intensive tools.</p>
        <ul>
            <li><strong>Recommended RAM:</strong> 8GB – 16GB – For most programming tasks, 8GB is sufficient, but 16GB ensures better performance when working with large applications, virtual environments, or doing heavy multitasking.</li>
        </ul>

        <h2>6. GPU (Graphics Card)</h2>
        <p>While a dedicated GPU isn’t necessary for most programming tasks, it can be important for developers working with machine learning, game development, or graphic-intensive programming. For general programming, an integrated GPU can suffice.</p>
        <ul>
            <li><strong>Recommended GPU:</strong> Integrated Intel UHD, Iris, or AMD Vega – These GPUs are good for most programming tasks and allow for great battery life.</li>
            <li><strong>Optional for heavier tasks:</strong> NVIDIA GeForce GTX or RTX series – Useful if you're working on game development or machine learning where the GPU will be engaged for compute-heavy tasks.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>A programming laptop needs to have strong processing power, sufficient RAM, fast storage, and good portability. Whether you're developing websites, building apps, or working on software engineering projects, the right laptop can enhance your productivity. Focus on choosing a laptop with the right balance of performance, portability, and battery life to ensure a smooth coding experience, wherever you work.</p>
    `
}
];

// Function to generate tabs and content dynamically
function generateTabs() {
    const tabButtons = document.getElementById("tab-buttons");
    const tabContents = document.getElementById("tab-contents");

    sections.forEach((section, index) => {
        // Create Tab Button
        const tabButton = document.createElement("button");
        tabButton.classList.add("tab-button");
        tabButton.innerText = section.title;
        tabButton.setAttribute("data-index", index);
        tabButton.addEventListener("click", () => showTab(index));
        tabButtons.appendChild(tabButton);

        // Create Tab Content
        const tabContent = document.createElement("div");
        tabContent.classList.add("tab-content");
        tabContent.id = `tab-content-${index}`;
        tabContent.innerHTML = section.content;
        tabContents.appendChild(tabContent);
    });

    // Show the first tab by default
}

// Function to show the content for the selected tab
function showTab(index) {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
    const defaultText = document.getElementById("default-text"); // Get the default text container

    // Remove 'active' class from all tabs
    tabButtons.forEach(button => button.classList.remove("active"));

    // Add 'active' class to the clicked tab
    tabButtons[index].classList.add("active");

    // Hide all content
    tabContents.forEach(content => content.classList.remove("active-content"));

    // Show the content for the active tab
    tabContents[index].classList.add("active-content");

    // Hide the default text
    defaultText.style.display = "none";
}


// Generate the tabs when the page loads
document.addEventListener("DOMContentLoaded", generateTabs);
