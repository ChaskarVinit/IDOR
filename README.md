🚀 IDOR Lab - Insecure Direct Object Reference

A vulnerable web application demonstrating IDOR (Insecure Direct Object References) vulnerability. Users can modify the id parameter in the URL to access unauthorized profiles.
⚙️ Setup & Installation (Windows)
1️⃣ Download & Extract

    Download the ZIP from GitHub.

    Extract the ZIP file to a folder (e.g., C:\IDOR-Lab).

2️⃣ Open in VS Code

    Open VS Code.

    Click File → Open Folder → Select IDOR-Lab.

3️⃣ Install Dependencies

Open the VS Code terminal (Ctrl + ~) and run:

npm install express

4️⃣ Start the Server

Run the following command:

node server.js

5️⃣ Open in Browser

Once the server is running, open:

    Login Page: http://localhost:3000

    Vulnerable Profile Page: http://localhost:3000/profile.html?id=1
    
