const btn = document.querySelector('#getGitAccBtn');
const input = document.querySelector('#usernameInput');
const userInfo = document.querySelector('#userInfo');

btn.addEventListener('click', onBtnClick)

function onBtnClick() {
    const username = getUserInfo();

    if (isEmpty(username)) {
        alert('Message field cannot be empty!');
        return;
    }

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
           if(response.ok) {
                return response.json();
            } else { 
                showError(`Cannot fetch userInfo. Try again!`);
            }
        })  
        .then(userData => {
            renderUserInfo(userData);

        })
        .catch(error => {
            console.log(`Cannot fetch account: ${error.message}`);
        })

     clear();
}

function getUserInfo() {
    return input.value.trim()
}

function renderUserInfo(userData) {
    userInfo.innerHTML = generateUserInfo(userData);
}

function generateUserInfo(user) {
    return `
        <img id="avatar" src="${user.avatar_url}" alt="Avatar">
        <p id="reposCount">Number of repositories: ${user.public_repos}</p>
        <p id="followersCount">Number of followers: ${user.followers}</p>
        <p id="followingCount">Number of following: ${user.following}</p>
    `
}

function clear() {
    input.value = '';
}
