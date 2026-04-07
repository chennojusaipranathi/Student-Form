# Student Enrollment Form

A form-based web application that performs Create and Update operations using JSONPowerDB (JPDB). The system dynamically decides whether to insert or update data based on primary key (Roll No) validation.

---

## 🧾 Overview

This project was developed as part of an interview selection process. It demonstrates how to build a dynamic form that interacts with a database using APIs.

The application uses Roll Number as the primary key to determine whether a record already exists. Based on this, it enables either Save (Create) or Update functionality.

---

## 🚀 Features

- Primary Key based logic (Roll No)
- Create new student records (PUT request)
- Update existing records (UPDATE request)
- Reset form to initial state
- Input validation (no empty fields allowed)
- Dynamic enable/disable of fields and buttons
- Auto-fetch data if record exists

---

## 💡 Key Highlights (Important Points)

- Implemented **conditional logic based on primary key**
- Prevented modification of primary key during update
- Used **JPDB APIs (GET, PUT, UPDATE)** effectively
- Handled **JSON parsing errors safely**
- Designed **user-friendly form flow with proper focus control**
- Ensured **data validation before database operations**
- Managed **UI state dynamically using JavaScript & jQuery**

---

## 🛠️ Technologies Used

- HTML
- CSS (Bootstrap)
- JavaScript
- jQuery
- JSONPowerDB (JPDB API)

---

## 🧪 Usage Example

1. Enter Roll No  
2. System checks database:
   - If record exists → form auto-fills, UPDATE enabled  
   - If not → SAVE enabled  
3. Fill or modify details  
4. Click:
   - **Save** → creates new record  
   - **Update** → updates existing record  
5. Click **Reset** to clear the form  

---

## ⚙️ Installation

```bash
git clone https://github.com/chennojusaipranathi/Student-Form.git
cd student-enrollment-form-jpdb
