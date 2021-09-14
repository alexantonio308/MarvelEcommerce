# [Mobile] - Ecommerce Marvel 

## Descrição 
Aplicacao inicia com uma tela Splash, alem de icones personalizados:

![image](https://user-images.githubusercontent.com/17026031/133199303-9aa1389c-2804-414a-8cf4-3e38212902ce.png)
![image](https://user-images.githubusercontent.com/17026031/133200551-c71f31a6-b57b-4ed0-876f-da5d257f0b81.png)


### Tela 1 - Home
Construido com 'Effect Hook'.
URL da API sendo chamada com 'axios' em string unica.
Header possui uma logo e um botao de Carrinho.
FlatList organizando em duas rows os TouchableOpacity onde ao clicar chama um Modal(Tela 2 - Description) passando as informacoes por props.

![image](https://user-images.githubusercontent.com/17026031/133199448-5daa78e0-c970-4e61-ad75-e831e62820ab.png)
![image](https://user-images.githubusercontent.com/17026031/133200940-e46433ce-3811-477b-8734-78cee2531d46.png)

### Tela 2 - Description (Modal)
Tela possui Titulo, Imagem e Descricao.
Abaixo dois botoes que funcionam como contador, sendo nao possivel settar numero negativo.
O botao Adicionar, onde tambem possui TouchableOpacity adicionando itens ao carrinho, apos pressionar o botao volta pra Home(Tela 1).

![image](https://user-images.githubusercontent.com/17026031/133199656-71050ef6-1f20-4bb3-8bbd-3608650515ff.png)
![image](https://user-images.githubusercontent.com/17026031/133201056-862ceb88-65fd-49c3-b43c-baa487c8f23e.png)

### Tela 3 - Checkout (Cart)
Tela possui rows com Imagem, Titulo, Quantidade, Preco e Total (Preco total do item).
Mais abaixo temos um campo de Cupom e o botao Aplicar, onde estao cadastradas dois cupons: ("COMUM"=10% e "RARE"=25%), ao aplicar qualquer valor diferente das duas strings o disconto "zera".
Alem de ums String mostrando o valor do desconto e outra string mostrando o valor total com o desconto.

![image](https://user-images.githubusercontent.com/17026031/133199756-cc602cc8-0b0a-49ed-bf81-99172e8baebf.png)
![image](https://user-images.githubusercontent.com/17026031/133199968-0ded1170-2593-4cc8-87f7-8e8d41f05ea5.png)


![image](https://user-images.githubusercontent.com/17026031/133200028-0e76fa8e-a272-47ef-8c67-f25bfa0c86f7.png)
![image](https://user-images.githubusercontent.com/17026031/133200183-8d4031c2-1db8-4cb2-965d-4155631d72b8.png)


## Requisitos Pendentes (Regras de Negocio)

* **12% das revistas em quadrinhos carregadas devem ser marcadas como raras (aleatoriamente no próprio fonte ao carregar o REST).**
