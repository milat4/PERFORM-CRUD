const btnSave = document.querySelector('#btnSave');

btnSave.addEventListener('click', async(e)=>{
    e.preventDefault();
    // Getting all inputs
    let allInputs = document.querySelectorAll('.input-validator');
    allInputs = Array.from(allInputs);
    const results = allInputs.filter((input)=>{
        if (input.value.length < 1){
            // Error message
            showToast('error', 'Field required');
            return false;
        }else{
            return true;
        }
    })
    // console.log(results);
    if (results.length > 2){
        const first_name = document.querySelector("#first_name").value;
        const last_name = document.querySelector("#last_name").value;
        const age = document.querySelector("#age").value;
        const res = await axios.post('/', {first_name, last_name, age});
        showToast('success', 'Data saved successfully');
        
    }
});

// Toast message function
function showToast(status, message){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: status,
        title: message
      })
}