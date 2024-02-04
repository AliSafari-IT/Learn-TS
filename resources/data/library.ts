export interface Book {
    title: string;
    author: string;
    yearPublished: number;
    genres: string[];
}

export const bestSellerBooks: Book[] = [
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", yearPublished: 1997, genres: ["Fantasy"] },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", yearPublished: 1954, genres: ["Fantasy"] },
    { title: "The Da Vinci Code", author: "Dan Brown", yearPublished: 2003, genres: ["Thriller"] },
    { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, genres: ["Classic", "Drama"] },
    { title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813, genres: ["Romance"] },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925, genres: ["Classic", "Drama"] },
    { title: "1984", author: "George Orwell", yearPublished: 1949, genres: ["Dystopian Fiction"] },
    { title: "Lord of the Flies", author: "William Golding", yearPublished: 1954, genres: ["Classic", "Dystopian Fiction"] },
    { title: "Catch-22", author: "Joseph Heller", yearPublished: 1961, genres: ["Satire"] },
    { title: "In Cold Blood", author: "Truman Capote", yearPublished: 1966, genres: ["True Crime"] },
    { title: "The Adventures of Huckleberry Finn", author: "Mark Twain", yearPublished: 1885, genres: ["Classic", "Humor"] },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", yearPublished: 1951, genres: ["Classic", "Coming-of-Age"] },
    { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", yearPublished: 1967, genres: ["Magical Realism"] },
    { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, genres: ["Classic", "Drama"] },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", yearPublished: 1979, genres: ["Science Fiction", "Humor"] },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", yearPublished: 1954, genres: ["Fantasy"] },
    { title: "The Handmaid's Tale", author: "Margaret Atwood", yearPublished: 1985, genres: ["Dystopian Fiction", "Political Thriller"] },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", yearPublished: 2005, genres: ["Thriller"] },
    { title: "Gone Girl", author: "Gillian Flynn", yearPublished: 2012, genres: ["Thriller"] },
    { title: "The Fault in Our Stars", author: "John Green", yearPublished: 2012, genres: ["Romance", "Coming-of-Age"] },
    { title: "The Harry Potter Series", author: "J.K. Rowling", yearPublished: 1997 - 2007, genres: ["Children's Fiction", "Fantasy"] },
];

