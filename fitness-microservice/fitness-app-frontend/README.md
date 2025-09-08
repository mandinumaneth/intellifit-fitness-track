# IntelliFit Fitness Tracker

IntelliFit is a modern fitness tracking web application built with React, Vite, Material UI, and Tailwind CSS. It helps users log, view, and analyze their physical activities, with AI-powered recommendations for improvement and safety.

## Features

- **User Authentication**: Secure login using OAuth2 PKCE.
- **Activity Logging**: Add activities such as running, walking, cycling, and more.
- **Activity List**: View all logged activities in a responsive, card-based layout.
- **Activity Details**: See detailed information and AI recommendations for each activity.
- **AI Recommendations**: Get personalized suggestions, improvements, and safety guidelines.
- **Modern UI**: Clean, responsive design using Material UI and Tailwind CSS.
- **Logout**: Securely log out from your account.

## Technologies Used

- [React](https://react.dev/) (v19)
- [Vite](https://vitejs.dev/) (v7)
- [Material UI](https://mui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/)
- [OAuth2 PKCE](https://oauth.net/2/pkce/)

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm
- Backend API running at `http://localhost:8080`

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mandinumaneth/intellifit-fitness-track.git
   cd intellifit-fitness-track/fitness-microservice/fitness-app-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Environment Variables

- The app expects the backend API at `http://localhost:8080/api`.
- OAuth2 endpoints are configured in `src/authConfig.js`.

## Project Structure

```
fitness-app-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── ActivityList.jsx
│   │   ├── ActivityForm.jsx
│   │   ├── ActivityDetail.jsx
│   ├── services/
│   │   └── api.js
│   ├── store/
│   │   ├── authSlice.js
│   │   └── store.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── authConfig.js
│   ├── App.css
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## API Endpoints

- `GET /api/activities` - Fetch all activities
- `POST /api/activities` - Add a new activity
- `GET /api/recommendations/activity/:id` - Get details and recommendations for an activity

## Customization

- Update branding, colors, and layout in `App.jsx` and component files.
- Modify authentication settings in `src/authConfig.js`.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

---

Made with ❤️ by the IntelliFit team.
