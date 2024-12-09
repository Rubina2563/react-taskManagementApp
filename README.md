# App Screenshots (Mobile View)

<div style="display: flex; justify-content: space-around;">
  <img src="https://github.com/user-attachments/assets/1346e9b0-5e6e-4411-833e-a8c8f3c0eea2" alt="Image 1" width="300"/>
  <img src="https://github.com/user-attachments/assets/e8ae9801-0645-45cd-9a11-386d89b827dc" alt="Image 2" width="300"/>
  <img src="https://github.com/user-attachments/assets/5db8f5ee-a2bb-4be1-aebc-0e1b09e0d219" alt="Image 3" width="300"/>
</div>

# App Screenshots (Desktop View)

<div style="display: flex; justify-content: space-around;">
  <img src="https://github.com/user-attachments/assets/4ce045db-efd3-44ba-b575-8e6ce33030b4" alt="Screenshot 1" width="300"/>
  <img src="https://github.com/user-attachments/assets/ef6cd525-936d-4d30-ae99-c3144952ac30" alt="Screenshot 2" width="300"/>
  <img src="https://github.com/user-attachments/assets/d96a55ca-16a7-43a5-89ee-2aba718eca0f" alt="Screenshot 3" width="300"/>
</div>


# Employee/Task Management App  

A simple and efficient task management application built using **React** and **Tailwind CSS**. This app is **local storage-based** and offers functionality for managing tasks under different statuses such as `New Tasks`, `Active Tasks`, `Completed Tasks`, and `Failed Tasks`. While it operates on local storage, it is designed to be easily migrated to a cloud server for greater flexibility and scalability.  

---

## Features  

- **Local Storage-based Data Management**: Tasks and user data are saved locally, allowing quick prototyping without a backend server.  
- **Admin and User Roles**:  
  - **Admin**: Manage and review task statuses.  
  - **User**: Perform task-related functionalities.  
- **Dynamic Task Updates**: Task statuses update dynamically, and changes are reflected in real-time.  
- **Responsive Design**: Fully responsive and optimized for various screen sizes using Tailwind CSS.  
- **Custom Animations**: Subtle animations and hover effects for a polished user experience.  
- **Warnings and Notes**: Includes custom warnings and instructions for proper usage.  
- **Scalability**: Easily adaptable to integrate with a cloud database/server if needed.  

---

## Setup Instructions  

Follow these steps to run the app locally:  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/your-repo-name.git

2. Navigate to the project directory:
   cd your-repo-name
  
3. Install dependencies:
   npm install

4. Start the development server:
   npm start
   
5. Open the app in your browser:
   http://localhost:3000

## ⚠️ Warnings  

1. **Admin Email Case Sensitivity**:  
   - The admin email is **case-sensitive**. You **must use** the exact email `rubinatazak@gmail.com`.  
   - Emails like `Rubinatazak@gmail.com` or any other variations **will not work**.  

2. **User Login Credentials**:  
   - The user email and password are **stored directly in the `LocalStorage.jsx` file**.  
   - Ensure you retrieve the email and password from this file to log in as a user.  

3. **Local Storage Dependency**:  
   - This app operates entirely on **local storage** for data persistence. Any cleared or corrupted local storage will result in loss of data.  

4. **Testing Note**:  
   - Make sure your browser allows `localStorage` operations to avoid issues with login or data retrieval.

---

## 👤 User Login Information  

- To log in as a **user**, use the credentials stored in the `LocalStorage.jsx` file.  
- This file contains pre-defined user credentials for testing purposes.  
- No need for registration—just extract the email and password from the file and use them to test the login functionality.  

### Example Steps for User Login:  

1. Open the `LocalStorage.jsx` file.  
2. Locate the credentials (email and password).  
3. Enter these details on the login page of the application.  

> **Note**: These credentials are set for development and testing purposes. When transitioning to a production environment, consider implementing proper user authentication with secure data storage.  

