import { Projects } from "src/app/models/project.model";

export const projects: Projects[] = [
  {
    img:"/assets/images/microservices.png",
    title:"Vehicle Microservice",
    description:"This is a microservice created with java and spring-boot that operates on a relational database in PostgreSql.",
    skills:["java", "Spring Boot","JPA", "Hibernate", "config server", "Rest Template", "Gateway", "Eureka", "Zipking", "Circuit Breaker" ],
    linkBakend:"https://github.com/euclidesseg/microserviceSpringBoot/tree/zipkin-sleuth"
  },
  {
    img:"/assets/images/UnitTest.png",
    title:"Unit Test",
    description:"This repository contains the code and files with which I have learned to write unit tests in Spring Boot.",
    skills:["java", "Spring Boot","JPA", "Hibernate", "TDD", "BDD", "Mokito", "Junit5" ],
    linkBakend:"https://github.com/euclidesseg/UnitTests"
  },
  {
    img:"/assets/images/paisesApp.png",
    title:"PaisesApp",
    description:"This application is part of a project made in Angular to consume the RestCountries API.",
    skills:["Html", "Angular", "TypeScript", "CSS", "HttpClient"],
    linkFront:"https://paises-app02.netlify.app/",
    linkBakend:"https://github.com/euclidesseg/CursoDeAngularUdemy/tree/Dev/05.PaisesApp"
  },
  {
    img:"/assets/images/TodoApp.png",
    title:"TodoApp",
    description: "This project is one of the most beautiful that I created, with it I was able to learn the fundamentals of redux and NGRX from Angular.",
    skills:["Angular", "Redux","NGRX", "Bootstrap", "CLI", "Git Hub", "TypeScript"],
    linkFront:"https://euclidesseg.github.io/App-Todo-Redux/",
    linkBakend:"https://github.com/euclidesseg/App-Todo-Redux/tree/main"
  },
  {
    img:"/assets/images/portafolio.png",
    title:"Portfolio",
    description: "Of course I couldn't miss my web portfolio, this portfolio is a SPA application that makes POST type web requests.",
    skills:["Angular", "TypeScript","Html", "Css", "Httpclient", "Git Hub", "SPA"],
    linkBakend:"https://github.com/euclidesseg/Dashboard"
  },
  {
    img:"/assets/images/express.png",
    title:"Backend Express",
    description: "This portfolio contains a message sending service and this is the API that makes this request.",
    skills:["Express", "Node", "Javascript","Mongodb"],
    linkBakend:"https://github.com/euclidesseg/backendexpres"
  },
 ]
