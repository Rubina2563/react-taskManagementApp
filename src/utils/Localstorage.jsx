

const admin = [
  {
    "id": "admin001",
    "email": "rubinatazak@gmail.com",
    "password": "123",
    
  }
]; 
const employees = [
  {
    "id": "emp001",
    "firstname": "John",
    "email": "john.doe@company.com",
    "password": "john123",
    "tasks": [
      {
        "title": "Design Homepage",
        "description": "Create the UI for the company homepage.",
        "date": "2024-10-21",
        "category": "Design",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": false
      },
      {
        "title": "Fix Bugs in Login",
        "description": "Resolve issues with user login functionality.",
        "date": "2024-10-22",
        "category": "Development",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": false
      }
    ],
    "taskNumber": {
      "active": 2,
      "completed": 0,
      "failed": 0,
      "newTask": 0
    }
  },

  {
    "id": "emp002",
    "firstname": "Jane",
    "email": "janesmith@company.com",
    "password": "jane123",
    "tasks": [
      {
        "title": "Prepare Marketing Plan",
        "description": "Develop a marketing strategy for Q4.",
        "date": "2024-10-23",
        "category": "Marketing",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": false
      },
      {
        "title": "Social Media Campaign",
        "description": "Run Facebook ads for product launch.",
        "date": "2024-10-24",
        "category": "Marketing",
        "active": false,
        "completed": true,
        "failed": false,
        "newTask": false
      }
    ],
    "taskNumber": {
      "active": 1,
      "completed": 1,
      "failed": 0,
      "newTask": 0
    }
  },

  {
    "id": "emp003",
    "firstname": "Mark",
    "email": "mark.brown@company.com",
    "password": "mark123",
    "tasks": [
      {
        "title": "Backend API Integration",
        "description": "Connect frontend with the backend API.",
        "date": "2024-10-25",
        "category": "Development",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": false
      },
      {
        "title": "Backend API Integration",
        "description": "Connect frontend with the backend API.",
        "date": "2024-10-25",
        "category": "Development",
        "active": false,
        "completed": false,
        "failed": false,
        "newTask": true
      },
      {
        "title": "Database Optimization",
        "description": "Improve query performance.",
        "date": "2024-10-26",
        "category": "Database",
        "active": false,
        "completed": false,
        "failed": true,
        "newTask": false
      }
    ],
    "taskNumber": {
      "active": 1,
      "completed": 0,
      "failed": 1,
      "newTask": 1
    }
  },

  {
    "id": "emp004",
    "firstname": "Lisa",
    "email": "lisa.white@company.com",
    "password": "lisa123",
    "tasks": [
      {
        "title": "Product Research",
        "description": "Analyze competitor products.",
        "date": "2024-10-27",
        "category": "Research",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": false
      },
      {
        "title": "Supplier Contact",
        "description": "Reach out to suppliers for inventory.",
        "date": "2024-10-28",
        "category": "Operations",
        "active": false,
        "completed": true,
        "failed": false,
        "newTask": false
      }
    ],
    "taskNumber": {
      "active": 1,
      "completed": 1,
      "failed": 0,
      "newTask": 0
    }
  },
  
  {
    "id": "emp005",
    "firstname": "Susan",
    "email": "susan.green@company.com",
    "password": "susan123",
    "tasks": [
      {
        "title": "Team Meeting",
        "description": "Lead the team meeting for sprint planning.",
        "date": "2024-10-29",
        "category": "Management",
        "active": false,
        "completed": true,
        "failed": false,
        "newTask": false
      },
      {
        "title": "Customer Feedback Analysis",
        "description": "Analyze customer feedback from last quarter.",
        "date": "2024-10-30",
        "category": "Customer Service",
        "active": true,
        "completed": false,
        "failed": false,
        "newTask": false
      }
    ],
    "taskNumber": {
      "active": 1,
      "completed": 1,
      "failed": 0,
      "newTask": 0
    }
  }
];



export const setLocalStoreage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = localStorage.getItem('employees');
    const admin = localStorage.getItem('admin');
  return { employees, admin } ;
}