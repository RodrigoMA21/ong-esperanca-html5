const projetos = [
    {
        titulo: "Apoio às famílias",
        descricao:
            "Campanhas de arrecadação de alimentos e produtos básicos destinados a famílias em situação de vulnerabilidade."
    },
    {
        titulo: "Educação e capacitação",
        descricao:
            "Ações voltadas ao acesso à educação, capacitação profissional e desenvolvimento de novas oportunidades."
    },
    {
        titulo: "Ações comunitárias",
        descricao:
            "Atividades realizadas com voluntários para apoiar a comunidade e incentivar a participação social."
    }
];

export function createProjectCard(projeto) {
    return `
        <article class="card">
            <div class="card-content">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
            </div>
        </article>
    `;
}

export function renderHome() {
    return `
        <section id="apresentacao">
            <h2>Quem somos</h2>

            <img
                src="../imagens/ong-esperanca.jpg"
                alt="Voluntários da ONG Esperança reunidos durante uma ação social"
                width="800"
            >

            <p>
                A ONG Esperança é uma organização do terceiro setor dedicada
                à promoção da solidariedade e ao desenvolvimento social.
                Nosso trabalho busca contribuir para uma sociedade mais
                justa por meio de projetos sociais e ações voluntárias.
            </p>

            <p>
                Atuamos em parceria com voluntários, doadores e comunidades,
                desenvolvendo iniciativas que proporcionam apoio às pessoas
                em situação de vulnerabilidade.
            </p>
        </section>

        <section id="missao">
            <h2>Nossa missão</h2>

            <p>
                Promover ações sociais que contribuam para a melhoria da
                qualidade de vida das comunidades atendidas, incentivando
                a solidariedade, a cidadania e o voluntariado.
            </p>
        </section>

        <section id="contato">
            <h2>Entre em contato</h2>

            <address>
                <p>
                    <strong>Endereço:</strong>
                    Rua da Solidariedade, 100 - Centro
                </p>

                <p>
                    <strong>Cidade:</strong>
                    Caxias do Sul - RS
                </p>

                <p>
                    <strong>Telefone:</strong>
                    <a href="tel:+5554999999999">
                        (54) 99999-9999
                    </a>
                </p>

                <p>
                    <strong>E-mail:</strong>
                    <a href="mailto:contato@ongesperanca.org.br">
                        contato@ongesperanca.org.br
                    </a>
                </p>
            </address>
        </section>
    `;
}

export function renderProjects() {
    return `
        <section id="projetos">
            <h2>Projetos sociais</h2>

            <p>
                Nossos projetos são desenvolvidos para atender diferentes
                necessidades da comunidade e promover inclusão, solidariedade
                e qualidade de vida.
            </p>

            <div class="cards-grid">
                ${projetos.map(createProjectCard).join("")}
            </div>
        </section>

        <section id="doacoes">
            <h2>Campanhas de doação</h2>

            <p>
                As doações ajudam a manter nossos projetos e ampliar o número
                de pessoas atendidas pela organização.
            </p>

            <h3>Como contribuir</h3>

            <ul>
                <li>Doação financeira;</li>
                <li>Doação de alimentos;</li>
                <li>Doação de roupas e produtos essenciais;</li>
                <li>Doação de materiais para os projetos.</li>
            </ul>
        </section>

        <section id="voluntariado">
            <h2>Programa de voluntariado</h2>

            <p>
                Pessoas interessadas podem contribuir com seu tempo,
                conhecimento e habilidades em diferentes atividades da ONG.
            </p>

            <h3>Como ser voluntário</h3>

            <ol>
                <li>Acesse a página de cadastro.</li>
                <li>Preencha seus dados pessoais e de contato.</li>
                <li>Informe seu interesse em participar como voluntário.</li>
                <li>Aguarde o contato da equipe da ONG.</li>
            </ol>

            <p>
                <a href="cadastro.html">
                    Quero ser voluntário
                </a>
            </p>
        </section>

        <section id="engajamento">
            <h2>Faça parte dessa iniciativa</h2>

            <p>
                Seja através de uma doação ou do trabalho voluntário,
                sua participação pode contribuir para transformar vidas.
            </p>

            <p>
                <a href="cadastro.html">
                    Cadastre-se para participar
                </a>
            </p>
        </section>
    `;
}

