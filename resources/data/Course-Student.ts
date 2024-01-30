import { getRandomMark } from "../tools/getRandom";

export interface Student {
    id: number;
    name: string;
    enrolledCourses: number[];
}

export interface Course {
    id: number;
    name: string;
    credits: 1 | 2 | 3 | 6 | 9 | 12 | 16 | undefined;
}

export interface Instructor {
    id: number;
    name: string;
    coursesCanTeach: number[];
}

export interface Result {
    id: number;
    semester: 'Fall' | 'Winter' | 'Spring' | 'Summer';
    mark: number;
}

export interface Campus {
    id: number;
    name: string;
    location: string;
}

export interface CourseStudent {
    id: number;
    studentID: number;
    enrolledCourses: number[];
}

export interface StudentCourseResult {
    id: number;
    studentID: number;
    courseID: number;
    QuarterMarks: Result[];
    // grade: number;
    year: number;
    // letterGrade: 'A' | 'B' | 'C' | 'D' | 'F';
    remark: string | null;
}

export interface CourseInstructor {
    id: number;
    instructorID: number;
    coursesTeaching: number[];
}


export interface CampusCourse {
    id: number;
    campusID: number;
    coursesIDs: number[];
}

// add 20 student instances
export const students: Student[] = [
    { id: 1, name: 'Alice', enrolledCourses: [12, 2, 3] },
    { id: 2, name: 'Bob', enrolledCourses: [2, 4, 6] },
    { id: 3, name: 'Charlie', enrolledCourses: [1, 3, 5] },
    { id: 4, name: 'Diana', enrolledCourses: [1, 4, 7] },
    { id: 5, name: 'Ethan', enrolledCourses: [2, 3, 6] },
    { id: 6, name: 'Fiona', enrolledCourses: [3, 5, 7] },
    { id: 7, name: 'George', enrolledCourses: [1, 6, 8] },
    { id: 8, name: 'Hannah', enrolledCourses: [2, 4, 7] },
    { id: 9, name: 'Ian', enrolledCourses: [1, 5, 8] },
    { id: 10, name: 'Julia', enrolledCourses: [2, 3, 7] },
    { id: 11, name: 'Kevin', enrolledCourses: [3, 6, 8] },
    { id: 12, name: 'Laura', enrolledCourses: [1, 4, 7] },
    { id: 13, name: 'Mike', enrolledCourses: [2, 5, 8] },
    { id: 14, name: 'Nina', enrolledCourses: [3, 4, 6] },
    { id: 15, name: 'Oscar', enrolledCourses: [1, 5, 7] },
    { id: 16, name: 'Paula', enrolledCourses: [2, 6, 8] },
    { id: 17, name: 'Quinn', enrolledCourses: [3, 4, 7] },
    { id: 18, name: 'Ryan', enrolledCourses: [1, 5, 8] },
    { id: 19, name: 'Sara', enrolledCourses: [2, 6, 7] },
    { id: 20, name: 'Tom', enrolledCourses: [3, 4, 11] }
];

export const instructors: Instructor[] = [
    { id: 1, name: 'John Smith', coursesCanTeach: [1, 2, 3] },
    { id: 2, name: 'Jane Doe', coursesCanTeach: [4, 5, 6, 7] },
    { id: 3, name: 'Bob Johnson', coursesCanTeach: [7, 8, 9, 22, 23, 28] },
    { id: 4, name: 'Alice Smith', coursesCanTeach: [10, 11, 12, 13, 24, 25] },
    { id: 5, name: 'Mary Johnson', coursesCanTeach: [13, 14, 15] },
    { id: 6, name: 'Mark Smith', coursesCanTeach: [16, 17, 18, 11, 29, 30] },
    { id: 7, name: 'Sarah Doe', coursesCanTeach: [19, 20, 21, 31, 1, 17] },
    { id: 8, name: 'Emily Johnson', coursesCanTeach: [26, 27, 28, 29, 30, 31] },
];

