# Pranay Kiran Seemala — Portfolio starter

A beginner-friendly full-stack portfolio:
- Frontend: React + Vite
- Backend: Java 17+ / Spring Boot 3
- Database: PostgreSQL

## 1. Prerequisites (Windows)
Install:
1. Node.js LTS: https://nodejs.org/en/download
2. VS Code: https://code.visualstudio.com/ (frontend editor)
3. Java JDK 17 or 21: https://adoptium.net/
4. Spring Tool Suite: https://spring.io/tools
5. PostgreSQL: https://www.postgresql.org/download/windows/

Verify in a NEW Command Prompt:
```bat
node -v
npm -v
java -version
```
For Maven, Spring Boot projects generated from start.spring.io include the Maven Wrapper (`mvnw.cmd`), so a separate Maven install is not required.

## 2. Run the React frontend
Open Command Prompt in this folder:
```bat
cd frontend
npm install
npm run dev
```
Open the local address Vite prints, usually http://localhost:5173.

## 3. Create the PostgreSQL database
Open pgAdmin (installed with PostgreSQL), connect to your local server, and open Query Tool. Run:
```sql
CREATE DATABASE pranay_portfolio;
```
The backend expects a local PostgreSQL user named `postgres` and password set by you during installation. Do not commit real passwords to GitHub.

## 4. Create the Spring Boot backend in STS
To avoid version/plugin mismatch, generate the starter project from https://start.spring.io/ with:
- Project: Maven
- Language: Java
- Spring Boot: latest stable 3.x shown by the site
- Group: `com.pranay`
- Artifact: `portfolio-api`
- Name: `portfolio-api`
- Package name: `com.pranay.portfolio`
- Packaging: Jar
- Java: 17 or 21
- Dependencies: Spring Web, Spring Data JPA, PostgreSQL Driver, Validation

Download and unzip it. In STS: File > Import > Maven > Existing Maven Projects, choose the extracted folder. Copy the Java files from `backend/src/main/java/com/pranay/portfolio/` in this starter into the matching package in the generated project. Replace `src/main/resources/application.properties` with the one supplied here.

Set your database password in Windows Command Prompt before launching STS from that same terminal:
```bat
set DB_PASSWORD=YOUR_POSTGRES_PASSWORD
```
Alternatively, edit the local `application.properties` password line for learning only, but never publish credentials.

Run the main class `PortfolioApiApplication.java` as Spring Boot App. The API should be at http://localhost:8080/api/health.

## 5. Connect frontend to backend
Run frontend and backend at the same time. The contact form sends a POST to `http://localhost:8080/api/contact`. The backend saves messages to PostgreSQL.

## Notes
- The portfolio content is starter content. Replace the sample projects and social links with your real work.
- The contact form requires the backend and PostgreSQL to be running. If they're off, the page will still load; the form will show a useful error.
- `ddl-auto=update` is convenient for local learning, not a production migration strategy.
