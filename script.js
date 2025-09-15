document.addEventListener('DOMContentLoaded', () => {

    const pageBody = document.getElementById('page-body');
    const welcomeMessage = document.getElementById('welcome-message');
    const loginBtn = document.getElementById('loginBtn');
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    const themeBtn = document.getElementById('themeBtn');
    const tempSlider = document.getElementById('temperature');
    const tempValue = document.getElementById('tempValue');
    const minTokens = document.getElementById('min-tokens');
    const maxTokens = document.getElementById('max-tokens');
    const thinkMore = document.getElementById('think-more');
    const sourceButtons = document.querySelectorAll('.source-btn');
    const sourceIframe = document.getElementById('source_iframe');
    const getResponseBtn = document.getElementById('get-response-btn');
    const responseArea = document.getElementById('response-area');
    const modelSelect = document.getElementById('model-select');

    let settings = {
        username: 'Guest',
        theme: 'dark',
        temperature: 0.7,
        minTokens: 50,
        maxTokens: 500
    };

    function applySettings() {
        if (settings.theme === 'light') {
            pageBody.classList.add('light-theme');
            pageBody.classList.remove('dark-theme');
        } else {
            pageBody.classList.add('dark-theme');
            pageBody.classList.remove('light-theme');
        }
        welcomeMessage.innerText = `Hello ${settings.username} how can I assist you today?`;
        tempSlider.value = settings.temperature;
        if (tempValue) tempValue.innerText = settings.temperature;
        minTokens.value = settings.minTokens;
        maxTokens.value = settings.maxTokens;
    }

    function saveSettings() {
        settings.temperature = tempSlider.value;
        settings.minTokens = minTokens.value;
        settings.maxTokens = maxTokens.value;
        localStorage.setItem('etaAiSettings', JSON.stringify(settings));
        alert(`${settings.username}'s settings have been saved!`);
    }

    function loadSettings() {
        const savedSettings = localStorage.getItem('etaAiSettings');
        if (savedSettings) {
            settings = JSON.parse(savedSettings);
        }
        applySettings();
    }

    function login() {
        const name = prompt("Please enter your name:", settings.username);
        if (name) {
            settings.username = name;
            applySettings();
        }
    }

    function toggleTheme() {
        settings.theme = (settings.theme === 'dark') ? 'light' : 'dark';
        applySettings();
    }

    function getResponse() {
        const selectedModel = modelSelect.value;
        const currentTokens = maxTokens.value;
        const useThinkMore = thinkMore.checked;
        
        let delay = 1500;
        if (useThinkMore) {
            delay += 2000;
        }
        delay += (currentTokens / 100) * 500;

        responseArea.value = `Thinking... (Estimated wait: ${delay / 1000} seconds)`;
        setTimeout(() => {
            responseArea.value = `Response from [${selectedModel}] model is currently in development. Your settings (Temp: ${tempSlider.value}, Max Tokens: ${currentTokens}) have been received. Please check back later for full functionality.`;
        }, delay);
    }
    loginBtn.addEventListener('click', login);
    themeBtn.addEventListener('click', toggleTheme);
    saveSettingsBtn.addEventListener('click', saveSettings);
    getResponseBtn.addEventListener('click', getResponse);

    if (tempSlider && tempValue) {
        tempSlider.addEventListener('input', () => {
            tempValue.innerText = tempSlider.value;
        });
    }
    sourceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const url = button.getAttribute('data-url');
            sourceIframe.src = url;
        });
    });
    loadSettings();

});