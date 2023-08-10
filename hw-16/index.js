
const form = document.querySelector('#userForm');
const userInfo = document.querySelector('#userInfo');

form.addEventListener('submit', onFormSubmit)


function onFormSubmit(e) {
    e.preventDefault();

    const formElements = form.elements;
    const user = getFormData(formElements)

    if (!isUserValid(user)) {
        showError('Invalid User data');
        return;
    }

    findUser(user)
        .then((foundUser) => {
            renderUserInfo(foundUser);
            clearFormData(formElements);
        })
        .catch(error => {
            showError(error.message);
        })


}

function isUserValid(user) {
    return user.name !== '' && user.name.length > 2;
}

function findUser (user) {
    return fetch(`https://api.github.com/users/${user.name}`)
        .then(response => {
            if(response.ok) {
                    return response.json();
                }

            throw new Error(`${response.status} ${response.statusText}`);
        })  
        .catch((error) => {
            throw new Error(`User not found: ${error.message}`);
        })
               
}

function renderUserInfo(user) {
    userInfo.innerHTML = generateHtml(user);
}

function generateHtml(user) {
    return `
        <div class='userInfoRow'>
            <img id="avatar" src="${user.avatar_url}" alt="Avatar">
            <p id="reposCount">Number of repositories: ${user.public_repos}</p>
            <p id="followersCount">Number of followers: ${user.followers}</p>
            <p id="followingCount">Number of following: ${user.following}</p>
        </div>
    `
}
