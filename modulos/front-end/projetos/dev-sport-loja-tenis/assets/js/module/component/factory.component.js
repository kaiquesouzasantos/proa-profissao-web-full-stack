export class Factory {
    static constructProductDetailed(product) {
        return `
        <div class="product-image-detailed" id="imagem">
            <img src="../assets/img/${product.imagem}">
        </div>

        <div class="about-content" id="info">
            <h2 class="section-title-center">${product.titulo}</h2>
            <p class="product-description">${product.preco}</p>
            <p class="product-description">Projetado para jogadores que buscam explosão e agilidade em quadra, proporcionando o máximo de conforto e estabilidade durante os movimentos intensos do jogo.</p>

            <select class="product-option">
                <option>35 - 36</option>
                <option>37 - 38</option>
                <option>39 - 40</option>
                <option>41 - 42</option>
                <option>43 - 44</option>
                <option>45 - 46</option>
            </select><br>

            <a class="button product-buy" id="product-buy" onclick="Notification.alertaAtivacao('\\
                ${product.titulo} adquirido com sucesso em nivel de simulacao, muito obrigado!\\
            ')">Comprar</a>
        </div>
    `
    }

    static constructProductExhibition(product) {
        return `
        <li class="product-content" nome="${product.nome}">
            <img src="../assets/img/${product.imagem}" class="product-image">
            <h3 class="product-title">${product.titulo}</h3>
            <span class="product-category">${product.categoria}</span>
            <span class="product-preco">${product.preco}</span>
            <a href="product.html?id=${product.id}" class="button product-button-redirect">
                <i class='bx bx-shopping-bag'></i>
            </a>
        </li>
        `
    }
}
