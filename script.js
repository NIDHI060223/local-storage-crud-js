let students = [
    {id:1, name:"Nidhi", email:"nidhi@gmail.com"}
]

function addUser(){
    document.querySelector('.add').style.display = "block";
}

function getData(){
    localStorage.setItem('object', JSON.stringify(students));
    let object123 = localStorage.getItem('object');
    let objData = JSON.parse(object123);
    
    let html = `<thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>`;
    
                   objData.map((student)=>{
                     html = html + `  <tr>
                            <td>${student.id}</td>
                            <td>${student.name}</td>
                            <td>${student.email}</td>
                            <td>
                                <button onclick="edit(${student.id})">Edit</button>
                                <button onclick="delete1(${student.id})">Delete</button>
                            </td>
                        </tr>`
                   }) 
    document.querySelector('.tableData').innerHTML = html;
}

function add(){
    name1 = document.getElementById("name").value;
    email = document.getElementById("email").value;

    obj = {id:2, name:name1, email:email}
    students.push(obj);
    getData();

      // Hide the form and clear the inputs after adding
      document.querySelector('.add').style.display = "none";
      document.getElementById("name").value = '';
      document.getElementById("email").value = '';
}

function edit(id){
    document.querySelector('.add').style.display = "none";
    document.querySelector('.update').style.display = "block";

    document.getElementById('x').value = id;

    name1 = document.getElementById("name")
    email = document.getElementById("email")

    stu = students.find((student)=>student.id == id)//stu={name:name1.value}

    document.querySelector('#uname').value = stu.name;
    document.querySelector('#uemail').value = stu.email;
}
function update(){
    name1 = document.querySelector('#uname').value
    email = document.querySelector('#uemail').value

    id = document.getElementById('x').value;

    stu = students.find((student)=>student.id == id)

     stu.name = name1;
     stu.email = email;
    getData();

}

function delete1(id){   
    // alert(id)
    students =  students.filter(student=>student.id !==id)
    // console.log(students)
    getData();

}