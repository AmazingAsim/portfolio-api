function take(e) {
    e.preventDefault();
    let name = document.getElementById('name').value
    let desc = document.getElementById('desc').value
    let url = document.getElementById('url').value
    let image = document.getElementById('image').value

    fetch(`${location.origin}/api/addproject`, {
        method: "POST",
        mode: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        }
        ,
        body: JSON.stringify(
            {
                name: name,
                desc: desc,
                url: url,
                image: image
            }
        )
    }).then((res) => {
        return res.json()
    }).then(res => {
        alert(res.res)

    })

    let info={
        name: name,
        desc: desc,
        url: url,
        image: image
    }
    appendfun(info)

}



function display() {

    fetch(`${location.origin}/api/findproject`).then((res) => { return res.json() }).then((res) => {
        
        for (let project of res) {
            appendfun(project)
        }
    })
}


function appendfun(project) {
    let projectlist = document.getElementById('table');
    let tr = document.createElement('tr');
    tr.innerHTML = ` <td> ${project.name} </td>
                    <td><button onclick="deletethis(this,'${project.name}')">delete</button> </td> `
    projectlist.appendChild(tr)
}

display()


function deletethis(element, name) {
    element.parentElement.parentElement.remove();
    fetch(`${location.origin}/api/deleteproject/${name}`,
        {
            method: "DELETE",
            mode: 'same-origin',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res => {
            if (res.status == 200) {
                console.log('logical error::', res.status)
                alert('deleted')
            }
            else {
                console.log("Error:::" + JSON.stringify(res))
                alert('something went wrong')
            }
        })
}

