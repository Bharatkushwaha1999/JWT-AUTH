document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('http://localhost:5001/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const result = await response.json();
            console.log('Success:', result);
            if(result){
                window.location.replace('http://127.0.0.1:5500/client/dist/signin.html');
            }
            
            // Optionally, handle success (e.g., show a message to the user)
        } catch (error) {
            console.error('Error:', error);
            // Optionally, handle error (e.g., show an error message to the user)
        }
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const signform = document.getElementById('signinForm');
    //sign in form submit
    signform.addEventListener('submit',async(event)=>{
       
        event.preventDefault();
        const formData = new FormData(signform);
        const data = Object.fromEntries(formData.entries());
        try{
            const response = await fetch('http://localhost:5001/api/auth/signin',{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
    
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
    
            const result = await response.json();
            console.log('Login Successfully',result);
            if(result){
                window.location.replace('http://127.0.0.1:5500/client/dist/home.html');
            }

        }catch(error){
            console.error('Error:', error);
        }
       
    })

})