export const courses: Course[] = [
    { id: 1, name: 'Introduction to Programming', credits: 3 },
    { id: 2, name: 'Advanced Mathematics', credits: 2 },
    { id: 3, name: 'World History', credits: 2 },
    { id: 4, name: 'Environmental Science', credits: 6 },
    { id: 5, name: 'Literary Analysis', credits: 1 },
    { id: 6, name: 'Modern Physics', credits: 3 },
    { id: 7, name: 'Psychology 101', credits: 9 },
    { id: 8, name: 'Business Management', credits: 6 },
    { id: 9, name: 'Computer Science Fundamentals', credits: 3 },
    { id: 10, name: 'Contemporary Art', credits: 1 },
    { id: 11, name: 'Chemistry', credits: 2 },
    { id: 12, name: 'Music Theory', credits: 2 },
    { id: 13, name: 'Art History', credits: 3 },
    { id: 14, name: 'Calculus', credits: 6 },
    { id: 15, name: 'Data Structures', credits: 6 },
    { id: 16, name: 'Algorithms', credits: 6 },
    { id: 17, name: 'Operating Systems', credits: 12 },
    { id: 18, name: 'Software Engineering Fundamentals', credits: 6 },
    { id: 19, name: 'Database Management', credits: 9 },
    { id: 20, name: 'Software Testing', credits: 6 },
    { id: 21, name: 'Software Engineering Practices', credits: 3 },
    { id: 22, name: 'Computer Networks', credits: 9 },
    { id: 23, name: 'Software Security', credits: 12 },
    { id: 24, name: 'Software Engineering Capstone', credits: 3 },
    { id: 25, name: 'Artificial Intelligence', credits: 2 },
    { id: 26, name: 'Computer Graphics', credits: 3 },
    { id: 27, name: 'Computer Architecture', credits: 6 },
    { id: 28, name: 'Operating Systems Practices', credits: 6 },
    { id: 29, name: 'Computer Networks Capstone', credits: 3 },
    { id: 30, name: 'Software Testing Capstone', credits: 2 },
    { id: 31, name: 'Music Theory Capstone', credits: 1 },
];

export const campuses: Campus[] = [
    { id: 1, name: 'Greenfield University Campus', location: 'Greenfield, GF' },
    { id: 2, name: 'Riverside College Campus', location: 'Riverside, RS' },
    { id: 3, name: 'City Center Institute Campus', location: 'Downtown, DT' },
    { id: 4, name: 'University of Washington Campus', location: 'Seattle, WA' },
    { id: 5, name: 'University of Toronto Campus', location: 'Toronto, ON' },
    { id: 6, name: 'University of Waterloo Campus', location: 'Waterloo, ON' },
    { id: 7, name: 'University of British Columbia Campus', location: 'Vancouver, BC' },
    { id: 8, name: 'University of Kelowna Campus', location: 'Kelowna, BC' },
    { id: 9, name: 'University of Ottawa Campus', location: 'Ottawa, ON' },
    { id: 10, name: 'University of Alberta Campus', location: 'Edmonton, AB' },
];

// add 20 CampusCourses instances for each campus
export const campusCourses: CampusCourse[] = [
    { id: 1, campusID: 1, coursesIDs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] },
    { id: 2, campusID: 2, coursesIDs: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31] },
    { id: 3, campusID: 3, coursesIDs: [1, 2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20] },
    { id: 4, campusID: 4, coursesIDs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 31] },
    { id: 5, campusID: 5, coursesIDs: [23, 24, 25, 26, 27, 28, 29, 30] },
    { id: 6, campusID: 6, coursesIDs: [31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 27, 28, 29, 30, 31] },
    { id: 7, campusID: 7, coursesIDs: [13, 14, 15, 16, 17, 18, 31] },
    { id: 8, campusID: 8, coursesIDs: [17, 18, 19, 20] },
    { id: 9, campusID: 9, coursesIDs: [1, 2, 3, 4, 5, 6, 7, 8, 14, 15, 16, 17, 18, 19, 20, 26, 27, 28, 29, 30, 31] },
    { id: 10, campusID: 10, coursesIDs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 26, 27, 28, 29, 30, 31] }
]

// add 20 courseInstructors instances
export const courseInstructors: CourseInstructor[] = [
    { id: 1, instructorID: 1, coursesTeaching: [1, 2, 3, 4, 15, 16] },
    { id: 2, instructorID: 2, coursesTeaching: [4, 5, 6] },
    { id: 3, instructorID: 3, coursesTeaching: [7, 8, 9, 20, 21, 9, 10] },
    { id: 4, instructorID: 4, coursesTeaching: [10, 11, 12] },
    { id: 5, instructorID: 5, coursesTeaching: [13, 14, 15] },
    { id: 6, instructorID: 6, coursesTeaching: [16, 17, 18, 1, 22, 23, 24, 25] },
    { id: 7, instructorID: 7, coursesTeaching: [19, 20, 21] },
    { id: 8, instructorID: 8, coursesTeaching: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31] },
]

