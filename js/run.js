{
    const main = document.getElementById('main');
    const jsonPath = '../data/list.json';

    fetch(jsonPath)
        .then((responce) => responce.json())
        .then((json) => {
            hoge(json);
        });

    const hoge = (json) => {
        const l = json.length;
        // const table =
        //     `<table class="list-table">
        //     <thead>
        //     <tr>
        //     <th>No.</th>
        //     <th>名称</th>
        //     <th>提出日</th>
        //     <th>備考</th>
        //     </tr>
        //     </thead>
        //     <tbody>
        //     </tbody>
        //     </table>`;
        const headText = ['No.', '名称', '提出日', '備考'];
        const headTextLength = headText.length;
        const table = document.createElement('table');
        const createThead = table.createTHead();
        const insertRow = createThead.insertRow(0);
        let tr;

        for (let k = 0; k < headTextLength; k++) {
            let cell = insertRow.insertCell(k);

            cell.innerText = headText[k];
        }

        console.log(table);

        for (let i = 0; i < l; i++) {
            Object.keys(json[i]).forEach((e) => {
                const h2 = document.createElement('h2');
                const l2 = json[i][e].length;

                h2.innerText = e;
                list.appendChild(h2);
                // h2.insertAdjacentHTML('afterend', table);
                // console.log(h2.nextSibling);
                list.insertBefore(table, h2.nextSibling);

                for (let j = 0; j < l2; j++) {
                    const content = json[i][e][j];
                    
                    tr =
                        `<tr class="${content.status}">
                        <td>${content.number}</td>
                        <td><a href="${content.path}">${content.name}</a></td>
                        <td>${content.date}</td>
                        <td>${content.note}</td>
                        </tr>
                        `;
                }
            })
        }

        Object.keys(json).forEach((e) => {
            const length = json[e].length;
            // const heading = `<h2>${e}</h2>`;
            // let tr;

            // list.insertAdjacentHTML('afterbegin', heading);

            // for (let i = 0; i < length; i++) {
            //     const content = json[e][i];
            // }
        });
    };
}