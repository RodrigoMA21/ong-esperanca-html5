const STORAGE_KEY = "ongEsperancaCadastro";

export function saveRegistration(data) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );
}

export function getRegistration() {
    const storedData = localStorage.getItem(STORAGE_KEY);

    if (!storedData) {
        return null;
    }

    try {
        return JSON.parse(storedData);
    } catch (error) {
        console.error(
            "Erro ao recuperar os dados do cadastro:",
            error
        );

        return null;
    }
}

export function clearRegistration() {
    localStorage.removeItem(STORAGE_KEY);
}
