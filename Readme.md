## Simple POS System



A simple POS (Point of Sale) system built for learning and demonstration purposes, using **ReactJS (Frontend)**, **.NET/C# (Backend)**, **Docker**, and **Nginx**.



This project is suitable for:

* Practicing Docker & deployment basics

* Interview demonstrations (Backend / Fullstack)



---



## 📦 Tech Stack



**Frontend**



\* ReactJS

\* Node.js

\* Nginx (production build)



**Backend**



\* ASP.NET Core (C#)

\* RESTful API



**Infrastructure**



\* Docker

\* Docker Compose



---



## 📁 Project Structure



```text

VISNAM\_Simple\_POS\_System/

│

├── VISNAM\_Simple\_POS\_FE/      # React Frontend

│   ├── Dockerfile

│   └── ...

│

├── VISNAM\_Simple\_POS\_BE/      # ASP.NET Core Backend

│   ├── Dockerfile

│   └── ...

│

├── docker-compose.yml

└── README.md

```



---



## ⚙️ Prerequisites



Make sure you have installed:



* **Docker Desktop** (Windows / macOS / Linux)

* **Git**



Check installation:



```bash

docker --version

docker compose version

```



---

## 🚀 How to Run the Project (Docker)



### 1️⃣ Clone the repository



```bash

git clone https://github.com/unique-idea/Simple-POS-Realtime.git

cd VISNAM_Simple_POS_System

```



---


### 2️⃣ Build & run with Docker Compose



```bash

docker-compose up -d --build

```



Docker will:



* Build the **Frontend** React app

* Build the **Backend** ASP.NET Core API

* Run services using containers



---



### 3️⃣ Access the application



| Service     | URL                                                                   |

| ----------- | --------------------------------------------------------------------- |

| Frontend    |[http://localhost:5173/order] (For Order Screen)                       |

|             | [http://localhost:5173/realtime] (For Realtime Screen)                |

| Backend API | [http://localhost:5000/swagger/imdex.html] (For View Swagger API)     |



> Ports may vary depending on your `docker-compose.yml` configuration.



---



## 🧪 Test Docker Installation (Optional)



If this is your first time using Docker:



```bash

docker run hello-world

```



You should see:



```text

Hello from Docker!

```



---



## 🛠 Common Commands



Stop containers:



```bash

docker compose down

```



Rebuild without cache:



```bash

docker compose build --no-cache

```



View running containers:



```bash

docker ps

```



---

## 🧠 Key Features



* RESTful API architecture

* Dockerized frontend & backend

* Nginx used for serving production React build

* Clean separation between FE & BE



---



## 🎥 Video Demo Link and How To Run Steps



**Video Demo:**  

👉 [Watch demo video on Google Drive](https://drive.google.com/file/d/1KTUuGEOenBf0__ETI6Rg5dGzz3OEQlqD/view?usp=sharing)





**How to run Steps**

1. **Clone the source code:**

```bash

git clone https://github.com/unique-idea/Simple-POS-Realtime.git

```



2. **Navigate to the main project folder:**

```bash

cd VISNAM_Simple_POS_System

```



3. **Run Docker Compose:**

```bash

docker-compose up -d --build

```

---



## 🌐 Access the Application



- **Frontend (FE):**

&nbsp; - Order Screen: http://localhost:5173/order  

&nbsp; - Realtime Screen: http://localhost:5173/realtime  



- **Backend (BE):**

&nbsp; - Swagger API: http://localhost:5000/swagger/index.html  



---



## 🧪 How to Use the System



1. Click on a product to add it to the cart.  

&nbsp;  Clicking the same product multiple times will increase its quantity in the cart.



2. Click **"Check Out"** to create a new order.



3. Open the **Realtime Screen** to see the new order appear immediately.  

&nbsp;  *(Tip: Open both screens side by side to observe real-time updates.)*



---



## 🛑 Stop the Application



After testing, stop all Docker containers:

```bash

docker-compose down

```






