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

Em seguida, altere o arquivo `app.scss` para apontando para o novo caminho depois da instalação:

```scss
@import "bower_components/bootstrap/scss/bootstrap";
```