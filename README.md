# Simple Form Hub

Crie uma página web simples e moderna, SOMENTE FRONT-END, com o único objetivo de exibir um formulário de cadastro centralizado.

IMPORTANTE SOBRE O ESCOPO:

* Não criar uma landing page completa.
* Não criar navbar.
* Não criar cabeçalho.
* Não criar rodapé.
* Não criar logo ou marca.
* Não criar seção de benefícios, depoimentos, planos, produtos ou outras seções.
* Não criar backend, banco de dados, API ou autenticação.
* A página inteira deve ser focada exclusivamente no formulário.
* O projeto deverá posteriormente ser conectado ao GitHub, portanto mantenha o código organizado e fácil de editar.

VISUAL DA PÁGINA:

Use um fundo azul profundo e moderno, sem ser excessivamente escuro.

Sugestão de cor principal do fundo:
#123458

Pode utilizar um gradiente muito sutil para dar profundidade.

No centro da tela, coloque um card branco grande contendo todo o formulário.

O card deve possuir:

* Fundo branco.
* Bordas bastante arredondadas.
* Sombra suave.
* Espaçamento interno confortável.
* Aparência moderna, limpa e profissional.
* Boa separação visual entre todos os elementos.

Utilize verde esmeralda como cor de destaque.

Sugestão:
#18B76A

O verde deve aparecer principalmente:

* No botão.
* Nos ícones.
* No estado de foco dos campos.
* Em pequenos detalhes visuais.

Não exagere no verde.

TIPOGRAFIA:

Utilize a fonte "Manrope" ou uma alternativa moderna semelhante.

Evite:

* Poppins
* Inter
* Roboto
* Arial

Quero uma tipografia moderna e com personalidade, mas fácil de ler.

TOPO DO FORMULÁRIO:

Adicionar um pequeno ícone circular verde relacionado a cadastro/formulário.

Título:

"Só precisamos de alguns detalhes"

Destaque visualmente as palavras "alguns detalhes" utilizando verde.

Subtítulo:

"Preencha as informações abaixo para continuar."

FORMULÁRIO:

Organize exatamente estes campos:

1. Nome completo
   Placeholder:
   "Ex: Guilherme Silva"

2. Idade
   Placeholder:
   "Ex: 28"

3. Telefone / WhatsApp
   Placeholder:
   "Ex: (11) 99999-9999"

Idade e Telefone / WhatsApp devem ficar lado a lado em telas desktop.

4. E-mail
   Placeholder:
   "Ex: [seuemail@exemplo.com](mailto:seuemail@exemplo.com)"

5. Cidade
   Placeholder:
   "Ex: São Paulo - SP"

6. Observações (opcional)

Esse campo deve ser maior e permitir várias linhas.

Placeholder:
"Conte algo que considere importante..."

Adicionar contador:
"0/300"

Limitar o campo a 300 caracteres.

INTERAÇÃO DOS CAMPOS:

Adicionar pequenos ícones relacionados a cada informação.

Exemplos:

* Nome → usuário
* Idade → calendário
* Telefone → WhatsApp ou telefone
* E-mail → envelope
* Cidade → localização
* Observações → mensagem

Os ícones devem ser discretos e modernos.

Quando o usuário clicar em um campo:

* A borda deve ganhar destaque verde.
* Pode existir uma pequena animação suave.
* Não alterar o tamanho do campo.

Todos os campos devem possuir bordas arredondadas.

VALIDAÇÃO VISUAL:

Nome, idade, telefone, e-mail e cidade são obrigatórios.

Observações é opcional.

Se o usuário tentar enviar sem preencher um campo obrigatório:

* Destacar o campo.
* Mostrar uma mensagem curta explicando o que precisa ser preenchido.

Para campos preenchidos corretamente, pode aparecer discretamente um pequeno check verde.

Essas validações devem acontecer apenas no Front-End.

BOTÃO:

Criar um botão grande ocupando praticamente toda a largura disponível do formulário.

Texto:

"Enviar cadastro →"

Cor principal verde.

O botão deve possuir:

* Bordas arredondadas.
* Hover suave.
* Pequena animação ao passar o mouse.
* Cursor pointer.
* Aparência moderna.

IMPORTANTE:

Como este projeto é SOMENTE FRONT-END, o botão NÃO deve enviar informações para banco de dados, API, planilha ou serviço externo.

Por enquanto, ao preencher corretamente o formulário e clicar em "Enviar cadastro", mostrar apenas uma confirmação visual amigável na própria página, como:

"Cadastro enviado com sucesso!"

Isso servirá somente para demonstrar o funcionamento visual do Front-End.

RESPONSIVIDADE:

No desktop:

* Formulário centralizado.
* Idade e telefone lado a lado.

Em telas menores:

* Os campos devem ficar um abaixo do outro.
* O card deve se adaptar à largura disponível.
* Manter espaçamento lateral adequado.

DETALHES VISUAIS:

Pode adicionar elementos geométricos extremamente discretos no fundo azul, utilizando tons de verde e azul.

Exemplos:

* pequenos círculos;
* linhas curvas;
* pontos;
* formas abstratas.

Esses elementos são apenas decorativos.

Não adicionar textos ou informações fora do formulário.

OBJETIVO FINAL:

Quero uma página extremamente simples em estrutura, porém visualmente muito bem trabalhada.

A prioridade é:

1. Organização.
2. Aparência moderna.
3. Campos muito bem separados.
4. Boa experiência de preenchimento.
5. Microinterações.
6. Código Front-End organizado.
7. Facilidade para posteriormente subir e continuar modificando o projeto através do GitHub.

Não adicione funcionalidades, páginas ou seções que não tenham sido solicitadas.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0a4f410b-a8e8-4a6c-94f2-9d2563dc99d9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
