# [Mobile] - Ecommerce Marvel 
#Obs.: Achei pouco tempo para o desafio pelo motivo de nunca ter trabalhado com React-Native ou qualquer desenvolvimento Mobile, com isso o layout ficou pendende para ser editado, sendo priorizado entregar algo funcional, se possivel gostaria de mais um tempo para terminar.

## Descrição 
### Tela 1 - Home
Construido com 'Effect Hook'.
URL da API sendo chamada com 'axios' em string unica, organizar diretorio e chaves ficaram pendentes.
Levei cerca de 2 dias para encontrar a hash ideal gerada pelo md5 para a Autorizacao da API, sendo a hash: timestap=1 + PUBLIC_KEY + PRIVATE_KEY, onde o timestap nao funciona com informacoes atuais.
FlatList organizando em duas rows os TouchableOpacity onde ao clicar chama um metodo que abre outra tela passando as informacoes por props.

![image](https://user-images.githubusercontent.com/17026031/132622280-d1b2d6ce-a4bd-496e-a6de-1492eae0e146.png)

### Tela 2 - Description
Tela possui Titulo, Imagem e Descricao.
Abaixo dois botoes que funcionam como contador, sendo nao possivel settar numero negativo.
O botao Adicionar, onde tambem possui TouchableOpacity chamando a tela de Checkout.

![image](https://user-images.githubusercontent.com/17026031/132622344-b965dbb3-78a8-40eb-b378-14ec33c21c16.png)

### Tela 3 - Checkout
Tela possui Imagem, Titulo, Quantidade, Price, Total e Campo de input Cupom.
Mais abaixo um botao Comprar sem acao(pendente).

![image](https://user-images.githubusercontent.com/17026031/132622460-867d9936-5e3c-4dfb-a27a-011d62421cff.png)

## Requisitos Pendentes (Regras de Negocio)

* **12% das revistas em quadrinhos carregadas devem ser marcadas como raras (aleatoriamente no próprio fonte ao carregar o REST).**

* **O checkout deverá conter uma área com opcão de código de desconto (pode validar mock, sem rest).**

* **(OPCIONAL) Existem dois tipos de cupons: Cupons raros e cupons comuns. Cupons comuns dão desconto somente para quadrinhos comuns enquanto raros podem ser usados em qualquer tipo.**

 | Cupom| Desconto|
 |-----------|----------|
 | Comum | 10% |
 | Raro | 25% |