export function renderRegister() {
    return `
        <section id="cadastro">
            <h2>Cadastro de colaboradores</h2>

            <p>
                Preencha o formulário abaixo para demonstrar seu interesse
                em participar das ações e projetos da ONG Esperança.
            </p>

            <form id="registration-form" novalidate>

                <fieldset>
                    <legend>Dados pessoais</legend>

                    <p>
                        <label for="nome">Nome completo:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            autocomplete="name"
                            required
                        >
                        <small class="field-message"></small>
                    </p>

                    <p>
                        <label for="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autocomplete="email"
                            required
                        >
                        <small class="field-message"></small>
                    </p>

                    <p>
                        <label for="cpf">CPF:</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            inputmode="numeric"
                            pattern="[0-9]{3}\\.?[0-9]{3}\\.?[0-9]{3}-?[0-9]{2}"
                            placeholder="000.000.000-00"
                            title="Digite um CPF válido no formato 000.000.000-00"
                            maxlength="14"
                            required
                        >
                        <small class="field-message"></small>
                    </p>

                    <p>
                        <label for="nascimento">Data de nascimento:</label>
                        <input
                            type="date"
                            id="nascimento"
                            name="nascimento"
                            autocomplete="bday"
                            required
                        >
                        <small class="field-message"></small>
                    </p>
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <p>
                        <label for="cep">CEP:</label>
                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            inputmode="numeric"
                            pattern="[0-9]{5}-?[0-9]{3}"
                            placeholder="00000-000"
                            title="Digite um CEP válido no formato 00000-000"
                            maxlength="9"
                            autocomplete="postal-code"
                            required
                        >
                        <small class="field-message"></small>
                    </p>

                    <p>
                        <label for="endereco">Endereço:</label>
                        <input
                            type="text"
                            id="endereco"
                            name="endereco"
                            autocomplete="address-line1"
                            required
                        >
                        <small class="field-message"></small>
                    </p>

                    <p>
                        <label for="numero">Número:</label>
                        <input
                            type="number"
                            id="numero"
                            name="numero"
                            min="1"
                            required
                        >
                        <small class="field-message"></small>
                    </p>

                    <p>
                        <label for="bairro">Bairro:</label>
                        <input
                            type="text"
                            id="bairro"
                            name="bairro"
                            required
                        >
                        <small class="field-message"></small>
                    </p>

                    <p>
                        <label for="cidade">Cidade:</label>
                        <input
                            type="text"
                            id="cidade"
                            name="cidade"
                            autocomplete="address-level2"
                            required
                        >
                        <small class="field-message"></small>
                    </p>

                    <p>
                        <label for="estado">Estado:</label>
                        <select
                            id="estado"
                            name="estado"
                            autocomplete="address-level1"
                            required
                        >
                            <option value="">Selecione</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                        <small class="field-message"></small>
                    </p>
                </fieldset>

                <fieldset>
                    <legend>Contato e participação</legend>

                    <p>
                        <label for="telefone">Telefone:</label>
                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            inputmode="tel"
                            pattern="\\(?[0-9]{2}\\)?\\s?[0-9]{4,5}-?[0-9]{4}"
                            placeholder="(54) 99999-9999"
                            title="Digite um telefone válido, por exemplo (54) 99999-9999"
                            maxlength="15"
                            autocomplete="tel"
                            required
                        >
                        <small class="field-message"></small>
                    </p>

                    <p>
                        <label for="interesse">Como deseja participar?</label>
                        <select
                            id="interesse"
                            name="interesse"
                            required
                        >
                            <option value="">Selecione uma opção</option>
                            <option value="voluntario">Trabalho voluntário</option>
                            <option value="doacao">Realizar doações</option>
                            <option value="ambos">Voluntariado e doações</option>
                        </select>
                        <small class="field-message"></small>
                    </p>

                    <p>
                        <label for="mensagem">Mensagem:</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows="5"
                            cols="40"
                            placeholder="Conte-nos como gostaria de contribuir."
                        ></textarea>
                        <small class="field-message"></small>
                    </p>
                </fieldset>

                <p class="form-actions">
                    <button type="submit">Enviar cadastro</button>
                    <button type="reset">Limpar formulário</button>
                </p>

                <div id="form-feedback" class="form-feedback" role="status" aria-live="polite"></div>
            </form>

            <div id="registration-history"></div>
        </section>
    `;
}
