// email verification

let emailing = [
    'john.doe@gmail.com',
    'jane.doe@gmail.com',
    'bob.smith@gmail.com',
    'alice.johnson@gmail.com',
    'emily.brown@gmail.com',
    'david.wilson@gmail.com',
    'sarah.adams@gmail.com',
    'michael.clark@gmail.com',
    'olivia.parker@gmail.com',
    'sam.roberts@gmail.com',
    'carol.white@gmail.com',
    'peter.jackson@gmail.com',
    'lisa.thompson@gmail.com',
    'steven.robinson@gmail.com',
    'linda.davis@gmail.com',
    'robert.white@gmail.com',
    'elizabeth.hall@gmail.com',
    'william.anderson@gmail.com',
    'jennifer.miller@gmail.com',
    'matt.davis@gmail.com',
    'user123@gmail.com',
    'abc123@gmail.com',
    'xyz456@gmail.com',
    'example789@gmail.com',
    'testuser456@gmail.com',
    'john.doe123@gmail.com',
    'jane.smith456@gmail.com',
    'test.email123@gmail.com',
    'example.email456@gmail.com',
    'user_123@gmail.com',
    'user.abc@gmail.com',
    'abc.xyz@gmail.com',
    'example_123@gmail.com',
    'testuser_456@gmail.com',
    '123user@gmail.com',
    '456test@gmail.com',
    'test123@example.com',
    'example456@example.com',
    'user_abc@example.com',
    'xyz_123@example.com',
    'nigga@gmail.com',
    'jamal@gmail.com'
  ];

let emailsearch = document.getElementById('email')
let button = document.getElementById('button')

button.addEventListener(`click`, function(){
    let input = emailsearch.value
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(input)) {
        if (emailing.includes(input)) {
            document.getElementById('emails').innerHTML = 'The email exists';  
        }
        else{
            document.getElementById('emails').innerHTML = 'The email does not exists'
        }
    }
    else{
        document.getElementById('emails').innerHTML = 'enter a valid email'
    }
})
