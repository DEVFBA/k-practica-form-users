const btnSave = document.getElementById('btn-save');
const btnDelete = document.getElementById('btn-delete');
const frmUser = document.getElementById('add-user');
const inputName = document.getElementById('name');
const inputAge = document.getElementById('age');
const inputEmail = document.getElementById('email');
const inputDateOfBirth = document.getElementById('date-of-birth');
const selectCodeEditor = document.getElementById('code-editor');

const tblUsers = document.getElementById('users-list');

let data = { 
    users: []
}

//let user = [ ];

const addUser = (event) => {
    event.preventDefault();

    /**
     * Recupero los valores del form
     */
    const name = inputName.value;
    const age = inputAge.value;
    const email = inputEmail.value;
    const dateOfBirth = inputDateOfBirth.value;
    const codeEditor = selectCodeEditor.value;

    /**
     * Crear mis elementos de HTML (aun no los uso)
     */
    const tableRow = document.createElement('tr');
    const dataName = document.createElement('td');
    const dataAge = document.createElement('td');
    const dataEmail = document.createElement('td');
    const dataDateOfBirth = document.createElement('td');
    const dataCodeEditor = document.createElement('td');

    /**
     * Creo el botón (aun no lo uso)
     */
    const btnDeleteRecord = document.createElement('button');
    btnDeleteRecord.setAttribute('class', 'btn btn-danger');
    btnDeleteRecord.innerHTML = 'Delete Record';
    
    /**
     * Generar un id unico
     */
    const id = Date.now();
    // let usersCount = 0;

    // if(localStorage.usersData){

    //     usersCount = JSON.parse(localStorage.usersData).users.length;

    // }

    /**
     * Asigno los valores recuperados del form a cada uno de mis elementos creados
     */
    dataName.innerHTML = name;
    dataAge.innerHTML = age;
    dataEmail.innerHTML = email;
    dataDateOfBirth.innerHTML = dateOfBirth;
    dataCodeEditor.innerHTML = codeEditor;

    tableRow.setAttribute('id', `row-${id}`);
    btnDeleteRecord.setAttribute('onclick', `deleteItem(${id})`);

    /**
     * Empiezo a usar mis elemento y a pintarlos en el HTML
     */
    tblUsers.append(tableRow);
    tableRow.append(dataName);
    tableRow.append(dataAge);
    tableRow.append(dataEmail);
    tableRow.append(dataDateOfBirth);
    tableRow.append(dataCodeEditor);
    tableRow.append(btnDeleteRecord);

    /**
     * LOCAL STORAGE
     */

    /**
     * Genero un objeto con mis datos
     */
    user = {
        id: id,
        name: name,
        age: age,
        email: email,
        dateOfBirth: dateOfBirth,
        codeEditor: codeEditor
    }

    data.users.push(user);

    localStorage.usersData = JSON.stringify(data);

}

const getUsers = () => {

    if(localStorage.usersData){
        printUsers()
    }

}

const printUsers = () => {

    const usersData = JSON.parse(localStorage.usersData);
    const users = usersData.users;


    for(let i = 0; i < users.length; i++){
        const tableRow = document.createElement('tr');
        const dataName = document.createElement('td');
        const dataAge = document.createElement('td');
        const dataEmail = document.createElement('td');
        const dataDateOfBirth = document.createElement('td');
        const dataCodeEditor = document.createElement('td');

        dataName.innerHTML = users[i].name;
        dataAge.innerHTML = users[i].age;
        dataEmail.innerHTML = users[i].email;
        dataDateOfBirth.innerHTML = users[i].dateOfBirth;
        dataCodeEditor.innerHTML = users[i].codeEditor;

        const btnDeleteRecord = document.createElement('button');
        btnDeleteRecord.setAttribute('class', 'btn btn-danger');
        btnDeleteRecord.innerHTML = 'Delete Record';

        tableRow.setAttribute('id', `row-${users[i].id}`);
        btnDeleteRecord.setAttribute('onclick', `deleteItem(${users[i].id})`);

        tblUsers.append(tableRow);
        tableRow.append(dataName);
        tableRow.append(dataAge);
        tableRow.append(dataEmail);
        tableRow.append(dataDateOfBirth);
        tableRow.append(dataCodeEditor);
        tableRow.append(btnDeleteRecord);
    }

}

const deleteItem = (id) => {

    /**
     * Elimino la fila
     */
    const itemToDelete = document.getElementById(`row-${id}`);

    itemToDelete.remove();

    /**
     * Delete object from Local Storage
     */

    const usersData = JSON.parse(localStorage.usersData);
    
    const indexToDelete = usersData.users.findIndex((user) => {
        return user.id === id;
    });

    usersData.users.splice(indexToDelete, 1);

    localStorage.usersData = JSON.stringify(usersData);

}

frmUser.addEventListener('submit', addUser);

getUsers();