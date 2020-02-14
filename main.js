
var countCustommer = 0;
var dulieu=[
];

function save() {

    
        // if(address == ""){
    //     document.getElementById("error").style.display = " block";
    //     document.getElementById("error").style.color = "red";
    // }
    // var student = [



    // ];
    // student.push({
    //     fullname: fullname,
    //     email: email,
    //     phone: phone,
    //     address: address
    // });
    // var tablecontent = ` <tr>
    // <td>stt</td>
    // <td>Tên</td>
    // <td>email</td>
    // <td>số điện</td>
    // <td>địa chỉ</td>
    // <td>gioitinh</td>
    // </tr>`;
    // student.forEach((students, index) => {
    //     index ++;
    //     tablecontent += `<tr>
    //     <td>${index}</td>
    //     <td>${students.fullname}</td>
    //     </tr>`
    // });

    // document.getElementById("view").innerHTML = tablecontent;
    // document.getElementById("view").style.color = "red";

    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var gioitinh="";
    if(document.getElementById("nam").checked == true){
        gioitinh=document.getElementById("nam").value;
    }
    else{
        gioitinh=document.getElementById("nu").value;
    }

    if (fullname == "" || email == "" || phone == "" || address == "")
        document.getElementById("form-null").style.display = "inline-block";
    else
    {

        document.getElementById("form-null").style.display = "none";
        var khach = {
            fullname,
            email,
            phone,
            address,
            gioitinh
        };

        dulieu.push(khach);

        var ND= `
        <td>${dulieu.length}</td>
        <td>${fullname}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${address}</td>
        <td>${gioitinh}</td>
        <td><button onclick="fix(${dulieu.length})">Sửa</button></td>
        `;

            var phantumoi=document.createElement('tr');
            phantumoi.innerHTML=ND;
            var bo=document.getElementById('view');
            bo.appendChild(phantumoi);
            }
            //document.getElementById("form-if").reset();
            return false;
        
}

function fix(id){
    document.getElementById("btn-luu").type = "hidden";
    document.getElementById("btn-fix").type="button";
   var stt=id-1;
   document.getElementById("fullname").value=dulieu[stt].fullname;
    document.getElementById("email").value=dulieu[stt].email;
   document.getElementById("phone").value=dulieu[stt].phone;
   document.getElementById("address").value=dulieu[stt].address;
   if(dulieu[stt].gioitinh=="Nam")
   {
        document.getElementById("nam").checked=true;
   }
        else{document.getElementById("nu").checked=true;}
}

function reset(){
    document.getElementById("form-if").reset();
    document.getElementById("btn-luu").type = "button";
    document.getElementById("btn-fix").type="hidden";
}
