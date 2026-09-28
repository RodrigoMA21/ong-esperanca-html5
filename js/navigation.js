import {
    renderHome,
    renderProjects,
    renderRegister
} from "./templates.js";

const routes = {
    "/": renderHome,
    "/projetos": renderProjects,
    "/cadastro": renderRegister
};

function getCurrentRoute() {
    const hash = window.location.hash;

    if (!hash || hash === "#") {
        return "/";
    }

    const route = hash.replace(/^#/, "");

    return routes[route] ? route : "/";
}

export function renderRoute() {
    const route = getCurrentRoute();

    const render = routes[route];

    const app = document.querySelector("#app");

    if (!app) {
        console.error("Elemento #app não encontrado.");
        return;
    }

    app.innerHTML = render();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    window.dispatchEvent(
        new CustomEvent("routeRendered", {
            detail: { route }
        })
    );
}

export function setupNavigation() {
    document.addEventListener("click", (event) => {

        const link = event.target.closest("a[data-route]");

        if (!link) {
            return;
        }

        event.preventDefault();

        const route = link.dataset.route;

        if (route === window.location.hash.replace(/^#/, "")) {
            return;
        }

        window.location.hash = route;
    });

    window.addEventListener("hashchange", () => {
        renderRoute();
    });
}
