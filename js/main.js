function SubmitForm()
{
    let name = document.querySelector('#name-input').value;
    let subject = document.querySelector('#subject-input').value;
    let body = document.querySelector('#message-input').value;

    var link = "mailto:matistjati@outlook.com?"
             + "subject=" + encodeURIComponent(subject)
             + "&body=" + encodeURIComponent("From: " + name + ".\n" + body);

    console.log(link);

    window.location.href = link;
}

let button = document.querySelector(".contact-form button");
if (button != null)
{
    button.addEventListener("click", SubmitForm);
}
