let posts = [];

const TITLE_VALIDATION_LIMIT = 10;
const TEXT_VALIDATION_LIMIT = 20;

const posttitleInputNode = document.querySelector('.js-post-title-input');
const postTextInputNode = document.querySelector('.js-post-text-input');
const newPostBtnNode = document.querySelector('.js-new-post-btn')
const postsNode = document.querySelector('.js-posts');
const limitationMessage = document.getElementById('limitationMessage')



newPostBtnNode.addEventListener('click', function() {
    const postFromUser = getPostFromUser();

    addPost(postFromUser);

    renderPosts();
    
});

posttitleInputNode.addEventListener("input", validation);
postTextInputNode.addEventListener("input", validation);

function validation() {
    const titleLen = posttitleInputNode.value.length;
    const textLen = postTextInputNode.value.length;

    if (titleLen > TITLE_VALIDATION_LIMIT) {
        limitationMessage.innerText = 
        `Длина заголовка не должна привышать ${TITLE_VALIDATION_LIMIT} символов`;
        limitationMessage.classList.remove("limitationMessage_hidden");
        return;
    }

    if (textLen > TEXT_VALIDATION_LIMIT) {
        limitationMessage.innerText = 
        `Длина заголовка не должна привышать ${TEXT_VALIDATION_LIMIT} символов`;
        limitationMessage.classList.remove("limitationMessage_hidden");
        return;
    }

    limitationMessage.classList.add("limitationMessage_hidden");
}


function getPostFromUser(){
    const title = posttitleInputNode.value 
    const text = postTextInputNode.value 

    return {
        title: title,
        text: text
    };
}

function addPost({title, text}) {
    const currentDate = new Date()
    const dt = ` ${currentDate.getDate()}.${"0" + (currentDate.getMonth()+1)}.${currentDate.getFullYear()} 
    ${currentDate.getHours()}:${currentDate.getMinutes()}`;
    posts.push ({
        dt,
        title,
        text
    })
}

function getPosts() {
    return posts;
}

function renderPosts() {
    const posts = getPosts();

    let postsHTML = '';

    posts.forEach(post => {
        postsHTML += `
        <div class='post'>
            <p class='post__date'>${post.dt}</p>
            <p class='post__dt'>${post.title}</p>
            <p class='post__text'>${post.title}</p>
        </div>
        `
    });

    postsNode.innerHTML = postsHTML;
}

