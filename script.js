const contentSwitchButton = document.getElementById('content-switch');
const contentContainer = document.getElementById('content-container');

let isAboutContentVisible = false;

contentSwitchButton.addEventListener('click', () => {
    if (isAboutContentVisible) {
        contentContainer.innerHTML = ''; // Clear the content to switch back to index.html
        contentSwitchButton.innerText = 'Switch Content';
    } else {
        fetch('about.html')
            .then(response => response.text())
            .then(data => {
                contentContainer.innerHTML = data; // Load content from about.html
                contentSwitchButton.innerText = 'Switch Back';
            });
    }
    isAboutContentVisible = !isAboutContentVisible;
});