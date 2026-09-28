import { setupNavigation, renderRoute } from "./navigation.js";
import {
    saveRegistration,
    getRegistration,
    clearRegistration
} from "./storage.js";

document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    renderRoute();

    document.addEventListener("routeRendered", () => {
        setupForm();
    });
});

function setupForm() {
    const form = document.querySelector("#registration-form");

    if (!form) {
        return;
    }

    const fields = form.querySelectorAll("input, select, textarea");

    fields.forEach((field) => {
        field.addEventListener("input", () => {
            validateField(field);
        });

        field.addEventListener("change", () => {
            validateField(field);
        });
    });

    form.addEventListener("submit", handleSubmit);
    form.addEventListener("reset", handleReset);

    restoreRegistration();
}

function validateField(field) {
    const message = field
        .closest("p")
        ?.querySelector(".field-message");

    if (!message) {
        return field.checkValidity();
    }

    if (field.checkValidity()) {
        field.classList.remove("field-error");
        field.classList.add("field-success");
        message.textContent = "";
        return true;
    }

    field.classList.remove("field-success");
    field.classList.add("field-error");

    if (field.validity.valueMissing) {
        message.textContent = "Este campo é obrigatório.";
    } else if (field.validity.typeMismatch) {
        message.textContent = "Digite um valor em formato válido.";
    } else if (field.validity.patternMismatch) {
        message.textContent = field.title || "Formato inválido.";
    } else if (field.validity.rangeUnderflow) {
        message.textContent = "Digite um valor válido.";
    } else {
        message.textContent = "Verifique o preenchimento.";
    }

    return false;
}

function validateForm(form) {
    let isValid = true;

    const fields = form.querySelectorAll(
        "input, select, textarea"
    );

    fields.forEach((field) => {
        if (!validateField(field)) {
            isValid = false;
        }
    });

    return isValid;
}

function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const feedback = document.querySelector("#form-feedback");

    if (!validateForm(form)) {
        feedback.textContent =
            "Revise os campos destacados antes de enviar o cadastro.";

        feedback.className =
            "form-feedback form-feedback-error";

        return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    saveRegistration(data);

    feedback.textContent =
        "Cadastro salvo com sucesso! Seus dados foram armazenados neste navegador.";

    feedback.className =
        "form-feedback form-feedback-success";

    form.reset();

    clearValidationStyles(form);
}

function handleReset() {
    setTimeout(() => {
        clearValidationStyles(
            document.querySelector("#registration-form")
        );

        const feedback = document.querySelector("#form-feedback");

        if (feedback) {
            feedback.textContent = "";
            feedback.className = "form-feedback";
        }
    }, 0);
}

function clearValidationStyles(form) {
    if (!form) {
        return;
    }

    const fields = form.querySelectorAll(
        "input, select, textarea"
    );

    fields.forEach((field) => {
        field.classList.remove(
            "field-success",
            "field-error"
        );

        const message = field
            .closest("p")
            ?.querySelector(".field-message");

        if (message) {
            message.textContent = "";
        }
    });
}

function restoreRegistration() {
    const data = getRegistration();

    if (!data) {
        return;
    }

    const form = document.querySelector("#registration-form");

    if (!form) {
        return;
    }

    Object.entries(data).forEach(([name, value]) => {
        const field = form.elements[name];

        if (field) {
            field.value = value;
        }
    });

    const history = document.querySelector(
        "#registration-history"
    );

    if (history) {
        history.innerHTML = `
            <div class="form-feedback form-feedback-info">
                Dados do último cadastro foram recuperados
                automaticamente deste navegador.
            </div>
        `;
    }
}
