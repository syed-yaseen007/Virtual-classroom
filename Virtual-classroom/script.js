/**
 * ==============================================================================
 * Virtual Classroom & Online Tutoring Site
 * Core JavaScript Logic
 * Pure Vanilla JS - No External Dependencies - Safe LocalStorage Persistence
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ----------------------------------------------------------------------------
  // 1. Initial Sample Data (Immutable Baseline)
  // ----------------------------------------------------------------------------
  const SAMPLE_COURSES = [
    {
      id: 'course-1',
      title: 'Web Development Fundamentals',
      tutor: 'Prof. Sarah Jenkins',
      category: 'Web Development',
      level: 'Beginner',
      description: 'Master semantic HTML5, modern CSS3 layouts (Flexbox & Grid), and Vanilla JavaScript DOM manipulation.',
      syllabus: [
        'Semantic HTML5 Architecture & Accessibility',
        'Modern Responsive CSS (Flexbox & CSS Grid)',
        'Vanilla JavaScript DOM & Event Handling',
        'Client-side Persistence with LocalStorage',
        'Portfolio Project: Responsive Web Application'
      ],
      duration: '8 Weeks (32 Hours)',
      rating: '4.9/5.0',
      isDefault: true
    },
    {
      id: 'course-2',
      title: 'Python Programming & Data Structures',
      tutor: 'Dr. Robert Chen',
      category: 'Programming',
      level: 'Intermediate',
      description: 'Comprehensive Python programming from core syntax and algorithms to Object-Oriented design and data processing.',
      syllabus: [
        'Python Syntax, Control Flow, and Functions',
        'Data Collections: Lists, Tuples, Dictionaries, Sets',
        'Object-Oriented Programming (Classes & Inheritance)',
        'File Handling & Exception Management',
        'Algorithmic Complexity & Recursion'
      ],
      duration: '10 Weeks (40 Hours)',
      rating: '4.8/5.0',
      isDefault: true
    },
    {
      id: 'course-3',
      title: 'Java Object-Oriented Programming',
      tutor: 'Prof. Emily Watson',
      category: 'Programming',
      level: 'Beginner',
      description: 'Master Java basics, object-oriented principles, inheritance, polymorphism, and Java Collections Framework.',
      syllabus: [
        'Java Syntax, Datatypes, and JVM Architecture',
        'Classes, Objects, Constructors, and Methods',
        'Inheritance, Interfaces, and Polymorphism',
        'Java Collections: ArrayList, LinkedList, HashMap',
        'Exception Handling and Unit Testing Basics'
      ],
      duration: '10 Weeks (40 Hours)',
      rating: '4.9/5.0',
      isDefault: true
    },
    {
      id: 'course-4',
      title: 'Database Management Systems (DBMS & SQL)',
      tutor: 'Prof. David Kumar',
      category: 'Databases',
      level: 'Intermediate',
      description: 'Learn relational database modeling, ER diagrams, normalization (1NF-BCNF), and advanced SQL querying.',
      syllabus: [
        'Relational Database Concepts & ER Modeling',
        'SQL DDL & DML: Queries, Joins, Aggregations',
        'Database Normalization (1NF, 2NF, 3NF, BCNF)',
        'Transaction Processing & ACID Properties',
        'Indexing, Performance Tuning, & Constraints'
      ],
      duration: '6 Weeks (24 Hours)',
      rating: '4.7/5.0',
      isDefault: true
    },
    {
      id: 'course-5',
      title: 'Data Structures and Algorithms (DSA)',
      tutor: 'Dr. Priya Sharma',
      category: 'Computer Science',
      level: 'Advanced',
      description: 'Deep dive into fundamental data structures, graph traversals, dynamic programming, and algorithm analysis.',
      syllabus: [
        'Asymptotic Analysis (Big-O, Omega, Theta)',
        'Linked Lists, Stacks, and Queues',
        'Binary Trees, BSTs, and AVL Trees',
        'Graph Algorithms (BFS, DFS, Dijkstra)',
        'Dynamic Programming & Greedy Strategies'
      ],
      duration: '12 Weeks (48 Hours)',
      rating: '5.0/5.0',
      isDefault: true
    },
    {
      id: 'course-6',
      title: 'Computer Networks & Security',
      tutor: 'Prof. Marcus Vance',
      category: 'Networking',
      level: 'Intermediate',
      description: 'Understand the 7-layer OSI model, TCP/IP suite, IP subnetting, cryptography, and network security protocols.',
      syllabus: [
        'OSI Reference Model vs TCP/IP Architecture',
        'IPv4/IPv6 Addressing and VLSM Subnetting',
        'Transport Layer: TCP Handshake vs UDP',
        'Application Protocols: HTTP, HTTPS, DNS, SSH',
        'Network Security: Firewalls, Cryptography, SSL/TLS'
      ],
      duration: '8 Weeks (32 Hours)',
      rating: '4.8/5.0',
      isDefault: true
    }
  ];

  const SAMPLE_CLASSES = [
    {
      id: 'class-1',
      topic: 'DOM Manipulation & Dynamic Event Handling',
      tutor: 'Prof. Sarah Jenkins',
      course: 'Web Development Fundamentals',
      date: 'Tomorrow, Oct 10',
      time: '10:00 AM - 11:30 AM EST',
      status: 'Upcoming',
      isDefault: true
    },
    {
      id: 'class-2',
      topic: 'OOP Inheritance & Interface Design in Java',
      tutor: 'Prof. Emily Watson',
      course: 'Java Object-Oriented Programming',
      date: 'Thursday, Oct 12',
      time: '02:00 PM - 03:30 PM EST',
      status: 'Upcoming',
      isDefault: true
    },
    {
      id: 'class-3',
      topic: 'Complex SQL Joins, Subqueries & Normalization',
      tutor: 'Prof. David Kumar',
      course: 'Database Management Systems (DBMS & SQL)',
      date: 'Friday, Oct 13',
      time: '11:00 AM - 12:30 PM EST',
      status: 'Upcoming',
      isDefault: true
    },
    {
      id: 'class-4',
      topic: 'Recursive Algorithms & Memoization in Python',
      tutor: 'Dr. Robert Chen',
      course: 'Python Programming & Data Structures',
      date: 'Monday, Oct 16',
      time: '04:00 PM - 05:30 PM EST',
      status: 'Scheduled',
      isDefault: true
    }
  ];

  const SAMPLE_MATERIALS = [
    {
      id: 'mat-1',
      title: 'Web Development Reference Notes',
      course: 'Web Development Fundamentals',
      type: 'HTML Guide',
      badge: 'HTML / CSS / JS',
      description: 'Comprehensive study guide with semantic HTML tables, CSS layout guides, and JavaScript DOM snippets.',
      filePath: 'sample-notes.html',
      isRealFile: true
    },
    {
      id: 'mat-2',
      title: 'Python Syntax & OOP Cheatsheet',
      course: 'Python Programming & Data Structures',
      type: 'Text Notes',
      badge: 'Python 3',
      description: 'Summary guide covering Python collections, list comprehensions, decorators, and OOP syntax with code samples.',
      content: `# Python Programming & Data Structures Reference Guide
Author: Dr. Robert Chen
Course: Python Programming

## 1. List Comprehensions
squares = [x**2 for x in range(10) if x % 2 == 0]

## 2. OOP Syntax
class Student:
    def __init__(self, name, roll_no):
        self.name = name
        self.roll_no = roll_no

    def display(self):
        return f"Student: {self.name} (ID: {self.roll_no})"

## 3. Lambda Functions & Sorting
students = [("Alice", 88), ("Bob", 95), ("Charlie", 72)]
sorted_students = sorted(students, key=lambda x: x[1], reverse=True)

## Key Takeaway:
Always prefer generator expressions when working with massive streaming datasets for memory efficiency.
`
    },
    {
      id: 'mat-3',
      title: 'Java Collections Framework Quick Guide',
      course: 'Java Object-Oriented Programming',
      type: 'Text Notes',
      badge: 'Java 17',
      description: 'Summary of ArrayList, LinkedList, HashMap, HashSet time complexities and usage patterns.',
      content: `# Java Collections Framework Reference Guide
Author: Prof. Emily Watson
Course: Java OOP

## 1. Overview of Interfaces
- List: Ordered collection, allows duplicates (ArrayList, LinkedList).
- Set: Unordered collection, unique elements only (HashSet, TreeSet).
- Map: Key-Value pairs (HashMap, TreeMap).

## 2. Code Example
import java.util.*;

public class CollectionDemo {
    public static void main(String[] args) {
        Map<String, Integer> studentGrades = new HashMap<>();
        studentGrades.put("Sarah", 94);
        studentGrades.put("Alex", 89);

        for (Map.Entry<String, Integer> entry : studentGrades.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}
`
    },
    {
      id: 'mat-4',
      title: 'SQL Joins & Normalization Guide',
      course: 'Database Management Systems (DBMS & SQL)',
      type: 'SQL Guide',
      badge: 'SQL / DBMS',
      description: 'Reference sheet covering INNER, LEFT, RIGHT, FULL OUTER joins and 1NF to BCNF rules.',
      content: `# SQL Queries & Normalization Reference Guide
Author: Prof. David Kumar
Course: Database Management Systems

## 1. SQL Join Syntax
-- Inner Join: Matches in both tables
SELECT s.student_name, c.course_title
FROM Students s
INNER JOIN Enrollments e ON s.student_id = e.student_id
INNER JOIN Courses c ON e.course_id = c.course_id;

-- Left Outer Join: All students, even if not enrolled
SELECT s.student_name, e.grade
FROM Students s
LEFT JOIN Enrollments e ON s.student_id = e.student_id;

## 2. Normalization Rules:
- 1NF: Atomic column values, unique rows.
- 2NF: 1NF + No partial dependency on composite primary key.
- 3NF: 2NF + No transitive dependencies (Non-key -> Non-key).
- BCNF: 3NF + Every determinant is a candidate key.
`
    }
  ];

  // ----------------------------------------------------------------------------
  // 2. State & LocalStorage Management
  // ----------------------------------------------------------------------------
  const STORAGE_KEYS = {
    COURSES: 'vc_user_courses_v1',
    CLASSES: 'vc_user_classes_v1'
  };

  /**
   * Safe localStorage retriever with error fallback
   */
  function loadFromStorage(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (err) {
      console.warn(`LocalStorage read failed for key ${key}:`, err);
      return [];
    }
  }

  /**
   * Safe localStorage writer
   */
  function saveToStorage(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (err) {
      console.error(`LocalStorage write failed for key ${key}:`, err);
      showToast('Failed to save to browser storage. LocalStorage might be disabled.', 'error');
      return false;
    }
  }

  let userCourses = loadFromStorage(STORAGE_KEYS.COURSES);
  let userClasses = loadFromStorage(STORAGE_KEYS.CLASSES);

  // Active UI filters
  let activeCategoryFilter = 'All';
  let activeSearchQuery = '';
  let activeUserTab = 'courses'; // 'courses' | 'classes'

  // ----------------------------------------------------------------------------
  // 3. Helper & Security Utilities
  // ----------------------------------------------------------------------------

  /**
   * Escape HTML to safely render user-supplied strings and prevent XSS injection
   */
  function escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * Get all active courses (Sample + User Added)
   */
  function getAllCourses() {
    return [...SAMPLE_COURSES, ...userCourses];
  }

  /**
   * Get all active classes (Sample + User Added)
   */
  function getAllClasses() {
    return [...SAMPLE_CLASSES, ...userClasses];
  }

  /**
   * Generate clean initial avatar characters
   */
  function getInitials(name) {
    if (!name) return 'TC';
    const parts = name.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.|Mrs\.)\s*/i, '').trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }

  // ----------------------------------------------------------------------------
  // 4. Toast Notification System
  // ----------------------------------------------------------------------------
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, type = 'info') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const msgSpan = document.createElement('span');
    msgSpan.className = 'toast-message';
    msgSpan.textContent = message;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'toast-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Close toast');

    closeBtn.addEventListener('click', () => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 250);
    });

    toast.appendChild(msgSpan);
    toast.appendChild(closeBtn);
    toastContainer.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      if (toast.parentElement) {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 250);
      }
    }, 4000);
  }

  // ----------------------------------------------------------------------------
  // 5. DOM Rendering Engines
  // ----------------------------------------------------------------------------

  /**
   * Render Course Cards
   */
  const coursesGrid = document.getElementById('courses-grid');
  const courseDropdown = document.getElementById('class-course-select');

  function renderCourses() {
    if (!coursesGrid) return;

    const allCourses = getAllCourses();

    // Filter by Category and Search query
    const filtered = allCourses.filter(c => {
      const matchCategory = activeCategoryFilter === 'All' || c.category.toLowerCase() === activeCategoryFilter.toLowerCase();
      const matchSearch = !activeSearchQuery ||
        c.title.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
        c.tutor.toLowerCase().includes(activeSearchQuery.toLowerCase()) ||
        c.description.toLowerCase().includes(activeSearchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });

    coursesGrid.innerHTML = '';

    if (filtered.length === 0) {
      const emptyDiv = document.createElement('div');
      emptyDiv.className = 'empty-state';
      emptyDiv.innerHTML = `
        <div class="empty-state-icon">&#128269;</div>
        <h4>No courses found</h4>
        <p>Try searching for a different keyword or select another category filter.</p>
      `;
      coursesGrid.appendChild(emptyDiv);
      return;
    }

    filtered.forEach(course => {
      const card = document.createElement('article');
      card.className = 'course-card';

      // Badge color determination
      let badgeClass = 'badge-blue';
      if (course.isCustom) badgeClass = 'badge-user';
      else if (course.level === 'Beginner') badgeClass = 'badge-green';
      else if (course.level === 'Intermediate') badgeClass = 'badge-blue';
      else if (course.level === 'Advanced') badgeClass = 'badge-teal';

      card.innerHTML = `
        <div class="course-top">
          <span class="badge ${badgeClass}">${escapeHTML(course.category)} &bull; ${escapeHTML(course.level || 'All Levels')}</span>
          ${course.isCustom ? '<span class="badge badge-user">&#9733; User Added</span>' : ''}
        </div>
        <h3 class="course-title">${escapeHTML(course.title)}</h3>
        <div class="course-tutor">
          <div class="tutor-avatar">${escapeHTML(getInitials(course.tutor))}</div>
          <span>Instructor: <strong>${escapeHTML(course.tutor)}</strong></span>
        </div>
        <p class="course-desc">${escapeHTML(course.description)}</p>
        <div class="course-meta">
          <span style="font-size:0.85rem; color:var(--text-muted);">&#128337; ${escapeHTML(course.duration || 'Flexible')}</span>
          <button class="btn btn-secondary btn-sm view-details-btn" data-id="${escapeHTML(course.id)}">View Details &rarr;</button>
        </div>
      `;

      // Attach View Details event
      const viewBtn = card.querySelector('.view-details-btn');
      if (viewBtn) {
        viewBtn.addEventListener('click', () => openCourseModal(course));
      }

      coursesGrid.appendChild(card);
    });

    // Also update Course dropdown in Add Class form
    updateCourseDropdown(allCourses);
  }

  /**
   * Update the Add Class select dropdown options
   */
  function updateCourseDropdown(allCourses) {
    if (!courseDropdown) return;
    const currentVal = courseDropdown.value;
    courseDropdown.innerHTML = '<option value="">-- Select Related Course --</option>';

    allCourses.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.title;
      opt.textContent = `${c.title} (${c.tutor})`;
      courseDropdown.appendChild(opt);
    });

    if (currentVal) courseDropdown.value = currentVal;
  }

  /**
   * Render Class Schedule
   */
  const scheduleList = document.getElementById('schedule-list');

  function renderSchedule() {
    if (!scheduleList) return;

    const allClasses = getAllClasses();
    scheduleList.innerHTML = '';

    if (allClasses.length === 0) {
      scheduleList.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">&#128197;</div>
          <h4>No Upcoming Classes Scheduled</h4>
          <p>Use the dashboard below to schedule a new live tutoring session.</p>
        </div>
      `;
      return;
    }

    allClasses.forEach(item => {
      const card = document.createElement('div');
      card.className = 'schedule-card';

      // Parse date components for display badge
      const dayText = item.date.includes(',') ? item.date.split(',')[0].trim() : item.date;
      const subText = item.date.includes(',') ? item.date.split(',')[1].trim() : 'Class';

      card.innerHTML = `
        <div class="schedule-date-badge">
          <span class="day">${escapeHTML(dayText.substring(0, 3))}</span>
          <span class="month">${escapeHTML(subText.substring(0, 6))}</span>
        </div>
        <div class="schedule-details">
          <h4>${escapeHTML(item.topic)}</h4>
          <div class="schedule-meta-row">
            <span class="schedule-meta-item">
              <strong>Course:</strong> ${escapeHTML(item.course)}
            </span>
            <span class="schedule-meta-item">
              <strong>Tutor:</strong> ${escapeHTML(item.tutor)}
            </span>
            <span class="schedule-meta-item">
              &#128337; ${escapeHTML(item.time)}
            </span>
            ${item.isCustom ? '<span class="badge badge-user">Custom</span>' : '<span class="badge badge-green">Scheduled</span>'}
          </div>
        </div>
        <div>
          <button class="btn btn-primary join-class-btn" data-topic="${escapeHTML(item.topic)}" data-tutor="${escapeHTML(item.tutor)}" data-course="${escapeHTML(item.course)}">
            &#127916; Join Class
          </button>
        </div>
      `;

      const joinBtn = card.querySelector('.join-class-btn');
      if (joinBtn) {
        joinBtn.addEventListener('click', () => {
          openClassroomSimulator(item);
        });
      }

      scheduleList.appendChild(card);
    });
  }

  /**
   * Render Study Materials
   */
  const materialsGrid = document.getElementById('materials-grid');

  function renderMaterials() {
    if (!materialsGrid) return;
    materialsGrid.innerHTML = '';

    SAMPLE_MATERIALS.forEach(mat => {
      const card = document.createElement('div');
      card.className = 'material-card';

      card.innerHTML = `
        <div class="material-top">
          <div class="material-file-icon">&#128196;</div>
          <span class="badge badge-blue">${escapeHTML(mat.badge)}</span>
        </div>
        <h4 class="material-title">${escapeHTML(mat.title)}</h4>
        <div class="material-course">&#128218; ${escapeHTML(mat.course)}</div>
        <p class="material-desc">${escapeHTML(mat.description)}</p>
        <div class="material-actions">
          <button class="btn btn-outline btn-sm view-mat-btn">View Notes</button>
          <button class="btn btn-secondary btn-sm download-mat-btn">&#11015; Download</button>
        </div>
      `;

      // View Button
      const viewBtn = card.querySelector('.view-mat-btn');
      viewBtn.addEventListener('click', () => {
        if (mat.isRealFile && mat.filePath) {
          window.location.href = mat.filePath;
        } else {
          openMaterialViewerModal(mat);
        }
      });

      // Download Button
      const downloadBtn = card.querySelector('.download-mat-btn');
      downloadBtn.addEventListener('click', () => {
        downloadMaterialFile(mat);
      });

      materialsGrid.appendChild(card);
    });
  }

  /**
   * Render Dashboard Metrics Counters
   */
  function updateDashboardMetrics() {
    const totalCoursesEl = document.getElementById('metric-total-courses');
    const totalClassesEl = document.getElementById('metric-total-classes');
    const totalMaterialsEl = document.getElementById('metric-total-materials');
    const totalCustomEl = document.getElementById('metric-total-custom');

    const totalCourses = getAllCourses().length;
    const totalClasses = getAllClasses().length;
    const totalMaterials = SAMPLE_MATERIALS.length;
    const totalCustom = userCourses.length + userClasses.length;

    if (totalCoursesEl) totalCoursesEl.textContent = totalCourses;
    if (totalClassesEl) totalClassesEl.textContent = totalClasses;
    if (totalMaterialsEl) totalMaterialsEl.textContent = totalMaterials;
    if (totalCustomEl) totalCustomEl.textContent = totalCustom;
  }

  /**
   * Render User Added Items in Dashboard
   */
  const userItemsList = document.getElementById('user-items-list');

  function renderUserItems() {
    if (!userItemsList) return;
    userItemsList.innerHTML = '';

    if (activeUserTab === 'courses') {
      if (userCourses.length === 0) {
        userItemsList.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon">&#128214;</div>
            <h4>No custom courses created yet</h4>
            <p>Use the "Add New Course" form on the left to create and persist your own courses.</p>
          </div>
        `;
        return;
      }

      userCourses.forEach((c, index) => {
        const itemCard = document.createElement('div');
        itemCard.className = 'user-item-card';
        itemCard.innerHTML = `
          <div class="user-item-header">
            <div>
              <h5 class="user-item-title">${escapeHTML(c.title)}</h5>
              <div class="user-item-meta">Instructor: ${escapeHTML(c.tutor)} &bull; ${escapeHTML(c.category)}</div>
            </div>
            <span class="badge badge-user">Course</span>
          </div>
          <p style="font-size:0.85rem; color:var(--text-body); margin:0.3rem 0;">${escapeHTML(c.description)}</p>
          <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-light); padding-top:0.6rem;">
            <span style="font-size:0.75rem; color:var(--text-muted);">&#128190; Persisted in LocalStorage</span>
            <button class="btn btn-danger btn-sm delete-course-btn" data-index="${index}">&#128465; Delete</button>
          </div>
        `;

        itemCard.querySelector('.delete-course-btn').addEventListener('click', () => {
          deleteUserCourse(index);
        });

        userItemsList.appendChild(itemCard);
      });

    } else {
      // Classes Tab
      if (userClasses.length === 0) {
        userItemsList.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon">&#128197;</div>
            <h4>No custom classes scheduled yet</h4>
            <p>Use the "Schedule a Class" form on the right to add upcoming live sessions.</p>
          </div>
        `;
        return;
      }

      userClasses.forEach((cl, index) => {
        const itemCard = document.createElement('div');
        itemCard.className = 'user-item-card';
        itemCard.innerHTML = `
          <div class="user-item-header">
            <div>
              <h5 class="user-item-title">${escapeHTML(cl.topic)}</h5>
              <div class="user-item-meta">Course: ${escapeHTML(cl.course)} &bull; Tutor: ${escapeHTML(cl.tutor)}</div>
            </div>
            <span class="badge badge-user">Class</span>
          </div>
          <p style="font-size:0.85rem; color:var(--text-body); margin:0.3rem 0;">&#128337; ${escapeHTML(cl.date)} at ${escapeHTML(cl.time)}</p>
          <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-light); padding-top:0.6rem;">
            <span style="font-size:0.75rem; color:var(--text-muted);">&#128190; Persisted in LocalStorage</span>
            <button class="btn btn-danger btn-sm delete-class-btn" data-index="${index}">&#128465; Delete</button>
          </div>
        `;

        itemCard.querySelector('.delete-class-btn').addEventListener('click', () => {
          deleteUserClass(index);
        });

        userItemsList.appendChild(itemCard);
      });
    }
  }

  // ----------------------------------------------------------------------------
  // 6. User Actions (Add, Delete, Reset)
  // ----------------------------------------------------------------------------

  /**
   * Delete User Course
   */
  function deleteUserCourse(index) {
    if (index >= 0 && index < userCourses.length) {
      const removed = userCourses.splice(index, 1);
      saveToStorage(STORAGE_KEYS.COURSES, userCourses);
      showToast(`Course "${removed[0].title}" deleted successfully.`, 'info');
      refreshAll();
    }
  }

  /**
   * Delete User Class
   */
  function deleteUserClass(index) {
    if (index >= 0 && index < userClasses.length) {
      const removed = userClasses.splice(index, 1);
      saveToStorage(STORAGE_KEYS.CLASSES, userClasses);
      showToast(`Class session "${removed[0].topic}" deleted successfully.`, 'info');
      refreshAll();
    }
  }

  /**
   * Reset all user-added entries
   */
  const resetDataBtn = document.getElementById('reset-demo-data-btn');
  if (resetDataBtn) {
    resetDataBtn.addEventListener('click', () => {
      if (userCourses.length === 0 && userClasses.length === 0) {
        showToast('No custom data to reset. Already at defaults.', 'info');
        return;
      }
      userCourses = [];
      userClasses = [];
      saveToStorage(STORAGE_KEYS.COURSES, userCourses);
      saveToStorage(STORAGE_KEYS.CLASSES, userClasses);
      showToast('All custom courses and scheduled classes have been cleared.', 'info');
      refreshAll();
    });
  }

  function refreshAll() {
    renderCourses();
    renderSchedule();
    renderMaterials();
    updateDashboardMetrics();
    renderUserItems();
  }

  // ----------------------------------------------------------------------------
  // 7. Form Handlers & Input Validations
  // ----------------------------------------------------------------------------

  /**
   * Helper: Show input error state
   */
  function setFieldError(fieldId, isError, message = '') {
    const field = document.getElementById(fieldId);
    if (!field) return;
    const errorEl = field.parentElement.querySelector('.form-error-msg');

    if (isError) {
      field.classList.add('is-invalid');
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.style.display = 'block';
      }
    } else {
      field.classList.remove('is-invalid');
      if (errorEl) {
        errorEl.style.display = 'none';
      }
    }
  }

  /**
   * Form 1: Add Course
   */
  const addCourseForm = document.getElementById('add-course-form');
  if (addCourseForm) {
    addCourseForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const titleInput = document.getElementById('course-title-input');
      const tutorInput = document.getElementById('course-tutor-input');
      const categoryInput = document.getElementById('course-category-select');
      const levelInput = document.getElementById('course-level-select');
      const descInput = document.getElementById('course-desc-input');

      const title = titleInput.value.trim();
      const tutor = tutorInput.value.trim();
      const category = categoryInput.value;
      const level = levelInput.value;
      const desc = descInput.value.trim();

      let hasError = false;

      if (!title || title.length < 3) {
        setFieldError('course-title-input', true, 'Course title must be at least 3 characters.');
        hasError = true;
      } else {
        setFieldError('course-title-input', false);
      }

      if (!tutor || tutor.length < 3) {
        setFieldError('course-tutor-input', true, 'Tutor name must be at least 3 characters.');
        hasError = true;
      } else {
        setFieldError('course-tutor-input', false);
      }

      if (!category) {
        setFieldError('course-category-select', true, 'Please select a course category.');
        hasError = true;
      } else {
        setFieldError('course-category-select', false);
      }

      if (!level) {
        setFieldError('course-level-select', true, 'Please select a course level.');
        hasError = true;
      } else {
        setFieldError('course-level-select', false);
      }

      if (!desc || desc.length < 10) {
        setFieldError('course-desc-input', true, 'Description must be at least 10 characters.');
        hasError = true;
      } else {
        setFieldError('course-desc-input', false);
      }

      // Check for duplicate course title
      const allTitles = getAllCourses().map(c => c.title.toLowerCase());
      if (allTitles.includes(title.toLowerCase())) {
        setFieldError('course-title-input', true, 'A course with this title already exists.');
        hasError = true;
      }

      if (hasError) {
        showToast('Please fix the errors in the course form.', 'error');
        return;
      }

      const newCourse = {
        id: 'user-course-' + Date.now(),
        title,
        tutor,
        category,
        level,
        description: desc,
        syllabus: [
          'Introduction & Fundamentals of ' + title,
          'Core Concept Exploration & Practical Applications',
          'Intermediate Techniques & Real-world Scenarios',
          'Review Exercises, Self-Assessment & Project Assignment'
        ],
        duration: '6 Weeks (Self-Paced)',
        rating: 'New (5.0)',
        isCustom: true
      };

      userCourses.unshift(newCourse);
      saveToStorage(STORAGE_KEYS.COURSES, userCourses);

      addCourseForm.reset();
      showToast(`Course "${title}" created and saved successfully!`, 'success');
      activeUserTab = 'courses';
      updateTabButtons();
      refreshAll();
    });
  }

  /**
   * Form 2: Add Class Schedule
   */
  const addClassForm = document.getElementById('add-class-form');
  if (addClassForm) {
    addClassForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const topicInput = document.getElementById('class-topic-input');
      const tutorInput = document.getElementById('class-tutor-input');
      const courseSelect = document.getElementById('class-course-select');
      const dateInput = document.getElementById('class-date-input');
      const timeInput = document.getElementById('class-time-input');

      const topic = topicInput.value.trim();
      const tutor = tutorInput.value.trim();
      const course = courseSelect.value;
      const dateVal = dateInput.value;
      const timeVal = timeInput.value;

      let hasError = false;

      if (!topic || topic.length < 3) {
        setFieldError('class-topic-input', true, 'Class topic must be at least 3 characters.');
        hasError = true;
      } else {
        setFieldError('class-topic-input', false);
      }

      if (!tutor || tutor.length < 3) {
        setFieldError('class-tutor-input', true, 'Instructor name must be at least 3 characters.');
        hasError = true;
      } else {
        setFieldError('class-tutor-input', false);
      }

      if (!course) {
        setFieldError('class-course-select', true, 'Please select the associated course.');
        hasError = true;
      } else {
        setFieldError('class-course-select', false);
      }

      if (!dateVal) {
        setFieldError('class-date-input', true, 'Please select a session date.');
        hasError = true;
      } else {
        setFieldError('class-date-input', false);
      }

      if (!timeVal) {
        setFieldError('class-time-input', true, 'Please specify the session time.');
        hasError = true;
      } else {
        setFieldError('class-time-input', false);
      }

      if (hasError) {
        showToast('Please fix the errors in the class schedule form.', 'error');
        return;
      }

      // Format Date string cleanly (e.g., "Oct 15, 2026")
      const parsedDate = new Date(dateVal + 'T00:00:00');
      const formattedDate = isNaN(parsedDate) ? dateVal : parsedDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });

      const newClass = {
        id: 'user-class-' + Date.now(),
        topic,
        tutor,
        course,
        date: formattedDate,
        time: timeVal,
        status: 'Scheduled',
        isCustom: true
      };

      userClasses.unshift(newClass);
      saveToStorage(STORAGE_KEYS.CLASSES, userClasses);

      addClassForm.reset();
      showToast(`Class session "${topic}" scheduled successfully!`, 'success');
      activeUserTab = 'classes';
      updateTabButtons();
      refreshAll();
    });
  }

  // ----------------------------------------------------------------------------
  // 8. Modals Management (Course Details, Classroom Simulator, Material Viewer)
  // ----------------------------------------------------------------------------

  const courseModalOverlay = document.getElementById('course-modal-overlay');
  const classSimModalOverlay = document.getElementById('class-sim-modal-overlay');
  const materialModalOverlay = document.getElementById('material-modal-overlay');

  /**
   * Helper: Open Modal with accessibility and scroll lock
   */
  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('active');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Helper: Close Modal
   */
  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('active');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Setup click listeners for all modal close buttons and backdrop clicks
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });

    const closeBtns = overlay.querySelectorAll('.modal-close, .modal-close-btn');
    closeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        closeModal(overlay);
      });
    });
  });

  // Global ESC key listener to close modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => closeModal(m));
    }
  });

  /**
   * Modal 1: Open Course Details
   */
  function openCourseModal(course) {
    if (!courseModalOverlay) return;

    const modalTitle = document.getElementById('modal-course-title');
    const modalCategory = document.getElementById('modal-course-category');
    const modalLevel = document.getElementById('modal-course-level');
    const modalTutor = document.getElementById('modal-course-tutor');
    const modalDesc = document.getElementById('modal-course-desc');
    const modalSyllabus = document.getElementById('modal-course-syllabus');
    const modalDuration = document.getElementById('modal-course-duration');
    const modalRating = document.getElementById('modal-course-rating');

    if (modalTitle) modalTitle.textContent = course.title;
    if (modalCategory) modalCategory.textContent = course.category;
    if (modalLevel) modalLevel.textContent = course.level || 'All Levels';
    if (modalTutor) modalTutor.textContent = course.tutor;
    if (modalDesc) modalDesc.textContent = course.description;
    if (modalDuration) modalDuration.textContent = course.duration || '6-8 Weeks';
    if (modalRating) modalRating.textContent = course.rating || '4.9/5.0';

    if (modalSyllabus) {
      modalSyllabus.innerHTML = '';
      if (course.syllabus && course.syllabus.length > 0) {
        course.syllabus.forEach((item, i) => {
          const li = document.createElement('li');
          li.style.marginBottom = '0.5rem';
          li.innerHTML = `<strong>Module ${i + 1}:</strong> ${escapeHTML(item)}`;
          modalSyllabus.appendChild(li);
        });
      } else {
        modalSyllabus.innerHTML = '<li>Complete course curriculum and interactive modules included.</li>';
      }
    }

    openModal(courseModalOverlay);
  }

  /**
   * Modal 2: Classroom Simulator
   */
  let micActive = true;
  let camActive = true;

  function openClassroomSimulator(classItem) {
    if (!classSimModalOverlay) return;

    const topicEl = document.getElementById('sim-class-topic');
    const tutorEl = document.getElementById('sim-class-tutor');
    const courseEl = document.getElementById('sim-class-course');

    if (topicEl) topicEl.textContent = classItem.topic;
    if (tutorEl) tutorEl.textContent = classItem.tutor;
    if (courseEl) courseEl.textContent = classItem.course;

    // Reset controls
    micActive = true;
    camActive = true;
    updateSimControlsUI();

    openModal(classSimModalOverlay);
  }

  function updateSimControlsUI() {
    const micBtn = document.getElementById('sim-mic-btn');
    const camBtn = document.getElementById('sim-cam-btn');

    if (micBtn) {
      if (micActive) {
        micBtn.classList.remove('active-red');
        micBtn.innerHTML = '&#127908;';
        micBtn.title = 'Mute Microphone';
      } else {
        micBtn.classList.add('active-red');
        micBtn.innerHTML = '&#128308;';
        micBtn.title = 'Unmute Microphone';
      }
    }

    if (camBtn) {
      if (camActive) {
        camBtn.classList.remove('active-red');
        camBtn.innerHTML = '&#127909;';
        camBtn.title = 'Turn Off Camera';
      } else {
        camBtn.classList.add('active-red');
        camBtn.innerHTML = '&#128683;';
        camBtn.title = 'Turn On Camera';
      }
    }
  }

  const micToggleBtn = document.getElementById('sim-mic-btn');
  if (micToggleBtn) {
    micToggleBtn.addEventListener('click', () => {
      micActive = !micActive;
      updateSimControlsUI();
      showToast(micActive ? 'Microphone enabled' : 'Microphone muted', 'info');
    });
  }

  const camToggleBtn = document.getElementById('sim-cam-btn');
  if (camToggleBtn) {
    camToggleBtn.addEventListener('click', () => {
      camActive = !camActive;
      updateSimControlsUI();
      showToast(camActive ? 'Camera enabled' : 'Camera disabled', 'info');
    });
  }

  // Simulated Chat Input
  const simChatForm = document.getElementById('sim-chat-form');
  const simChatInput = document.getElementById('sim-chat-input');
  const simChatMessages = document.getElementById('sim-chat-messages');

  if (simChatForm && simChatInput && simChatMessages) {
    simChatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = simChatInput.value.trim();
      if (!msg) return;

      const p = document.createElement('div');
      p.style.fontSize = '0.85rem';
      p.style.marginBottom = '0.35rem';
      p.innerHTML = `<strong style="color:var(--primary-700);">You (Student):</strong> ${escapeHTML(msg)}`;
      simChatMessages.appendChild(p);
      simChatMessages.scrollTop = simChatMessages.scrollHeight;

      simChatInput.value = '';

      // Automated mock reply after 1.2 seconds
      setTimeout(() => {
        const reply = document.createElement('div');
        reply.style.fontSize = '0.85rem';
        reply.style.marginBottom = '0.35rem';
        reply.innerHTML = `<strong style="color:var(--success);">Tutor:</strong> Thanks for your question! Let's examine this concept together.`;
        simChatMessages.appendChild(reply);
        simChatMessages.scrollTop = simChatMessages.scrollHeight;
      }, 1200);
    });
  }

  /**
   * Modal 3: Material Viewer
   */
  function openMaterialViewerModal(mat) {
    if (!materialModalOverlay) return;

    const titleEl = document.getElementById('modal-mat-title');
    const courseEl = document.getElementById('modal-mat-course');
    const bodyEl = document.getElementById('modal-mat-body');

    if (titleEl) titleEl.textContent = mat.title;
    if (courseEl) courseEl.textContent = mat.course;
    if (bodyEl) {
      bodyEl.textContent = mat.content || mat.description;
    }

    openModal(materialModalOverlay);
  }

  /**
   * Material Downloader: creates a downloadable file using Blob URL
   */
  function downloadMaterialFile(mat) {
    let content = '';
    let fileName = `${mat.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.txt`;

    if (mat.isRealFile && mat.filePath) {
      window.location.href = mat.filePath;
      showToast(`Opening "${mat.title}"...`, 'info');
      return;
    }

    content = mat.content || `${mat.title}\nCourse: ${mat.course}\n\n${mat.description}\n\nGenerated for Virtual Classroom College Demo.`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = url;
    downloadAnchor.download = fileName;
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
    URL.revokeObjectURL(url);

    showToast(`Downloaded "${fileName}" successfully!`, 'success');
  }

  // ----------------------------------------------------------------------------
  // 9. Navigation, Filters & Responsive Menu
  // ----------------------------------------------------------------------------

  // Mobile Navigation Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when clicking nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Sticky Header elevation on scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    highlightActiveNavLink();
  });

  // Active Link Highlighting
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  function highlightActiveNavLink() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(item => {
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }

  // Course Category Filter Buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategoryFilter = btn.getAttribute('data-category') || 'All';
      renderCourses();
    });
  });

  // Course Search Bar Input
  const courseSearchInput = document.getElementById('course-search-input');
  if (courseSearchInput) {
    courseSearchInput.addEventListener('input', (e) => {
      activeSearchQuery = e.target.value.trim();
      renderCourses();
    });
  }

  // Dashboard User Items Tab Buttons
  const userTabButtons = document.querySelectorAll('.user-tab-btn');
  function updateTabButtons() {
    userTabButtons.forEach(b => {
      if (b.getAttribute('data-tab') === activeUserTab) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  }

  userTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      activeUserTab = btn.getAttribute('data-tab');
      updateTabButtons();
      renderUserItems();
    });
  });

  // Set default minimum date in Class Schedule Form (Today)
  const classDateInput = document.getElementById('class-date-input');
  if (classDateInput) {
    const today = new Date().toISOString().split('T')[0];
    classDateInput.setAttribute('min', today);
  }

  // ----------------------------------------------------------------------------
  // 10. Initial App Boot
  // ----------------------------------------------------------------------------
  refreshAll();
  console.log('Virtual Classroom System initialized successfully.');
});
