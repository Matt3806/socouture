fetch ("http://localhost:1337/api/abouts") 
.then (data => data.json()) 
.then (jsonAbouts => {

        let coursCollectif = jsonAbouts.data[0].attributes

        let coursParticulier = jsonAbouts.data[1].attributes
    
        console.log(coursCollectif)

        document.querySelector("#collectif").innerHTML += 
        `
        <div class="box">
        <h2>${coursCollectif.title}</h2>
        <p>${coursCollectif.text}</p>
        <blockquote>« Aucun de nous ne sait ce que nous savons tous ensemble »
        </br>
        Euripide</blockquote>
 
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Prix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cours simple</td>
                        <td>2 heures en cours collectif (à partir de 12 ans).</td>
                        <td>${coursCollectif.price}</td>
                    </tr>
                    <tr>
                    <td>Forfait</td>
                    <td>10 heures en cours collectif (5 dates choisies à l’avance - à partir de 12 ans.</td>
                    <td>${coursCollectif.forfait}</td>
                </tr>
                    
                </tbody>
            </table>
        </div>    
        </div>

        <hr />
        `

        document.querySelector("#particulier").innerHTML += 
        `
        <div class="box">
        <h2>${coursParticulier.title}</h2>
        <p>${coursParticulier.text}</p>
        <blockquote>« Le meilleur moyen de réussir, c’est toujours d’essayer encore une fois. »
        </br>
        Thomas Edison</blockquote>
 
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Prix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cours simple</td>
                        <td> 2 heures en cours particulier (à partir de 6 ans).</td>
                        <td>${coursParticulier.price}</td>
                    </tr>
                    <tr>
                    <td>Forfait</td>
                    <td>10 heures en cours collectif (5 dates non fixées à l’avance - à partir de 6 ans).</td>
                    <td>${coursParticulier.forfait}</td>
                </tr>
                    
                </tbody>
            </table>
        </div>    
        </div>

        <hr />
        `
})