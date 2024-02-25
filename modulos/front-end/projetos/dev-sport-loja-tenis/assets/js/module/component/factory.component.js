export class Factory {
    static constructProductDetailed(product) {
        return `
        <div class="prodImg" id="imagem">
            <img src="../assets/img/${product.imagem}">
        </div>

        <div class="about-content" id="info">
            <h2 class="section-title-center">${product.titulo}</h2>
            <p class="prodDescription">${product.preco}</p>
            <p class="prodDescription">Projetado para jogadores que buscam explosão e agilidade em quadra, proporcionando o máximo de conforto e estabilidade durante os movimentos intensos do jogo.</p>

            <select class="prodOption">
                <option>35 - 36</option>
                <option>37 - 38</option>
                <option>39 - 40</option>
                <option>41 - 42</option>
                <option>43 - 44</option>
                <option>45 - 46</option>
            </select><br>

            <a class="prodBuy" id="prodBuy" onclick="Notification.alertaAtivacao('\\
                ${product.titulo} adquirido com sucesso em nivel de simulacao, muito obrigado!\\
            ')">Comprar</a>
        </div>
    `
    }

    static constructProductExhibition(product) {
        return `
        <li class="proContent" nome="${product.nome}">
            <img src="../assets/img/${product.imagem}" class="proImg">
            <h3 class="proTitle">${product.titulo}</h3>
            <span class="proCategory">${product.categoria}</span>
            <span class="proPreço">${product.preco}</span>
            <a href="product.html?id=${product.id}" class="button proButton">
                <i class='bx bx-shopping-bag'></i>
            </a>
        </li>
        `
    }
}
