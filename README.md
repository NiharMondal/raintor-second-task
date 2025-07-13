# Real-Time Location Sharing & Infinite Scroll User Feed

## Project Overview

This project demonstrates two key features built with NextJs and modern web technologies:

## ⚙️ Setup Instructions

Follow these steps to set up and run the project locally:

### 🚀 Clone the Repository

```bash
git clone https://github.com/NiharMondal/raintor-second-task
cd raintor-second-task
```

### 📦 Install Dependencies

```bash
npm install
```

### Run the project

```
npm run dev
```

### 1. Real-Time Location Sharing (SignalR)

-   **Objective:** Enable live communication of GPS coordinates between two users.
-   **Tech stack:**
    -   React with a custom `useSignalR()` hook encapsulating SignalR connection logic.
    -   SignalR WebSocket client connected to a Hub URL: `https://tech-test.raintor.com/Hub`.
    -   Leaflet for map rendering and live location updates.
-   **Features:**
    -   **User A:** Sends live latitude and longitude (simulated or real) via SignalR method `SendLatLon`.
    -   **User B:** Listens to the SignalR `ReceiveLatLon` method and displays the received coordinates on an interactive map.
-   **Payload Format:**

```json
{
	"userName": "Default",
	"lat": 25.73736464,
	"lon": 90.3644747
}
```

## 2. Infinite Scroll - User Feed

**Objective:** Display a paginated, scrollable user list with efficient data loading.

### Tech stack:

-   React Query for data fetching and caching.
-   IntersectionObserver API to trigger loading more users when scrolling near the bottom.
-   `react-window` for list virtualization to optimize rendering large datasets.

### Features:

-   Componentized `<UserCard />` displaying user info such as name, email, phone, university, and company title.
-   Skeleton loaders/spinners while fetching data.
-   Proper error handling with fallback UI.
-   Accessibility considerations including keyboard navigation support.

### API Endpoint:

`https://tech-test.raintor.com/api/users/GetUsersList?take=10&skip=0`

### API Response Sample:

```json
{
	"users": [
		{
			"id": 1,
			"firstName": "Emily",
			"lastName": "Johnson",
			"email": "emily.johnson@x.dummyjson.com",
			"phone": "+81 965-431-3024",
			"image": "https://dummyjson.com/icon/emilys/128",
			"university": "University of Wisconsin--Madison",
			"company": {
				"title": "Sales Manager"
			}
		}
	],
	"total": 208,
	"skip": 0,
	"limit": 1
}
```

### Summary

**This project showcases:**

-   Real-time bidirectional communication with SignalR and React.
-   Dynamic, infinite loading and virtualized lists to handle large data efficiently.
-   Good user experience with loading states, error boundaries, and accessibility.
