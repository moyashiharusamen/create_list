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
        const a = document.createElement('a');

        // console.log(table);

        for (let i = 0; i < l; i++) {
            const h2 = document.createElement('h2');
            const table = document.createElement('table');
            const thead = table.createTHead();
            const tbody = table.createTBody();
            const row = thead.insertRow(0);

            for (let k = 0; k < headTextLength; k++) {
                let cell = row.insertCell(k);

                cell.innerText = headText[k];
            }

            Object.keys(json[i]).forEach((e) => {
                const l2 = json[i][e].length;

                h2.innerText = e;
                list.appendChild(h2);
                list.insertBefore(table, h2.nextSibling);

                for (let j = 0; j < l2; j++) {
                    const content = {
                        num: json[i][e][j].number,
                        name: json[i][e][j].name,
                        note: json[i][e][j].note,
                        status: json[i][e][j].status
                    };
                    const tbodyRow = tbody.insertRow(0);

                    tbodyRow.classList = content.status;

                    Object.keys(content).forEach((e, i) => {
                        let cell = tbodyRow.insertCell(i);

                        cell.innerText = content[e];

                        if (i === 1) {
                            console.log(cell);
                            cell.appendChild(a);
                        }
                    });

                    console.log(table);

                    // tr =
                    //     `<tr class="${content.status}">
                    //     <td>${content.number}</td>
                    //     <td><a href="${content.path}">${content.name}</a></td>
                    //     <td>${content.date}</td>
                    //     <td>${content.note}</td>
                    //     </tr>
                    //     `;
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