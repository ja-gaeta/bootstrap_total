# Código-fonte da série "Bootstrap Total"

Este repositório será usado para armazenar os arquivos com o código-fonte usado na série "Bootstrap Total" do meu canal no YouTube. 

Na pasta <kbd>html</kbd> estão os códigos `html` usados em cada vídeo. Para exibí-los no navegador, arraste o arquivo para o diretório-raiz, para que os arquivos de estilo, javascript, imagens e fontes sejam carregados corretamente.

## Links:

* Home Page: http://pontogpp.com.br/
* YouTube: https://www.youtube.com/channel/UCSXZ98kaD6xA05IeK__FUkQ

## Descrição dos Vídeos

### Vídeo #1 - Instalação e Configuração Básica

Instalação do Bootstrap 3 e a configuração básica do _template_ de uma página HTML-5 para usá-lo.

### Vídeo #2 - O Poder das Grids

Introdução ao _Grid System_ (Sistema de Grades) do Bootstrap.

### Vídeo #3 - Barra de Navegação (navbar)

Elaboração de uma barra de navegação usando o componente **navbar** do Bootstrap, com a funcionalidade de menus "drop-down" e responsividade otimizada para dispositivos móveis. Os **navbars** são meta-componentes responsivos que servem como cabeçalho de navegação pelo **site** ou **aplicativo**. Eles iniciam ocultos e podem ser comutados para o estado visível clicando num botão, nos dispositivos móveis, mudando para uma apresentação horizontal a medida em que aumenta o tamanho da "_viewport_".

### Vídeo #4 - Workflow com Vagrant e Gulp

Vamos aproveitar o ambiente virtual para desenvolvimento que instalamos com o Vagrant e, usando o Gulp JS, instalado com o NPM, vamos preparar nosso _workflow_ para trabalhar com o Bootstrap.

Depois de clonar/copiar os arquivos deste repositório no seu computador, entre no diretório `bootstrap_total` e digite o comando:

```bash
$ npm install
```

Você encontrará instruções detalhadas para instalação e configuração do Vagrant com a Scotch Box, na [série específica sobre ele](https://www.youtube.com/playlist?list=PLZ4xIRSKcCtFLcGzKM7hIPmkX4DvLEuMS).

### Vídeo 05 - Instalação do Bower, Bootstrap-Sass e Font-Awesome

Neste vídeo damos uma incrementada no nosso _workflow_ com a instalação de outro gerenciador de pacotes, o Bower e com ele instalamos o Bootstrap-Sass e o Font-Awesome para facilitar a personalização do _front-end_ usando o Bootstrap.

Use o `npm` para instalar o Bower:

```bash
$ sudo npm install -g bower
```

Use o Bower para instalar o pacote **bootstrap-sass**:

```bash
$ bower install --save bootstrap-sass
```

Idem, para instalar o **font awesome**:

```bash
$ bower install --save fontawesome
```

### Vídeo 06 - Upgrade para a versão 4.0 Beta

Poucos dias atrás, foi lançada a tão esperada versão 4.0 Beta do Bootstrap. Isso significa que o código agora está suficientemente estável, pois eventuais alterações serão basicamente para correções e eliminação de bugs, garantindo plena compatibilidade.

No decorrer desta série, vamos abordar as mudanças ocorridas, que você pode conferir neste [link](https://blog.getbootstrap.com/2017/08/10/bootstrap-4-beta/) (em inglês).

Remova a pasta da versão anterior do Bootstrap e do JQuery e instale as novas com o Bower:

```bash
$ bower install bootstrap#v4.0.0-beta
```

Em seguida, altere o arquivo `app.scss` para que aponte o novo caminho, conforme abaixo:

```scss
@import "bower_components/bootstrap/scss/bootstrap";
```

### Vídeo 07 - Normalizando com Reboot

O **Reboot** é o novo normalizador do Bootstrap 4, substituindo o **Normalize** usado na versão anterior. Ele garante um conjunto básico de elementos HTML consistentes para a criação de estilos usando classes. Segundo a documentação, seguiram-se as seguintes diretrizes:

* Atualizar alguns valores padrão dos navegadores para usar unidades **rem** ao invés de **em** no espaçamento escalável de componentes;
* Resetar a **margin-top**. As margens verticais podem colapsar, gerando resultados imprevisíveis. Mais importante, todavia, é que uma direção única de margem constitui um modelo mental mais simples.
* Para facilitar a escalabilidade nos diversos tamanhos de dispositivos, os elementos de bloco devem usar **rem** para as margens.
* Manter as declarações das propriedades relativas a fontes no mínimo, usando herança sempre que possível.

### Vídeo 08 - Containers

O **Container** é o elemento básico do Bootstrap quando pretendemos usar seu poderoso sistema de grades (_Grid System_). Neste vídeo este elemento é examinado em detalhes.

### Vídeo 09 - Grid System - Novidades do Bootstrap 4

O sistema de grades (_Grid System_) do Bootstrap sempre foi seu ponto forte e agora ficou ainda mais poderoso com o uso do sistema **Flexbox**. Vamos ver as novidades introduzidas nesta versão.

### Vídeo 10 - Flexbox - Flexibilidadade Total

A adoção do sistema de grades **Flexbox** trouxe para o Bootstrap toda a flexibilidade para posicionamento de linhas e colunas no DOM, tudo de uma maneira bem intuitiva, muito fácil de usar. Neste vídeo exploramos um pouco mais toda essa potencialidade e, de passagem, introduzimos também algumas novas classes do Bootstrap 4.

### Vídeo 11 - Navbar no Bootstrap 4

O sistema de navegação do Bootstrap ficou ainda mais flexível e funcional na versão 4. Confira neste vídeo.

### Vídeo 12 - Personalizando o Bootstrap

O Bootstrap permite uma ampla personalização de seus componentes, para conferir ao seu Site uma distinção especial. Sua criatividade é o limite!

O Sass aumenta signiticativamente a produtividade na criação de folhas de estilo CSS e sua manutenção. Depois de usá-lo, você não conseguirá mais ficar sem ele.

### Vídeo 13 - Showcase com Flex, Font-Awesome e Cards

Neste vídeo desenvolvemos um _Showcase_ usando o **Flexbox**, os ícones da biblioteca **Font-Awesome** e **Cards**, um novo e versátil componente do Bootstrap 4.

### Vídeo 14 - Retoques no CSS personalizado da Showcase

Alguns retoques no CSS deixam nossa Showcase, preparada no vídeo anterior, com um aspecto bem mais profissional. Um resultado fantástico, considerando a economia de tempo no desenvolvimento.

### Vídeo 15 - Menus Dropdown

É muito fácil montar menus _dropdown_ elegantemente animados na **Navbar**, usando apenas as classes do Bootstrap, sem precisar escrever nem uma linha sequer de JavaScript.

### Vídeo 16 - Novas Unidades-Padrão (REM e EM)

O Bootstrap 4 adotou de forma consistente as unidades EM e REM, assunto que examinamos em detalhes neste vídeo. Introduzimos também a unidade VH (vertical-height), outra unidade do CSS moderno que melhora a responsividade das páginas e aplicativos.

### Vídeo 17 - Cards

Neste vídeo completamos nossa _landing page_ de demonstração, aproveitando para apresentar o componente **card** do bootstrap 4.