// add 3 studentCourseResults instances for each student and course
export const studentCourseResults: StudentCourseResult[] = [
    {
        id: 1, studentID: 1, courseID: 12, QuarterMarks: [{ id: 1, semester: "Fall", mark: getRandomMark() },
        { id: 2, semester: "Winter", mark: getRandomMark() }, { id: 3, semester: "Spring", mark: getRandomMark() }],
        year: 2021, remark: null
    },
    {
        id: 2, studentID: 1, courseID: 2, QuarterMarks: [{ id: 1, semester: "Fall", mark: getRandomMark() },
        { id: 2, semester: "Winter", mark: getRandomMark() }, { id: 3, semester: "Spring", mark: getRandomMark() }],
        year: 2021, remark: null
    },
    {
        id: 3, studentID: 1, courseID: 3, QuarterMarks: [{ id: 1, semester: "Fall", mark: getRandomMark() },
        { id: 2, semester: "Winter", mark: getRandomMark() }, { id: 3, semester: "Spring", mark: getRandomMark() }],
        year: 2021, remark: null
    },
    {
        id: 4, studentID: 2, courseID: 4, QuarterMarks: [{ id: 1, semester: "Fall", mark: getRandomMark() },
        { id: 2, semester: "Winter", mark: getRandomMark() }, { id: 3, semester: "Spring", mark: getRandomMark() }],
        year: 2021, remark: null
    },
    {
        id: 4, studentID: 4, courseID: 4, QuarterMarks: [{ id: 1, semester: "Fall", mark: getRandomMark() },
        { id: 2, semester: "Winter", mark: getRandomMark() }, { id: 3, semester: "Spring", mark: getRandomMark() }],
        year: 2021, remark: null
    },
    {
        id: 4, studentID: 2, courseID: 6, QuarterMarks: [{ id: 1, semester: "Fall", mark: 64 },
        { id: 2, semester: "Winter", mark: 67 }, { id: 3, semester: "Spring", mark: 77 }],
        year: 2021, remark: null
    },
    // student: { id: 7, name: 'George', enrolledCourses: [1, 6, 8] },    
    {
        id: 21, studentID: 7, courseID: 1, QuarterMarks: [{ id: 1, semester: "Fall", mark: 85 },
        { id: 2, semester: "Winter", mark: 90 }, { id: 3, semester: "Spring", mark: 88 }],
        year: 2021, remark: null
    },
    {
        id: 22, studentID: 7, courseID: 6, QuarterMarks: [{ id: 1, semester: "Fall", mark: 78 },
        { id: 2, semester: "Winter", mark: 85 }, { id: 3, semester: "Spring", mark: 80 }],
        year: 2021, remark: null
    },
    {
        id: 23, studentID: 7, courseID: 8, QuarterMarks: [{ id: 1, semester: "Fall", mark: 85 },
        { id: 2, semester: "Winter", mark: 88 }, { id: 3, semester: "Spring", mark: 90 }],
        year: 2021, remark: null
    },
    // student: { id: 8, name: 'Hannah', enrolledCourses: [2, 4, 7] },
    {
        id: 24,
        studentID: 8,
        courseID: 2,
        QuarterMarks: [
            { id: 1, semester: "Fall", mark: getRandomMark() },
            { id: 2, semester: "Winter", mark: getRandomMark() },
            { id: 3, semester: "Spring", mark: getRandomMark() }
        ],
        year: 2022,
        remark: null
    },
    {
        id: 25,
        studentID: 8,
        courseID: 4,
        QuarterMarks: [
            { id: 1, semester: "Fall", mark: getRandomMark() },
            { id: 2, semester: "Winter", mark: getRandomMark() },
            { id: 3, semester: "Spring", mark: getRandomMark() }
        ],
        year: 2022,
        remark: null
    },
    {
        id: 26,
        studentID: 8,
        courseID: 7,
        QuarterMarks: [
            { id: 1, semester: "Fall", mark: getRandomMark() },
            { id: 2, semester: "Winter", mark: getRandomMark() },
            { id: 3, semester: "Spring", mark: getRandomMark() }
        ],
        year: 2023,
        remark: null
    }
]
