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

let user = [ ];

const addUser = (event) => {
    event.preventDefault();

    const name = inputName.value;
    const age = inputAge.value;
    const email = inputEmail.value;
    const dateOfBirth = inputDateOfBirth.value;
    const codeEditor = selectCodeEditor.value;

    const tableRow = document.createElement('tr');
    const dataName = document.createElement('td');
    const dataAge = document.createElement('td');
    const dataEmail = document.createElement('td');
    const dataDateOfBirth = document.createElement('td');
    const dataCodeEditor = document.createElement('td');
    const dataActions = document.createElement('td');

    const btnDeleteRecord = document.createElement('button');
    btnDeleteRecord.setAttribute('class', 'btn btn-danger');
    btnDeleteRecord.innerHTML = 'Delete Record';
    
    let usersCount = 0;

    if(localStorage.usersData){

        usersCount = JSON.parse(localStorage.usersData).users.length;

    }

    dataName.innerHTML = name;
    dataAge.innerHTML = age;
    dataEmail.innerHTML = email;
    dataDateOfBirth.innerHTML = dateOfBirth;
    dataCodeEditor.innerHTML = codeEditor;
    //dataActions.innerHTML = 'Actions';

    tableRow.setAttribute('id', `row-${usersCount + 1}`);
    btnDeleteRecord.setAttribute('onclick', `deleteItem(${usersCount + 1})`);
    tblUsers.append(tableRow);
    tableRow.append(dataName);
    tableRow.append(dataAge);
    tableRow.append(dataEmail);
    tableRow.append(dataDateOfBirth);
    tableRow.append(dataCodeEditor);
    tableRow.append(btnDeleteRecord);


    user = {
        id: usersCount + 1,
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

const deleteItem = (itemNumber) => {

    const itemToDelete = document.getElementById(`row-${itemNumber}`);

    itemToDelete.remove();

}

frmUser.addEventListener('submit', addUser);

getUsers();