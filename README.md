# Programmer Memes Chrome Extension

### A lightweight and fun Chrome extension that fetches random programming memes from an API and displays them in a popup. Perfect for developers looking for a quick laugh, a bit of motivation, or just a well-timed meme break while coding!

---

## Installation & Setup

### How to Enable the Extension in Your Browser:
1. Clone or download the repository to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Turn on **Developer Mode** (top right corner).
4. Click on **Load unpacked** and select the folder where the extension files are located.
5. The **Developer Memes** extension will now be enabled in your browser!

### Adding Your API Key:
1. **Sign up** or **Log in** to [RapidAPI](https://rapidapi.com/).
2. Search for the **Programmer Meme API** from the API marketplace or go directly to [Programmer Meme API](https://rapidapi.com/Florian947/api/programming-memes-images).
3. Subscribe to the API and **get your API key**.
4. Once you have the key, add it to the `popup.js` file inside the extension folder.
   
   Update this line in `popup.js`:
   ```javascript
   const apiKey = 'YOUR_RAPIDAPI_KEY_HERE';
   ```

   Replace `'YOUR_RAPIDAPI_KEY_HERE'` with the key you obtained from RapidAPI.

### Using the Extension:
1. Click the extension icon in the Chrome toolbar.
2. Enjoy a fresh random developer meme each time you open the popup!
3. Keep coding with a smile 😊!

---

## Extension Preview: Here are some fun memes you’ll see in the popup!

![image](https://github.com/user-attachments/assets/2b883a78-138a-46f8-9444-efe6ef86d9a6)

---

## Important Notes

- **API Key Setup**: The extension requires an API key from RapidAPI to fetch memes from the **Programmer Meme API**. Follow the instructions in the **Adding Your API Key** section to configure your extension.
- Make sure to **store your API key securely** and avoid exposing it publicly.
