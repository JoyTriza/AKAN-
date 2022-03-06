
let action = document.getElementById('click');
action.onclick=()=>{
    
    let trixxie = document.getElementById('output');
    let gender = document.form.gender.value;
    let born = document.getElementById('dateIn').value;
    let calendar = new Date(born);
    let bornDay = calendar.getDay();
    let maleGender = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    let femaleGender = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    // console.log(femaleGender);
    if (born===''){
        alert('Please enter date')
    } else if (gender===''){
        alert('Please choose gender')
    } else {
        if (gender==='male'){
            trixxie.textContent = `Hey there! Your name is ${maleGender[bornDay]}`;
        }else {
            trixxie.textContent = `Hey there! Your name is ${femaleGender[bornDay]}`;
        }
    }
}
