import type { Project } from "./FeaturedProjects.astro";

export const featuredProjects: Project[] = [
  {
    name: "Goose",
    href: "https://block.github.io/goose/",
    iconName: "block-open-source/goose",
    starsAndForks: "block/goose",
    paragraphs: [
      "Goose is your on-machine developer agent, working for you, on your terms. Guided by you, Goose intelligently assesses what you need and generates required code or modifications. You are in charge: Do you prefer Goose to make a draft, or complete the change entirely? Do you prefer to work in a terminal or in your IDE?",
      "Doing our work requires a lot of tools like Jira, GitHub, and Slack, as well APIs for infrastructure and data pipelines. Goose handles all of these, and is extensible. Goose can run anything invocable by a shell command, Python or a plugin.",
      "Like semi-autonomous driving, Goose handles the heavy lifting, allowing you to focus on other priorities. Simply set it on a task and return later to find it completed, boosting your productivity with less manual effort."
    ],
  },
  {
    name: "OkHttp",
    href: "https://square.github.io/okhttp/",
    iconName: "block-open-source/okhttp",
    starsAndForks: "square/okhttp",
    paragraphs: [
      "OkHttp is a modern HTTP client designed for efficiency and reliability, ensuring faster load times and reduced bandwidth usage. It supports HTTP/2 to allow multiple requests to share a single connection, uses connection pooling to reduce latency, and leverages features like transparent GZIP compression to shrink downloads and response caching to eliminate redundant network requests.",
      "Built with developers in mind, OkHttp offers an easy-to-use request/response API with fluent builders and immutability. It supports both synchronous and asynchronous calls, providing flexibility for different use cases. OkHttp is also the default HTTP client for Android, and is popular in both client and server side development."
    ],
  },
  {
    name: "Retrofit",
    href: "https://square.github.io/retrofit/",
    iconName: "block-open-source/retrofit",
    starsAndForks: "square/retrofit",
    paragraphs: [
      "Retrofit is a type-safe HTTP client for Java and Android that simplifies API integration by turning RESTful APIs into easy-to-use Java interfaces. It handles all the complexities of network calls, including URL creation, request execution, and response parsing, enabling developers to focus on building features.",
      "Designed for flexibility and ease of use, Retrofit supports synchronous and asynchronous requests, ensuring compatibility with various application architectures. It also allows customization through annotations for headers, query parameters, and request bodies."
    ],
  },
  {
    name: "LDK",
    href: "https://lightningdevkit.org/",
    iconName: "block-open-source/ldk",
    followers: "lightningdevkit",
    paragraphs: [
      "The Lightning Development Kit (LDK) is a flexible, modular library designed to help developers integrate Lightning Network functionality into their applications with ease. It provides core Lightning Network capabilities such as channel management, routing, and transaction signing while giving developers full control over their application's design and features.",
      "Built for scalability and security, LDK is written in Rust, offering strong safety guarantees and performance. Its modular architecture allows developers to pick and choose the components they need, enabling seamless integration into existing systems."
    ],
  }
];