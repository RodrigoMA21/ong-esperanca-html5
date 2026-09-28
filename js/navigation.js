import {
    renderHome,
    renderProjects,
    renderRegister
} from "./templates.js";

const routes = {
    "/": renderHome,
    "/index.html": renderHome,
    "/projetos.html": renderProjects,
    "/cadastro.html": renderRegister
};

function normalizePath(pathname) {
    const path = pathname.replace(/\/$/, "");

    if (path === "") {
        return "/";
    }

    return path;
}

export function renderRoute(pathname = window.location.pathname) {
    const path = normalizePath(pathname);
    const render = routes[path] || renderHome;

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
            detail: { path }
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

        const url = new URL(link.href);

        history.pushState(
            {},
            "",
            url.pathname
        );

        renderRoute(url.pathname);
    });

    window.addEventListener("popstate", () => {
        renderRoute();
    });
}
