# 🔐 REST API Performance Benchmark for Cryptographic TLS Evaluation

This Node.js + MySQL REST API project is developed to support an academic research study that evaluates the **performance impact of different TLS encryption configurations (AES-128 vs AES-256)** in RESTful web services. The study compares how encryption strength affects **response latency, throughput, and resource usage**, particularly when handling variable payload sizes under concurrent access.

---

## 📚 Research Objective

This API is used to simulate real-world scenarios where different TLS cipher suites are enforced. The primary research goals are:

- To benchmark REST API performance under AES-128 and AES-256 TLS encryption
- To observe latency and throughput changes at varying payload sizes (e.g., 10, 100, 1000 records)
- To provide data for comparing REST vs GraphQL protocol behavior under cryptographic load

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MySQL**
- **MySQL2** – for async DB queries
- **Faker.js** – for employee data generation
- **dotenv** – for environment configuration
- **Postman**, **Apache Bench (ab)**, **k6**, **wrk** – for API and load testing
- **HTTPS/TLS (OpenSSL)** – for cipher suite configuration