export const psychologyBooks = [
    { title: "The Power of Habit: Why We Do What We Do in Life and Business", author: "Charles Duhigg", yearPublished: 2012, genres: ["Psychology"] },
    { title: "Mindset: The New Psychology of Success", author: "Carol S. Dweck", yearPublished: 2006, genres: ["Psychology"] },
    { title: "Quiet: The Power of Introverts in a World That Can't Stop Talking", author: "Susan Cain", yearPublished: 2012, genres: ["Psychology"] },
    { title: "Man's Search for Meaning", author: "Viktor E. Frankl", yearPublished: 1946, genres: ["Psychology", "Philosophy"] },
    { title: "Thinking Fast and Slow", author: "Daniel Kahneman", yearPublished: 2011, genres: ["Psychology", "Economics"] },
    { title: "The Happiness Hypothesis: Finding Modern Truth in Ancient Wisdom", author: "Jonathan Haidt", yearPublished: 2005, genres: ["Psychology", "Philosophy"] },
    { title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", yearPublished: 1989, genres: ["Self-help", "Psychology"] },
    { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", yearPublished: 2014, genres: ["History", "Psychology"] },
    { title: "Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead", author: "Brené Brown", yearPublished: 2012, genres: ["Psychology", "Self-help"] },
    { title: "Emotional Intelligence: Why It Can Matter More Than IQ", author: "Daniel Goleman", yearPublished: 1995, genres: ["Psychology", "Business"] },
    { title: "The Road Less Traveled: A New Psychology of Personal Growth", author: "M. Scott Peck", yearPublished: 1978, genres: ["Psychology", "Self-help"] },
    { title: "The Gift of Fear: Survival Signals That Protect Us from Violence", author: "Gavin de Becker", yearPublished: 1997, genres: ["Psychology", "Self-defense"] },
    { title: "The Mind Illuminated: A Comprehensive Guide to Insight Meditation", author: "Culadasa", yearPublished: 2011, genres: ["Buddhism", "Psychology"] },
    { title: "The Happiness Trap: How to Stop Struggling and Start Living", author: "Russ Harris", yearPublished: 2007, genres: ["CBT", "Psychology"] },
    { title: "Mind Over Mood: Change How You Feel by Changing the Way You Think", author: "Dennis Greenberger and Christine Padesky", yearPublished: 1995, genres: ["CBT", "Psychology"] },
    { title: "The Dialectical Behavior Therapy Skills Workbook: Practical DBT Exercises for Learning Mindfulness, Interpersonal Effectiveness, Emotion Regulation, and Distress Tolerance", author: "Marsha M. Linehan", yearPublished: 2015, genres: ["DBT", "Psychology"] },
    { title: "Self-Compassion: The Proven Power of Being Kind to Yourself", author: "Kristin Neff", yearPublished: 2011, genres: ["Self-compassion", "Psychology"] },
    { title: "Change Your Brain, Change Your Life: The Breakthrough Program for Conquering Anxiety, Depression, Obsession, Trauma, and I.Q. Deficiencies", author: "Daniel Amen", yearPublished: 1999, genres: ["Brain-based therapy", "Psychology"] },
];

export const hydrologyBooks = [
    { title: "Modern Hydrology and Sustainable Water Development", author: "Jennifer A. Miller", yearPublished: 2010, genres: ["Hydrology", "Sustainability"] },
    { title: "River Dynamics and Integrated River Management", author: "Robert L. Jacobs", yearPublished: 2011, genres: ["Hydrology", "Environmental Science"] },
    { title: "Groundwater Hydrology of Springs", author: "Emma Clarkson", yearPublished: 2012, genres: ["Hydrology", "Geology"] },
    { title: "Climate Change and Water Resources", author: "Harold K. Smith", yearPublished: 2013, genres: ["Hydrology", "Climate Science"] },
    { title: "Hydrological Modeling and Watershed Management", author: "Samantha Y. Lee", yearPublished: 2014, genres: ["Hydrology", "Resource Management"] },
    { title: "Urban Hydrology, Hydraulics, and Stormwater Quality", author: "Aiden R. Johnson", yearPublished: 2015, genres: ["Hydrology", "Urban Planning"] },
    { title: "Advanced Techniques in Hydrology", author: "George B. White", yearPublished: 2016, genres: ["Hydrology", "Engineering"] },
    { title: "Hydrologic Analysis and Design", author: "Rachel M. Thompson", yearPublished: 2017, genres: ["Hydrology", "Civil Engineering"] },
    { title: "Watershed Dynamics and Ecosystem Management", author: "Derek S. Anderson", yearPublished: 2018, genres: ["Hydrology", "Ecosystem Science"] },
    { title: "Flood Risk and Hydrologic Engineering", author: "Natalie F. Rodriguez", yearPublished: 2019, genres: ["Hydrology", "Risk Management"] },
    { title: "Remote Sensing in Hydrology", author: "Brian K. James", yearPublished: 2020, genres: ["Hydrology", "Remote Sensing"] },
    { title: "Aquatic Ecosystems and Hydrological Cycles", author: "Olivia D. Peterson", yearPublished: 2021, genres: ["Hydrology", "Ecology"] },
    { title: "Sustainable Water Resources in the Digital Age", author: "Marco A. Sanchez", yearPublished: 2022, genres: ["Hydrology", "Technology"] },
    { title: "Groundwater Systems and Water Quality", author: "Emily C. Hughes", yearPublished: 2023, genres: ["Hydrology", "Environmental Engineering"] },
    { title: "Hydrology and the Management of Watersheds", author: "Liam T. Brown", yearPublished: 2024, genres: ["Hydrology", "Land Management"] }
];




