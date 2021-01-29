import { fetchWrapper } from "../helpers/request-helpers";

export const servicesSection = {
    getHome,
    getAbout,
    getSkills,
    getCategorySkill,
    getServices,
    getProjects,
    getCategoryProject,
    postContact
};

let response = fetchWrapper.handleResponse;

async function getHome() {
    const requestOptions = {
        method: 'GET'
    };
    return await fetch('http://127.0.0.1:8001/api/home', requestOptions).then(response);
}

async function getAbout() {
    const requestOptions = {
        method: 'GET'
    };
    return await fetch('http://127.0.0.1:8001/api/users', requestOptions).then(response);
}

async function getSkills() {
    const requestOptions = {
        method: 'GET'
    };
    return await fetch('http://127.0.0.1:8001/api/skills', requestOptions).then(response);
}

async function getCategorySkill() {
    const requestOptions = {
        method: 'GET'
    };
    return await fetch('http://127.0.0.1:8001/api/categorySkills', requestOptions).then(response);
}

async function getServices() {
    const requestOptions = {
        method: 'GET'
    };
    return await fetch('http://127.0.0.1:8001/api/services', requestOptions).then(response);
}

async function getProjects() {
    const requestOptions = {
        method: 'GET'
    };
    return await fetch('http://127.0.0.1:8001/api/portfolio', requestOptions).then(response);
}

async function getCategoryProject() {
    const requestOptions = {
        method: 'GET'
    };
    return await fetch('http://127.0.0.1:8001/api/categoryPortfolio', requestOptions).then(response);
}

async function postContact(name, email, subject, content ) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name, email, subject, content })
    };
    return await fetch('http://127.0.0.1:8001/api/contact', requestOptions).then(response);
}